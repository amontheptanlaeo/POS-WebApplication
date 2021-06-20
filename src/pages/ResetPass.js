import React, { useState, useRef } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from '../images/ForgetPass.svg'

function ResetPass() {

    
  const emailRef = useRef()
  /* const passRef = useRef() */
  const [err, setErr] = useState('')
  const [email, setEmail] = useState('')
  /*const [pass, setPass] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState(false)
    const [info, setInfo] = useState() 
  */

  async function handleLogin(e) {
    //e.preventDefault()

    try {
      setErr('')

    } catch (e) {
      setErr(e.message)
    }

  }



  const handleChangeMail = (e) => {
    setEmail(e.target.value)
  }
/*   const handleChangePass = (e) => {
    setPass(e.target.value)
  } */


    return (
        <>
          <div className="LoginBlog" style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
            <div className="box" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 50px 15px" ,backgroundColor: '#2D283E' ,height: '93vh', width: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#D1E7E0' , overflow:'hidden'}}>
              <h2 className="text-center mb-4">เปลี่ยนรหัสผ่าน</h2>
              {err && <Alert variant="danger">{err}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group id="email">
                  <Form.Label>อีเมล์</Form.Label>
                  <Form.Control type="email" placeholder="ระบุอีเมล์ที่เคยลงทะเบียน" ref={emailRef} value={email} onChange={handleChangeMail} required />
                </Form.Group>
                <Button className="w-100 mb-2 log-btn" style={{ backgroundColor: "#802BB1", color:'black' , borderRadius: '5rem', boxShadow: 'none', outline: 'none !important', borderColor: 'transparent' }}>
                  กู้คืนรหัสผ่าน
                </Button>
                <p className="mt-2">ยังไม่ได้เป็นสมาชิก? <Link to="/Register">สมัครสมาชิก</Link></p>
                <p className="mt-2">เป็นสมาชิกอยู่แล้ว? <Link to="/Login">เข้าสู่ระบบ</Link></p>
              </Form>
            </div>
            <div /* style={{WebkitBoxReflect:" below 5px linear-gradient(transparent, white)"}} */ >
              <img src={img} alt="PIC"/>
            </div>
           
          </div>
        </>
      )
}

export default ResetPass
