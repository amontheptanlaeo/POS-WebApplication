import React , { useState } from 'react'
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Input,InputGroup,InputGroupText,InputGroupAddon
} from "reactstrap";
import { Link } from 'react-router-dom'
import '../styles/ModalSell.scss'
function ModalSell({show , onHide , toggle , GoodsPrice}) {


    const [Money, setMoney] = useState(0);
    const [Change, setChange] = useState(0);

    //DB Permission
    const [B1000, setB1000] = useState(3);
    const [B500, setB500] = useState(1);
    const [B100, setB100] = useState(1);
    const [B50, setB50] = useState(10);
    const [B20, setB20] = useState(10);
    const [C10, setC10] = useState(10);
    const [C5, setC5] = useState(20);
    const [C2, setC2] = useState(100);
    const [C1, setC1] = useState(100);  
    const [C50, setC50] = useState(0);
    const [C25, setC25] = useState(0);

    const [modalAlert, setModalAlert] = useState(false);



    


    const onExchange = () => {
  
          var value = Money - GoodsPrice;
          setChange(value)
          console.log("จำนวนเงินที่ต้องทอน: ", value);
          if (value >= 1000) {
            var Pay = Math.floor(value / 1000);
            value = value - Pay * 1000;
            if (Pay > B1000) {
              var ex = Pay - B1000;
              value = value + ex * 1000;
              Pay = B1000;
              setB1000(0);
            } else {
              setB1000(B1000 - Pay);
            }
            console.log("จำนวนแบงค์ 1000: ", Pay);
          }
          if (value >= 500) {
            var Pay = Math.floor(value / 500);
            value = value - Pay * 500;
            if (Pay > B500) {
              var ex = Pay - B500;
              value = value + ex * 500;
              Pay = B500;
              setB500(0);
            } else {
              setB500(B500 - Pay);
            }
            console.log("จำนวนแบงค์ 500: ", Pay);
          }
          if (value >= 100) {
            var Pay = Math.floor(value / 100);
            value = value - Pay * 100;
            if (Pay > B100) {
              var ex = Pay - B100;
              value = value + ex * 100;
              Pay = B100;
              setB100(0);
            } else {
              setB100(B100 - Pay);
            }
            console.log("จำนวนแบงค์ 100: ", Pay);
          }
          if (value >= 50) {
            var Pay = Math.floor(value / 50);
            value = value - Pay * 50;
            if (Pay > B50) {
              var ex = Pay - B50;
              value = value + ex * 50;
              Pay = B50;
              setB50(0);
            } else {
              setB50(B50 - Pay);
            }
            console.log("จำนวนแบงค์ 50: ", Pay);
          }
          if (value >= 20) {
            var Pay = Math.floor(value / 20);
            value = value - Pay * 20;
            if (Pay > B20) {
              var ex = Pay - B20;
              value = value + ex * 20;
              Pay = B20;
              setB20(0);
            } else {
              setB20(B20 - Pay);
            }
            console.log("จำนวนแบงค์ 20: ", Pay);
          }
          if (value >= 10) {
            var Pay = Math.floor(value / 10);
            value = value - Pay * 10;
            if (Pay > C10) {
              var ex = Pay - C10;
              value = value + ex * 10;
              Pay = C10;
              setC10(0);
            } else {
              setB20(C10 - Pay);
            }
            console.log("จำนวนเหรียญ 10: ", Pay);
          }
    
          if (value >= 5) {
            var Pay = Math.floor(value / 5);
            value = value - Pay * 5;
            if (Pay > C5) {
              var ex = Pay - C5;
              value = value + ex * 5;
              Pay = C5;
              setC5(0);
            } else {
              setB20(C5 - Pay);
            }
            console.log("จำนวนเหรียญ 5: ", Pay);
          }
          if (value >= 2) {
            var Pay = Math.floor(value / 2);
            value = value - Pay * 2;
            if (Pay > C2) {
              var ex = Pay - C2;
              value = value + ex * 2;
              Pay = C2;
              setC2(0);
            } else {
              setB20(C2 - Pay);
            }
            console.log("จำนวนเหรียญ 2: ", Pay);
          }
          if (value >= 1) {
            var Pay = Math.floor(value / 1);
            value = value - Pay * 1;
            if (Pay > C1) {
              var ex = Pay - C1;
              value = value + ex * 1;
              Pay = C1;
              setC1(0);
            } else {
              setB20(C1 - Pay);
            }
            console.log("จำนวนเหรียญ 1: ", Pay);
          }
          if (value >= 0.5) {
            var Pay = Math.floor(value / 0.5);
            value = value - Pay * 0.5;
            if (Pay > C1) {
              var ex = Pay - C50;
              value = value + ex * 0.5;
              Pay = C50;
              setC50(0);
            } else {
              setB20(C50 - Pay);
            }
            console.log("จำนวนเหรียญ 25 สตางค์: ", Pay);
          }
          if (value >= 0.25) {
            var Pay = Math.floor(value / 0.25);
            value = value - Pay * 0.25;
            if (Pay > C25) {
              var ex = Pay - C25;
              value = value + ex * 0.25;
              Pay = C25;
              setC25(0);
            } else {
              setB20(C25 - Pay);
            }
            console.log("จำนวนเหรียญ 25 สตางค์: ", Pay);
          }
        
    }

    return (
      <>
      <Modal isOpen={show} toggle={toggle} className='testModal' centered>
            <ModalHeader toggle={toggle}>หน้าต่างชำระ</ModalHeader>
            <ModalBody>
                <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'flex-start'}}>
                    <div style={{width:'100%'}}>
                        <h4>ยอดชำระ</h4>
                        <div className="CasheerBoxSell" >
                            <div className="TotalBox">
                                <p>{GoodsPrice.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <h4>จำนวนเงิน</h4>
                    <Input value={Money} onChange={(e)=>setMoney(e.target.value === '' ? 0:parseFloat(e.target.value))}/>
                    <div style={{marginTop:'1rem' ,display:'flex' ,flexWrap:'wrap'}}>
                      <div className="RecieveMoney" style={{width:'100%'}} onClick={()=>{
                              setMoney(GoodsPrice)
                              }}>ชำระพอดี
                        </div>
                    </div>
                    <div style={{ borderTop: "2px solid rgba(163, 163, 163, 0.41)", width:'100%' , marginTop:'1rem'}}></div>
                    <div style={{marginTop:'1rem' ,display:'flex' ,flexWrap:'wrap'}}>
                        <div className="RecieveMoney" onClick={()=>{
                            setMoney(Money+1000)
                            }}>1000</div>
                        <div className="RecieveMoney" onClick={()=>{
                            setMoney(Money+500)
                            }}>500</div>
                        <div className="RecieveMoney" onClick={()=>{
                            setMoney(Money+100)
                            }}>100</div>
                        <div className="RecieveMoney" onClick={()=>{
                            setMoney(Money+50)
                            }}>50</div>
                        <div className="RecieveMoney" onClick={()=>{
                            setMoney(Money+20)
                            }}>20</div>
                        <div className="RecieveMoney" onClick={()=>{
                            setMoney(Money+10)
                            }}>10</div>
                        <div className="RecieveMoney" onClick={()=>{
                            setMoney(Money+5)
                            }}>5</div>
                        <div className="RecieveMoney" onClick={()=>{
                            setMoney(Money+2)
                            }}>2</div>
                        <div className="RecieveMoney" onClick={()=>{
                            setMoney(Money+1)
                            }}>1</div>
                        <div className="RecieveMoney" onClick={()=>{
                            setMoney(Money+0.5)
                            }}>0.5</div>
                        <div className="RecieveMoney" onClick={()=>{
                            setMoney(Money+0.25)
                            }}>0.25</div>
                    </div>
                    <div style={{width:'100%' , marginTop:'1rem'}}>
                        <h4>ยอดทอน</h4>
                        <div className="CasheerBoxSell" >
                            <div className="TotalBox" style={{color:'red'}}>
                                <p>{Change.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </ModalBody>
            <ModalFooter>
            <Button color="success"  onClick={()=>{
              if(true){
                setModalAlert(!modalAlert)
              }else{
                onExchange()
              }
               // toggle()
                }}>ชำระเงิน</Button>{' '}
            <Button color="danger" onClick={toggle}>ยกเลิก</Button>
            </ModalFooter>
        </Modal>

        <Modal isOpen={modalAlert} toggle={()=>setModalAlert(!modalAlert)} className='testModal' centered>
            <ModalHeader  toggle={()=>setModalAlert(!modalAlert)}>เงินทอนหมด</ModalHeader>
            <ModalBody>
              <h1>เบิกเงินทอนก่อน</h1>
            </ModalBody>
            <ModalFooter>
            <Link to='/Withdraw'> <Button color="warning"  onClick={()=>{
               setModalAlert(!modalAlert)
                }}>เบิกเงินทอน</Button></Link>
            </ModalFooter>
        </Modal>


      </>
        
    )
}

export default ModalSell
