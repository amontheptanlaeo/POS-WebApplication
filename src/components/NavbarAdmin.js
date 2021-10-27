import React , { useState , useEffect } from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import '../styles/NavAdmin.scss'
import Banner from '../images/LOGO/Shop-Starter.jpg'

import axios from 'axios';





function NavbarAdmin() {

    const [storeName,setstoreName] = useState('')

    useEffect(async()=>{

        await axios.post('https://posappserver.herokuapp.com/getnamestore',{
            Store_ID: localStorage.getItem('Store_ID')
        }).then((res)=>{
            setstoreName(res.data[0].Store_Name)
            localStorage.setItem('Store_Name',res.data[0].Store_Name)
        })

    },[])



    const signOut = () => {
        localStorage.removeItem('UserName')
        localStorage.removeItem('Branch_ID')
        localStorage.removeItem('Store_ID')
        localStorage.removeItem('Branch_Name')
        localStorage.removeItem('Store_Name')
        localStorage.removeItem('ID')
        localStorage.removeItem('Permistion')
        localStorage.removeItem('UserName')
        localStorage.removeItem('IDCard')
        localStorage.removeItem('CartQ')
        window.location.href = '/'
    }
    


    return (
        <div className="SideBar">
            <div className="detailStore">
                <div className="Banner" style={{display:'flex' ,justifyContent:'space-between' , alignItems:'center' , textAlign:'center'}}>
                    <h3>ร้าน {storeName}</h3>
                    <img src={Banner} alt="LOGO" style={{width:'50px' , height:'50px' , borderRadius:'100%' , marginLeft:'10px'}}/>
                </div>
                <div className="detailBox">
                    <p>สาขา {localStorage.getItem('Branch_Name')}</p>
                    <p>ผู้ใช้งาน: {localStorage.getItem('UserName')}</p>
                </div>
                
            </div>
            
            <ul>
                <li>
                    <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>หน้าหลัก</motion.span>
                    </Link>
                </li>

                {
                    localStorage.getItem('Permistion') == 0 ?  <li>
                    <Link to="/Setting" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ตั้งค่าร้าน</motion.span>
                    </Link>
                </li>:null
                }

                <li className='Logout-admin' onClick={signOut} >
                    <Link ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ออกจากระบบ</motion.span>
                    </Link>
                </li>
        

            </ul>
        </div>
    )
}

export default NavbarAdmin
