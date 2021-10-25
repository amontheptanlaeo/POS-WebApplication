import React , { useState , useEffect} from 'react'
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Input
} from "reactstrap";
import axios from 'axios';

function ModalAddRecieve({show , onHide , toggle , data , GoodsPrice , setGoodsPrice , setCart }) {

    const [count,setCount] = useState(1)
    const [Price,setPrice] = useState(data.Oldprice ? JSON.parse(data.Oldprice):1)
    const [Cost,setCost] = useState(1)

    useEffect(() => {
        setPrice(data.Oldprice ? JSON.parse(data.Oldprice):1)
        setCount(1)
        setCost(1)
    }, [data])

    const IncressMent = () => {
        setCount(count+1)
    }
    const DecressMent = () => {
        if(count <= 1) return
        setCount(count-1)
    }

    const AddNumberGoods = (e) =>{
        if(e.target.value == ''){
            return setCount(0)
        }
        setCount(parseFloat(e.target.value))
    }

    const AddRecieveBuffer = async() => {
        if(count <= 0) return alert('จำนวนผิดพลาด')
        const currentdate = new Date();
    const dateOnAdd = currentdate.getFullYear() +
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
      : currentdate.getSeconds())

    

        await axios.post('https://posappserver.herokuapp.com/postbuffer-cart-recive',{
            Branch_ID: localStorage.getItem('Branch_ID'),
            ID: localStorage.getItem('ID'),
            Store_ID: localStorage.getItem('Store_ID'),
            Goods_ID: data.barcode,
            Count_Recive: count,
            Cost_Unit: Cost,
            Price: Price,
            DateAdd: dateOnAdd
          })
          
    }

    return (
        <Modal isOpen={show} toggle={toggle} className='testModal' centered>
            <ModalHeader toggle={toggle}>
                {data.name}
            </ModalHeader>
            <ModalBody>
                <div style={{display:'flex' , width:'100%' , justifyContent:'center' , alignItems:'center'}}>
                    <h5> เพิ่ม</h5>
                </div>
                <div style={{display:'flex' , width:'100%' , justifyContent:'center' , alignItems:'center' , margin:'1rem 0'}}>
                    <img  style={{objectFit:'contain' , height:'200px' ,width:'200px'}} src={data.img} alt='product'/>
                </div>
                <div style={{display:'flex' , width:'100%'  , justifyContent:'center' , alignItems:'center' , marginBottom:'1rem'}}>
                    <div style={{width:'150px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                        <p style={{ margin:'0'}}>ราคาทุน/หน่วย</p>
                    </div>
                    <Input type='number' min="1" value={Cost} onChange={(e)=>{setCost(e.target.value)}}/> 
                </div>
                <div style={{display:'flex' , width:'100%'  , justifyContent:'center' , alignItems:'center' , marginBottom:'1rem'}}>
                    <div style={{width:'150px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                        <p style={{ margin:'0'}}>ราคาขาย/หน่วย</p>
                    </div>
                    <Input type='number' min="1" value={Price} onChange={(e)=>{setPrice(e.target.value)}}/> 
                </div>
                <div style={{display:'flex' , width:'100%'  , justifyContent:'center' , alignItems:'center'}}>
                    <Button color="danger" onClick={DecressMent}>-</Button>
                    <Input style={{display:'flex' , justifyContent:'center' , alignItems:'center' , width:'70px' , textAlign:'center' , margin:'0 1rem'}} type='number' min="0" value={count} onChange={(e)=>AddNumberGoods(e)}/>
                    {/* <h3 style={{margin:'0 2rem'}}>{count}</h3> */}
                    <Button color="success" onClick={IncressMent}>+</Button>
                </div>
              
            </ModalBody>
            <ModalFooter>


            <Button color="success" onClick={()=>{
                AddRecieveBuffer()
                setCount(1)
                toggle()
            }}>เพิ่มสินค้า</Button>
            <Button color="danger" onClick={()=>{
                setCount(1)
                toggle()
            }}>ยกเลิก</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalAddRecieve
