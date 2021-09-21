import React from 'react'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
function IconMenuResp({path , img , description}) {
    return (
        <motion.li whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
        <Link to={'/'+path} ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={img} alt="sell" style={{ width: '50px', height: '50px' }} />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>{description}</motion.p>
        </Link>
    </motion.li>
    )
}

export default IconMenuResp
