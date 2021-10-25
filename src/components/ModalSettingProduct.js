import React , { useState , useEffect } from 'react'
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter, Container, Table , Input
} from "reactstrap";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import axios from 'axios';

function ModalSettingProduct({show , onHide , toggle , data}) {

    const [Favorite,setFavorite] = useState(data.Favorite)
    const [GoodName,setGoodName] = useState(data.name)
    const [Price,setPrice] = useState(data.price)


    const [image, setImage] = useState(data.img);
  const [loading, setLoading] = useState(false);

 

    useEffect(()=>{
        setFavorite(data.Favorite)
        setGoodName(data.name)
        setPrice(data.price)
        setImage(data.img)
    },[data])

    const ToggleSwitch = () => {
        if(Favorite == 1) return setFavorite(0)
        return setFavorite(1)
    }

    const uploadImage = async (files) => {
        const formData = new FormData();
        formData.append("file", files);
        formData.append("upload_preset", "xabqurhq");
        setLoading(true)
        axios
          .post("https://api.cloudinary.com/v1_1/diyf7i0tt/upload", formData)
          .then((res) => {
            console.log(res);
            setImage(res.data.url)
            setLoading(false)
          });
        }

    const settingProduct = async() => {
        if(Price == '' || GoodName == '') return alert('ระบุราคา/ชื่อสินค้า')
        try {
            await axios.post('https://posappserver.herokuapp.com/postupdatefavorite',{
                Branch_ID: localStorage.getItem('Branch_ID'),
                Goods_ID: data.barcode,
                Favorite: Favorite
            })

            await axios.post('https://posappserver.herokuapp.com/changegoods',{
                Branch_ID: localStorage.getItem('Branch_ID'),
                Goods_ID: data.barcode,
                Price: Price,
                Goods_Name: GoodName,
                Goods_img: image ? image:'http://www2.tistr.or.th/Projects/tistrbiza/images/default_product.png',
            }).then((res)=>{
                alert('อัพเดทสำเร็จ')
                console.log(res)
               window.location.reload()
            })

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
                    <FormGroup className='mb-2'>
                        <FormControlLabel control={Favorite == 1 ? <Switch checked/> : <Switch />}  onChange={()=>ToggleSwitch()} label="สินค้าขายด่วน"/>
                    </FormGroup>
                    <div className='mb-2 w-100'>
                        <p style={{margin:'0'}}>ชื่อสินค้า</p>
                        <Input  value={GoodName} onChange={(e)=>setGoodName(e.target.value)}/>
                    </div>
                    <div className='mb-2 w-100'>
                        <p style={{margin:'0'}}>ราคาสินค้า</p>
                        <Input  value={Price} onChange={(e)=>setPrice(e.target.value)} type='number'/>
                    </div>
                    <p style={{margin:'0'}}>รูปสินค้า</p>
                    <input
                                type="file"
                                name="file"
                                placeholder="Upload an image"
                                onChange={(e) => uploadImage(e.target.files[0])}
                            />
                            {loading ? (
                                <h3>Loading...</h3>
                            ) : (
                                <img src={image} style={{ width: '150px' }} />
                            )}
                    {/* <Table>
                        <thead style={{textAlign:'center'}}>
                            <tr>
                                <th>ชื่อร้าน</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                            <tbody style={{textAlign:'center'}}>
                          <tr>
                                  <td><Input value={StoreName} onChange={(e)=>setStoreName(e.target.value)}/></td>
                                 
                                  <td>
                                    <Button className="mr-1" variant='success' onClick={()=>console.log('Approve')}>อัพเดท</Button>
                                    </td>
                              </tr>
                     
                            </tbody>
                        </Table> */}
                </div>
            </ModalBody>
            <ModalFooter>
            <Button color="success" onClick={()=>{
                            settingProduct()
                        }}>อัพเดทสินค้า</Button>
            <Button color="danger" onClick={()=>{
              toggle()
            }}>ยกเลิก</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalSettingProduct
