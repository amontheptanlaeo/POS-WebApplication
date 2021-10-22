import React , { useState } from 'react'
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Input
} from "reactstrap";
import axios from 'axios';

function ModalQuotation({show , onHide , toggle , data , GoodsPrice , setGoodsPrice , setCart }) {


    const [count,setCount] = useState(1)
    const [Price,setPrice] = useState(1)
    

    const AddPrice = (e) =>{
        if(e.target.value == ''){
            return setPrice(0)
        }
        setPrice(parseFloat(e.target.value))
    }


    const AddNumberGoods = (e) =>{
        if(e.target.value == ''){
            return setCount(0)
        }
        setCount(parseFloat(e.target.value))
    }

    const AddBillQ = async() => {
        if(count <= 0) return alert('จำนวนผิดพลาด')
        let check = false
        let temp = JSON.parse(localStorage.getItem('CartQ')) || [];
        temp.map((e,idx)=>{
            if(e.Goods_Name == data.name){
                temp[idx].Price=Price
                temp[idx].Count= temp[idx].Count+ count
                temp[idx].Total= Price*temp[idx].Count
                check = true
                localStorage.setItem('CartQ', JSON.stringify(temp))
                setCart(JSON.parse(localStorage.getItem('CartQ')))
                return
            }else{
                return
            }
        })
        if(check){
            return
        }
        let newItem =
        {

            Goods_Name: data.name,
            Price: Price,
            Count: count,
            Total: Price*count,
            key: temp.length
        };
        temp.push(newItem);
        localStorage.setItem('CartQ', JSON.stringify(temp))
        setCart(JSON.parse(localStorage.getItem('CartQ')))
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
                <div style={{width:'80px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                    <p style={{margin:'0'}}>ราคา</p>
                </div>
                <Input type='number' min="1" value={Price} onChange={(e)=>AddPrice(e)}/> 
            </div>
            <div style={{display:'flex' , width:'100%'  , justifyContent:'center' , alignItems:'center'}}>
                <div style={{width:'80px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                    <p style={{margin:'0'}}>จำนวน</p>
                </div>
                <Input type='number' min="0" value={count} onChange={(e)=>AddNumberGoods(e)}/> 
            </div>
           
          
        </ModalBody>
        <ModalFooter>


        <Button color="success" onClick={()=>{
            AddBillQ()
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

export default ModalQuotation
