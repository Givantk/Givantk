import React, { Component } from 'react';
import auth from '../components/auth';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  loginCallback = (error) => {
    if (error)
      this.setState({
        error,
      });
    else this.props.history.push('/');
  };

  LogMeIn = () => {
    /*when user clicks on login button.. login function from authentication class
        is called, it sets the cookie LoggedIn into true and then redirects the user
        into main index */

    auth.login(this.loginCallback, this.state.email, this.state.password);
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <Container fluid={true}>
          <Row className="mt-5 d-flex justify-content-center align-items-center">
            <Col xl="5">
              <Card bg="secondary">
                <Card.Body>
                  <Card.Title className="text-center fa-2x text-white">
                    Login to Givantk
                  </Card.Title>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="text-white ">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(event) => {
                          this.setState({ email: event.target.value });
                        }}
                      />
                      <Form.Text className="text-white">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label className="text-white">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(event) => {
                          this.setState({ password: event.target.value });
                        }}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                      <Form.Check
                        className="text-white "
                        type="checkbox"
                        label="Check me out"
                      />
                    </Form.Group>
                  </Form>
                  <div className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={this.LogMeIn}
                    >
                      Log in
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              <h3 className="mt-4 text-center text-danger">{error}</h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
