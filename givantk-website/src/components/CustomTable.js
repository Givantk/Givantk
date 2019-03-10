import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button } from 'react-bootstrap';
import { pick, isEqual } from 'lodash';
import { CustomModal } from './CustomModal';
import toBeShowed from '../functions/toBeShowed';
import Loader from 'react-loader-spinner';

class CustomTable extends Component {
  state = {
    data: {
      columns: [],
      rows: [],
    },
    toggle: false,
    showModal: false,
    buttonIndex: [],
  };

  data = {
    columns: [],
    rows: [],
  };

  // this variable is passed to buttonActionConfirmed function which shows the
  // content of the modal for a certain button, the variable holds the index of
  // the button
  buttonIndex = 0;

  /* This function will assign the data (that's provided as a parameter to the table), with
    the aid of the props => values and headers */

  ShowConfirmationModal = (i) => {
    this.setState({ showModal: true });
    this.buttonIndex = i;
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  buttonActionConfirmed = (buttonIndex) => {
    //Check first if this button will be altered or not

    if (this.props.alterable) {
      this.setState(
        {
          toggle: !this.state.toggle,
        },
        () => {
          // replace the old button with a new button here we acccess index i in rows
          // array the accessing the last key in th object that is holded within this
          // index

          this.data.rows[buttonIndex][
            this.props.headers[this.props.headers.length - 1]
          ] = (
            <Button
              onClick={() => this.ShowConfirmationModal(buttonIndex)}
              size="sm"
              variant={
                !this.state.toggle ? 'danger' : this.props.alterButtonColor
              }
            >
              {!this.state.toggle
                ? this.props.specialColText
                  ? this.props.specialColText
                  : 'ban'
                : this.props.alterButtonText}
            </Button>
          );

          this.setState({ data: this.data });
          this.props.action(this.props.values[buttonIndex]);
        } /*the button is not alterable which means it doesn't change its text for example
        from ban to unban, this case is applicable only in navigation and deleting
        so the code considered alterable buttons as delete button if navigation
        prop sent with the table is false
        */,
      );
    } else if (!this.props.navigable) {
      /*A connection to the backend should be me made to delete component from the
        database
        */

      //filtering the row data to be supplied again to fill data

      let newValue = this.data.rows.filter((_, i) => i !== buttonIndex);

      this.data = {
        columns: [],
        rows: [],
      };

      //Filling the tables again after deleting

      this.fillData(newValue, this.props.headers, this.props.titles);
      this.setState({ data: this.data });

      this.props.action(this.state.data.rows[buttonIndex]);
    } else {
      const dataObj = this.props.values[buttonIndex];
      const { navigationTitle } = this.props;
      console.log('this is');
      console.log(dataObj[navigationTitle]);
      toBeShowed.setShowed(dataObj[navigationTitle]);
      this.props.navigate();
    }

    this.hideModal();
  };

  fillData = (values, headers, titles) => {
    titles.map((title) => {
      this.data.columns.push({ label: title, field: title, sort: 'asc' });
      return true;
    });

    values.map((dataObj, i) => {
      //loop over the keys of the object

      /*  for (let key in dataObj) {
        if (Array.isArray(dataObj[key])) {
          dataObj[key] = dataObj[key].join(', ');
        }
      }*/

      // special column type is a column that contains button, if its value is
      // assigned to true then the condition below will be achieved

      if (this.props.specialColType) {
        const ButtonElement = {};

        /*assign the button element object (whose only property will has a key which is the same as the
                last element in the header) with a button */

        /*when you connect this to the backend you have to check the banned value first
                to choose which button you have to add to the object */

        ButtonElement[headers[headers.length - 1]] = (
          <Button
            onClick={() => this.ShowConfirmationModal(i)}
            size="sm"
            variant={
              this.props.specialColColor
                ? this.props.specialColColor
                : 'success'
            }
          >
            {this.props.specialColText ? this.props.specialColText : 'ban'}
          </Button>
        );

        //copy the values of button element object in the data object

        dataObj = {
          ...dataObj,
          ...ButtonElement,
        };

        /* from the recieved data only pick the ones in the headers in order to choose
                some properties only of the object*/

        const filteredObj = pick(dataObj, headers);

        //push the filtered object to the rows array in the data obj
        this.data.rows.push(filteredObj);
        return true;
      } else {
        //The case where there is no special row

        const filteredObj = pick(dataObj, headers);

        this.data.rows.push(filteredObj);
        return true;
      }
    });
  };

  componentWillReceiveProps = (nextprops) => {
    //if the props is not the same than fill the table data then change state
    if (!isEqual(this.props.values, nextprops.values)) {
      this.fillData(nextprops.values, nextprops.headers, nextprops.titles);
      this.setState({ data: this.data });
    }
  };

  render() {
    return (
      <div>
        <h3 className=" text-muted font-weight-bold text-center mb-1">
          {this.props.name}
        </h3>

        {!this.props.loading ? (
          <MDBDataTable
            btn
            className="text-center"
            theadColor="text-muted"
            hover
            small
            searchLabel=""
            dark={this.props.bg === 'dark' ? true : false}
            data={this.state.data}
            searching={true}
            entriesLabel=""
            responsive
          />
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Loader type="Ball-Triangle" color="red" height="100" width="100" />
          </div>
        )}

        <CustomModal
          show={this.state.showModal}
          title="Are you sure you want to take this action?"
          body="Choose Yes to confirm or No to disconfirm"
          hide={this.hideModal}
        >
          <Button
            variant="success"
            onClick={() => this.buttonActionConfirmed(this.buttonIndex)}
          >
            Yes
          </Button>

          <Button variant="danger" onClick={this.hideModal}>
            No
          </Button>
        </CustomModal>
      </div>
    );
  }
}

export default CustomTable;
