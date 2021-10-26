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
// import BlankSide from '../components/BlankSide';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function OverAll() {

    const [branch,setBranch] = useState([])

    useEffect(()=>{
        getBranch()
      },[])


  if(localStorage.getItem('Permistion') != 0) return window.location.href = 'http://localhost:3000/'

  

 

  const getBranch = async() => {
    await axios.post('https://posappserver.herokuapp.com/getbranch',{
        Store_ID:localStorage.getItem('Store_ID')
    }).then((res)=>setBranch(res.data))
  }
    const columns = [
        { field: 'id', headerName: '#', width: 100 },
        { field: 'firstName', headerName: 'ชื่อสาขา', width: 450 ,
        renderCell: (params) => (
            <>
                <Link to={`/Conclude/Side/`+params.row.branch+'/'+params.row.firstName}>
                    {params.row.firstName}
                </Link>
                </>)

    },
    { field: 'branch', headerName: 'ID สาขา', width: 500 },
    
    
      ];
      
      const rows = branch.map((e,idx)=>{
        return { id: idx+1, firstName: `${e.Branch_Name}`, branch: `${e.Branch_ID}`}
      })
    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
            <Row>
                <Col md={3} lg={3} style={{height:'100%'}}>
                    {/* <BlankSide/> */}
                </Col>
                <Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
                    <h4>ภาพรวมยอดขาย</h4>
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

export default OverAll
