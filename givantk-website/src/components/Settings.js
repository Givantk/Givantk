import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Settings extends Component {

    render() {

        return (
            <div>
                <Container fluid={true}>

                    <Row>
                        <Col xl='10' lg='9' md='8' className='ml-auto'>

                            <Row>
                                <Col xl='12'>

                                    <Form>
                                        <Form.Group>
                                          
                                          
                                        </Form.Group>
                                        <Button
                                            variant="info"
                                            type="submit"
                                            block
                                            className='py-2 mb-5 text-uppercase font-weight-bold'>
                                            Submit
                                        </Button>

                                    </Form>

                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Settings;
