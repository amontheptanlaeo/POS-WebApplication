import React, { useState } from "react";
import axios from "axios";
import { motion } from 'framer-motion';



import { Button, Form , Row,
  Col, Alert, Container} from 'react-bootstrap';
function AddBranch() {
    const [err, setErr] = useState('')
    const [BranchName, setฺBranchName] = useState("");

  if(localStorage.getItem('Permistion') != 0) return window.location.href = 'http://localhost:3000/'


    const AddNewBranch = async(e) => {

  
      try {
        e.preventDefault();
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
          : currentdate.getSeconds()).toString()

        await axios.post('https://posappserver.herokuapp.com/addbranch',{
            Branch_Name: BranchName,
            Store_ID: localStorage.getItem('Store_ID'),
            IDCard: localStorage.getItem('IDCard'),
            GenDate: genDate
        }).then((res)=>console.log(res))

      } catch (error) {
        console.log(error)
      }
      
    }
    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
        <Row>
            <Col md={3} lg={3} style={{height:'100%'}}>
                {/* <BlankSide/> */}
            </Col>
            <Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
              <Container>
              <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' }}>
                <h4>เพิ่มสาขาใหม่</h4>
              </div>
                    <div style={{ height: '100%', width: '100%' }}>
                        {err && <Alert variant="danger">{err}</Alert>}
                        <Form onSubmit={(e)=>AddNewBranch(e)}>
                            <Form.Group id="storeName">
                            <Form.Label>ชื่อสาขา</Form.Label>
                            <Form.Control type="text" placeholder="ระบุชื่อสาขา" value={BranchName} onChange={(e)=>setฺBranchName(e.target.value)} required />
                            </Form.Group>
                            <Button type='submit' className="w-100 mb-2 log-btn" style={{ backgroundColor: "#802BB1", color:'black' , borderRadius: '5rem', boxShadow: 'none', outline: 'none !important', borderColor: 'transparent' }}>
                            เพิ่มสาขา
                            </Button>
                        </Form>
                    </div>
                 
                
              </Container>
               
            </Col>
        </Row>
    </motion.div>
    )
}

export default AddBranch
