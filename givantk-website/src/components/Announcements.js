import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button
} from 'react-bootstrap';

class Announcements extends Component {

    state = {
        textareaVal: ""
    }

    postAnnouncements = () => {
        console.log(this.state.textareaVal)
    }

    render() {

        return (
            <div>
                <Container fluid={true}>

                    <Row>
                        <Col xl='10' lg='9' md='8' className='ml-auto'>

                            <Row>
                                <Col xl='12'>
                                    <Card className='rounded'>
                                        <Card.Body>
                                            <h5 className='text-muted text-center'>Quick Announcement</h5>
                                        </Card.Body>

                                        <ul className='list-inline text-center py-3'>

                                            <li className='list-inline-item mr-4'>

                                                <a href='/'>
                                                    <i className='fas fa-pencil-alt text-success'></i>
                                                </a>
                                                <span className='h6 text-muted'>Post</span>

                                            </li>

                                            <li className='list-inline-item'>

                                                <a href='/'>
                                                    <i className='fas fa-camera text-info'></i>
                                                </a>
                                                <span className='h6 text-muted'>Photo</span>

                                            </li>
                                        </ul>

                                        <Form>
                                            <Form.Group>
                                                <Form.Control
                                                    as='textarea'
                                                    onChange={(event) => {
                                                    this.setState({textareaVal: event.target.value});
                                                }}
                                                    rows='10'
                                                    cols='200'
                                                    className='py-2 mb-3'
                                                    placeholder='Submit new announcement'></Form.Control>

                                            </Form.Group>

                                        </Form>
                                        <Button
                                            variant="info"
                                            type="submit"
                                            block
                                            onClick={this.postAnnouncements}
                                            className='py-2 mb-5text-uppercase font-weight-bold'>
                                            Submit
                                        </Button>

                                    </Card>

                                </Col>

                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Announcements
