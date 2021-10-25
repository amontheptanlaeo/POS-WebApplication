import React, { useState, useRef } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from '../images/SignIn.svg'
import { motion } from "framer-motion"
import axios from 'axios';


import '../styles/Login.scss'


function Login() {

  const emailRef = useRef();
  const passRef = useRef();
  const [err, setErr] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
/*   const [loading, setLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)
  const [info, setInfo] = useState() */





  const handleChangeMail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangePass = (e) => {
    setPass(e.target.value)
  }


  const signIn = async(e) => {
    e.preventDefault()
    try {

      const result = await axios.post('https://posappserver.herokuapp.com/login',{
        Email: email,
        Pass: pass
      })
      console.log(result.data)
      if(result.data.length == 1){
        if(result.data[0].Approve == 1){
          localStorage.setItem('Branch_ID',result.data[0].Branch_ID)
          localStorage.setItem('Store_ID',result.data[0].Store_ID)
          localStorage.setItem('Branch_Name',result.data[0].Branch_Name)
          localStorage.setItem('ID',result.data[0].ID)
          localStorage.setItem('Permistion',result.data[0].Permission_ID)
          localStorage.setItem('UserName',result.data[0].FirstName+' '+result.data[0].LastName)
          localStorage.setItem('IDCard',result.data[0].IDCard)
          window.location.href = '/'
        }else{
          alert('รอการอนุมัติ')
        }

        
      }else{
        alert('รหัสผ่าน หรือ เมลไม่ถูกต้อง')
      }

     
      
    } catch (error) {
      console.log(error)
    }
  
    
  }

  return (
    <>
      <div className="LoginBlog" style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
        <div className="box" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 50px 15px" ,backgroundColor: '#2D283E' ,height: '93vh', width: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#D1E7E0' , overflow:'hidden'}}>
          <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className="text-center mb-4">เข้าสู่ระบบ</motion.h2>
          {err && <Alert variant="danger">{err}</Alert>}
          <Form onSubmit={signIn}>
            <Form.Group id="email">
              <Form.Label><motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}}>อีเมล์</motion.span></Form.Label>
              <motion.span initial={{x:-100}} animate={{x:0 , transition:{duration:2}}}><Form.Control type="email" placeholder="ระบุอีเมล์" ref={emailRef} value={email} onChange={handleChangeMail} required /></motion.span>
            </Form.Group>
            <Form.Group id="psw">
              <Form.Label><motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}}>รหัสผ่าน</motion.span></Form.Label>
              <Form.Control type="password" placeholder="ระบุรหัสผ่าน" ref={passRef} value={pass} onChange={handleChangePass} required />
            </Form.Group>
            <motion.p  initial={{x:-100 , opacity:0}} animate={{x:0 , opacity:1 , transition:{duration:1}}} whileTap={{scale:0.9}}>
              <Button className="w-100 mb-2 log-btn" type='submit' style={{ backgroundColor: "#802BB1", color:'black' , borderRadius: '5rem', boxShadow: 'none', outline: 'none !important', borderColor: 'transparent' }}>
                  เข้าสู่ระบบ
              </Button>
            </motion.p>
            <p className="mt-2">อยากเปิดร้านค้า? <Link to="/Register">สมัครเป็นเจ้าของร้าน</Link></p>
            <p className="mt-2">เป็นพนักงานมาใหม่? <Link to="/RegisterEMP">สมัครเป็นพนักงาน</Link></p>
            <p className="mt-2">ลืมรหัสผ่าน? <Link to="/ResetPassword">คลิก</Link></p>
          </Form>
        </div>
        <div className="SidePic" style={{WebkitBoxReflect:" below 5px linear-gradient(transparent, white)"}}>
          <motion.img initial={{scale:0}} animate={{scale:1 , transition:{duration:1}}} src={img} alt="PIC"/>
        </div>
       
      </div>
    </>
  )
}

export default Login
