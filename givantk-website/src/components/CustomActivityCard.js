import React, {Component} from 'react'
import Customer from '../images/cust1.jpeg';
import {Card, Button, Collapse, Badge} from 'react-bootstrap';

export default class CustomActivityCard extends Component {

    render() {
        const i = this.props.id;

        return (
            <div>
                <Card>
                    <Card.Header>
                        <Button
                            onClick={() => this.props.changeCardStateValues(i)}
                            aria-controls="collapsable-activity"
                            aria-expanded={this.props.cardStateValues[i]}
                            variant='secondary'
                            className='text-light text-left'
                            block>
                            <img className='mr-3 rounded ' alt="" src={Customer} width='50'></img>
                            {this.props.activity.title}
                        </Button>
                    </Card.Header>

                    <div>

                        <Collapse in={this.props.cardStateValues[i]}>

                            <Card.Body id="collapsable-activity">
                                {this.props.activity.body}

                                <footer className='d-flex'>

                                    {this.props.approved
                                        ? <Badge variant='success' className='mt-2 ml-auto'>
                                                Activity is approved
                                            </Badge>
                                        : <Button
                                            variant='info'
                                            onClick={() => this.props.approvalButtonCicked(this.props.id)}
                                            className='mt-2 ml-auto'>
                                            Approve this activity
                                        </Button>
}

                                    <Button
                                        variant='danger '
                                        onClick={() => this.props.deleteButtonClicked(this.props.id)}
                                        className='mt-2 ml-2'>
                                        Delete this activity
                                    </Button>

                                </footer>

                            </Card.Body>

                        </Collapse>
                    </div>
                </Card>

            </div>
        )
    }
}
