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
        const data = await axios.post('https://posappserver.herokuapp.com/postcategory',{
            Branch_Name: BranchName,
            Store_ID: localStorage.getItem('Store_ID')
        });
        console.log('SUCCESS')
        console.log(data)


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
