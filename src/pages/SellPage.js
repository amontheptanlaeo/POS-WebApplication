import React , { useState , useEffect } from 'react'
import {
    Button,
    Row,
    Col,
    Input,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Table 
} from "reactstrap";
import axios from 'axios'
import { motion } from 'framer-motion';
import '../styles/SellPage.scss'
import icon from '../images/money-bill-wave-solid.svg'
//Modal
import ModalProduct from '../components/ModalProduct'
import ModalSell from '../components/ModalSell';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Pagination, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);




function SellPage() {



    const temp = []
    const [Allproduct, setAllProduct] = useState([]);
    const [cart, setCart] = useState(localStorage.getItem(`CartSell`) ? JSON.parse(localStorage.getItem(`CartSell`)):[]);
    let totalPrice = 0


    useEffect(async()=>{
        const data = await axios.get('https://posappserver.herokuapp.com/getaddgoods')
        console.log(data.data)
        setAllProduct(data.data)
        let temp = cart
        temp.map(e=>{
            totalPrice = totalPrice + e.total
        })
        setGoodsPrice(totalPrice)


    },[])


    const [modalP, setModalP] = useState(false);
    const [modalS, setModalS] = useState(false);
    const [product, setProduct] = useState({
        name:'',
        price: 0,
        img:''
    });

    const toggle = () => setModalP(!modalP);
    const toggleSell = () => setModalS(!modalS);

    const [GoodsPrice, setGoodsPrice] = useState(0);

    const deleteProduct = (key) => {
    //let totalPrice = 0
    let temp = cart.filter(function (e) {
        return e.key != key
  });
    temp.map(e=>{
        totalPrice = totalPrice + e.total
    })
    setGoodsPrice(totalPrice)
  
    localStorage.setItem(`CartSell`,JSON.stringify(temp))
    setCart(JSON.parse(localStorage.getItem(`CartSell`)))
      }



   

    

    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" >
            <Row>
                <Col md={3} style={{height:'100%'}}>
                   
                </Col>
                <Col md={9} className='SellPage' style={{display:'flex' , height:'100%' , width:'100%' , justifyContent:'center' , paddingTop:'1rem'}}>
                    <div className="SellProduct">
                        <InputGroup>
                            
                            <InputGroupText>ชื่อสินค้า</InputGroupText>
                            <Input placeholder="ชื่อสินค้า/barcode"/>
                            <InputGroupAddon addonType="append"><Button color="warning">ค้นหา</Button></InputGroupAddon>
                        </InputGroup>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>สินค้า</th>
                                    <th>ราคา</th>
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
                                            <td>{e.name}</td>
                                            <td>{e.price}</td>
                                            <td>{e.count}</td>
                                            <td>{e.total}</td>
                                            <td><Button color='danger' onClick={()=>deleteProduct(e.key)}>ลบ</Button></td>
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
                                                            return <SwiperSlide style={{borderRadius:'3rem'}}><img src={e2.Goods_img} style={{objectFit:'contain' , height:'150px' ,width:'150px'}} alt={idx} 
                                                            onClick={()=>{
                                                                setProduct({
                                                                    name: e2.Goods_Name,
                                                                    price:18,
                                                                    img: e2.Goods_img
                                                                })
                                                           
                                                                
                                                                 toggle()
                                    
                                                            }}
                                                            /></SwiperSlide>
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
                    <div className="CasheerBox" >
                        <div className="TotalBox">
                            <p>{GoodsPrice.toFixed(2)}</p>
                        </div>
                        <div className='idk' >
                            <h1 style={{margin:'0'}}>SellBox</h1>
                        </div>
                        <Button style={{padding:'1rem' , margin:'0', fontSize:'25px'}} onClick={()=>{
                            
                            if(GoodsPrice <= 0) return alert('กรุณาเลือกสินค้าก่อน')
                            toggleSell()
                            
                            }}className="w-100 btn btn-success"><svg aria-hidden="true" focusable="false" data-prefix="fas"  width='25px' data-icon="money-bill-wave" class="svg-inline--fa fa-money-bill-wave fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z"></path></svg> ชำระเงิน</Button>
                    </div>
                   
                </Col>
            </Row>
            <ModalProduct
                show={modalP}
                onHide={() => setModalP(false)}
                toggle={() => toggle()}
                data={product}
                GoodsPrice={GoodsPrice}
                setGoodsPrice={setGoodsPrice}
                setCart={setCart}
                
            />
            <ModalSell
                show={modalS}
                onHide={() => setModalS(false)}
                toggle={() => toggleSell()}
                data={product}
                GoodsPrice={GoodsPrice}
            />

            
            
        </motion.div>
    )
}

export default SellPage
