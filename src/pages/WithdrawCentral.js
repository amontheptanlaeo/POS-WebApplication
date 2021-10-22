import React , {useState}  from 'react'
import {
    Button,
    Row,
    Col
} from "reactstrap";
import BlankSide from '../components/BlankSide';
import { motion } from 'framer-motion';
import ListMoney from '../components/ListMoney'
import { Container } from 'react-bootstrap';

import TextField from "@material-ui/core/TextField";
import axios from "axios";


var total1000 = 0
var total500 = 0
var total100 = 0
var total50 = 0
var total20 = 0
var total10 = 0
var total5 = 0
var total2 = 0
var total1 = 0
var totalC50 = 0
var totalC25 = 0

function WithdrawCentral() {

    

    const [Money_Today, setMoney_Today] = useState(0);
    const [B1000, setB1000] = useState(0);
    const [B500, setB500] = useState(0);
    const [B100, setB100] = useState(0);
    const [B50, setB50] = useState(0);
    const [B20, setB20] = useState(0);
    const [C10, setC10] = useState(0);
    const [C5, setC5] = useState(0);
    const [C2, setC2] = useState(0);
    const [C1, setC1] = useState(0);
    const [C50, setC50] = useState(0);
    const [C25, setC25] = useState(0);

  if(localStorage.getItem('Permistion') != 0 &&  localStorage.getItem('Permistion') != 1) return window.location.href = 'http://localhost:3000/'
    
  
    const onCheckMoney = (e) => {
      e.preventDefault();
      var total =
        B1000 * 1000 +
        B500 * 500 +
        B100 * 100 +
        B50 * 50 +
        B20 * 20 +
        C10 * 10 +
        C5 * 5 +
        C2 * 2 +
        C1 * 1 +
        C50 * 0.5 +
        C25 * 0.25;
  
      console.log("ยอดเงิน", total);
      if (Money_Today > 0) {
        var currentdate = new Date();
            var datetime =
              currentdate.getFullYear() +
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
                : currentdate.getSeconds());
            var GenDate =
              currentdate.getFullYear().toString() +
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
                : currentdate.getSeconds()).toString() +
              (currentdate.getMilliseconds() < 100
                ? "00" + currentdate.getMilliseconds()
                : currentdate.getMilliseconds()).toString();
        alert("ยอดเงินถูกต้อง");
        axios({
          method: "POST",
          url: "https://posappserver.herokuapp.com/setmoneycenter",
          data: {
            Branch_ID:localStorage.getItem('Branch_ID'),
            Store_ID:localStorage.getItem('Store_ID'),
            DateAdd:datetime,
            B1000:B1000,
            B500:B500,
            B100:B100,
            B50:B50,
            B20:B20,
            C10:C10,
            C5:C5,
            C2:C2,
            C1:C1,
            C50:C50,
            C25:C25,
            MoneyTotal:Money_Today,
            ID:localStorage.getItem('ID'),
            GenDate:GenDate
          },
        });
      } else {
        alert("ยอดเงินไม่ถูกต้อง");
        total1000 = 0
        total500 = 0
        total100 = 0
        total50 = 0
        total20 = 0
        total10 = 0
        total5 = 0
        total2 = 0
        total1 = 0
        totalC50 = 0
        totalC25 = 0
        setMoney_Today(0);
        setB1000(0);
        setB500(0);
        setB100(0);
        setB50(0);
        setB20(0);
        setC10(0);
        setC5(0);
        setC2(0);
        setC1(0);
        setC50(0);
        setC25(0);
      }
    };
  
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  


    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}} className="content">
        <Row>
            <Col xs={0} sm={0} md={3}>
                
            </Col>
            <Col  xs={12} sm={12} md={9} style={{paddingTop:'2rem' , display:'flex' , flexWrap:'wrap' , justifyContent:'center'}}>
                <Container>
                <h4 style={{textAlign:'center' , marginBottom:'3rem'}}>ถอนเงินกองกลาง</h4>
                 <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , flexDirection:'column'}}>
                  <h4 style={{marginBottom:'2rem'}}>{numberWithCommas(Money_Today)} บาท</h4>
                  <div style={{display:'flex' , justifyContent:'space-between' , alignItems:'center' , flexWrap:'wrap' , width:'700px'}}>
                    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginBottom:'0.5rem'}}>
                      <img src='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-09.jpg' alt='1000' width='120' style={{marginRight:'0.5rem'}}/>
                      <TextField type='number'
                        id="standard-basic"
                        label="จำนวนแบงค์ 1000 บาท"
                        onChange={(e) => {
                          if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                          setB1000(e.target.value)
                          total1000 = e.target.value*1000
                          setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                          }}
                        value={B1000}
                      />
                    </div>
                    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginBottom:'0.5rem'}}>
                    <img src='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-07.jpg' alt='1000' width='120' style={{marginRight:'0.5rem'}}/>
                       <TextField type='number'
                      id="standard-basic"
                      label="จำนวนแบงค์ 500 บาท"
                      onChange={(e) => {
                        if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                        setB500(e.target.value)
                        total500 = e.target.value*500
                        setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                      
                      }}
                      value={B500}
                    />
                    </div>
                    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginBottom:'0.5rem'}}>
                    <img src='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-06.jpg' alt='1000' width='120' style={{marginRight:'0.5rem'}}/>
                       <TextField type='number'
                      id="standard-basic"
                      label="จำนวนแบงค์ 100 บาท"
                      onChange={(e) =>{ 
                        if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                        setB100(e.target.value)
                        total100 = e.target.value*100
                        setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                      }}
                      value={B100}
                      />
                    </div>
                    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginBottom:'0.5rem'}}>
                    <img src='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-04.jpg' alt='1000' width='120' style={{marginRight:'0.5rem'}}/>

                       <TextField type='number'
                      id="standard-basic"
                      label="จำนวนแบงค์ 50 บาท"
                      onChange={(e) => {
                        if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                        setB50(e.target.value)
                        total50 = e.target.value*50
                        setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                      }}
                      value={B50}
                      />
                    </div>
                    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginBottom:'0.5rem'}}>
                    <img src='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-02.jpg' alt='1000' width='120' style={{marginRight:'0.5rem'}}/>

                      <TextField type='number'
                      id="standard-basic"
                      label="จำนวนแบงค์ 20 บาท"
                      onChange={(e) => {
                        if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                        setB20(e.target.value)
                        total20 = e.target.value*20
                        setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                      }}
                      value={B20}
                      />
                    </div>

                  </div>
                  {/* เหรียญ */}
                  <div style={{display:'flex' , justifyContent:'space-around' , alignItems:'center' , flexWrap:'wrap' , width:'700px' , marginTop:'2rem'}}>
                  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/th/0/03/10_baht_reverse_%282008%29.png" alt='10' width='60'/>
                    <TextField type='number'
                    id="standard-basic"
                    label="จำนวนเหรียญ 10 บาท"
                    onChange={(e) => {
                      if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                      setC10(e.target.value)
                      total10 = e.target.value*10
                      setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                    }}
                    value={C10}
                  />
                  </div>
                  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                  <img src="https://upload.wikimedia.org/wikipedia/th/3/34/5_baht_reverse_%282008%29.png" alt='10' width='60'/>
                    <TextField type='number'
                    id="standard-basic"
                    label="จำนวนเหรียญ 5 บาท"
                    onChange={(e) => {
                      if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                      setC5(e.target.value)
                      total5 = e.target.value*5
                      setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                    }}
                    value={C5}
                  />
                  </div>
                  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                  <img src="https://upload.wikimedia.org/wikipedia/th/3/37/2_baht_Reverse_2009.png" alt='10' width='60'/>
                    <TextField type='number'
                    id="standard-basic"
                    label="จำนวนเหรียญ 2 บาท"
                    onChange={(e) => {
                      if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                      setC2(e.target.value)
                      total2 = e.target.value*2
                      setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                    }}
                    value={C2}
                  />
                  </div>
                  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                  <img src="http://topicstock.pantip.com/wahkor/topicstock/2009/06/X8002241/X8002241-0.png" alt='10' width='60'/>
                    <TextField type='number'
                    id="standard-basic"
                    label="จำนวนเหรียญ 1 บาท"
                    onChange={(e) => {
                      if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                      setC1(e.target.value)
                      total1 = e.target.value*1
                      setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                    }}
                    value={C1}
                  />
                  </div>
                  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                  <img src="https://upload.wikimedia.org/wikipedia/th/thumb/7/78/50_satang_reverse.png/150px-50_satang_reverse.png" alt='10' width='60'/>

                      <TextField type='number'
                    id="standard-basic"
                    label="จำนวนเหรียญ 50 สตางค์"
                    onChange={(e) => {
                      if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                      setC50(e.target.value)
                      totalC50 = e.target.value*0.5
                      setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                    }}
                    value={C50}
                  />
                  </div>
                  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                  <img src="https://upload.wikimedia.org/wikipedia/th/thumb/a/a8/25_satang_reverse.png/150px-25_satang_reverse.png" alt='10' width='60'/>
                    <TextField
                      style={{fontSize:'50px'}}
                      id="standard-basic"
                      label="จำนวนเหรียญ 25 สตางค์"
                      type='number'
                      onChange={(e) => {
                        if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                        setC25(e.target.value)
                        totalC25 = e.target.value*0.25
                        setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                      }}
                      value={C25}
                    />
                  </div>
                  </div>
                </div>
                <div style={{width:'100%' , display:'flex' , justifyContent:'center' , alignItems:'center' , marginTop:'2rem'}}>
                  <Button
                    style={{marginRight:'2rem'}}
                    color="warning"
                    onClick={(e) => onCheckMoney(e)}
                  >
                    ถอนเงินกองกลาง
                  </Button>
                </div>

                </Container>
                
            </Col>
        </Row>
        </motion.div>
    )
}

export default WithdrawCentral
