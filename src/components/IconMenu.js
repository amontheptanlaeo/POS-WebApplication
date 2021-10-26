import React , {useState} from 'react'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Input
} from "reactstrap";
import axios from 'axios';


function IconMenu({path , img , description , alertM ,count}) {

    const [show,setShow] = useState(false)
    const toggle = () => setShow(!show);

    const CutOfTop = async() => {
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
    
          const genDate = currentdate.getFullYear() +
      
          (currentdate.getMonth() + 1 < 10
            ? "0" + (currentdate.getMonth() + 1)
            : currentdate.getMonth() + 1).toString() +
         
          (currentdate.getDate() < 10
            ? "0" + currentdate.getDate()
            : currentdate.getDate()).toString() +
         
          (currentdate.getHours() < 10
            ? "0" + currentdate.getHours()
            : currentdate.getHours()).toString() +
         
          (currentdate.getMinutes() < 10
            ? "0" + currentdate.getMinutes()
            : currentdate.getMinutes()).toString() +
         
          (currentdate.getSeconds() < 10
            ? "0" + currentdate.getSeconds()
            : currentdate.getSeconds()).toString()

        await axios.post('https://posappserver.herokuapp.com/endday',{
            DateAdd:dateOnAdd,
            Store_ID:localStorage.getItem('Store_ID'),
            Branch_ID:localStorage.getItem('Branch_ID'),
            GenDate:genDate,
            ID:localStorage.getItem('ID')
        }).then((res)=>{
            alert('ตัดยอดสำเร็จ')
            window.location.href = '/SetWithdraw'
        })
    }

    return (
        <motion.li className={alertM == 'AlertM' ? alertM:''}>
            {alertM && <motion.div animate={{ opacity: 1, scale:1 , y:[1,5,1] }} transition={{ repeat: Infinity, duration: 1 }}className='circle'>{count}</motion.div>}

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
                        <p>แน่ใจว่าจะตัดยอดแล้ว?</p>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
            <Button color="danger" onClick={()=>{
                 CutOfTop()
            }}>ตัดยอด</Button>
             <Button color="danger" onClick={()=>{
                 setShow(!show)
            }}>ยกเลิก</Button>
            </ModalFooter>
        </Modal>
            
        </motion.li>
    )
}

export default IconMenu
