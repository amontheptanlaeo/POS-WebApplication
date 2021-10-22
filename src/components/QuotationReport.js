import React  , { useState , useEffect } from 'react'
import { Table } from 'react-bootstrap';

function QuotationReport({NameReciver , Addr , Contact , cart}) {
    const [total,setTotal] = useState(0)

    const currentdate = new Date();
    const dateOnAdd = currentdate.getFullYear() +
    "-" +
    (currentdate.getMonth() + 1 < 10
      ? "0" + (currentdate.getMonth() + 1)
      : currentdate.getMonth() + 1) +
    "-" +
    (currentdate.getDate() < 10
      ? "0" + currentdate.getDate()
      : currentdate.getDate())

      useEffect(()=>{
        setTotal(0)
        cart.map(e=>setTotal(prev=>prev+e.Total))
    },[cart])

      


    

    return (
        <div className='mainContain' style={{display:'flex' , justifyContent:'flex-start' , alignItems:'center' , width:'100%' , margin:'0' , padding:'0' ,marginTop:'1.2rem' , flexDirection:'column'  }}>
            <div className='testPrint' >
                <div className='Header'>
                    <div style={{width:'100%' , textAlign:'center'}}>
                        <h4>{localStorage.getItem('Store_Name')} สาขา {localStorage.getItem('Branch_Name')}</h4>
                    </div>
                    <div style={{width:'100%' , textAlign:'center'}}>
                        <h1>ใบเสนอราคา</h1>
                    </div>
                    <div style={{display:'flex' , justifyContent:'space-between' , alignItems:'center' , width:'100%'   , padding:'1rem 2rem' , border:'1px solid black' , borderRadius:'0.5rem'}}>
                        <div>
                            <div>ลูกค้า: { NameReciver }</div>
                            <div>ที่อยู่: { Addr }</div>
                            <div>ติดต่อ: { Contact }</div>
                        </div>
                        <div>
                            <div>เลขที่บิล: {1123213}</div>
                            <div>วันที่: { dateOnAdd }</div>
                            <div>ผู้สร้างใบ:  { localStorage.getItem('UserName') }</div>
                        </div>
                    </div>
                </div>
                <div className='printTable' >
                <Table style={{textAlign:'center'}}>
                            <thead>
                                <tr>
                                    <th>ลำดับที่</th>
                                    <th>สินค้า</th>
                                    <th>ราคา/หน่วย</th>
                                    <th>จำนวน</th>
                                    <th>รวม</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((e,idx)=>{
                                 
                                        return(
                                            <tr>
                                                <th scope="row">{idx+1}</th>
                                                <td>{e.Goods_Name}</td>
                                                <td>{e.Price}</td>
                                                <td>{e.Count}</td>
                                                <td>{e.Total}</td>
                                             </tr>
                                        )
                                    })
                                }
                                 <tr>
                                                <th scope="row"></th>
                                                <td></td>
                                                <td></td>
                                                <td><b>รวม</b></td>
                                                <td>{total}</td>
                                </tr>
                              
                            </tbody>
                        </Table>

                </div>
                
            </div>


            <div className='footer' style={{display:'flex' , justifyContent:'flex-start' , alignItems:'center' , width:'100%' , padding:'1rem 2rem' }}>
                <div style={{textAlign:'center' , marginRight:'5rem'}}>
                    <h4>............................</h4>
                    <p>(ผู้เสนอราคา)</p>
                </div>
                <div style={{textAlign:'center'}}>
                    <h4>............................</h4>
                    <p>(ผู้อนุมัติ)</p>
                </div>
                
            </div>

        </div>
    )
}

export default QuotationReport
