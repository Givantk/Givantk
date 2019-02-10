import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card
} from 'react-bootstrap';
import '../settings.css'
function Settings() {
    return (

        <div>

            <Container fluid={true}>

                <Col xl='10' lg='9' md='8' className='ml-auto'>

                    <Row>
                        <Col xl='12'>
                            <h3 className='text-center mb-4 text-muted'>Givantk Settings</h3>
                            <Card bg='dark'>
                                <Card.Body>
                                    <Form >
                                        <Form.Group controlId="settings">
                                            <Form.Label className='text-white increase-font '>Enable publishing services:
                                            </Form.Label>
                                            <div>
                                                <Form.Check
                                                    inline
                                                    className='text-white'
                                                    label="Yes"
                                                    type='radio'
                                                    name="services-publishing"
                                                    id="yes"/>
                                                <Form.Check
                                                    inline
                                                    className='text-white'
                                                    label="No"
                                                    type='radio'
                                                    name="services-publishing"
                                                    id="no"/>
                                            </div>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className='text-white increase-font '>Enable Registration:
                                            </Form.Label>
                                            <div>
                                                <Form.Check
                                                    inline
                                                    className='text-white'
                                                    label="Yes"
                                                    type='radio'
                                                    name="enable-registration"
                                                    id="yes-reg"/>
                                                <Form.Check
                                                    inline
                                                    className='text-white'
                                                    label="No"
                                                    type='radio'
                                                    name="enable-registration"
                                                    id="no-reg"/>
                                            </div>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className='text-white increase-font '>Display ads:
                                            </Form.Label>
                                            <div>
                                                <Form.Check
                                                    inline
                                                    className='text-white'
                                                    label="Yes"
                                                    type='radio'
                                                    name="enable-ads"
                                                    id="yes-ads"/>
                                                <Form.Check
                                                    inline
                                                    className='text-white'
                                                    label="No"
                                                    type='radio'
                                                    name="enable-ads"
                                                    id="no-ads"/>
                                            </div>
                                        </Form.Group>

                                        <Form.Group as={Row}>
                                            <Form.Label column sm={4} className='text-white increase-font '>Limit published services per hour
                                            </Form.Label>
                                            <Col sm={1}>
                                                <Form.Control
                                                    inline
                                                    className='limit-width'
                                                    placeholder="limit"
                                                    name="limit-services"
                                                    id="limit-services"/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row}>
                                            <Form.Label column sm={4} className='text-white increase-font '>Limit Advertisements per page :
                                            </Form.Label>
                                            <Col sm={1}>
                                                <Form.Control
                                                    inline
                                                    className='limit-width'
                                                    placeholder="limit"
                                                    name="limit-ads"
                                                    id="limit-ads"/>
                                            </Col>
                                        </Form.Group>

                                    </Form>
                                    <div className='text-center'>
                                        <Button variant="primary" className='mt-2' type="submit">
                                            Log in
                                        </Button>
                                    </div>

                                </Card.Body>

                            </Card>

                        </Col>
                    </Row>
                </Col>

            </Container>

        </div>
    )
}

export default Settings
