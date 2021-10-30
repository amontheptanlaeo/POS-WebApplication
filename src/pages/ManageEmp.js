import React, { useState, useRef , useEffect} from 'react';
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
import axios from 'axios';

function ManageEmp() {

  const [show,setShow] = useState(false)
  const [emp,setEmp] = useState([])
  const [IDEMP,setEMP] = useState(null)
  const toggle = () => setShow(!show);

  const getEMP = async() => {

    await axios.post('https://posappserver.herokuapp.com/getem',{
      Store_ID:localStorage.getItem('Store_ID')
    }).then((res)=>{
      setEmp(res.data)
    })

  }

  useEffect(()=>{
    getEMP()
  },[])


  const dell = (id) => {

    setShow(!show)
    setEMP(id)

  }

  const del = async() => {
    console.log('HEY',IDEMP)
    await axios.post('https://posappserver.herokuapp.com/deleteem',{
      ID:IDEMP
    }).then((res)=>{
     alert('ลบแล้ว')
     window.location.reload()
    })

  }

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
                              {
                                emp.map((e,idx)=>{
                                  return(
                                    <tr>
                                      <th scope="row">{idx+1}</th>
                                      <td>{e.FirstName}  {e.LastName}</td>
                                      <td>{e.Branch_Name}</td>
                                      <td>
                                        {e.Permission_Name}
                                      </td>
                                      <td>
                                        <Button className="mr-1" variant='danger' onClick={()=>dell(e.ID)}>ลบ</Button>
                                      </td>
                                    </tr>
                                  )
                                })
                              }
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
            <Button variant="danger" onClick={()=>{
                del()
            }}>ลบ</Button>
            </ModalFooter>
        </Modal>
    </motion.div>
    )
}

export default ManageEmp
