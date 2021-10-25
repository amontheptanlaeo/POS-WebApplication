import React, { useState , useEffect } from "react";
import axios from "axios";
import { motion } from 'framer-motion';
import { Form , Row,
  Col, Alert, Container} from 'react-bootstrap';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import BarcodeGen from 'react-barcode'

import {
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Input
} from "reactstrap";

function Barcode() {

    const [err, setErr] = useState('')
    const [Type_Name, setType_Name] = useState("");
    const [Allproduct, setAllProduct] = useState([]);
    const [modalA, setModalA] = useState(false);
    const [count,setCount] = useState(1)
    const [product, setProduct] = useState({
        name:'',
        price: 0,
        img:''
    });
    const toggle = () => setModalA(!modalA);
    useEffect(async()=>{
        const data = await axios.post('https://posappserver.herokuapp.com/getAllgoods',{
          Branch_ID: localStorage.getItem('Branch_ID')
        })
        console.log(data.data)
        setAllProduct(data.data)

    },[])

   
    const AddNewCategory = async(e) => {
      try {
        e.preventDefault();
        const data = await axios.post('https://posappserver.herokuapp.com/postcategory',{
            Type_Name: Type_Name,
            Branch_ID: localStorage.getItem('Branch_ID')
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
                 <h4>สร้างบาร์โค้ด</h4>
                </div>
                    <div style={{ height: '100%', width: '100%' }}>
                    <Stack className="w-100" spacing={2} sx={{ width: 300 }}>
                            <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                options={Allproduct.map((option) => `${option.Goods_Name} ${option.Goods_ID}`)}
                                renderInput={(params) => <TextField {...params} label="ค้นหาสินค้า" />}
                                onChange={(event, newValue) => {
                       
                                  if (typeof newValue === 'string') {
                                    Allproduct.map((e)=>{
                                          const product = newValue.split(" ")
                                          if(e.Goods_Name == product[0]){
                                              setProduct({
                                                  name: e.Goods_Name,
                                                  price: e.Price,
                                                  img: e.Goods_img,
                                                  barcode: e.Goods_ID,
                                                  stock: e.Count_Stock
                                              })
      
                                            
                                          }else{
                                              return
                                          }

                                      })
                                      
                                  }else{
                                      return
                                  }

                                }}
                                
                            />
                        </Stack>
                        <Button className="w-100 btn btn-warning" onClick={()=>toggle()}>สร้างบาร์โค้ด</Button>
                        <BarcodeGen value="4234234324342224" />
                    </div>
              </Container>
               
            </Col>
        </Row>
        <Modal isOpen={modalA} toggle={toggle} className='testModal' centered>
            <ModalHeader toggle={toggle}>
                แจ้งเตือน
            </ModalHeader>
            <ModalBody>
              <Input placeholder='ระบุจำนวน' onChange={(e)=>setCount(e.target.value)} type='number' value={count}/>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={()=>{
                    toggle()
                }}>พิมพ์บาร์โค้ด</Button>
                <Button color="success" onClick={()=>{
                    toggle()
                }}>ยกเลิก</Button>
            </ModalFooter>
    </Modal>
    </motion.div>
    )
}

export default Barcode
