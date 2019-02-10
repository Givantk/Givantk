import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap';

class CardWithGrid extends Component {

    render() {
        return (
            <div>
                <Container fluid='true'>

                    <Row>

                        <Col xl='10' lg='9' md='8' className='ml-auto'>

                            {this.props.header
                                ? <div>
                                        <Row className='mb-2 ml-auto justify-content-center'>
                                            <h3>{this.props.header}</h3>
                                        </Row>
                                        < Row className='mb-5'>
                                            {this.props.children}
                                        </Row>
                                    </div>

                                : <Row className='pt-md-5 mt-md-3 mb-5'>
                                  {this.props.children}
                                </Row>}

                        </Col>

                    </Row>

                </Container>

            </div>
        )
    }
}

export default CardWithGrid;
