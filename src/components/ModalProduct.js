import React , { useState } from 'react'
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

function ModalProduct({show , onHide , toggle , data}) {
    return (
        <Modal isOpen={show} toggle={toggle} className='testModal' centered>
            <ModalHeader toggle={toggle}>{data.name}</ModalHeader>
            <ModalBody>
            ราคา {data.price}
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalProduct
