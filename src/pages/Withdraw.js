import React , {useState}  from 'react'
import {
    Button,
    Row,
    Col
} from "reactstrap";
import BlankSide from '../components/BlankSide';
import { motion } from 'framer-motion';
import ListMoney from '../components/ListMoney'
function Withdraw() {
    const [total,setTotal] = useState(0)
    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}} className="content">
        <Row>
            <Col xs={0} sm={0} md={3}>
                <BlankSide/>
            </Col>
            <Col  xs={12} sm={12} md={9} style={{paddingTop:'2rem' , display:'flex' , flexWrap:'wrap' , justifyContent:'center'}}>
                <div style={{display:'flex' , flexWrap:'wrap' , justifyContent:'center'}}>
                    <ListMoney moneyIMG='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-09.jpg' moneyValue='1000' temptest={total} test={setTotal}/>
                    <ListMoney moneyIMG='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-07.jpg' moneyValue='500' temptest={total} test={setTotal}/>
                    <ListMoney moneyIMG='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-06.jpg' moneyValue='100'temptest={total} test={setTotal}/>
                    <ListMoney moneyIMG='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-04.jpg' moneyValue='50'temptest={total} test={setTotal}/>
                    <ListMoney moneyIMG='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-02.jpg' moneyValue='20'temptest={total} test={setTotal}/>
                </div>
                <div style={{display:'flex' , flexWrap:'wrap' , justifyContent:'center'}}>
                    <ListMoney moneyIMG='https://upload.wikimedia.org/wikipedia/th/0/03/10_baht_reverse_%282008%29.png' moneyValue='10' temptest={total} test={setTotal}/>
                    <ListMoney moneyIMG='https://upload.wikimedia.org/wikipedia/th/3/34/5_baht_reverse_%282008%29.png' moneyValue='5' temptest={total} test={setTotal}/>
                    <ListMoney moneyIMG='https://upload.wikimedia.org/wikipedia/th/3/37/2_baht_Reverse_2009.png' moneyValue='2' temptest={total} test={setTotal}/>
                    <ListMoney moneyIMG='http://topicstock.pantip.com/wahkor/topicstock/2009/06/X8002241/X8002241-0.png' moneyValue='1' temptest={total} test={setTotal}/>
                </div>
                <div style={{display:'flex' , flexDirection:'column', flexWrap:'wrap' , justifyContent:'center' , alignItems:'center' , width:'100%' , backgroundColor:'#E2E1E5' , height:'400px' , margin:'2rem' , padding:'2rem' , borderRadius:'2rem'}}>
                   <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , flexDirection:'column'}}>
                       <h4>ยอดรวม</h4>
                       <p>{total} บาท</p>
                   </div>
                   <div>
                       <Button onClick={()=>console.log(total)}color='success'>ยืนยัน</Button>
                   </div>
                </div>
            </Col>
        </Row>
        </motion.div>
    )
}

export default Withdraw
