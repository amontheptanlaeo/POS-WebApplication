import React , {useState} from 'react'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Input
} from "reactstrap";


function IconMenu({path , img , description , alert ,count}) {

    const [show,setShow] = useState(false)
    const toggle = () => setShow(!show);
    return (
        <motion.li className={alert ? alert:''}>
            {alert && <motion.div animate={{ opacity: 1, scale:1 , y:[1,5,1] }} transition={{ repeat: Infinity, duration: 1 }}className='circle'>{count}</motion.div>}

            {path == 'Close' ? <div onClick={()=>setShow(!show)} ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                <motion.img whileHover={{scale:1.1}} whileTap={{scale:1.0}} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={img} alt="sell" style={{ width: '120px', height: '120px' }} />
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>{description}</motion.p>
            </div>:<Link to={'/'+path} ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                <motion.img whileHover={{scale:1.1}} whileTap={{scale:1.0}} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={img} alt="sell" style={{ width: '120px', height: '120px' }} />
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>{description}</motion.p>
            </Link>}
         
             <Modal isOpen={show} toggle={toggle} className='testModal' centered>
            <ModalHeader toggle={toggle}>
                <p>ปิดร้านตัดยอด</p>
            </ModalHeader>
            <ModalBody>
                <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' , flexDirection:'column'}}>
                     <div>
                        <p>แน่ใจว่าจะปิดแล้ว?</p>
                    </div>
                    
                  
                </div>
           
              
            </ModalBody>
            <ModalFooter>
            <Button color="danger" onClick={()=>{
                 setShow(!show)
            }}>ตัดยอด</Button>
            </ModalFooter>
        </Modal>
            
        </motion.li>
    )
}

export default IconMenu
