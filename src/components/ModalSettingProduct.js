import React , { useState } from 'react'
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
} from "reactstrap";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function ModalSettingProduct({show , onHide , toggle , data}) {


    return (
         <Modal isOpen={show} toggle={toggle} className='testModal' centered>
            <ModalHeader toggle={toggle}>
                {data.name}
            </ModalHeader>
            <ModalBody>
            <div style={{display:'flex' , width:'100%' , justifyContent:'center' , alignItems:'center' , margin:'1rem 0'}}>
                <img  style={{objectFit:'contain' , height:'200px' ,width:'200px'}} src={data.img} alt='product'/>
            </div>
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                <FormControlLabel disabled control={<Switch />} label="Disabled" />
            </FormGroup>
              
            </ModalBody>
            <ModalFooter>
            <Button color="success" onClick={()=>{
                 console.log('OK')
            }}>เพิ่มสินค้า</Button>
            <Button color="danger" onClick={()=>{
              console.log('OK')
            }}>ยกเลิก</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalSettingProduct
