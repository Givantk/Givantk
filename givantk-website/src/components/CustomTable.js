import React, {Component} from 'react';
import {MDBDataTable} from 'mdbreact';
import {Button} from 'react-bootstrap';
import {pick, isEqual, assign} from 'lodash' //to pick some keys only from an object not the whole object
class CustomTable extends Component {

    state = {
        data: {}
    }

    data = {
        columns: [],
        rows: []
    }

    /* This function will assign the data (that's provided as a parameter to the table), with
    the aid of the props => values and headers */

    buttonClicked=(index)=>{
        console.log(index)
    }

    arrayDetectedinReievedData = (arrayFounded) => {

        console.log(arrayFounded);

    }

    fillData = (values, headers,titles) => {
        titles.map((title) => {
            this
                .data
                .columns
                .push({label: title, field: title, sort: 'asc'})
            return true
        });

        values.map((dataObj,i) => {

            //loop over the keys of the object

            for (let key in dataObj) {
                if (Array.isArray(dataObj[key])) {
                   dataObj[key]=dataObj[key].join(', ')
                }
            }

            // special column type is a column that contains button, if its value is
            // assigned to true then the condition below will be achieved

            if (this.props.specialColType) {

                const ButtonElement = {};

                /*assign the button element object (whose only property will has a key which is the same as the
                last element in the header) with a button */

                ButtonElement[headers[headers.length - 1]] = <Button onClick={()=>this.buttonClicked(i)}
                    size='sm'
                    variant={this.props.specialColColor
                    ? this.props.specialColColor
                    : 'danger'}>{this.props.specialColColor
                        ? this.props.specialColText
                        : 'ban'}</Button>

                //copy the values of button element object in the data object

                assign(dataObj, ButtonElement);

                /* from the recieved data only pick the ones in the headers in order to choose
                some properties only of the object*/

                const filteredObj = pick(dataObj, headers);

                //push the filtered object to the rows array in the data obj
                this
                    .data
                    .rows
                    .push(filteredObj)
                return true

            } else {

                //The case where there is no special row

                const filteredObj = pick(dataObj, headers);

                this
                    .data
                    .rows
                    .push(filteredObj)
                return true

            }

        })

    }

    componentWillReceiveProps = (nextprops) => {

        //if the props is not the same than fill the table data then change state
        if (!isEqual(this.props.values, nextprops.values)) {

            this.fillData(nextprops.values, nextprops.headers,nextprops.titles);
            this.setState({data: this.data})
        }
    }

    render() {

        return (
            <div>
                <h3 className=' text-muted font-weight-bold text-center mb-1'>{this.props.name}</h3>

                <MDBDataTable
                    btn
                    className='text-center'
                    theadColor='text-muted'
                    hover
                    searchLabel=""
                    dark={this.props.bg === 'dark'
                    ? true
                    : false}
                    data={this.state.data}
                    searching={false}
                    entriesLabel=""
                    responsive/>

            </div>
        )
    }
}

export default CustomTable;
