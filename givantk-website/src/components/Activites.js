import React, {Component, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CustomActivityCard from './CustomActivityCard';
import CustomMessageCard from './CustomMessageCard';

class Activites extends Component {

    state = {

        Activities: [],

        open: []

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
            .Activities
            .map(() => {
                // as th
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

        fetch('http://localhost:3001/message-replies/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({MessageId: this.state.Activities[i].id, announcementBody: value})

        })

    }

    deleteButtonClicked = (i) => {

        /*A connection to the backend should be me made to delete component from the
        database
        */

        const {Activities} = this.state;
        //starting from index i delete one element only
        Activities.splice(i, 1)

        //update state to render the component
        this.setState({Activities: Activities})

    }

    componentDidMount() {
        // fetching info stored in db.json by json server  you have to start json server
        // first
        fetch(this.props.url)
            .then(resp => resp.json())
            .then(jsonData => this.setState({Activities: jsonData}));

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
                                        .Activities
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
