import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

import axios from 'axios';
import { serverUrl } from '../Assets/Constants';
import auth from '../components/auth';

class Announcements extends Component {
  state = {
    titleVal: '',
    textareaVal: '',
  };

  postAnnouncements = () => {
    const { titleVal, textareaVal } = this.state;

    axios
      .post(
        `${serverUrl}/api/admin/announcement`,
        {
          title: titleVal,
          content: textareaVal,
        },
        auth.getTokenHeader(),
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    this.setState({ textareaVal: '' });
  };

  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row>
            <Col xl="10" lg="9" md="8" className="ml-auto">
              <Row>
                <Col xl="12">
                  <Card className="rounded">
                    <Card.Body>
                      <h5 className="text-muted text-center">
                        Quick Announcement
                      </h5>
                    </Card.Body>

                    <ul className="list-inline text-center py-3">
                      <li className="list-inline-item mr-4">
                        <a href="/">
                          <i className="fas fa-pencil-alt text-success" />
                        </a>
                        <span className="h6 text-muted">Post</span>
                      </li>

                      <li className="list-inline-item">
                        <a href="/">
                          <i className="fas fa-camera text-info" />
                        </a>
                        <span className="h6 text-muted">Photo</span>
                      </li>
                    </ul>

                    <Form>
                      <Form.Group>
                        <Form.Control
                          value={this.state.titleVal}
                          onChange={(event) => {
                            this.setState({ titleVal: event.target.value });
                          }}
                          className="mb-4"
                          placeholder="Announcement title"
                        />
                        <Form.Control
                          as="textarea"
                          value={this.state.textareaVal}
                          onChange={(event) => {
                            this.setState({ textareaVal: event.target.value });
                          }}
                          rows="10"
                          cols="200"
                          className="py-2 mb-3"
                          placeholder="Submit new announcement"
                        />
                      </Form.Group>
                    </Form>
                    <Button
                      variant="info"
                      type="submit"
                      block
                      onClick={this.postAnnouncements}
                      className="py-2 mb-5text-uppercase font-weight-bold"
                    >
                      Submit
                    </Button>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Announcements;
