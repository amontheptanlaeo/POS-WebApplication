import React from 'react'
import {
    Row,
    Col
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import BlankSide from '../components/BlankSide';
import { motion } from 'framer-motion';

import SwiperCore, {
    Pagination, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

function Product() {
    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
        <Row>
            <Col md={3} style={{height:'100%'}}>
                <BlankSide/>
            </Col>
            <Col md={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
                <div style={{height:'100%' , margin:'2rem'}}>
                    <h4>เครื่องดื่ม <span style={{fontSize:'18px'}}><a href='#'>ทั้งหมด</a></span></h4>
                    <Swiper
                    style={{ '--swiper-pagination-color': '#802BB1', height: "100%", position: "relative" }}
                    slidesPerView={6}
                    spaceBetween={2}
                    centeredSlides={true}
                    loop={true}
                    // autoplay={{
                    //     "delay": 8000,
                    //     "disableOnInteraction": false
                    // }}
                    pagination={{
                        "dynamicBullets": true,
                        "clickable": true,
                    }} className="mySwiper">
                        <SwiperSlide ><img src={'https://bigboy.co.th/bangkok/wp-content/uploads/sites/2/2020/05/Coke-Full-red-325-ml.png'} style={{objectFit:'contain' , height:'200px' ,width:'200px'}} alt="1" /></SwiperSlide>
                        <SwiperSlide ><img src={'http://pngimg.com/uploads/pepsi/pepsi_PNG5.png'} alt="1"style={{objectFit:'contain' , height:'200px' ,width:'200px' }} /></SwiperSlide>
                        <SwiperSlide ><img src={'https://freepngdownload.com/image/thumb/sprite-png-free-download-4.png'} alt="1" style={{objectFit:'contain' , height:'200px' ,width:'200px'}}/></SwiperSlide>
                        <SwiperSlide ><img src={'https://bigboy.co.th/bangkok/wp-content/uploads/sites/2/2020/05/Coke-Full-red-325-ml.png'} style={{objectFit:'contain' , height:'200px' ,width:'200px'}} alt="1" /></SwiperSlide>
                        <SwiperSlide ><img src={'http://pngimg.com/uploads/pepsi/pepsi_PNG5.png'} alt="1"style={{objectFit:'contain' , height:'200px' ,width:'200px' }} /></SwiperSlide>
                        <SwiperSlide ><img src={'https://freepngdownload.com/image/thumb/sprite-png-free-download-4.png'} alt="1" style={{objectFit:'contain' , height:'200px' ,width:'200px'}}/></SwiperSlide>
                    </Swiper>
                </div>
                <div style={{height:'100%' , margin:'2rem'}}>
                    <h4>ขนม</h4>
                    <Swiper
                    style={{ '--swiper-pagination-color': '#802BB1', height: "100%", position: "relative" }}
                    slidesPerView={6}
                    spaceBetween={2}
                    centeredSlides={true}
                    loop={true}
                    // autoplay={{
                    //     "delay": 8000,
                    //     "disableOnInteraction": false
                    // }}
                    pagination={{
                        "dynamicBullets": true,
                        "clickable": true,
                    }} className="mySwiper">
                        <SwiperSlide ><img src={'https://bigboy.co.th/bangkok/wp-content/uploads/sites/2/2020/05/Coke-Full-red-325-ml.png'} style={{objectFit:'contain' , height:'200px' ,width:'200px'}} alt="1" /></SwiperSlide>
                        <SwiperSlide ><img src={'http://pngimg.com/uploads/pepsi/pepsi_PNG5.png'} alt="1"style={{objectFit:'contain' , height:'200px' ,width:'200px' }} /></SwiperSlide>
                        <SwiperSlide ><img src={'https://freepngdownload.com/image/thumb/sprite-png-free-download-4.png'} alt="1" style={{objectFit:'contain' , height:'200px' ,width:'200px'}}/></SwiperSlide>
                        <SwiperSlide ><img src={'https://bigboy.co.th/bangkok/wp-content/uploads/sites/2/2020/05/Coke-Full-red-325-ml.png'} style={{objectFit:'contain' , height:'200px' ,width:'200px'}} alt="1" /></SwiperSlide>
                        <SwiperSlide ><img src={'http://pngimg.com/uploads/pepsi/pepsi_PNG5.png'} alt="1"style={{objectFit:'contain' , height:'200px' ,width:'200px' }} /></SwiperSlide>
                        <SwiperSlide ><img src={'https://freepngdownload.com/image/thumb/sprite-png-free-download-4.png'} alt="1" style={{objectFit:'contain' , height:'200px' ,width:'200px'}}/></SwiperSlide>
                    </Swiper>
                </div>
                <div style={{height:'100%' , margin:'2rem'}}>
                    <h4>อาหาร</h4>
                    <Swiper
                    style={{ '--swiper-pagination-color': '#802BB1', height: "100%", position: "relative" }}
                    slidesPerView={6}
                    spaceBetween={2}
                    centeredSlides={true}
                    loop={true}
                    // autoplay={{
                    //     "delay": 8000,
                    //     "disableOnInteraction": false
                    // }}
                    pagination={{
                        "dynamicBullets": true,
                        "clickable": true,
                    }} className="mySwiper">
                        <SwiperSlide ><img src={'https://bigboy.co.th/bangkok/wp-content/uploads/sites/2/2020/05/Coke-Full-red-325-ml.png'} style={{objectFit:'contain' , height:'200px' ,width:'200px'}} alt="1" /></SwiperSlide>
                        <SwiperSlide ><img src={'http://pngimg.com/uploads/pepsi/pepsi_PNG5.png'} alt="1"style={{objectFit:'contain' , height:'200px' ,width:'200px' }} /></SwiperSlide>
                        <SwiperSlide ><img src={'https://freepngdownload.com/image/thumb/sprite-png-free-download-4.png'} alt="1" style={{objectFit:'contain' , height:'200px' ,width:'200px'}}/></SwiperSlide>
                        <SwiperSlide ><img src={'https://bigboy.co.th/bangkok/wp-content/uploads/sites/2/2020/05/Coke-Full-red-325-ml.png'} style={{objectFit:'contain' , height:'200px' ,width:'200px'}} alt="1" /></SwiperSlide>
                        <SwiperSlide ><img src={'http://pngimg.com/uploads/pepsi/pepsi_PNG5.png'} alt="1"style={{objectFit:'contain' , height:'200px' ,width:'200px' }} /></SwiperSlide>
                        <SwiperSlide ><img src={'https://freepngdownload.com/image/thumb/sprite-png-free-download-4.png'} alt="1" style={{objectFit:'contain' , height:'200px' ,width:'200px'}}/></SwiperSlide>
                    </Swiper>
                </div>
                <div style={{height:'100%' , margin:'2rem'}}>
                    <h4>ของใช้</h4>
                    <Swiper
                    style={{ '--swiper-pagination-color': '#802BB1', height: "100%", position: "relative" }}
                    slidesPerView={6}
                    spaceBetween={2}
                    centeredSlides={true}
                    loop={true}
                    // autoplay={{
                    //     "delay": 8000,
                    //     "disableOnInteraction": false
                    // }}
                    pagination={{
                        "dynamicBullets": true,
                        "clickable": true,
                    }} className="mySwiper">
                        <SwiperSlide ><img src={'https://bigboy.co.th/bangkok/wp-content/uploads/sites/2/2020/05/Coke-Full-red-325-ml.png'} style={{objectFit:'contain' , height:'200px' ,width:'200px'}} alt="1" /></SwiperSlide>
                        <SwiperSlide ><img src={'http://pngimg.com/uploads/pepsi/pepsi_PNG5.png'} alt="1"style={{objectFit:'contain' , height:'200px' ,width:'200px' }} /></SwiperSlide>
                        <SwiperSlide ><img src={'https://freepngdownload.com/image/thumb/sprite-png-free-download-4.png'} alt="1" style={{objectFit:'contain' , height:'200px' ,width:'200px'}}/></SwiperSlide>
                        <SwiperSlide ><img src={'https://bigboy.co.th/bangkok/wp-content/uploads/sites/2/2020/05/Coke-Full-red-325-ml.png'} style={{objectFit:'contain' , height:'200px' ,width:'200px'}} alt="1" /></SwiperSlide>
                        <SwiperSlide ><img src={'http://pngimg.com/uploads/pepsi/pepsi_PNG5.png'} alt="1"style={{objectFit:'contain' , height:'200px' ,width:'200px' }} /></SwiperSlide>
                        <SwiperSlide ><img src={'https://freepngdownload.com/image/thumb/sprite-png-free-download-4.png'} alt="1" style={{objectFit:'contain' , height:'200px' ,width:'200px'}}/></SwiperSlide>
                    </Swiper>
                </div>
           
                
            

            </Col>
        </Row>
        </motion.div>


    )
}

export default Product
