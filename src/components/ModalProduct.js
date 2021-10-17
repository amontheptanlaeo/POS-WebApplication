import React , { useState } from 'react'
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Input
} from "reactstrap";

function ModalProduct({show , onHide , toggle , data , GoodsPrice , setGoodsPrice , setCart}) {

    const [count,setCount] = useState(1)
    const IncressMent = () => {
        setCount(count+1)
    }
    const DecressMent = () => {
        if(count <= 1) return
        setCount(count-1)
    }
    const AddNumberGoods = (e) =>{
        if(e.target.value == ''){
            return setCount(1)
        }
        setCount(parseFloat(e.target.value))
    }



    return (
        <Modal isOpen={show} toggle={toggle} className='testModal' centered>
            <ModalHeader toggle={toggle}>
                {data.name}
            </ModalHeader>
            <ModalBody>
                <div style={{display:'flex' , width:'100%' , justifyContent:'center' , alignItems:'center'}}>
                    <h5> ราคา {data.price}</h5>
                </div>
                <div style={{display:'flex' , width:'100%' , justifyContent:'center' , alignItems:'center' , margin:'1rem 0'}}>
                    <img  style={{objectFit:'contain' , height:'200px' ,width:'200px'}} src={data.img} alt='product'/>
                </div>
                <div style={{display:'flex' , width:'100%'  , justifyContent:'center' , alignItems:'center'}}>
                    <Button color="danger" onClick={DecressMent}>-</Button>
                    <Input style={{display:'flex' , justifyContent:'center' , alignItems:'center' , width:'70px' , textAlign:'center' , margin:'0 1rem'}} type='number' min="1" value={count} onChange={(e)=>AddNumberGoods(e)}/>

                    <Button color="success" onClick={IncressMent}>+</Button>
                </div>
              
            </ModalBody>
            <ModalFooter>
            <Button color="success" onClick={()=>{
               
               let totalPrice = 0
                let temp =  JSON.parse(localStorage.getItem(`CartSell`)) || [];

                

                let newItem = 
                {
                    name: data.name,
                    price: data.price,
                    count: count,
                    total: data.price*count,
                    key: temp.length
                };
                if(temp.length != 0){
                    let check = false
                    temp.map((e,idx)=>{
                        if(e.name == data.name){
                            check = true
                            temp[idx].count = temp[idx].count + count
                            temp[idx].total = data.price*temp[idx].count
                            return
                        }
                    })
                    if(!check){
                        temp.push(newItem);
                        check = false
                    }


                }else{
                    temp.push(newItem);
                }

               

              
                temp.map(e=>{
                    totalPrice = totalPrice + e.total
                })
                setGoodsPrice(totalPrice)
                localStorage.setItem(`CartSell`,JSON.stringify(temp))
                setCart(JSON.parse(localStorage.getItem(`CartSell`)))
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

export default ModalProduct
