import React from 'react'
import {
    Button,
    Row,
    Col
} from "reactstrap";
import BlankSide from '../components/BlankSide';
import { motion } from 'framer-motion';
function ManageBranch() {
    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
            <Row>
                <Col md={3} style={{height:'100%'}}>
                    <BlankSide/>
                </Col>
                <Col md={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
                    <h1>ManageBranch</h1>
                </Col>
            </Row>
        </motion.div>
    )
}

export default ManageBranch
