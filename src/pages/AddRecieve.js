import React, { useState , useEffect } from "react";
import axios from "axios";
import {
  Table
} from "reactstrap";

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

import { Button, Form, Row, Col  } from "react-bootstrap";
import ModalAddRecieve from "../components/ModalAddRecieve";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import '../styles/AddRecieve.scss'
import SwiperCore, {
    Pagination, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);


function AddRecieve() {



  const [Origin,setOrigin] = useState("")


  const [LinkBill,setLinkBill] = useState(null)
  const [Bill_Number,setBill_Number]=useState("")
  const [GoodsPrice, setGoodsPrice] = useState(0);
  const [Allproduct, setAllProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalP, setModalP] = useState(false);
  const [modalS, setModalS] = useState(false);
  const [product, setProduct] = useState({
        name:'',
        barcode: '',
        img:''
    });
  const temp = []
  const toggle = () => setModalP(!modalP);

  const [loading, setLoading] = useState(false);

const uploadImage = async (files) => {
    const formData = new FormData();
    formData.append("file", files);
    formData.append("upload_preset", "xabqurhq");
    setLoading(true)
    axios
      .post("https://api.cloudinary.com/v1_1/diyf7i0tt/upload", formData)
      .then((res) => {
        console.log(res);
        setLinkBill(res.data.url)
        setLoading(false)
      });
    }



  const AddRecieveFN = async(e) => {
    e.preventDefault()
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
        await axios.post('https://posappserver.herokuapp.com/postupdategoods',{
        ID : localStorage.getItem('ID'),
        Branch_ID : localStorage.getItem('Branch_ID'),
        Store_ID : localStorage.getItem('Store_ID'),
        Origin : Origin,
        DateAdd_History : dateOnAdd,
        GenDate: genDate,
        LinkBill : LinkBill,
        Bill_Number:Bill_Number
      }).then(()=>alert('เพิ่มสำเร็จ'))


    } catch (error) {
      console.log(error);
    }
    
  };

  

   
    


    useEffect(async()=>{
      const data = await axios.post('https://posappserver.herokuapp.com/getAllgoods',{
        Branch_ID: localStorage.getItem('Branch_ID')
      })
      console.log(data.data)
      setAllProduct(data.data)
  
  },[])



  useEffect(()=>{
    const interval = setInterval(() => {
      getCart();
    }, 3000);
    return () => clearInterval(interval);
  },[])


  const getCart = async() => {
    const Resp = await axios.post('https://posappserver.herokuapp.com/getbuffer-cart-recive',{
      Branch_ID: localStorage.getItem('Branch_ID'),
      ID: localStorage.getItem('ID'),
      Store_ID: localStorage.getItem('Store_ID'),
    })
    // if(!Resp) return setCart([])
    console.log(Resp)
     setCart(Resp.data)
  }

  

 

  const deleteProduct = async(barcode) => {
      const Resp = await axios.post('https://posappserver.herokuapp.com/deletebuffer-cart-recive',{
      Branch_ID: localStorage.getItem('Branch_ID'),
      ID: localStorage.getItem('ID'),
      Store_ID: localStorage.getItem('Store_ID'),
      Goods_ID: barcode
    })
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
                                                typeName: e.Type_Name,
                                                Oldprice: e.Price
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
                                    <th>ราคา</th>
                                    <th>จำนวน</th>
                                    <th>รวม</th>
                                    <th>ราคาขาย</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((e,idx)=>{
                                    return(
                                        <tr>
                                            <th scope="row">{idx+1}</th>
                                            <td>{e.Goods_Name}</td>
                                            <td>{e.Cost_Unit}</td>
                                            <td>{e.Count_Recive}</td>
                                            <td>{e.Cost_Total}</td>
                                            <td>{e.Price}</td>
                                            <td><Button color='danger' onClick={()=>deleteProduct(e.Goods_ID)}>ลบ</Button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                        {
                            Allproduct.map(e=>{
                                
                                if(temp.indexOf(e.Type_Name) !== -1)  
                                {  
                                        return
                                }   
                                else  
                                {
                                        temp.push(e.Type_Name)
                                        
                                        return(
                                            <div className='ItemListSell'>
                                                <p>{e.Type_Name}</p>
                                                <Swiper
                                                style={{ '--swiper-pagination-color': '#802BB1', height: "100%"}}
                                                slidesPerView={6}
                                                spaceBetween={30}
                                                centeredSlides={true}
                                                loop={false}
                                                pagination={{
                                                    "dynamicBullets": true,
                                                    "clickable": true,
                                                }} className="mySwiper">
                                                    {Allproduct.map((e2,idx)=>{
                                                        if(e2.Type_Name == e.Type_Name){
                                                            return <SwiperSlide style={{borderRadius:'3rem',display:'flex' , justifyContent:'center' , alignItems:'center' , flexDirection:'column'}}><img src={e2.Goods_img} style={{objectFit:'contain' , height:'150px' ,width:'150px'}} alt={idx} 
                                                            onClick={()=>{
                                                                setProduct({
                                                                    name: e2.Goods_Name,
                                                                    barcode:e2.Goods_ID,
                                                                    img: e2.Goods_img,
                                                                    typeName: e2.Type_Name,
                                                                    Oldprice: e2.Price
                                                                })
                                                                 toggle()
                                                            }}
                                                            />
                                                             <p style={{fontSize:'16px'}}>{e2.Goods_Name}</p>
                                                            </SwiperSlide>
                                                        }
                                                        return
                                                    })}
                                                </Swiper>
                                            </div>
                                    )
                                }  
                               
                            })
                            
                        }
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
                <h4>เพิ่มแหล่งที่มาสินค้า</h4>
              </div>

              <Form onSubmit={(e)=>AddRecieveFN(e)}>
                <Form.Group id="FName">
                  <Form.Label>รับมาจากที่ไหน</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ระบุสถานที่รับสินค้า"
                    value={Origin}
                    onChange={(e)=>setOrigin(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group id="LName">
                  <Form.Label>หมายเลขบิล</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ระบุหมายเลขบิล"
                    value={Bill_Number}
                    onChange={(e)=>setBill_Number(e.target.value)}
                    required
                  />
                </Form.Group>
                <input
                        style={{marginBottom:'2rem'}}
                            type="file"
                            name="file"
                            placeholder="Upload an image"
                            onChange={(e) => uploadImage(e.target.files[0])}
                          />
                          {loading ? (
                            <h3>Loading...</h3>
                          ) : (
                            <img src={LinkBill} style={{ width: '150px' }} />
                          )}
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
                  >
                    เพิ่มแหล่งที่มา
                  </Button>
                </div>
              </Form>
           
          </div>
        </Col>
      </Row>


      <ModalAddRecieve
                show={modalP}
                onHide={() => setModalP(false)}
                toggle={() => toggle()}
                data={product}
                GoodsPrice={GoodsPrice}
                setGoodsPrice={setGoodsPrice}
                setCart={setCart}
                
            />

    </motion.div>
  );
}

export default AddRecieve;
