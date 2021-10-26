import React , { useState , useEffect} from 'react'
import {
    Row,
    Col,

} from "reactstrap";
// import BlankSide from '../components/BlankSide';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function CheckWitthdrawCus() {
    const [checkMoneydraw,setcheckMoneydraw] = useState([])

    useEffect(async()=>{
        const res = await axios.post('https://posappserver.herokuapp.com/getlogwithdrawbankdaily',{
            Branch_ID: localStorage.getItem('Branch_ID')
        })
        console.log(res.data)
        setcheckMoneydraw(res.data)
    },[])

    if(localStorage.getItem('Permistion') != 0 &&  localStorage.getItem('Permistion') != 1) return window.location.href = 'http://localhost:3000/'

    const columns = [
        { field: 'id', headerName: '#', width: 100 },
        { field: 'firstName', headerName: 'รายการ', width: '400' ,
        // renderCell: (params) => (
        //     <>
        //         <Link to={`/history/sell/`+params.row.firstName}>
        //             {params.row.firstName}
        //         </Link>
        //     </>)
        },
        {
          field: 'total',
          headerName: 'จำนวนเงิน',
          type: 'date',
          width: 200,
        },
        {
          field: 'age',
          headerName: 'วันที่ ว/ด/ป',
          type: 'date',
          width: 300,
        },
        {
            field: 'nameSeller',
            headerName: 'ชื่อผู้ทำรายการ',
            width: 400,
          },
      ];
      
      const rows = checkMoneydraw.map((e,idx)=>{
        return { id: idx+1, firstName: `${e.Type_Status == 'WithDraw' ? 'นำออก':e.Type_Status == 'Cut off amount' ? 'ตัดยอดเข้ากองกลาง':'นำเข้า'}`, total:`${e.Type_Status == 'WithDraw' ? "-"+e.MoneyTotal:e.Type_Status == 'Cut off amount' ? "-"+e.MoneyTotal:"+"+e.MoneyTotal}` ,age: `${e.DateAdd.replace("T"," ")}` , nameSeller: `${e.FirstName} ${e.LastName}`  }
      })

    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
        <Row>
            <Col md={3} lg={3} style={{height:'100%'}}>
                {/* <BlankSide/> */}
            </Col>
            <Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
                <h4>ประวัติการเพิ่มถอนเงินทอน</h4>
                    <div style={{ height: '80vh', width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={12}
                            rowsPerPageOptions={[12]}
                        />
                    </div>
            </Col>
        </Row>
    </motion.div>
    )
}

export default CheckWitthdrawCus
