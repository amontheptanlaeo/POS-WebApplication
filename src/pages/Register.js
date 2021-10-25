import React, { useState, useRef } from 'react';
import { Button, Form , Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from '../images/Welcome.svg'
import { motion } from "framer-motion"
import axios from 'axios';
import ImageUploading from "react-images-uploading";

function Register() {
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
/*     const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState(false)
    const [info, setInfo] = useState() */
  
  

    //MainFN
    const Register = async(e) => {
      e.preventDefault()
      try {
        if(pass != conpass) return alert('รหัสผ่านไม่ตรงกัน')
        const currentdate = new Date();
        const genDate = currentdate.getFullYear().toString() +
        
        (currentdate.getMonth() + 1 < 10
          ? "0" + (currentdate.getMonth() + 1)
          : currentdate.getMonth() + 1).toString() +
       
        (currentdate.getDate() < 10
          ? "0" + currentdate.getDate()
          : currentdate.getDate()).toString() +
       
        (currentdate.getHours() < 10
          ? "0" + currentdate.getHours()
          : currentdate.getHours()).toString() +
       
        (currentdate.getMinutes() < 10
          ? "0" + currentdate.getMinutes()
          : currentdate.getMinutes()).toString() +
       
        (currentdate.getSeconds() < 10
          ? "0" + currentdate.getSeconds()
          : currentdate.getSeconds()).toString() +
          (currentdate.getMilliseconds() < 100 
          ? "00" + currentdate.getMilliseconds():currentdate.getMilliseconds()).toString()

          const check = await axios.post('https://posappserver.herokuapp.com/checkemail',{

            Email: email.toLowerCase(),
  
          })

          console.log(check.data[0]['COUNT(Email)'])
          if(check.data[0]['COUNT(Email)'] == 0){

             await axios.post('https://posappserver.herokuapp.com/register-owner',{
              GenDate: genDate,
              IDCard: CitizenNumber,
              FirstName: FName,
              LastName: LName,
              Email: email.toLowerCase(),
              Pass: pass,
              img_Person: '',
              Store_Name: storeName,
              Branch_Name: branchName
            }).then((res)=>{
              alert('สมัครสำเร็จ')
              window.location.href = '/login'
            })

            


          }else{
            return alert('อีเมลล์ซ้ำ')
          }
    

  
  
       

      
        
      } catch (error) {
        console.log(error)
      }
     
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
    const handleChangeBranchName = (e) => {
      setBranchName(e.target.value)
    }
  
    return (
      <>
        <div className="LoginBlog" style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
          <div className="box" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 50px 15px" ,backgroundColor: '#2D283E' ,height: '93vh', width: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#D1E7E0' , overflow:'hidden'}}>
            <h2 className="text-center mb-4">สมัครสมาชิก</h2>
            {err && <Alert variant="danger">{err}</Alert>}
            <Form onSubmit={(e)=>Register(e)}>
              <Form.Group id="storeName">
                <Form.Label>ชื่อร้านค้า</Form.Label>
                <Form.Control type="text" placeholder="ระบุชื่อร้านค้า" value={storeName} onChange={handleChangeStoreName}  />
              </Form.Group>
              <Form.Group id="branchName">
                <Form.Label>ชื่อสาขา</Form.Label>
                <Form.Control type="text" placeholder="ระบุชื่อสาขา" value={branchName} onChange={handleChangeBranchName}  />
              </Form.Group>
              <Form.Group id="FName">
                <Form.Label>เลขบัตรประชาชน</Form.Label>
                <Form.Control type="text" placeholder="ระบุเลขบัตรประชาชน" value={CitizenNumber} onChange={handleChangeCitizen}  />
              </Form.Group>
              <Form.Group id="FName">
                <Form.Label>ชื่อจริง</Form.Label>
                <Form.Control type="text" placeholder="ระบุชื่อจริง" value={FName} onChange={handleChangeFName}  />
              </Form.Group>
              <Form.Group id="LName">
                <Form.Label>นามสกุล</Form.Label>
                <Form.Control type="text" placeholder="ระบุนามสกุล" value={LName} onChange={handleChangeLName}  />
              </Form.Group>
              <Form.Group id="LName">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="ระบุอีเมล์" ref={emailRef} value={email} onChange={handleChangeMail}  />
              </Form.Group>
              <Form.Group id="psw">
                <Form.Label>รหัสผ่าน</Form.Label>
                <Form.Control type="password" placeholder="ระบุรหัสผ่าน" ref={passRef} value={pass} onChange={handleChangePass}  />
              </Form.Group>
              <Form.Group id="psw">
                <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
                <Form.Control type="password" placeholder="ระบุรหัสผ่านอีกครั้ง"  ref={conPassRef} value={conpass} onChange={handleChangeConPass} require  />
              </Form.Group>
              <Button type='submit' className="w-100 mb-2 log-btn" style={{ backgroundColor: "#802BB1", color:'black' , borderRadius: '5rem', boxShadow: 'none', outline: 'none !important', borderColor: 'transparent' }}>
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

export default Register
