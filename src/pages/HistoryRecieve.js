import React, { useState, useRef , useEffect } from 'react';
import { Button, Form , Alert , Row , Col , Container } from 'react-bootstrap';
import ReactToPrint , { useReactToPrint } from 'react-to-print';
import { Link, useParams } from "react-router-dom";
import img from '../images/Welcome.svg'
import { motion } from "framer-motion"
import axios from 'axios';
import RecieveReport from '../components/RecieveReport'

function HistoryRecieve() {
    let { bill } = useParams();
    const [data,setData] = useState([])
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

      useEffect(async()=>{
        const res = await axios.post('https://posappserver.herokuapp.com/getgoodshistorybill',{
            Goods_History_ID: bill
        })
        console.log(res.data)
        setData(res.data)
      },[])

    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
            <Row>
            <Col md={3} lg={3} style={{height:'100%'}}>

            </Col>
            <Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
              <Container>
                <div style={{display:'flex' , width:'100%' , justifyContent:'space-between' , alignItems:'center'}}>
                    <h1>ประวัติการรับสินค้า</h1>
                    <button className="btn btn-primary" onClick={handlePrint}>พิมพ์บิล</button>
                </div>
                
                <div>
                    <div ref={componentRef}>
                        <RecieveReport data={data} bill={bill}/>
                    </div>
                </div>
          
                
              </Container>
               
            </Col>
        </Row>
                
    </motion.div>
    )
}

export default HistoryRecieve
