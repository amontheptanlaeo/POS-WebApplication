import React , {useState , useEffect}  from 'react'
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
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Input
} from "reactstrap";


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
    const [B1000Add, setB1000Add] = useState(0);
    const [B500Add, setB500Add] = useState(0);
    const [B100Add, setB100Add] = useState(0);
    const [B50Add, setB50Add] = useState(0);
    const [B20Add, setB20Add] = useState(0);
    const [C10Add, setC10Add] = useState(0);
    const [C5Add, setC5Add] = useState(0);
    const [C2Add, setC2Add] = useState(0);
    const [C1Add, setC1Add] = useState(0);
    const [C50Add, setC50Add] = useState(0);
    const [C25Add, setC25Add] = useState(0);
    const [Store_Name, setStore_Name] = useState("");
    const [CheckBtn, setCheckBtn] = useState(false);
    const [Status, setStatus] = useState('');
    const [CentralB, setCentralB] = useState([]);
    const [modalC, setModalC] = useState(false);
    const toggle = () => setModalC(!modalC);

    useEffect(async() => {
          axios({
            method: "POST",
            url: "https://posappserver.herokuapp.com/getmoneycenter",
            data: {
                Branch_ID: localStorage.getItem('Branch_ID'),
                Store_ID: localStorage.getItem('Store_ID'),
              
            },
          }).then((resp) => {
            setCentralB(resp.data[0])})
        }, [])

  if(localStorage.getItem('Permistion') != 0 &&  localStorage.getItem('Permistion') != 1) return window.location.href = 'http://localhost:3000/'
    
  
  const onCheckMoney = async () => {
    if(Money_Today <= 0) return setModalC(!modalC)
    axios({
      method: "POST",
      url: "https://posappserver.herokuapp.com/getmoneycenter",
      data: {
          Branch_ID: localStorage.getItem('Branch_ID'),
          Store_ID: localStorage.getItem('Store_ID'),
        
      },
    }).then((resp) => {
      if(resp.data[0] == null) return setModalC(!modalC)
      var checktotal = resp.data[0].MoneyTotal;
      var total =
        B1000Add * 1000 +
        B500Add * 500 +
        B100Add * 100 +
        B50Add * 50 +
        B20Add * 20 +
        C10Add * 10 +
        C5Add * 5 +
        C2Add * 2 +
        C1Add * 1 +
        C50Add * 0.5 +
        C25Add * 0.25;
        setMoney_Today(total)
        
      
      if (Money_Today <= checktotal && total == Money_Today) {
        if (
          resp.data[0].B1000 >= B1000Add &&
          resp.data[0].B500 >= B500Add &&
          resp.data[0].B100 >= B100Add &&
          resp.data[0].B50 >= B50Add &&
          resp.data[0].B20 >= B20Add &&
          resp.data[0].C10 >= C10Add &&
          resp.data[0].C5 >= C5Add &&
          resp.data[0].C2 >= C2Add &&
          resp.data[0].C1 >= C1Add &&
          resp.data[0].C50 >= C50Add &&
          resp.data[0].C25 >= C25Add
        ) {
          alert("ยอดเงินพอจ่าย");
          setCheckBtn(true);
        } else {
          setModalC(!modalC)
          setMoney_Today(0);
          setB1000Add(0);
          setB500Add(0);
          setB100Add(0);
          setB50Add(0);
          setB20Add(0);
          setC10Add(0);
          setC5Add(0);
          setC2Add(0);
          setC1Add(0);
          setC50Add(0);
          setC25Add(0);
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
        }
      } else {
        alert("False");
        setMoney_Today(0);
        setB1000Add(0);
        setB500Add(0);
        setB100Add(0);
        setB50Add(0);
        setB20Add(0);
        setC10Add(0);
        setC5Add(0);
        setC2Add(0);
        setC1Add(0);
        setC50Add(0);
        setC25Add(0);
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
      }
    });
  };

  const onSaveMoney = (e) => {
    e.preventDefault();
    if(Status=='') return alert('ระบุเหตุผล')
    axios({
      method: "POST",
      url: "https://posappserver.herokuapp.com/getmoneycenter",
      data: {
          Branch_ID: localStorage.getItem('Branch_ID'),
          Store_ID: localStorage.getItem('Store_ID'),
      },
    }).then((resp) => {
      if(resp.data[0] == null) return setModalC(!modalC)
      var checktotal = resp.data[0].MoneyTotal;
      if (
        Money_Today <= checktotal &&
        resp.data[0].B1000 >= B1000Add &&
        resp.data[0].B500 >= B500Add &&
        resp.data[0].B100 >= B100Add &&
        resp.data[0].B50 >= B50Add &&
        resp.data[0].B20 >= B20Add &&
        resp.data[0].C10 >= C10Add &&
        resp.data[0].C5 >= C5Add &&
        resp.data[0].C2 >= C2Add &&
        resp.data[0].C1 >= C1Add &&
        resp.data[0].C50 >= C50Add &&
        resp.data[0].C25 >= C25Add
      ) {
        var total =
          B1000Add * 1000 +
          B500Add * 500 +
          B100Add * 100 +
          B50Add * 50 +
          B20Add * 20 +
          C10Add * 10 +
          C5Add * 5 +
          C2Add * 2 +
          C1Add * 1 +
          C50Add * 0.5 +
          C25Add * 0.25;

        if (total == Money_Today) {
          
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
              : currentdate.getMonth() + 1
            ).toString() +
            (currentdate.getDate() < 10
              ? "0" + currentdate.getDate()
              : currentdate.getDate()
            ).toString() +
            (currentdate.getHours() < 10
              ? "0" + currentdate.getHours()
              : currentdate.getHours()
            ).toString() +
            (currentdate.getMinutes() < 10
              ? "0" + currentdate.getMinutes()
              : currentdate.getMinutes()
            ).toString() +
            (currentdate.getSeconds() < 10
              ? "0" + currentdate.getSeconds()
              : currentdate.getSeconds()
            ).toString() +
            (currentdate.getMilliseconds() < 100
              ? "00" + currentdate.getMilliseconds()
              : currentdate.getMilliseconds()
            ).toString();
          axios({
            method: "POST",
            url: "https://posappserver.herokuapp.com/withdrawcentralmoney",
            data: {
              DateAdd: datetime,
              MoneyTotal: Money_Today,
              B1000: B1000Add,
              B500: B500Add,
              B100: B100Add,
              B50: B50Add,
              B20: B20Add,
              C10: C10Add,
              C5: C5Add,
              C2: C2Add,
              C1: C1Add,
              C50: C50Add,
              C25: C25Add,
              ID: localStorage.getItem('ID'),
              Store_ID: localStorage.getItem('Store_ID'),
              Store_Name: Store_Name,
              Branch_ID: localStorage.getItem('Branch_ID'),
              GenDate: GenDate,
              Type_Status: Status
            },
          }).then((res) => {
            alert("ถอนสำเร็จ");
            window.location.reload()
          });
        } else {
          setModalC(!modalC)
          setMoney_Today(0);
          setB1000Add(0);
          setB500Add(0);
          setB100Add(0);
          setB50Add(0);
          setB20Add(0);
          setC10Add(0);
          setC5Add(0);
          setC2Add(0);
          setC1Add(0);
          setC50Add(0);
          setC25Add(0);
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
        }
      } else {
        setModalC(!modalC)
        setMoney_Today(0);
        setB1000Add(0);
        setB500Add(0);
        setB100Add(0);
        setB50Add(0);
        setB20Add(0);
        setC10Add(0);
        setC5Add(0);
        setC2Add(0);
        setC1Add(0);
        setC50Add(0);
        setC25Add(0);
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
      }
    });
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
                          setB1000Add(e.target.value)
                          total1000 = e.target.value*1000
                          setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                          }}
                        value={B1000Add}
                      />
                    </div>
                    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginBottom:'0.5rem'}}>
                    <img src='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-07.jpg' alt='1000' width='120' style={{marginRight:'0.5rem'}}/>
                       <TextField type='number'
                      id="standard-basic"
                      label="จำนวนแบงค์ 500 บาท"
                      onChange={(e) => {
                        if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                        setB500Add(e.target.value)
                        total500 = e.target.value*500
                        setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                      
                      }}
                      value={B500Add}
                    />
                    </div>
                    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginBottom:'0.5rem'}}>
                    <img src='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-06.jpg' alt='1000' width='120' style={{marginRight:'0.5rem'}}/>
                       <TextField type='number'
                      id="standard-basic"
                      label="จำนวนแบงค์ 100 บาท"
                      onChange={(e) =>{ 
                        if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                        setB100Add(e.target.value)
                        total100 = e.target.value*100
                        setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                      }}
                      value={B100Add}
                      />
                    </div>
                    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginBottom:'0.5rem'}}>
                    <img src='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-04.jpg' alt='1000' width='120' style={{marginRight:'0.5rem'}}/>

                       <TextField type='number'
                      id="standard-basic"
                      label="จำนวนแบงค์ 50 บาท"
                      onChange={(e) => {
                        if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                        setB50Add(e.target.value)
                        total50 = e.target.value*50
                        setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                      }}
                      value={B50Add}
                      />
                    </div>
                    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , marginBottom:'0.5rem'}}>
                    <img src='https://lifestyle.campus-star.com/app/uploads/2018/03/thmoney-02.jpg' alt='1000' width='120' style={{marginRight:'0.5rem'}}/>

                      <TextField type='number'
                      id="standard-basic"
                      label="จำนวนแบงค์ 20 บาท"
                      onChange={(e) => {
                        if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                        setB20Add(e.target.value)
                        total20 = e.target.value*20
                        setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                      }}
                      value={B20Add}
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
                      setC10Add(e.target.value)
                      total10 = e.target.value*10
                      setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                    }}
                    value={C10Add}
                  />
                  </div>
                  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                  <img src="https://upload.wikimedia.org/wikipedia/th/3/34/5_baht_reverse_%282008%29.png" alt='10' width='60'/>
                    <TextField type='number'
                    id="standard-basic"
                    label="จำนวนเหรียญ 5 บาท"
                    onChange={(e) => {
                      if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                      setC5Add(e.target.value)
                      total5 = e.target.value*5
                      setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                    }}
                    value={C5Add}
                  />
                  </div>

                  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                  <img src="https://upload.wikimedia.org/wikipedia/th/3/37/2_baht_Reverse_2009.png" alt='10' width='60'/>
                    <TextField type='number'
                    id="standard-basic"
                    label="จำนวนเหรียญ 2 บาท"
                    onChange={(e) => {
                      if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                      setC2Add(e.target.value)
                      total2 = e.target.value*2
                      setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                    }}
                    value={C2Add}
                  />
                  </div>
                  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                  <img src="http://topicstock.pantip.com/wahkor/topicstock/2009/06/X8002241/X8002241-0.png" alt='10' width='60'/>
                    <TextField type='number'
                    id="standard-basic"
                    label="จำนวนเหรียญ 1 บาท"
                    onChange={(e) => {
                      if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                      setC1Add(e.target.value)
                      total1 = e.target.value*1
                      setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                    }}
                    value={C1Add}
                  />
                  </div>
                  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                  <img src="https://upload.wikimedia.org/wikipedia/th/thumb/7/78/50_satang_reverse.png/150px-50_satang_reverse.png" alt='10' width='60'/>

                      <TextField type='number'
                    id="standard-basic"
                    label="จำนวนเหรียญ 50 สตางค์"
                    onChange={(e) => {
                      if(e.target.value<=0 || e.target.value == '') e.target.value = 0
                      setC50Add(e.target.value)
                      totalC50 = e.target.value*0.5
                      setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                    }}
                    value={C50Add}
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
                        setC25Add(e.target.value)
                        totalC25 = e.target.value*0.25
                        setMoney_Today(total1000+total500+total100+total50+total20+total10+total5+total2+total1+totalC50+totalC25)
                      }}
                      value={C25Add}
                    />
                  </div>

                  </div>
                

                </div>
                <div className='mt-3 w-100'>
                  <p style={{margin:'0'}}>เหตุผลการถอน</p>
                  <Input placeholder='ระบุเหตุผลการถอน' onChange={(e)=>setStatus(e.target.value)}/>
                </div>
                <div style={{width:'100%' , display:'flex' , justifyContent:'center' , alignItems:'center' , marginTop:'2rem'}}>
                  <Button
                    style={{marginRight:'2rem'}}
                    color="warning"
                    onClick={() => onCheckMoney()}
                  >
                    ตรวจสอบ
                  </Button>

                  {CheckBtn == true ? (
                      <Button
                        variant="contained"
                        color="success"
                        onClick={(e) => onSaveMoney(e)}
                      >
                        บันทึกเงิน
                      </Button>
                  ) : null}
                </div>
                <div style={{marginTop:'2rem'}}>
                  <h5>ยอดคงเหลือในกองกลาง</h5>
                  {
                    CentralB == null ? <p>เพิ่มกองกลางก่อน</p>:<div style={{display:'flex' ,justifyContent:'flex-start' , alignItems:'center' , flexWrap:'wrap'}}>
                    <p style={{marginRight:'1rem'}}>[ แบงค์ 1000: {CentralB.B1000 ? CentralB.B1000:0} ]</p>
                    <p style={{marginRight:'1rem'}}>[ แบงค์ 500: {CentralB.B500} ]</p>
                    <p style={{marginRight:'1rem'}}>[ แบงค์ 100: {CentralB.B100} ]</p>
                    <p style={{marginRight:'1rem'}}>[ แบงค์ 50: {CentralB.B50} ]</p>
                    <p style={{marginRight:'1rem'}}>[ แบงค์ 20: {CentralB.B20} ]</p>
                    <p style={{marginRight:'1rem'}}>[ เหรียญ 10: {CentralB.C10} ]</p>
                    <p style={{marginRight:'1rem'}}>[ เหรียญ 5: {CentralB.C5} ]</p>
                    <p style={{marginRight:'1rem'}}>[ เหรียญ 2: {CentralB.C2} ]</p>
                    <p style={{marginRight:'1rem'}}>[ เหรียญ 1: {CentralB.C1} ]</p>
                    <p style={{marginRight:'1rem'}}>[ เหรียญ 50 สตางค์: {CentralB.C50} ]</p>
                    <p>[ เหรียญ 25 สตางค์: {CentralB.C25} ]</p>
                  </div>
                  }
                  
                </div>

                </Container>
                
            </Col>
        </Row>

        <Modal isOpen={modalC} toggle={toggle} className='testModal' centered>
            <ModalHeader toggle={toggle}>
                แจ้งเตือน
            </ModalHeader>
            <ModalBody>
              <h5>เงินกองกลางไม่เพียงพอ</h5>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={()=>{
                    toggle()
                }}>ยกเลิก</Button>
            </ModalFooter>
    </Modal>


        </motion.div>
    )
}

export default WithdrawCentral
