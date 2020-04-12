import React, {Component} from 'react'
import {Form, Card, Button, Collapse} from 'react-bootstrap';

export default class CustomMessageCard extends Component {

    state={
        textareaVal: ''
    }

    render() {
        const i = this.props.id;
        return (
            <Card>
                <Card.Header>
                    <Button
                        onClick={() => this.props.changeCardStateValues(i)}
                        aria-controls="collapsable-activity"
                        aria-expanded={this.props.cardStateValues[i]}
                        variant='danger'
                        className='d-flex align-items-center text-light '
                        block>
                        <i className='mr-3 fas fa-envelope fa-3x'></i>
                        New message From {this.props.activity.sender}
                    </Button>
                </Card.Header>

                <div>

                    <Collapse in={this.props.cardStateValues[i]}>

                        <Card.Body id="collapsable-activity">
                            {this.props.activity.body}

                            <Form>
                                <Form.Group>
                                    <Form.Control
                                        as='textarea'
                                        onChange={(event) => {
                                        this.setState({textareaVal: event.target.value});
                                    }}
                                        className='mt-3 py-2 mb-3'
                                        placeholder='reply'></Form.Control>

                                </Form.Group>
                            </Form>
                            <Button
                                onClick={()=>this.props.replyButtonClicked(this.state.textareaVal,this.props.id)}
                                variant="info"
                                type="submit"
                                block
                                className='py-2 mb-5 text-uppercase font-weight-bold'>
                                Submit
                            </Button>

                        </Card.Body>
                    </Collapse>
                </div>
            </Card>
        )
    }
}
