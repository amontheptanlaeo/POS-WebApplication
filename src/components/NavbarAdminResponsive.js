import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import basket from '../images/IconsMenu/Icons/basket.png'
import graph from '../images/IconsMenu/Icons/graph.png'
import '../styles/NavAdmin.scss'
import Banner from '../images/LOGO/Shop-Starter.jpg'
import { scale } from 'style-value-types';

var elem = document.documentElement;





function NavbarAdmin() {



    const signOut = () => {
        localStorage.removeItem('user')
        window.location.href = '/'
    }



    return (
        <div className="SideBar-Res">
            <div className='Container'>
                <ul>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/Product" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={basket} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>งานขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/Profit" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}  src={graph} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ภาพรวมยอดขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={basket} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>งานขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}  src={graph} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ภาพรวมยอดขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={basket} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>งานขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}  src={graph} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ภาพรวมยอดขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={basket} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>งานขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}  src={graph} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ภาพรวมยอดขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={basket} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>งานขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}  src={graph} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ภาพรวมยอดขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={basket} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>งานขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}  src={graph} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ภาพรวมยอดขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={basket} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>งานขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}  src={graph} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ภาพรวมยอดขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={basket} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>งานขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}  src={graph} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ภาพรวมยอดขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={basket} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>งานขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}  src={graph} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ภาพรวมยอดขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={basket} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>งานขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}  src={graph} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ภาพรวมยอดขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={basket} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>งานขาย</motion.p>
                        </Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
                        <Link to="/" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}  src={graph} alt="sell" style={{ width: '50px', height: '50px' }} />
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ภาพรวมยอดขาย</motion.p>
                        </Link>
                    </motion.li>
                    <li>
                        <Link to="/Product" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>จัดการสินค้า</motion.span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Employee" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>จัดการพนักงาน</motion.span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Setting" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ตั้งค่า</motion.span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Branch" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>จัดการสาขา</motion.span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Profit" ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ภาพรวมยอดขาย</motion.span>
                        </Link>
                    </li>
                    <li className='Logout-admin' onClick={signOut} >
                        <Link ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>ออกจากระบบ</motion.span>
                        </Link>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default NavbarAdmin
