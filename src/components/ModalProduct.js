import React , { useState } from 'react'
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Input
} from "reactstrap";
import axios from 'axios';

function ModalProduct({show , onHide , toggle , data , GoodsPrice , setGoodsPrice , setCart}) {

    const [count,setCount] = useState(1)
    const IncressMent = () => {
        if(count>=data.stock) return setCount(data.stock)
        return setCount(count+1)
    }
    const DecressMent = () => {
        if(count <= 1) return
        setCount(count-1)
    }
    const AddNumberGoods = (e) =>{
        if(e.target.value == ''){
            return setCount(1)
        }
        if(e.target.value > data.stock)  return setCount(data.stock)
        return setCount(parseFloat(e.target.value))
    }

    const addCartSell = async() => {
        if(data.stock<count) return alert('NOPEEE')
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
        try {
                await axios.post('https://posappserver.herokuapp.com/postbuffer-cart-sell',{
                    Branch_ID: localStorage.getItem('Branch_ID'),
                    ID: localStorage.getItem('ID'),
                    Store_ID: localStorage.getItem('Store_ID'),
                    Goods_ID: data.barcode,
                    Count_Sell: count,
                    Price_Unit: data.price,
                    DateAdd: dateOnAdd
                })
                // setGoodsPrice(GoodsPrice+data.price*count)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Modal isOpen={show} toggle={()=>{
            setCount(1)
            toggle()
        }} className='testModal' centered>
            <ModalHeader toggle={()=>{
                setCount(1)
                toggle()
            }}>
                {data.name}
            </ModalHeader>
            <ModalBody>
                <div style={{textAlign:'center'}}>
                    {data.stock <= 0 ? <p>สินค้าหมด</p>:<p>คงเหลือ: {data.stock}</p>}
                </div>
                <div style={{display:'flex' , width:'100%' , justifyContent:'center' , alignItems:'center'}}>
                    <h5> ราคา {data.price}</h5>
                </div>
                <div style={{display:'flex' , width:'100%' , justifyContent:'center' , alignItems:'center' , margin:'1rem 0'}}>
                    <img  style={{objectFit:'contain' , height:'200px' ,width:'200px'}} src={data.img} alt='product'/>
                </div>
                {data.stock > 0 && 
                    <div style={{display:'flex' , width:'100%'  , justifyContent:'center' , alignItems:'center'}}>
                        <Button color="danger" onClick={DecressMent}>-</Button>
                        <Input style={{display:'flex' , justifyContent:'center' , alignItems:'center' , width:'70px' , textAlign:'center' , margin:'0 1rem'}} type='number' min="1" value={count} onChange={(e)=>AddNumberGoods(e)}/>
                        <Button color="success" onClick={IncressMent}>+</Button>
                    </div>
                }
                
            </ModalBody>
            <ModalFooter>
                {data.stock > 0 &&  
                    <Button color="success" onClick={()=>{
                    addCartSell()
                    setCount(1)
                    toggle()
                }}>เพิ่มสินค้า</Button>
            }
           
            <Button color="danger" onClick={()=>{
                setCount(1)
                toggle()
            }}>ยกเลิก</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalProduct
