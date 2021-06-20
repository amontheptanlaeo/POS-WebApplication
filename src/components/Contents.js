import React from 'react'
import { Row } from 'react-bootstrap'
import List from './List'
import DashBoardIMG from '../images/Graph.svg'
import MobileIMG from '../images/Mobile2.svg'
import DeviceIMG from '../images/Device.svg'
import AppIMG from '../images/app-store-google-play-logo.png'
function Contents({ header, body, body2, design , img1 , img2 }) {
    switch (design) {
        case "A": {
            return (
                <div className="Section-A color-A" id='system' style={{ width: '100%', height: "50vh", display: "flex", justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
                    <div className='text-box' style={{ width: '100%', textAlign: "center", marginTop: '5rem', marginBottom: '5rem' }}>
                        <h1 style={{ fontSize: "40px", wordSpacing: "1rem" }}>{header}</h1>
                    </div>
                    <div style={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                        <div className='text-box' style={{ width: '100%', textAlign: "center" }}>
                            <p style={{ fontSize: "30px" }}>{body}</p>
                        </div>
                        <div className='line-block' style={{ width: '3px', textAlign: "center" , backgroundColor:"#D1D7E0" , height:"100%" }}>
                        </div>
                        <div className='text-box' style={{ width: '100%', textAlign: "center" }}>
                            <p style={{ fontSize: "30px" , margin:"0" }}>{body2}</p>
                            <img src={AppIMG} style={{width:"200px" , height:"200px" , objectFit:"contain"}} alt="PIC"/>
                        </div>
                    </div>
                </div>
            )
        }

        case "B": {
            return (
                <div className="Section-B color-b"  style={{ width: '100%', height: "50vh", display: "flex", justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
                    <div className='text-box' style={{ width: '100%', textAlign: "center", marginTop: '5rem', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: "40px", wordSpacing: "1rem" }}>{header}</h1>
                    </div>
                    <div style={{ width: '100%', display: "flex", justifyContent: 'space-evenly', alignItems: 'center' }} >
                        <img className="Cus-logo" src="https://seeklogo.com/images/1/7-Eleven-logo-08AAB4F0FE-seeklogo.com.png" alt="PIC"/>
                        <img className="Cus-logo" src="https://www.bangkokfashionoutlet.com/uploads/tx_bfooutlet/central-logo.jpg" alt="PIC"/>
                        <img className="Cus-logo" src="https://pbs.twimg.com/profile_images/1063694740279844864/U2Pefjy8_400x400.jpg" alt="PIC"/>
                        <img className="Cus-logo" src="data:image/jpeg;base64,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" alt="PIC" />
                        <img className="Cus-logo" src="https://pbs.twimg.com/profile_images/924817144017068032/Nw_k0qAc.jpg" alt="PIC"/>
                    </div>
                </div>

            )
        }
        case "C": {
            return (
                <div className="Section-C color-b" style={{width: '100%', height: "50vh", display: "flex", justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
                    <div className='text-box' style={{ width: '100%', textAlign: "center", marginTop: '5rem', marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: "40px", wordSpacing: "1rem" }}>{header}</h1>
                    </div>
                    <div style={{ width: '100%', display: "flex", justifyContent: 'space-around', alignItems: 'center' , flexDirection:"column"}}>

                        <Row style={{width:'100%' , marginBottom:'2rem'}}>
                            <List img={DashBoardIMG} head="จัดการสินค้า" body="สามารถจัดการสินค้าได้อย่างง่าย มีสถิติแสดงผล และ รายงาน" />
                            <List img={MobileIMG} head="สะดวกสบาย'" body="ขายสินค้าได้ด้วยการใช้สมาร์ทโฟน ลดการใช้ฮาร์ดแวร์ที่แสนแพง"/>
                            <List img={DeviceIMG} head="ความหลากหลาย" body="เลือกใช้งานได้บนทุกอุปกรณ์ที่คุณสะดวก"/>
                        </Row>
                      
                    </div>
                </div>

            )
        }
        case "D": {
            return (
                <div className="Section-D color-A" id="cus"style={{width: '100%', height: "50vh", display: "flex", justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
                    <div className='text-box' style={{ width: '100%', textAlign: "center", marginTop: '5rem', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: "40px", wordSpacing: "1rem" }}>{header}</h1>
                    </div>
                    <div style={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                        <div className='text-box' style={{ width: '100%' , textAlign:"center"}}>
                           <p style={{ fontSize: "30px" }}> <span style={{fontSize:"75px"}}>" </span>{body}<span style={{fontSize:"75px"}}> "</span></p>
                        </div>
                    </div>
                </div>

            )
        }
        case "E": {
            return (
                <div className="Section-E color-A" id='contact' style={{width: '100%', height: "100vh", display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div className='text-box' style={{ width: '100%', textAlign: "center", marginTop: '5rem', marginBottom: '5rem' }}>
                        <h1 style={{ fontSize: "40px", wordSpacing: "1rem" }}>{header}</h1>
                    </div>
                    <div style={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                        <div className='text-box' style={{ width: '100%', textAlign: "center" }}>
                            <img src={img1} style={{width:"150px" , height:"150px" , objectFit:"cover" , borderRadius:"100%" , marginBottom:"1rem"}} alt="PIC"/>
                            <p style={{ fontSize: "30px" }}>{body}</p>
                        </div>
                        <div className='text-box' style={{ width: '3px', textAlign: "center" , backgroundColor:"#D1D7E0" , height:"100%" }}>
                        </div>
                        <div className='text-box' style={{ width: '100%', textAlign: "center" }}>
                            <img src={img2} style={{width:"150px" , height:"150px" , objectFit:"cover" , borderRadius:"100%" , marginBottom:"1rem"}} alt="PIC"/>
                            <p style={{ fontSize: "30px" , margin:"0" }}>{body2}</p>
                        </div>
                    </div>
                </div>
            )
        }
        default: {
            return
        }
    }
}

export default Contents
