import React from 'react'
import { Link } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import { Link as Target } from 'react-scroll'
import { animateScroll } from 'react-scroll'
import {
    isMobile
} from "react-device-detect";
import '../styles/Nav.scss';
import '../styles/Nav-M.scss';
import { motion } from "framer-motion"
function Navbar() {

    if (isMobile) {
        return (
            <>
                <div className="Navbar-M">
                    <Container style={{ width: "100%" }}>
                        <div className="LOGO">
                            <h3 className="LOGO-Text-M" onClick={() => { animateScroll.scrollToTop() }}>NB-POS-ONLINE</h3>
                        </div>
                    </Container>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="Navbar">
                <Container style={{ width: "100vh" }}>
                    <nav className="Navbar-items">
                        <div className="Menu">
                            <ul>
                                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
                                    <Target activeClass="active"
                                        to="system"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={-40}
                                        duration={800}
                                        delay={100}
                                        isDynamic={true}
                                        ignoreCancelEvents={false}
                                    >
                                        <Link to="/" ClassName="list">ระบบ</Link>
                                    </Target>

                                </motion.li>
                                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.3 } }}>
                                    <Target activeClass="active"
                                        to="cus"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={0}
                                        duration={800}
                                        delay={100}
                                        isDynamic={true}
                                        ignoreCancelEvents={false}
                                    >
                                        <Link to="/" ClassName="list">ลูกค้า</Link>
                                    </Target>
                                </motion.li>
                                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.6 } }}>
                                    <Target activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={180}
                                        duration={800}
                                        delay={100}
                                        isDynamic={true}
                                        ignoreCancelEvents={false}
                                    >
                                        <Link to="/" ClassName="list">ติดต่อ</Link>
                                    </Target>
                                </motion.li>
                            </ul>
                        </div>
                        <div className="LOGO">
                            <Link to="/" className="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center" }}><motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} onClick={() => { animateScroll.scrollToTop() }}>NB-POS-ONLINE</motion.h3></Link>
                        </div>
                        <div className="Login">
                            <ul>
                                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2 } }} whileTap={{ scale: 0.9 }}>
                                    <Link to="/Login" ClassName="list">
                                        <Button className="w-100 mb-2 log-btn" style={{ outline: 'none !important', color: 'black' }}>
                                        เข้าสู่ระบบ/สมัครสมาชิก
                                        </Button>
                                    </Link>
                                </motion.li>
                            </ul>
                        </div>
                        <div className="Menu-Responsive">
                            <ul>
                                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
                                    <Target activeClass="active"
                                        to="system"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={-40}
                                        duration={800}
                                        delay={100}
                                        isDynamic={true}
                                        ignoreCancelEvents={false}
                                    >
                                        <Link to="/" ClassName="list">ระบบ</Link>
                                    </Target>

                                </motion.li>
                                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.3 } }}>
                                    <Target activeClass="active"
                                        to="cus"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={0}
                                        duration={800}
                                        delay={100}
                                        isDynamic={true}
                                        ignoreCancelEvents={false}
                                    >
                                        <Link to="/" ClassName="list">ลูกค้า</Link>
                                    </Target>
                                </motion.li>
                                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.6 } }}>
                                    <Target activeClass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        hashSpy={true}
                                        offset={180}
                                        duration={800}
                                        delay={100}
                                        isDynamic={true}
                                        ignoreCancelEvents={false}
                                    >
                                        <Link to="/" ClassName="list">ติดต่อ</Link>
                                    </Target>
                                </motion.li>
                                <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.6 } }}>
                                    <Link to="/Login" ClassName="list">เข้าสู่ระบบ</Link>
                                </motion.li>
                            </ul>
                        </div>

                    </nav>
                </Container>

            </div>
        </div>
    )
}

export default Navbar
