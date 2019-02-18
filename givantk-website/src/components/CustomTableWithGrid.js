import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomTable from "./CustomTable";
import axios from "axios";

class CustomTableWithGrid extends Component {
  state = {
    UsersData: []
  };

  buttonClicked = index => {
    console.log(index);
  };

  componentDidMount() {

    axios.get(this.props.url, { crossdomain: true }).then(res => {
      this.setState({ UsersData: res.data });
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
                  <CustomTable
                    name={this.props.name}
                    headers={this.props.headers}
                    titles={this.props.titles}
                    values={UsersData}
                    bg="dark"
                    specialColType={this.props.specialColType}
                    specialColColor={this.props.specialColColor}
                    specialColText={this.props.specialColText}
                    action={this.props.action}
                    alterButtonText={this.props.alterButtonText}
                    alterButtonColor={this.props.alterButtonColor}
                    alterable={this.props.alterable}
                    navigable={this.props.navigable}
                    navigate={this.props.navigate}
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
