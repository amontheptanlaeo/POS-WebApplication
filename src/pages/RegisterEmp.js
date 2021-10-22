import React, { useState, useRef } from 'react';
import { Button, Form , Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from '../images/Welcome.svg'
import { motion } from "framer-motion"



function RegisterEmp() {

    const emailRef = useRef();
    const passRef = useRef();
    const conPassRef = useRef();
    const [err, setErr] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [conpass, setConPass] = useState('')
    const [storeName, setStoreName] = useState('')
    const [branchName, setBranchName] = useState('')
    const [CitizenNumber, setCitizenNumber] = useState('')
    const [FName, setFName] = useState('')
    const [LName, setLName] = useState('')
    const [checkTypeRole, setCheckTypeRole] = useState('')
/*     const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState(false)
    const [info, setInfo] = useState() */
  
    async function handleLogin(e) {
      //e.preventDefault()
  
      try {
        setErr('')
  
      } catch (e) {
        setErr(e.message)
      }
  
    }
  

    //MainFN
    const Register = () => {
      console.log('OK')
    }


   //HandleChangeForm
    const handleChangeMail = (e) => {
      setEmail(e.target.value)
    }
    const handleChangeCitizen = (e) => {
      if(e.target.value.length > 13) return
      setCitizenNumber(e.target.value)
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
    const handleChangeCheckTypeRole = (e) => {

      if(e.target.value === 'ผู้จัดการ') setCheckTypeRole(1)
      if(e.target.value === 'พนักงานขาย') setCheckTypeRole(2)
    }
  

    return (
        <>
        <div className="LoginBlog" style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
          <div className="box" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 50px 15px" ,backgroundColor: '#2D283E' ,height: '93vh', width: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#D1E7E0' , overflow:'hidden'}}>
            <h2 className="text-center mb-4">สมัครสมาชิกพนักงาน</h2>
            {err && <Alert variant="danger">{err}</Alert>}
            <Form onSubmit={handleLogin}>
              <Form.Group id="storeName">
                <Form.Label>ID สาขา</Form.Label>
                <Form.Control type="text" placeholder="ระบุไอดีสาขา" value={storeName} onChange={handleChangeStoreName} required />
              </Form.Group>
              <Form.Group id="FName">
                <Form.Label>ระบุเลขบัตรประชาชน</Form.Label>
                <Form.Control type="text" placeholder="ระบุเลขบัตรประชาชน" value={CitizenNumber} onChange={handleChangeCitizen} required />
              </Form.Group>
              <Form.Group id="FName">
                <Form.Label>ชื่อจริง</Form.Label>
                <Form.Control type="text" placeholder="ระบุชื่อจริง" value={FName} onChange={handleChangeFName} required />
              </Form.Group>
              <Form.Group id="LName">
                <Form.Label>นามสกุล</Form.Label>
                <Form.Control type="text" placeholder="ระบุนามสกุล" value={LName} onChange={handleChangeLName} required />
              </Form.Group>
              <Form.Group id="branchName">
              <Form.Label >ตำแหน่ง</Form.Label>
                          <select class="form-control" id="exampleFormControlSelect1" onChange={handleChangeCheckTypeRole} required>
                            <option value="" disabled selected hidden>--เลือกตำแหน่ง--</option>
                            <option>ผู้จัดการ</option>
                            <option>พนักงานขาย</option>
                          </select>
                        </Form.Group>
              <Form.Group id="LName">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="ระบุอีเมล์" ref={emailRef} value={email} onChange={handleChangeMail} required />
              </Form.Group>
              <Form.Group id="psw">
                <Form.Label>รหัสผ่าน</Form.Label>
                <Form.Control type="password" placeholder="ระบุรหัสผ่าน" ref={passRef} value={pass} onChange={handleChangePass} required />
              </Form.Group>
              <Form.Group id="psw">
                <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
                <Form.Control type="password" placeholder="ระบุรหัสผ่านอีกครั้ง"  ref={conPassRef} value={conpass} onChange={handleChangeConPass} require required />
              </Form.Group>
              <Button onClick={()=>Register()}className="w-100 mb-2 log-btn" style={{ backgroundColor: "#802BB1", color:'black' , borderRadius: '5rem', boxShadow: 'none', outline: 'none !important', borderColor: 'transparent' }}>
                ลงทะเบียน
              </Button>
              <p className="mt-2">มีบัญชีอยู่แล้ว? <Link to="/Login">เข้าสู่ระบบ</Link></p>
            </Form>
          </div>
          <div className="SidePic"/* style={{WebkitBoxReflect:" below 5px linear-gradient(transparent, white)"}} */>
            <motion.img initial={{scale:0}} animate={{scale:1 , transition:{duration:1}}} src={img} alt="Pic"/>
          </div>
         
        </div>
      </>
    )
}

export default RegisterEmp
