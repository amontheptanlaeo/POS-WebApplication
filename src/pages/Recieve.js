import React , { useState , useEffect } from 'react'
import {
    Button,
    Row,
    Col,
    Input,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Table 
} from "reactstrap";
import axios from 'axios';
// import BlankSide from '../components/BlankSide';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

function Recieve() {

    const [GoodHistory,setGoodHistory] = useState([])

    useEffect(async()=>{
        const res = await axios.post('https://posappserver.herokuapp.com/getrecivetable',{
            Branch_ID: localStorage.getItem('Branch_ID')
        })
        console.log(res.data)
       setGoodHistory(res.data)
    },[])

    const columns = [
        { field: 'id', headerName: '#', width: 100 },
        { field: 'firstName', headerName: 'รายการ', width: '500' ,
        renderCell: (params) => (
            <>
                <Link to={`/history/recieve/`+params.row.firstName}>
                    {params.row.firstName}
                </Link>
                </>)

    },
        {
          field: 'age',
          headerName: 'วันที่ ว/ด/ป',
          type: 'date',
          width: 200,
        },
        ,
        {
          field: 'origin',
          headerName: 'แหล่งที่มา',
          width: 200,
        },
      ];
      
    //   const rows = [
    //     GoodHistory.map((e,idx)=>({ id: idx, firstName: `${e.Bill_Number}`, age: `${e.DateAdd_History}` }))
    //     // { id: 1, firstName: `R2345`, age: '20/08/21' },
    //     // { id: 2, firstName: 'R2344', age: '18/08/21' },
    //   ];

      const rows = GoodHistory.map((e,idx)=>{
        return { id: idx+1, firstName: `${e.Goods_History_ID}`, age: `${e.DateAdd_History}` , origin: `${e.Origin}`  }
      })

    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
            <Row>
                <Col md={3} lg={3} style={{height:'100%'}}>
                    {/* <BlankSide/> */}
                </Col>
                <Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
                    <h4>ประวัติการรับสินค้า <Link to='/AddRecieve'><Button color='warning'>เพิ่มแหล่งที่มา</Button></Link></h4>
                        <div style={{ height: '80vh', width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={12}
                                rowsPerPageOptions={[12]}
                                // checkboxSelection
                            />
                        </div>
                </Col>
            </Row>
        </motion.div>
    )
}

export default Recieve
