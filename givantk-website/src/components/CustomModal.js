import React from 'react'
import {Modal} from 'react-bootstrap';

export const CustomModal = (props) => {
  
    return (
        <div>
            <Modal show={props.show} onHide={props.hide} className='fade'>

                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.body}
                </Modal.Body>

                <Modal.Footer>
                    {props.children}

                </Modal.Footer>

            </Modal>
        </div>
    )
}
