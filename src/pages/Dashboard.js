import React , { useState , useEffect } from 'react'
import {
    Row,
    Col
} from "reactstrap";
import BlankSide from '../components/BlankSide';
import basket from '../images/IconsMenu/Icons/basket.png'
import graph from '../images/IconsMenu/Icons/graph.png'
import barcode from '../images/IconsMenu/Icons/barcode-scanning.png'
import sell from '../images/IconsMenu/Icons/cash-register.png'
import add from '../images/IconsMenu/Icons/hand-package.png'
import recieve from '../images/IconsMenu/Icons/invoice.png'
import money from '../images/IconsMenu/Icons/euro-bill.png'
import receipt from '../images/IconsMenu/Icons/receipt.png'
import delivery from '../images/IconsMenu/Icons/delivery-truck.png'
import checklist from '../images/IconsMenu/Icons/checklist.png'
import wallet from '../images/IconsMenu/Icons/wallet.png'
import shirt from '../images/IconsMenu/Icons/heart-shirt.png'
import tag from '../images/IconsMenu/Icons/heart-label-tag.png'
import shop from '../images/IconsMenu/Icons/shop.png'
import wishlist from '../images/IconsMenu/Icons/wish-list.png'
import moneypig from '../images/IconsMenu/Icons/money-pig.png'
import dollarbills from '../images/IconsMenu/Icons/dollar-bills.png'
import pointerscreen from '../images/IconsMenu/Icons/pointer-screen.png'
import megaphone from '../images/IconsMenu/Icons/megaphone.png'
import calculator from '../images/IconsMenu/Icons/calculator.png' 
import screencart from '../images/IconsMenu/Icons/screen-cart.png'

import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import Icon from '../components/IconMenu'
import IconResp from '../components/IconMenuResp'
import '../styles/HomeDash.scss'

import axios from 'axios';

function Dashboard() {

    const [alert,setalert] = useState(0)
    const [alertE,setalertE] = useState(0)
   

    useEffect(async()=>{
        const res = await axios.post('https://posappserver.herokuapp.com/checkgoodsinstocks',{
            Branch_ID: localStorage.getItem('Branch_ID')
        })
        console.log(res.data)
        setalert(res.data.length)

        const res2 = await axios.post('https://posappserver.herokuapp.com/getcountapprove',{
            Store_ID: localStorage.getItem('Store_ID')
        })
        console.log(res2)
        setalertE(res2.data[0]['COUNT(Approve)'])

      
    },[])


        return(
            <div className="SideBar-Res">
            <div className='Container' >
                <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}} className="content-dash">
                <Row>
                    <Col xs={0} sm={0} md={3}  className='blankSide'>
                 
                    </Col>
                    <Col xs={12} sm={12} md={9} style={{paddingTop:'2rem'}}>
                        <ul>
                            <Icon path='Product' img={basket} description='สินค้าคงคลัง' alertM={alert > 0 ? 'AlertM':null} count={alert}/>
                            <Icon path='Sell' img={sell} description='งานขาย'/>
                            <Icon path='AddProduct' img={add} description='เพิ่มสินค้า'/>
                            <Icon path='AddCategory' img={tag} description='เพิ่มหมวดหมู่'/>
                            <Icon path='AddRecieve' img={delivery} description='เพิ่มแหล่งที่มา'/>
                            <Icon path='Recieve' img={recieve} description='ประวัติการรับสินค้า'/>
                            <Icon path='ListBill' img={receipt} description='ประวัติรายการบิลขาย'/>
                            <Icon path='Withdraw' img={dollarbills} description='เบิกเงินทอน'/>
                            {
                                localStorage.getItem('Permistion') == 0 ? <Icon path='SetWithdraw' img={moneypig} description='เพิ่มเงินกองกลาง'/>: localStorage.getItem('Permistion') == 1 ? <Icon path='SetWithdraw' img={moneypig} description='เพิ่มเงินกองกลาง'/>:null
                            }
                            
                            {
                                localStorage.getItem('Permistion') == 0 ?  <Icon path='WithdrawCentral' img={wallet} description='ถอนเงินกองกลาง'/>: localStorage.getItem('Permistion') == 1 ?  <Icon path='WithdrawCentral' img={wallet} description='ถอนเงินกองกลาง'/>:null
                            }
                   
                            {
                                localStorage.getItem('Permistion') == 0 ?  <Icon path='CheckWithdraw' img={pointerscreen} description='ประวัติกองกลาง'/>: localStorage.getItem('Permistion') == 1 ?  <Icon path='CheckWithdraw' img={pointerscreen} description='ประวัติกองกลาง'/>:null
                            }

                            {
                                localStorage.getItem('Permistion') == 0 ?  <Icon path='CheckWithdrawCus' img={screencart} description='ประวัติเงินทอน'/>: localStorage.getItem('Permistion') == 1 ?  <Icon path='CheckWithdrawCus' img={screencart} description='ประวัติเงินทอน'/>:null
                            }
                   
                            {
                                localStorage.getItem('Permistion') == 0 ?  <Icon path='Profit' img={checklist} description='ภาพรวมยอดขาย'/>:null
                            }
                   
                            {
                                localStorage.getItem('Permistion') == 0 ?  <Icon path="Conclude" img={graph} description='สรุปยอดขาย'/>: localStorage.getItem('Permistion') == 1 ?  <Icon path="Conclude" img={graph} description='สรุปยอดขาย'/>:null
                            }

                            {
                                localStorage.getItem('Permistion') == 0 ?  <Icon path='CreateQuotation' img={wishlist} description='ออกใบเสนอราคา'/>:null
                            }
                            
                            {
                                localStorage.getItem('Permistion') == 0 ?   <Icon path='AddEmployee' img={shirt} description='เพิ่มพนักงาน' alertM={alertE > 0 ? 'AlertM':null} count={alertE}/>:null
                            }

                            {
                                localStorage.getItem('Permistion') == 0 ?   <Icon path='ManageEmployee' img={megaphone} description='จัดการพนักงาน'/>:null
                            }

                            {
                                localStorage.getItem('Permistion') == 0 ?   <Icon path='AddBranch' img={shop} description='เพิ่มสาขา'/>:null
                            }
                            <Icon path='Barcode' img={barcode} description='พิมพ์/สร้างบาร์โค้ด'/>
                            <Icon path='Close' img={calculator} description='ปิดร้าน/ตัดยอด'/>


                        </ul>
                    </Col>
                </Row>
                </motion.div>
                <ul className='res-Menu'>
                   

                    <IconResp path='Product' img={basket} description='สินค้าคงคลัง' alertM={alert > 0 ? 'AlertM':null} count={alert}/>
                            <IconResp path='Sell' img={sell} description='งานขาย'/>
                            <IconResp path='AddProduct' img={add} description='เพิ่มสินค้า'/>
                            <IconResp path='AddCategory' img={tag} description='เพิ่มหมวดหมู่'/>
                            <IconResp path='AddRecieve' img={delivery} description='เพิ่มแหล่งที่มา'/>
                            <IconResp path='Recieve' img={recieve} description='ประวัติการรับสินค้า'/>
                            <IconResp path='ListBill' img={receipt} description='ประวัติรายการบิลขาย'/>
                            <IconResp path='Withdraw' img={dollarbills} description='เบิกเงินทอน'/>
                            {
                                localStorage.getItem('Permistion') == 0 ? <IconResp path='SetWithdraw' img={moneypig} description='เพิ่มเงินกองกลาง'/>: localStorage.getItem('Permistion') == 1 ? <IconResp path='SetWithdraw' img={moneypig} description='เพิ่มเงินกองกลาง'/>:null
                            }
                            
                            {
                                localStorage.getItem('Permistion') == 0 ?  <IconResp path='WithdrawCentral' img={wallet} description='ถอนเงินกองกลาง'/>: localStorage.getItem('Permistion') == 1 ?  <IconResp path='WithdrawCentral' img={wallet} description='ถอนเงินกองกลาง'/>:null
                            }
                   
                            {
                                localStorage.getItem('Permistion') == 0 ?  <IconResp path='CheckWithdraw' img={pointerscreen} description='ประวัติกองกลาง'/>: localStorage.getItem('Permistion') == 1 ?  <IconResp path='CheckWithdraw' img={pointerscreen} description='ประวัติกองกลาง'/>:null
                            }

                            {
                                localStorage.getItem('Permistion') == 0 ?  <IconResp path='CheckWithdrawCus' img={screencart} description='ประวัติเงินทอน'/>: localStorage.getItem('Permistion') == 1 ?  <IconResp path='CheckWithdrawCus' img={screencart} description='ประวัติเงินทอน'/>:null
                            }
                   
                            {
                                localStorage.getItem('Permistion') == 0 ?  <IconResp path='Profit' img={checklist} description='ภาพรวมยอดขาย'/>:null
                            }
                   
                            {
                                localStorage.getItem('Permistion') == 0 ?  <IconResp path="Conclude" img={graph} description='สรุปยอดขาย'/>: localStorage.getItem('Permistion') == 1 ?  <IconResp path="Conclude" img={graph} description='สรุปยอดขาย'/>:null
                            }

                            {
                                localStorage.getItem('Permistion') == 0 ?  <IconResp path='CreateQuotation' img={wishlist} description='ออกใบเสนอราคา'/>:null
                            }
                            
                            {
                                localStorage.getItem('Permistion') == 0 ?   <IconResp path='AddEmployee' img={shirt} description='เพิ่มพนักงาน' alertM={alertE > 0 ? 'AlertM':null} count={alertE}/>:null
                            }

                            {
                                localStorage.getItem('Permistion') == 0 ?   <IconResp path='ManageEmployee' img={megaphone} description='จัดการพนักงาน'/>:null
                            }

                            {
                                localStorage.getItem('Permistion') == 0 ?   <IconResp path='AddBranch' img={shop} description='เพิ่มสาขา'/>:null
                            }
                            <IconResp path='Barcode' img={barcode} description='พิมพ์/สร้างบาร์โค้ด'/>
                            <IconResp path='Close' img={calculator} description='ปิดร้าน/ตัดยอด'/>

                </ul>
            </div>
        </div>
        )
    
}

export default Dashboard
