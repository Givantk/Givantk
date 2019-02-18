import React, {Component} from 'react';
import {Container, Row, Col, Pagination} from 'react-bootstrap';
import CustomActivityCard from './CustomActivityCard';
import CustomMessageCard from './CustomMessageCard';
import axios from 'axios';

class Activites extends Component {

    state = {

        Activities: [],

        open: [],

        ActivitiesPage: [],

        active: 1

    }

    /* cardStateValues is an array which holds the state whether it's true or false for every
    activity card
    when a value is true the card will be opened to expand its body
    when a value is false the card will be closed to hide the body
    its value is copied to the array after that
    */

    cardStateValues = []

    // for every activity object in the activities array push false to the array
    // then set the state to hold this value

    initialCardStateValues = () => {

        this
            .state
            .ActivitiesPage
            .map(() => {
                
                this
                    .cardStateValues
                    .push(false);
                return true;
            })

        this.setState({open: this.cardStateValues})
    }

    /*this function is used to change the state of certain index (certian card) in the array
    it's called when someone clicks on a card */

    changeCardStateValues = (index) => {

        this.cardStateValues[index] = !this.cardStateValues[index];
        this.setState({open: this.cardStateValues});
    }

    replyButtonClicked = (value, i) => {

        axios
            .post('http://localhost:3001/message-replies/', {
                MessageId: this.state.ActivitiesPage[i].id,
                replyBody: value
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    deleteButtonClicked = (i) => {

        /*A connection to the backend should be me made to delete component from the
        database
        */

        const {ActivitiesPage} = this.state;
        //starting from index i delete one element only
        ActivitiesPage.splice(i, 1)

        //update state to render the component
        this.setState({ActivitiesPage: ActivitiesPage})

        this.initialCardStateValues()

    }

    /*this function divides the big array that's coming from the api into smaller ones
     in order to be displayed in pages
     It returns array of arrays each of these arrays represents a page objects of activites
     to be displayed
     */

    DivideDataArray = () => {
        let size = 6;
        let arrayOfArrays = [];
        for (let i = 0; i < this.state.Activities.length; i += size) {
            arrayOfArrays.push(this.state.Activities.slice(i, i + size));
        }
        return (arrayOfArrays);
    }

    getNextPages = () => {}

    getPreviousPages = () => {}

    DisplayWhich = (i) => {
        this.setState({
            ActivitiesPage: this.DivideDataArray()[i - 1]
        })
        this.setState({active: i})

        this.initialCardStateValues()
    }
    performPagination = () => {
        let numberOfPages = Math.ceil(this.state.Activities.length / 6);
        console.log(numberOfPages)
        let items = [];
        for (let i = 1; i <= numberOfPages; i++) {
            items.push(
                <Pagination.Item
                    onClick={() => this.DisplayWhich(i)}
                    key={i}
                    active={i === this.state.active}>
                    {i}
                </Pagination.Item>

            );
        }
        return <Pagination>
            <Pagination.Prev/> {items}
            <Pagination.Next/>

        </Pagination>;
    }

    componentDidMount() {
        // fetching info stored in db.json by json server  you have to start json server
        // first
        axios
            .get(this.props.url)
            .then(res => {

                this
                    .setState({
                        Activities: res.data
                    }, function () {
                        console.log('hi');
                        this.setState({
                            ActivitiesPage: this
                                .state
                                .Activities
                                .slice(0, 6)
                        }, function () {
                            console.log(this.state.ActivitiesPage)
                        })
                    })
            });

        //fill the card state array with intitial values (false)
        this.initialCardStateValues();
    }

    render() {

        return (
            <div>
                <Container fluid={true}>

                    <Row>
                        <Col xl='10' lg='9' md='8' className='ml-auto'>

                            <Row>
                                <Col xl='12'>
                                    <Row className='justify-content-center ml-auto'>
                                        <h4 className='text-muted mb-3 '>{this.props.title}</h4>
                                    </Row>

                                    {this
                                        .state
                                        .ActivitiesPage
                                        .map((ActivityObj, i) => {

                                            return (this.props.message
                                                ? <CustomMessageCard
                                                        key={i}
                                                        id={i}
                                                        activity={ActivityObj}
                                                        changeCardStateValues={this.changeCardStateValues}
                                                        cardStateValues={this.cardStateValues}
                                                        replyButtonClicked={this.replyButtonClicked}/>
                                                : <CustomActivityCard
                                                    key={i}
                                                    id={i}
                                                    activity={ActivityObj}
                                                    changeCardStateValues={this.changeCardStateValues}
                                                    cardStateValues={this.cardStateValues}
                                                    deleteButtonClicked={this.deleteButtonClicked}/>)
                                        })}

                                    <Row className='justify-content-center ml-auto'>
                                        {this.performPagination()}
                                    </Row>

                                </Col>

                            </Row>

                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Activites