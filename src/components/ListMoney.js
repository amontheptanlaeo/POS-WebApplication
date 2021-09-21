import React , { useState }  from 'react'
import {
    Input
} from "reactstrap";
import BlankSide from './BlankSide';
import { motion } from 'framer-motion';
function ListMoney({moneyIMG,moneyValue,temptest,test}) {
    const [money,setMoney] = useState()
    return (
      
                <div className='MoneyAdd' style={{display:'flex' , justifyContent:'center' , alignItems:'center' , flexDirection:'column' , margin:'1rem'}}>
                    <div style={{display:'flex' , justifyContent:'space-between' , alignItems:'center' , width:'100%'}}>
                        <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                            <img onClick={()=>test(temptest+(money*moneyValue))}src={moneyIMG} style={{width:'300px'}}/>
                        </div>
                        <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                            <p className="ml-3" style={{textAlign:'center' , margin:'0'}}>{moneyValue} x</p>
                        </div>
                        <div style={{display:'flex' , justifyContent:'flex-start' , alignItems:'center'}}>
                            <Input value={money} onChange={(e)=>setMoney(e.target.value)} className='w-50 ml-3'/>
                        </div>
                    </div>
                </div>

    )
}

export default ListMoney
