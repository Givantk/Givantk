import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

const CustomFooter = () => {
    return (
        <footer>

            <Container fluid='true'>

                <Row>
                    <Col xl='10' lg='9' md='8' className='ml-auto'>

                        <Row className='pt-3 border-top '>
                            <Col xl='6' className='text-center'>

                                <ul className='list-inline'>

                                    <li className='list-inline-item mr-2 '>
                                        <a href='http://localhost:3000' className='text-dark'>Givantk</a>
                                    </li>

                                    <li className='list-inline-item mr-2'>
                                        <a href='http://localhost:3000' className='text-dark'>About</a>
                                    </li>

                                    <li className='list-inline-item mr-2'>
                                        <a href='http://localhost:3000' className='text-dark'>Facebook</a>
                                    </li>

                                    <li className='list-inline-item mr-2'>
                                        <a href='http://localhost:3000' className='text-dark'>Twitter</a>
                                    </li>

                                </ul>

                            </Col>
                            <Col xl='6' className='text-center'>
                            <p>&copy; 2019 Copyright <span className='text-success'>Givantk</span></p>
                            </Col>

                        </Row>
                    </Col>
                </Row>

            </Container>

        </footer>
    )
}

export default CustomFooter
