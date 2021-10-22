import React, { useState , useEffect } from "react";
import axios from "axios";
import { motion } from 'framer-motion';
import { Button, Form , Row,
  Col, Alert, Container} from 'react-bootstrap';

  import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

function Barcode() {

    const [err, setErr] = useState('')
    const [Type_Name, setType_Name] = useState("");
    const [Allproduct, setAllProduct] = useState([]);

    useEffect(async()=>{
        const data = await axios.post('https://posappserver.herokuapp.com/getAllgoods',{
          Branch_ID: localStorage.getItem('Branch_ID')
        })
        console.log(data.data)
        setAllProduct(data.data)

    },[])

   
    const AddNewCategory = async(e) => {
      try {
        e.preventDefault();
        const data = await axios.post('https://posappserver.herokuapp.com/postcategory',{
            Type_Name: Type_Name,
            Branch_ID: localStorage.getItem('Branch_ID')
        });
        console.log('SUCCESS')
        console.log(data)


      } catch (error) {
        console.log(error)
      }
      
    }

    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
        <Row>
            <Col md={3} lg={3} style={{height:'100%'}}>
                {/* <BlankSide/> */}
            </Col>
            <Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
              <Container>
              <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' }}>
                 <h4>สร้างบาร์โค้ด</h4>
                </div>
                    <div style={{ height: '100%', width: '100%' }}>
                    <Stack className="w-100" spacing={2} sx={{ width: 300 }}>
                            <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                options={Allproduct.map((option) => `${option.Goods_Name} ${option.Goods_ID}`)}
                                renderInput={(params) => <TextField {...params} label="ค้นหาสินค้า" />}
                                
                            />
                        </Stack>
                        <Button className="w-100 btn btn-warning">สร้างบาร์โค้ด</Button>
                    </div>
              </Container>
               
            </Col>
        </Row>
    </motion.div>
    )
}

export default Barcode
