import React, { useState, useRef } from 'react';
import { Button, Form , Alert , Row , Col , Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from '../images/Welcome.svg'
import { motion } from "framer-motion"

function AddEmp() {
   
    const emailRef = useRef();
    const passRef = useRef();
    const conPassRef = useRef();
    const [err, setErr] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [conpass, setConPass] = useState('')
    const [storeName, setStoreName] = useState('')
    const [branchName, setBranchName] = useState('')
    const [FName, setFName] = useState('')
    const [LName, setLName] = useState('')
/*     const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState(false)
    const [info, setInfo] = useState() */
  

  

    //MainFN
    const AddEmploy = () => {
      console.log('OK')
    }


   //HandleChangeForm
    const handleChangeMail = (e) => {
      setEmail(e.target.value)
    }
    const handleChangePass = (e) => {
      setPass(e.target.value)
    }
    const handleChangeConPass = (e) => {
      setConPass(e.target.value)
    }
    const handleChangeFName = (e) => {
      setFName(e.target.value)
    }
    const handleChangeLName = (e) => {
      setLName(e.target.value)
    }
    const handleChangeStoreName = (e) => {
      setStoreName(e.target.value)
    }
    const handleChangeBranchName = (e) => {
      setBranchName(e.target.value)
    }
  
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
                

            <Form>
              
              <Form.Group id="FName">
                <Form.Label>ชื่อจริง</Form.Label>
                <Form.Control type="text" placeholder="ระบุชื่อจริง" value={FName} onChange={handleChangeFName} required />
              </Form.Group>
              <Form.Group id="LName">
                <Form.Label>นามสกุล</Form.Label>
                <Form.Control type="text" placeholder="ระบุนามสกุล" value={LName} onChange={handleChangeLName} required />
              </Form.Group>
              <Form.Group id="branchName">
                <Form.Label>ตำแหน่ง</Form.Label>
                <select class="form-control" id="exampleFormControlSelect1" onChange={(e)=>console.log(e.target.value)} required>
                            <option value="" disabled selected hidden>เลือกตำแหน่ง</option>
                            <option >ผู้จัดการ</option>
                            <option >พนักงานขาย</option>
                </select>
              </Form.Group>
              <Form.Group id="branchName">
                <Form.Label>สาขา</Form.Label>
                <select class="form-control" id="exampleFormControlSelect1" onChange={(e)=>console.log(e.target.value)} required>
                            <option value="" disabled selected hidden>เลือกสาขา</option>
                            <option>รอ DB</option>
                            <option>รอ DB</option>
                </select>
              </Form.Group>
              <Form.Group id="branchName">
                <Form.Label>รูป</Form.Label>
                <Form.File />
              </Form.Group>
              
              <Form.Group id="LName">
                <Form.Label>อีเมล</Form.Label>
                <Form.Control type="email" placeholder="ระบุอีเมล" ref={emailRef} value={email} onChange={handleChangeMail} required />
              </Form.Group>
              <Form.Group id="psw">
                <Form.Label>รหัสผ่าน</Form.Label>
                <Form.Control type="password" placeholder="ระบุรหัสผ่าน" ref={passRef} value={pass} onChange={handleChangePass} required />
              </Form.Group>
              <Form.Group id="psw">
                <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
                <Form.Control type="password" placeholder="ระบุรหัสผ่านอีกครั้ง"  ref={conPassRef} value={conpass} onChange={handleChangeConPass} require required />
              </Form.Group>
              <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                  <Button variant='warning' className='w-25' onClick={()=>AddEmploy()}>
                    เพิ่มพนักงาน
                </Button>
              </div>
              
            </Form>
                
              </Container>
               
            </Col>
        </Row>
    </motion.div>
    )
}

export default AddEmp
