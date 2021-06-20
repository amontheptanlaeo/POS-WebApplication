import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
    isMobile
} from "react-device-detect";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import Content from '../components/Contents'
import Footer from '../components/Footer'
import img1 from '../images/shutterstock_488277535.jpg'
import img2 from '../images/shutterstock_1492617809.jpg'
import img3 from '../images/541148128-huge.jpg'
import img4 from '../images/pos-terminal-shop-ready-work.jpg'
import AppIMG from '../images/app-store-google-play-logo.png'
import Platform from '../images/platform.svg'
import nut from '../images/nut.jpg'
import '../styles/Swiper.scss'
import '../styles/Home.scss'
import '../styles/Home-M.scss'


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

function Home() {

    /* const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); */

    /*  const showModal = (a) => {
         return (
             alert('555')
         )
     } */

     if(isMobile){
         return(
            <> 
                <div className="Home-M">
                    <div className="download">
                        <h4>โหลดแอปพลิเคชัน</h4>
                        <img src={AppIMG} alt="Pic"/>
                    </div>
                    <img className="Pic" src={Platform} alt="Pic"/>
                </div>
                
                
            </>
        )
     }

    return (
        <>

            <Swiper
                style={{ '--swiper-pagination-color': '#802BB1', height: "93vh" , position:"relative"}}
                slidesPerView={isMobile ? 1 : 1}
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                
                autoplay={{
                    "delay": 8000,
                    "disableOnInteraction": false
                }}
                pagination={{
                    "dynamicBullets": true,
                    "clickable": true,

                }} className="mySwiper">
                <SwiperSlide ><img src={img1} alt="1" /></SwiperSlide>
                <SwiperSlide ><img src={img2} alt="1" /></SwiperSlide>
                <SwiperSlide ><img src={img3} alt="1" /></SwiperSlide>
                <SwiperSlide ><img src={img4} alt="1" /></SwiperSlide>
                <div className="text-box-swipe">
                    <h1>NB-POS-ONLINE</h1>
                    <p>การบริการ POS SERVICE แบบ Online จัดการสินค้าง่าย รวดเร็ว แค่มีสมาร์ทโฟนก็สามารถเปิดร้านที่ใช้ระบบ POS ได้ ไม่ต้องเสียเงินติดตั้งซื้อฮาร์ดแวร์แพงเพิ่มอีกต่อไป ลดทุนเพิ่มกำไร ระบบที่ดีเยี่ยม มีการจัดทำบัญชีให้ครบในตัว ประหยัดเวลา ด้วยระบบของเรา ให้ร้านของคุณเติบโตอย่างมีประสิทธิภาพ</p>
                    <Link to="/Login" className="btn-home">เริ่มใช้งาน</Link>
                </div>
            </Swiper>
        
           
            <div className='Content' >
                <Content body="ทำงานดีครบครันรวดเร็วที่สุด" body2="ใช้งานง่ายมีบน Android & IOS" header="เปิดบิล • ดูยอดขาย • สินค้าคงคลัง • รายงานประจำเดือน" design="A"/>
                <Content header="NB-POS ทำอะไรได้" design="C"/>
                <Content body="เราใส่ใจลูกค้าทุกท่าน ให้ธุรกิจของคุณเติบโต ได้อย่างมีประสิทธิภาพ" header="บริการ POS ออนไลน์" design="D"/>
                <Content header="ลูกค้าที่เชื่อใจ" design="B"/>
                <Content img1={nut} body="Amonthep.t@ku.th" img2={nut} body2="Watcharin@ku.th" header="ติดต่อ" design="E"/>
            </div>
            <Footer/>




          {/*   <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
            </Modal> */}


        </>

    )
}

export default Home
