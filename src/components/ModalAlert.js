import React , { useState } from 'react'

import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Input
} from "reactstrap";

function ModalAlert({show , toggle , msg}) {
    return (
        <Modal isOpen={show} toggle={toggle} className='testModal' centered>
        <ModalHeader toggle={toggle}>
            แจ้งเตือน
        </ModalHeader>
        <ModalBody>
           <h5>{msg}</h5>
        </ModalBody>
        <ModalFooter>
            <Button color="danger" onClick={()=>{
                toggle()
            }}>ยกเลิก</Button>
        </ModalFooter>
    </Modal>
    )
}

export default ModalAlert
