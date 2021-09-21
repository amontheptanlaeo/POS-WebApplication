import React from 'react'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

function IconMenu({path , img , description}) {
    return (
        <motion.li >
            <Link to={'/'+path} ClassName="LOGO-Text" style={{ textDecoration: 'none', textAlign: "center", width: '100%', color: 'black' }}>
                <motion.img whileHover={{scale:1.1}} whileTap={{scale:1.0}} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }} src={img} alt="sell" style={{ width: '120px', height: '120px' }} />
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.9 } }}>{description}</motion.p>
            </Link>
        </motion.li>
    )
}

export default IconMenu
