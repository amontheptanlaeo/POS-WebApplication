import React , { useState , useEffect } from 'react'
import { Table } from 'react-bootstrap';

function RecieveReport({ data , bill}) {
    const [total,setTotal] = useState(0)

    useEffect(()=>{
        setTotal(0)
        data.map(e=>setTotal(prev=>prev+e.Cost_Total))
    },[data])

    return (
        <div className='mainContain' style={{display:'flex' , justifyContent:'flex-start' , alignItems:'center' , width:'100%' , margin:'0' , padding:'0' ,marginTop:'1.2rem' , flexDirection:'column'  }}>
            <div className='testPrint' >
                <div className='Header'>
                    <div style={{width:'100%' , textAlign:'center'}}>
                        <h4>{localStorage.getItem('Store_Name')} สาขา {localStorage.getItem('Branch_Name')}</h4>
                    </div>
                    <div style={{width:'100%' , textAlign:'center'}}>
                        <h1>รายการบิลรับสินค้า</h1>
                    </div>
                    <div style={{display:'flex' , justifyContent:'space-between' , alignItems:'center' , width:'100%'   , padding:'1rem 2rem' , border:'1px solid black' , borderRadius:'0.5rem'}}>
                        <div>
                            <div>รับมาจาก: {
                                    data.map((e,idx)=>{
                                        if(idx == 0) return e.Origin
                                        return
                                    })
                                }
                              </div>
                        </div>
                        <div>
                            <div>เลขที่บิล: {bill}</div>
                            <div>วันที่: {
                                    data.map((e,idx)=>{
                                        if(idx == 0) return e.DateAdd_History.replace("T", " เวลา: ");
                                        return
                                    })
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
                                    <th>ลำดับที่</th>
                                    <th>สินค้า</th>
                                    <th>ราคา/หน่วย</th>
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
                                                <td>{e.Cost_Unit} บาท</td>
                                                <td>{e.Count_Recive}</td>
                                                <td>{e.Cost_Total} บาท</td>
                                             </tr>
                                        )
                                    })
                                }
                                <tr>
                                                <th scope="row"></th>
                                                <td></td>
                                                <td></td>
                                                <td><b>ต้นทุนรวม</b></td>
                                                <td>{total} บาท</td>
                                </tr>
                              
                            </tbody>
                        </Table>
                </div>
                
            </div>


            <div className='footer' style={{display:'flex' , justifyContent:'flex-start' , alignItems:'center' , width:'100%' , padding:'1rem 2rem'}}>
                <div style={{textAlign:'center' , marginRight:'5rem'}}>
                    <h4>............................</h4>
                    <p>(ผู้ส่งของ)</p>
                </div>
                <div style={{textAlign:'center'}}>
                    <h4>............................</h4>
                    <p>(ผู้รับของ)</p>
                </div>
                
            </div>

        </div>
        
    )
}

export default RecieveReport
