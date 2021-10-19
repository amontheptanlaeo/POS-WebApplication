import React  , { useState , useEffect } from 'react'
import { Table } from 'react-bootstrap';

function SellReport({data ,bill}) {
    const [total,setTotal] = useState(0)

    useEffect(()=>{
        data.map(e=>setTotal(prev=>prev+e.Price_Total))
    },[data])

    return (
        <div className='mainContain' style={{display:'flex' , justifyContent:'flex-start' , alignItems:'center' , width:'100%' , margin:'0' , padding:'0' ,marginTop:'1.2rem' , flexDirection:'column'  }}>
            <div className='testPrint' >
                <div className='Header'>
                    <div style={{width:'100%' , textAlign:'center'}}>
                        <h4>Mini Shop สาขา กำแพงแสน</h4>
                    </div>
                    <div style={{width:'100%' , textAlign:'center'}}>
                        <h1>รายการบิลรับสินค้า</h1>
                    </div>
                    <div style={{display:'flex' , justifyContent:'space-between' , alignItems:'center' , width:'100%'   , padding:'1rem 2rem' , border:'1px solid black' , borderRadius:'0.5rem'}}>
                        <div>
                            <div>รับมาจาก: {
                                    // data.map((e,idx)=>{
                                    //     if(idx == 0) return e.Origin
                                    //     return
                                    // })
                                }
                              </div>
                        </div>
                        <div>
                            <div>เลขที่บิล: {bill}</div>
                            <div>วันที่: {
                                    // data.map((e,idx)=>{
                                    //     if(idx == 0) return e.DateAdd_History
                                    //     return
                                    // })
                                }</div>
                            <div>ผู้บันทึก:  {
                                    data.map((e,idx)=>{
                                        if(idx == 0) return e.FirstName +" "+ e.LastName
                                        return
                                    })
                                }</div>
                        </div>
                    </div>
                </div>
                <div className='printTable' >
                <Table style={{textAlign:'center'}}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>สินค้า</th>
                                    <th>ราคา</th>
                                    <th>จำนวน</th>
                                    <th>รวม</th>
            
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((e,idx)=>{
                                        
                                        return(
                                            <tr>
                                                <th scope="row">{idx+1}</th>
                                                <td>{e.Goods_Name}</td>
                                                <td>{e.Price_Unit}</td>
                                                <td>{e.Count_Sell}</td>
                                                <td>{e.Price_Total}</td>
                                             </tr>
                                        )
                                    })
                                }
                              
                            </tbody>
                        </Table>
                        <p>{total}</p>

                </div>
                
            </div>


            {/* <div style={{display:'flex' , justifyContent:'flex-start' , alignItems:'center' , width:'100%' , padding:'1rem 2rem' }}>
                <div style={{textAlign:'center' , marginRight:'5rem'}}>
                    <h4>..........................</h4>
                    <p>(ผู้ส่งสินค้า)</p>
                </div>
                <div style={{textAlign:'center'}}>
                    <h4>..........................</h4>
                    <p>(ผู้รับสินค้า)</p>
                </div>
                
            </div> */}

        </div>
        
    )
}

export default SellReport
