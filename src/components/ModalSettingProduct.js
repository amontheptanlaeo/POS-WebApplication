import React , { useState , useEffect } from 'react'
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter, Container,
} from "reactstrap";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import axios from 'axios';

function ModalSettingProduct({show , onHide , toggle , data}) {

    const [Favorite,setFavorite] = useState(data.Favorite)

    useEffect(()=>{
        setFavorite(data.Favorite)
    },[data])

    const ToggleSwitch = () => {
        if(Favorite == 1) return setFavorite(0)
        return setFavorite(1)
    }

    const settingProduct = async() => {
        try {
            await axios.post('https://posappserver.herokuapp.com/postupdatefavorite',{
                Branch_ID: localStorage.getItem('Branch_ID'),
                Goods_ID: data.barcode,
                Favorite: Favorite
            }).then(()=>window.location.reload())

            
        } catch (error) {
            console.log(error)
        }
    }


    return (
         <Modal isOpen={show} toggle={toggle} className='testModal' centered>
            <ModalHeader toggle={toggle}>
                {data.name}
            </ModalHeader>
            <ModalBody>
                <div style={{display:'flex' , alignItems:'center' , justifyContent:'center' , flexDirection:'column'}}>
                     <div>
                        <p>จำนวนคงคลัง {data.Count_Stock}</p>
                    </div>
                    <div style={{display:'flex' , width:'100%' , justifyContent:'center' , alignItems:'center' , margin:'1rem 0'}}>
                        <img  style={{objectFit:'contain' , height:'200px' ,width:'200px'}} src={data.img} alt='product'/>
                    </div>
                    <FormGroup>
                        <FormControlLabel control={Favorite == 1 ? <Switch checked/> : <Switch />}  onChange={()=>ToggleSwitch()} label="สินค้าขายด่วน"/>
                    </FormGroup>
                </div>
           
              
            </ModalBody>
            <ModalFooter>
            <Button color="success" onClick={()=>{
                 settingProduct()
            }}>เพิ่มสินค้า</Button>
            <Button color="danger" onClick={()=>{
              toggle()
            }}>ยกเลิก</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalSettingProduct
