import React from 'react';
import {Card,Col} from 'react-bootstrap';
import '../CustomCard.css';

 const CustomCard = (props) => {
    return (
        <Col xl='3' sm='6' className='p-2'>

            <Card body='true' className='card-common'> 
                <div className='d-flex justify-content-between '>
                    <i className={`fas ${props.icon} fa-3x ${props.color}`}></i>

                    <div className='text-right text-secondary'>
                        <h5>{props.name}</h5>
                        <h3>{props.value}</h3>
                    </div>
                </div>

                <Card.Footer>
                    <i className='fas fa-sync mr-3 text-secondary'></i>
                    <span>{props.footer}</span>
                </Card.Footer>

            </Card>
            </Col>

    )
}

export default CustomCard;