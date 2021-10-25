import React , { useState , useEffect } from 'react'
import {
    Row,
    Col
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import BlankSide from '../components/BlankSide';
import { motion } from 'framer-motion';
import axios from 'axios';
import ModalSettingProduct from '../components/ModalSettingProduct';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import '../styles/Product.scss'

import SwiperCore, {
    Pagination, Autoplay
} from 'swiper/core';


// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

function Product() {

    const [Allproduct , setAllProduct] = useState([])
    const [modalP, setModalP] = useState(false);
    const temp = []

    const [product, setProduct] = useState({
        name:'',
        price: 0,
        img:''
    });

    const toggle = () => setModalP(!modalP);

    useEffect(async()=>{
        const data = await axios.post('https://posappserver.herokuapp.com/getAlladdgoods',{
            Branch_ID: localStorage.getItem('Branch_ID')
        })
        console.log(data.data)
        setAllProduct(data.data)
    },[])


    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
        <Row>
            <Col md={3} style={{height:'100%'}}>
                <BlankSide/>
            </Col>
            <Col md={9} style={{paddingTop:'1rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>

            <Stack className="w-100 mb-5" spacing={2} sx={{ width: 300 }}>
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
                                                    price:18,
                                                    img: e.Goods_img,
                                                    Count_Stock: e.Count_Stock,
                                                    Favorite: e.Favorite,
                                                    barcode: e.Goods_ID
                                                })
                                                 toggle() 
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
                                            <div className='ItemListSell' style={{width:'100%'}}>
                                                <p>{e.Type_Name}</p>
                                                <Swiper
                                                style={{ '--swiper-pagination-color': '#802BB1', height: "100%"}}
                                                slidesPerView={6}
                                                spaceBetween={20}
                                                centeredSlides={true}
                                                loop={false}
                                                pagination={{
                                                    "dynamicBullets": true,
                                                    "clickable": true,
                                                }} className="mySwiper">
                                                    {Allproduct.map((e2,idx)=>{
                                                        if(e2.Type_Name == e.Type_Name){
                                                            return <SwiperSlide  style={{borderRadius:'3rem' , display:'flex' , justifyContent:'center' , alignItems:'center' , flexDirection:'column'}}>
                                                                <div style={{position:'relative'}}>
                                                                    <img src={e2.Goods_img} style={{objectFit:'contain' , height:'150px' ,width:'150px'}} alt={idx} 
                                                            onClick={()=>{
                                                                setProduct({
                                                                    name: e2.Goods_Name,
                                                                    price:e2.Price,
                                                                    img: e2.Goods_img,
                                                                    Count_Stock: e2.Count_Stock,
                                                                    Favorite: e2.Favorite,
                                                                    barcode: e2.Goods_ID
                                                                })
                                                                 toggle() 
                                                            }}
                                                            /> 
                                                            <div className={e2.Count_Stock <= 0 ? 'OutOff':e2.Count_Stock < 20 ? 'Warn':'Normal'}></div>
                                                                </div>
                                                               
                                                            <p className={e2.Count_Stock <= 0 ? 'Out':e2.Count_Stock < 20 ? 'Near':'In'} style={{textAlign:'center' , width:'100%' }}>{e2.Goods_Name}</p>
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

            </Col>
        </Row>

        <ModalSettingProduct
                show={modalP}
                onHide={() => setModalP(false)}
                toggle={() => toggle()}
                data={product}           
            />

        </motion.div>

        


    )
}

export default Product
