import React, { useState , useEffect , useRef} from "react";
import axios from "axios";
import {
  Table
} from "reactstrap";

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

import { Button, Form, Row, Col  } from "react-bootstrap";
import ModalQuotation from "../components/ModalQuotation";
import { motion } from "framer-motion";
import ReactToPrint , { useReactToPrint } from 'react-to-print';
import QuotationReport from "../components/QuotationReport";


function CreateQuotation() {

    const [Origin,setOrigin] = useState("")

  
    const [LinkBill,setLinkBill] = useState(null)
    const [Bill_Number,setBill_Number]=useState("")
    const [GoodsPrice, setGoodsPrice] = useState(0);
    const [Allproduct, setAllProduct] = useState([]);
    const [cart, setCart] = useState(localStorage.getItem('CartQ') ? JSON.parse(localStorage.getItem('CartQ')):[]);
    const [NameReciver,setNameReciver] = useState('')
    const [Addr,setAddr] = useState('')
    const [Contact,setContact] = useState('')
    const [modalQ, setModalQ] = useState(false);
    const [product, setProduct] = useState({
          name:'',
          barcode: '',
          img:''
      });

      useEffect(async()=>{
        const data = await axios.post('https://posappserver.herokuapp.com/getAllgoods',{
          Branch_ID: localStorage.getItem('Branch_ID')
        })
        console.log(data.data)
        setAllProduct(data.data)
    
    },[])



    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    
    
    
  

     

  if(localStorage.getItem('Permistion') != 0 ) return window.location.href = 'http://localhost:3000/'

  

  const toggle = () => setModalQ(!modalQ);



  const CreateQuotationBill = async(e) => {
    e.preventDefault()
    if(cart.length == 0) return alert('เลือกสินค้าก่อน')
    const currentdate = new Date();
    const dateOnAdd = currentdate.getFullYear() +
    "-" +
    (currentdate.getMonth() + 1 < 10
      ? "0" + (currentdate.getMonth() + 1)
      : currentdate.getMonth() + 1) +
    "-" +
    (currentdate.getDate() < 10
      ? "0" + currentdate.getDate()
      : currentdate.getDate()) +
    "T" +
    (currentdate.getHours() < 10
      ? "0" + currentdate.getHours()
      : currentdate.getHours()) +
    ":" +
    (currentdate.getMinutes() < 10
      ? "0" + currentdate.getMinutes()
      : currentdate.getMinutes()) +
    ":" +
    (currentdate.getSeconds() < 10
      ? "0" + currentdate.getSeconds()
      : currentdate.getSeconds())

      const genDate = currentdate.getFullYear() +
      
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
    try {
        handlePrint()


    } catch (error) {
      console.log(error);
    }
    
  };

  


  

 

  const deleteProduct = (key) => {
    let temp = cart.filter(function (e) {
        return e.key != key
  })
  localStorage.setItem('CartQ',JSON.stringify(temp))
  setCart(JSON.parse(localStorage.getItem('CartQ')))
}



    return (
        <motion.div
      initial={{ translateX: 500 }}
      animate={{ translateX: -50 }}
      transition={{ duration: 0.5 }}
      className="content"
      style={{ overflow: "hidden" }}
    >
      <Row>
        <Col md={3} lg={3} style={{ height: "100%" }}>

        </Col>
        <Col
          md={9}
          lg={9}
          className='Add-RecievePage'
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            paddingTop: "1rem",
          }}
        >
           <div className="ProductStock">
           <Stack className="w-100" spacing={2} sx={{ width: 300 }}>
                            <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                options={Allproduct.map((option) => `${option.Goods_Name} ${option.Goods_ID}`)}
                                renderInput={(params) => <TextField {...params} label="ค้นหาสินค้า" />}
                            
                                onChange={(event, newValue) => {
                                  if (typeof newValue === 'string') {
                                      const product = newValue.split(" ")
                                      Allproduct.map((e)=>{
                                            if(e.Goods_Name == product[0]){
                                              setProduct({
                                                name: e.Goods_Name,
                                                barcode:e.Goods_ID,
                                                img: e.Goods_img,
                                                typeName: e.Type_Name
                                            })
                                             toggle()
                                            }
                                        })
                                  }else{
                                    return
                                  }
                                      
                       
                                  }}
                                  
                            />
                        </Stack>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>สินค้า</th>
                                    <th>ราคา/หน่วย</th>
                                    <th>จำนวน</th>
                                    <th>รวม</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((e,idx)=>{
                                    return(
                                        <tr>
                                            <th scope="row">{idx+1}</th>
                                            <td>{e.Goods_Name}</td>
                                            <td>{e.Price}</td>
                                            <td>{e.Count}</td>
                                            <td>{e.Total}</td>
                                            <td><Button color='danger' onClick={()=>deleteProduct(e.key)}>ลบ</Button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                       
                    </div>
          <div className="Form-Add-Recieve">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop:'2rem'
                }}
              >
                <h4>สร้างใบเสนอราคา</h4>
              </div>

              <Form onSubmit={(e)=>CreateQuotationBill(e)}>
                <Form.Group id="FName">
                  <Form.Label>ชื่อผู้รับ</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ระบุชื่อลูกค้า"
                    value={NameReciver}
                    onChange={(e)=>setNameReciver(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group id="LName">
                  <Form.Label>ที่อยู่</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ระบุที่อยู่ลูกค้า"
                    value={Addr}
                    onChange={(e)=>setAddr(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group id="LName">
                  <Form.Label>ติดต่อ</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ระบุเบอร์ติดต่อลูกค้า"
                    value={Contact}
                    onChange={(e)=>setContact(e.target.value)}
                    required
                  />
                </Form.Group>
               
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="warning"
                    className="w-25"
                    type='submit'
                    type='submit'
                  >
                    สร้างใบเสนอราคา
                  </Button>
                </div>
              </Form>
           
          </div>
        </Col>
      </Row>

      <div style={{display:'none'}}>
                    <div ref={componentRef}>
                        <QuotationReport NameReciver={NameReciver} Addr={Addr} Contact={Contact} cart={cart}/>
                    </div>
                </div>


      <ModalQuotation
                show={modalQ}
                onHide={() => setModalQ(false)}
                toggle={() => toggle()}
                data={product}
                GoodsPrice={GoodsPrice}
                setGoodsPrice={setGoodsPrice}
                setCart={setCart}
                
            />

    </motion.div>
    )
}

export default CreateQuotation
