import React from 'react'
import {
    Row,
    Col
} from "reactstrap";
import BlankSide from '../components/BlankSide';
import basket from '../images/IconsMenu/Icons/basket.png'
import graph from '../images/IconsMenu/Icons/graph.png'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import Icon from '../components/IconMenu'
import IconResp from '../components/IconMenuResp'
import '../styles/HomeDash.scss'

function Dashboard() {

    const signOut = () => {
        localStorage.removeItem('user')
        window.location.href = '/'
    }
        return(
            <div className="SideBar-Res">
            <div className='Container'>
                <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}} className="content-dash">
                <Row>
                    <Col xs={0} sm={0} md={3}  className='blankSide'>
                        <BlankSide/>
                    </Col>
                    <Col xs={12} sm={12} md={9} style={{paddingTop:'2rem'}}>
                        <ul>
                            <Icon path='Product' img={basket} description='สินค้าคงคลัง'/>
                            <Icon path='Sell' img={graph} description='งานขาย'/>
                            <Icon path='Profit' img={basket} description='ภาพรวมยอดขาย'/>
                            <Icon path='Withdraw' img={graph} description='เบิกเงินทอน'/>
                        </ul>
                    </Col>
                </Row>
                </motion.div>
                <ul className='res-Menu'>
                    <IconResp path='Product' img={basket} description='สินค้าคงคลัง'/>
                    <IconResp path='Sell' img={graph} description='งานขาย'/>
                    <IconResp path='Profit' img={basket} description='ภาพรวมยอดขาย'/>
                    <IconResp path='Withdraw' img={graph} description='เบิกเงินทอน'/>
                </ul>
            </div>
        </div>
        )
    
}

export default Dashboard
