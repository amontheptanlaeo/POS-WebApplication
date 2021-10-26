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

function AddEmp() {
   
  const [show,setShow] = useState(false)
  const [show2,setShow2] = useState(false)
  const [emp,setEmp] = useState([])
  const [empID,setEmpID] = useState(null)
  const toggle = () => setShow(!show);
  const toggle2 = () => setShow2(!show2);

  const getEmp = async() => {
    await axios.post('https://posappserver.herokuapp.com/getapprove',{
      Store_ID:localStorage.getItem('Store_ID')
    }).then((res)=>{
      setEmp(res.data)
    })
  }


  const approve = async() => {

    await axios.post('https://posappserver.herokuapp.com/updateapprove',{
      ID:empID
    }).then((res)=>{
     alert('สำเร็จ')
     window.location.reload()
    })
  }

  const notapprove = async() => {
    await axios.post('https://posappserver.herokuapp.com/deleteperson',{
      ID:empID
    }).then((res)=>{
      alert('สำเร็จ')
     window.location.reload()
    })
  }

  const AppEmp = (id) => {
    setEmpID(id)
    setShow(!show)
  }

  const notApp = (id) => {
    setEmpID(id)
    setShow2(!show2)
  }

  useEffect(()=>{
    getEmp()
  },[])
  
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
                    <h4>เพิ่มพนักงาน</h4>
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
                                        <Button className="mr-1" variant='success' onClick={()=>AppEmp(e.ID)}>อนุมัติ</Button>
                                        <Button variant='danger' onClick={()=>notApp(e.ID)}>ไม่อนุมัติ</Button></td>
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
                <p>การยืนยันอนุมัติ</p>
            </ModalHeader>
            <ModalBody>
                <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' , flexDirection:'column'}}>
                     <div>
                        <p>แน่ใจแล้วหรือไม่?</p>
                    </div>
                    
                  
                </div>
           
              
            </ModalBody>
            <ModalFooter>
            <Button variant="success" onClick={()=>{
                approve()
                 setShow(!show)
            }}>อนุมัติ</Button>
            </ModalFooter>
        </Modal>

        <Modal isOpen={show2} toggle={toggle2} className='testModal' centered>
            <ModalHeader toggle={toggle2}>
                <p>การยืนยันไม่อนุมัติ</p>
            </ModalHeader>
            <ModalBody>
                <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' , flexDirection:'column'}}>
                     <div>
                        <p>แน่ใจแล้วหรือไม่?</p>
                    </div>
                </div>
           
              
            </ModalBody>
            <ModalFooter>
            <Button variant="danger" onClick={()=>{
              notapprove()
                 setShow2(!show2)
            }}>ไม่อนุมัติ</Button>
            </ModalFooter>
        </Modal>
    </motion.div>
    )
}

export default AddEmp
