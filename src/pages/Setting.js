import React, { useState, useRef } from 'react';
import { Button, Form , Alert , Row , Col , Container } from 'react-bootstrap';
import {
  Table,
  Input,InputGroup,InputGroupText,InputGroupAddon,
  Modal, ModalHeader, ModalBody, ModalFooter,
} from "reactstrap";

import { Link } from "react-router-dom";
import img from '../images/Welcome.svg'
import { motion } from "framer-motion"
function Setting() {

    const [StoreName,setStoreName] = useState(localStorage.getItem('Store_Name'))
    const [BranchName,setBranchName] = useState(localStorage.getItem('Branch_Name'))

    if(localStorage.getItem('Permistion') != 0 ) return window.location.href = 'http://localhost:3000/'
    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
        <Row>
            <Col md={3} lg={3} style={{height:'100%'}}>
                {/* <BlankSide/> */}
            </Col>
            <Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
              <Container>
                  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                    <h4>ตั้งค่าร้าน</h4>
                  </div>
                  <Table>
                            <thead style={{textAlign:'center'}}>
                                <tr>
                                    <th>ชื่อร้าน</th>
                            
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign:'center'}}>
                              <tr>
                                  <td><Input value={StoreName} onChange={(e)=>setStoreName(e.target.value)}/></td>
                                 
                                  <td>
                                    <Button className="mr-1" variant='success' onClick={()=>console.log('Approve')}>อัพเดท</Button>
                                    </td>
                              </tr>
                     
                            </tbody>
                        </Table>
                        <Table>
                            <thead style={{textAlign:'center'}}>
                                <tr>
                                    <th>สาขา</th>
                            
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign:'center'}}>
                              <tr>
                                  <td><Input value={BranchName} onChange={(e)=>setBranchName(e.target.value)}/></td>
                                 
                                  <td>
                                    <Button className="mr-1" variant='success' onClick={()=>console.log('Approve')}>อัพเดท</Button>
                                    </td>
                              </tr>
                     
                            </tbody>
                        </Table>


           
                
              </Container>
               
            </Col>
        </Row>
    </motion.div>
    )
}

export default Setting
