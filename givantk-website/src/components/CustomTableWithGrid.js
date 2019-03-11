import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomTable from './CustomTable';
import axios from 'axios';
import auth from './auth';

class CustomTableWithGrid extends Component {
  state = {
    UsersData: [],
    loading: true,
  };

  buttonClicked = (index) => {
    console.log(index);
  };

  componentDidMount() {
    !this.props.dataArray
      ? axios
          .get(this.props.url, auth.getTokenHeader())
          .then((res) => {
            //this step is necessary to read nested object in json as using res.data directly will not read them
            let newUsersData = JSON.parse(JSON.stringify(res.data));
            this.setState({
              UsersData: newUsersData,
              loading: false,
            });
          })
          .catch((err) => {
            console.log(err);
          })
      : this.setState({ UsersData: this.props.dataArray, loading: false });
  }

  render() {
    const { UsersData, loading } = this.state; // json array and loading flag
    return (
      <div>
        <Container fluid={true}>
          <Row className="mb-5">
            <Col xl="10" lg="9" md="8" className="ml-auto">
              <Row>
                <Col xl="12" className="mb-4">
                  <CustomTable
                    {...this.props}
                    values={UsersData}
                    bg="dark"
                    loading={loading}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CustomTableWithGrid;
