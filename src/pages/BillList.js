import React from 'react'
import {
    Row,
    Col,

} from "reactstrap";
// import BlankSide from '../components/BlankSide';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

function BillList() {
    const columns = [
        { field: 'id', headerName: '#', width: 100 },
        { field: 'firstName', headerName: 'รายการ', width: '800' ,
        renderCell: (params) => (
            <>
                <Link to={`/history/sell/`+params.row.firstName}>
                    {params.row.firstName}
                </Link>
            </>)
        },
        {
          field: 'age',
          headerName: 'วันที่ ว/ด/ป',
          type: 'date',
          width: 500,
        },
      ];
      
      const rows = [
        { id: 1, firstName: `S2345`, age: '20/08/21' },
        { id: 2, firstName: 'S2344', age: '18/08/21' },
      ];
    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
        <Row>
            <Col md={3} lg={3} style={{height:'100%'}}>
                {/* <BlankSide/> */}
            </Col>
            <Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
                <h4>ประวัติรายการขายสินค้า</h4>
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
    );
}

export default BillList
