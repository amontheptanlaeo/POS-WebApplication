import React, { useState, useRef } from 'react';
import { Button, Form , Alert , Row , Col , Container } from 'react-bootstrap';
import {
  Table
} from "reactstrap";
import { Link } from "react-router-dom";
import img from '../images/Welcome.svg'
import { motion } from "framer-motion"
import {
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

function ManageEmp() {
  const [show,setShow] = useState(false)
  const toggle = () => setShow(!show);

    if(localStorage.getItem('Permistion') != 0 &&  localStorage.getItem('Permistion') != 1) return window.location.href = 'http://localhost:3000/'

    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
        <Row>
            <Col md={3} lg={3} style={{height:'100%'}}>
                {/* <BlankSide/> */}
            </Col>
            <Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
              <Container>
                  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                    <h4>จัดการพนักงาน</h4>
                  </div>
                  <Table>
                            <thead style={{textAlign:'center'}}>
                                <tr>
                                    <th>#</th>
                                    <th>ชื่อ-สกุล</th>
                                    <th>สาขา</th>
                                    <th>ตำแหน่ง</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign:'center'}}>
                              <tr>
                                  <th scope="row">1</th>
                                  <td>วัชรินทร์ ราชกุณา</td>
                                  <td>กำแพงแสน</td>
                                  <td>
                                    <div>
                                      พนักงานขาย
                                    </div>
                                  </td>
                                  <td>
                                    <Button className="mr-1" variant='success' onClick={()=>setShow(!show)}>ลาออก</Button>
                                    <Button variant='danger' onClick={()=>setShow(!show)}>ไล่ออก</Button></td>
                              </tr>
                              <tr>
                                  <th scope="row">2</th>
                                  <td>วัชรินทร์ ราชกุณา</td>
                                  <td>บางแค</td>
                                  <td>
                                    <div>
                                      ผู้จัดการ
                                    </div>
                                   
                                  </td>
                                  <td>
                                    <Button className="mr-1" variant='success' onClick={()=>setShow(!show)}>ลาออก</Button>
                                    <Button variant='danger' onClick={()=>setShow(!show)}>ไล่ออก</Button></td>
                              </tr>
                            </tbody>
                        </Table>

           
                
              </Container>
               
            </Col>
        </Row>
        <Modal isOpen={show} toggle={toggle} className='testModal' centered>
            <ModalHeader toggle={toggle}>
                <p>การยืนยัน</p>
            </ModalHeader>
            <ModalBody>
                <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' , flexDirection:'column'}}>
                     <div>
                        <p>แน่ใจแล้ว?</p>
                    </div>
                    
                  
                </div>
           
              
            </ModalBody>
            <ModalFooter>
            <Button variant="success" onClick={()=>{
                 setShow(!show)
            }}>ยืนยัน</Button>
            </ModalFooter>
        </Modal>
    </motion.div>
    )
}

export default ManageEmp
