import React from 'react'
import '../styles/Notfound.scss'
import { motion } from "framer-motion"
function NotFound() {
    return (
        <motion.div 
        
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}

        className="notfound" style={{width:'100%' , height:'93vh' , display:'flex' , justifyContent:'center' , alignItems:'center' , fontSize:'50rem' , overflow:'hidden' , position:'relative' , pointerEvents:'none'}}>
            <motion.p
             initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}
            >404</motion.p>
            <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
            className='oh'>NotFound</motion.p>
        </motion.div>
    )
}

export default NotFound
