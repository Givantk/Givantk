import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomTable from './CustomTable';
import axios from 'axios';

class CustomTableWithGrid extends Component {
  state = {
    UsersData: [],
  };

  buttonClicked = (index) => {
    console.log(index);
  };

  componentDidMount() {
    axios.get(this.props.url, { crossdomain: true }).then((res) => {
      //this step is necessary to read nested object in json as using res.data directly will not read them
      let jsonString = JSON.stringify(res.data);
      this.setState({ UsersData: JSON.parse(jsonString) });
    });
  }

  render() {
    var { UsersData } = this.state; // json array

    return (
      <div>
        <Container fluid={true}>
          <Row className="mb-5">
            <Col xl="10" lg="9" md="8" className="ml-auto">
              <Row>
                <Col xl="12" className="mb-4">
                  <CustomTable {...this.props} values={UsersData} bg="dark" />
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
