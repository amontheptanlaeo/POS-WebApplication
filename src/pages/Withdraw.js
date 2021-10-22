import React , {useState , useEffect}  from 'react'
import {
    Row,
    Col,
    Button
} from "reactstrap";
import BlankSide from '../components/BlankSide';
import { motion } from 'framer-motion';
import ListMoney from '../components/ListMoney'
import { Container } from 'react-bootstrap';
import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
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

function Withdraw() {
    const [total,setTotal] = useState(0)

  

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

    const [CentralB, setCentralB] = useState([]);

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
    
    // const onRecommend = async (e) => {
    //   e.preventDefault();
    //   setB1000Add(0);
    //   setB500Add(0);
    //   setB100Add(0);
    //   setB50Add(0);
    //   setB20Add(0);
    //   setC10Add(0);
    //   setC5Add(0);
    //   setC2Add(0);
    //   setC1Add(0);
    //   setC50Add(0);
    //   setC25Add(0);

    //   total1000 = 0
    //   total500 = 0
    //   total100 = 0
    //   total50 = 0
    //   total20 = 0
    //   total10 = 0
    //   total5 = 0
    //   total2 = 0
    //   total1 = 0
    //   totalC50 = 0
    //   totalC25 = 0

    //   axios({
    //     method: "POST",
    //     url: "https://posappserver.herokuapp.com/getmoneycenter",
    //     data: {
    //       Branch_ID: localStorage.getItem('Branch_ID'),
    //       Store_ID: localStorage.getItem('Store_ID'),
    //     },
    //   }).then((resp) => {
    //     console.log("resp", resp);
    //     var checktotal = resp.data[0].MoneyTotal;
    //     setTotalMoneyDB(checktotal);
    //     var total =
    //       B1000 * 1000 +
    //       B500 * 500 +
    //       B100 * 100 +
    //       B50 * 50 +
    //       B20 * 20 +
    //       C10 * 10 +
    //       C5 * 5 +
    //       C2 * 2 +
    //       C1 * 1 +
    //       C50 * 0.5 +
    //       C25 * 0.25;
    //     if (Money_Today <= checktotal) {
    //       var value = Money_Today;
    //       console.log("จำนวนเงินที่ต้องทอน: ", value);
    //       if (value >= 1000) {
    //         var Pay = Math.floor(value / 1000);
    //         value = value - Pay * 1000;
    //         if (Pay > resp.data[0].B1000) {
    //           var ex = Pay - resp.data[0].B1000;
    //           value = value + ex * 1000;
    //           Pay = resp.data[0].B1000;
    //           setB1000(0);
    //         } else {
    //           setB1000(resp.data[0].B1000 - Pay);
    //         }
    //         setB1000Add(Pay);
    //         console.log("จำนวนแบงค์ 1000: ", Pay);
    //       }
    //       if (value >= 500) {
    //         var Pay = Math.floor(value / 500);
    //         value = value - Pay * 500;
    //         if (Pay > resp.data[0].B500) {
    //           var ex = Pay - resp.data[0].B500;
    //           value = value + ex * 500;
    //           Pay = resp.data[0].B500;
    //           setB500(0);
    //         } else {
    //           setB500(resp.data[0].B500 - Pay);
    //         }
    //         setB500Add(Pay);
    //         console.log("จำนวนแบงค์ 500: ", Pay);
    //       }
    //       if (value >= 100) {
    //         var Pay = Math.floor(value / 100);
    //         value = value - Pay * 100;
    //         if (Pay > resp.data[0].B100) {
    //           var ex = Pay - resp.data[0].B100;
    //           value = value + ex * 100;
    //           Pay = resp.data[0].B100;
    //           setB100(0);
    //         } else {
    //           setB100(resp.data[0].B100 - Pay);
    //         }
    //         setB100Add(Pay);
    //         console.log("จำนวนแบงค์ 100: ", Pay);
    //       }
    //       if (value >= 50) {
    //         var Pay = Math.floor(value / 50);
    //         value = value - Pay * 50;
    //         if (Pay > resp.data[0].B50) {
    //           var ex = Pay - resp.data[0].B50;
    //           value = value + ex * 50;
    //           Pay = resp.data[0].B50;
    //           setB50(0);
    //         } else {
    //           setB50(resp.data[0].B50 - Pay);
    //         }
    //         setB50Add(Pay);
    //         console.log("จำนวนแบงค์ 50: ", Pay);
    //       }
    //       if (value >= 20) {
    //         var Pay = Math.floor(value / 20);
    //         value = value - Pay * 20;
    //         if (Pay > resp.data[0].B20) {
    //           var ex = Pay - resp.data[0].B20;
    //           value = value + ex * 20;
    //           Pay = resp.data[0].B20;
    //           setB20(0);
    //         } else {
    //           setB20(resp.data[0].B20 - Pay);
    //         }
    //         setB20Add(Pay);
    //         console.log("จำนวนแบงค์ 20: ", Pay);
    //       }
    //       if (value >= 10) {
    //         var Pay = Math.floor(value / 10);
    //         value = value - Pay * 10;
    //         if (Pay > resp.data[0].C10) {
    //           var ex = Pay - resp.data[0].C10;
    //           value = value + ex * 10;
    //           Pay = resp.data[0].C10;
    //           setC10(0);
    //         } else {
    //           setC10(resp.data[0].C10 - Pay);
    //         }
    //         setC10Add(Pay);
    //         console.log("จำนวนเหรียญ 10: ", Pay);
    //       }
  
    //       if (value >= 5) {
    //         var Pay = Math.floor(value / 5);
    //         value = value - Pay * 5;
    //         if (Pay > resp.data[0].C5) {
    //           var ex = Pay - resp.data[0].C5;
    //           value = value + ex * 5;
    //           Pay = resp.data[0].C5;
    //           setC5(0);
    //         } else {
    //           setC5(resp.data[0].C5 - Pay);
    //         }
    //         setC5Add(Pay);
    //         console.log("จำนวนเหรียญ 5: ", Pay);
    //       }
    //       if (value >= 2) {
    //         var Pay = Math.floor(value / 2);
    //         value = value - Pay * 2;
    //         if (Pay > resp.data[0].C2) {
    //           var ex = Pay - resp.data[0].C2;
    //           value = value + ex * 2;
    //           Pay = resp.data[0].C2;
    //           setC2(0);
    //         } else {
    //           setC2(resp.data[0].C2 - Pay);
    //         }
    //         setC2Add(Pay);
    //         console.log("จำนวนเหรียญ 2: ", Pay);
    //       }
    //       if (value >= 1) {
    //         var Pay = Math.floor(value / 1);
    //         value = value - Pay * 1;
    //         if (Pay > resp.data[0].C1) {
    //           var ex = Pay - resp.data[0].C1;
    //           value = value + ex * 1;
    //           Pay = resp.data[0].C1;
    //           setC1(0);
    //         } else {
    //           setC1(resp.data[0].C1 - Pay);
    //         }
    //         setC1Add(Pay);
    //         console.log("จำนวนเหรียญ 1: ", Pay);
    //       }
    //       if (value >= 0.5) {
    //         var Pay = Math.floor(value / 0.5);
    //         value = value - Pay * 0.5;
    //         if (Pay > resp.data[0].C1) {
    //           var ex = Pay - resp.data[0].C50;
    //           value = value + ex * 0.5;
    //           Pay = resp.data[0].C50;
    //           setC50(0);
    //         } else {
    //           setC50(resp.data[0].C50 - Pay);
    //         }
    //         setC50Add(Pay);
    //         console.log("จำนวนเหรียญ 25 สตางค์: ", Pay);
    //       }
    //       if (value >= 0.25) {
    //         var Pay = Math.floor(value / 0.25);
    //         value = value - Pay * 0.25;
    //         if (Pay > resp.data[0].C25) {
    //           var ex = Pay - resp.data[0].C25;
    //           value = value + ex * 0.25;
    //           Pay = resp.data[0].C25;
    //           setC25(0);
    //         } else {
    //           setC25(resp.data[0].C25 - Pay);
    //         }
    //         setC25Add(Pay);
    //         console.log("จำนวนเหรียญ 25 สตางค์: ", Pay);
    //       }
    //     } else {
    //         alert("ยอดเงินไม่พอจ่าย");
          
    //     }
    //   });
    // };
  
    const onCheckMoney = async () => {
      if(Money_Today <= 0) return alert('ระบุให้ถูกต้อง')
      axios({
        method: "POST",
        url: "https://posappserver.herokuapp.com/getmoneycenter",
        data: {
            Branch_ID: localStorage.getItem('Branch_ID'),
            Store_ID: localStorage.getItem('Store_ID'),
          
        },
      }).then((resp) => {
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
            alert("ยอดจำนวนแบงค์ไม่พอ");
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
      axios({
        method: "POST",
        url: "https://posappserver.herokuapp.com/getmoneycenter",
        data: {
            Branch_ID: localStorage.getItem('Branch_ID'),
            Store_ID: localStorage.getItem('Store_ID'),
        },
      }).then((resp) => {
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
  
          console.log("ยอดเงิน", total);
          if (total == Money_Today) {
            alert("ยอดเงินถูกต้อง");
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
              url: "https://posappserver.herokuapp.com/setmoney",
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
              },
            }).then((res) => {
              console.log(res);
            });
          } else {
            alert("ยอดเงินไม่ถูกต้อง");
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
          alert("ยอดเงินไม่พอจ่าย");
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
                <h4 style={{textAlign:'center' , marginBottom:'3rem'}}>เบิกเงินทอน</h4>

                   {/* <div style={{display:'flex' , flexWrap:'wrap' , justifyContent:'center'}}>
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
                </div>  */}
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
                  <div style={{display:'flex' ,justifyContent:'flex-start' , alignItems:'center' , flexWrap:'wrap'}}>
                    <p style={{marginRight:'1rem'}}>[ แบงค์ 1000: {CentralB.B1000} ]</p>
                    <p style={{marginRight:'1rem'}}>[ แบงค์ 500: {CentralB.B500} ]</p>
                    <p style={{marginRight:'1rem'}}>[ แบงค์ 100: {CentralB.B100} ]</p>
                    <p style={{marginRight:'1rem'}}>[ แบงค์ 50: {CentralB.B50} ]</p>
                    <p style={{marginRight:'1rem'}}>[ แบงค์ 20: {CentralB.B20} ]</p>
                    <p style={{marginRight:'1rem'}}>[ เหรียญ 10: {CentralB.C10} ]</p>
                    <p style={{marginRight:'1rem'}}>[ เหรียญ 5: {CentralB.C5} ]</p>
                    <p style={{marginRight:'1rem'}}>[ เหรียญ 2: {CentralB.C2} ]</p>
                    <p style={{marginRight:'1rem'}}>[ เหรียญ 1: {CentralB.C1} ]</p>
                    <p style={{marginRight:'1rem'}}>[ เหรียญ 50 สตางค์: {CentralB.B50} ]</p>
                    <p>[ เหรียญ 25 สตางค์: {CentralB.C25} ]</p>
                  </div>
                </div>
               
                {/* <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => onRecommend(e)}
                >
                  เซ็ตยอดเงินแนะนำ
                </Button> */}

              
                </Container>
                
            </Col>
        </Row>
        </motion.div>
    )
}

export default Withdraw
