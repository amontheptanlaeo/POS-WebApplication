import React  , { useState , useEffect} from 'react'
import { Table } from 'react-bootstrap';

function MonthReport({data , data2 , total , day , branchName}) {
    //const [total,setTotal] = useState(0)

    console.log(data)
    console.log(data2)
    const monthNames = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
  "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
];

    // const getTotal = () => {

    //     setTotal(0)
    //     data.map((e,idx)=>{

    //         return data2.map((e2,idx)=>{
    //             if(e.Goods_ID == e2.Goods_ID){
    //                 return( setTotal(prev=>prev+e['SUM(Sell_History.Price_Total)']-(e['SUM(Sell_History.Count_Sell)']*e2['AVG(Goods_History.Cost_Unit)'])))
    //             }
               
    //         })
            
    //     })

    // }
   

    // useEffect(()=>{
    //     getTotal()
    // },[data])


    return (
        <div className='mainContain' style={{display:'flex' , justifyContent:'flex-start' , alignItems:'center' , width:'100%' , margin:'0' , padding:'0' ,marginTop:'1.2rem' , flexDirection:'column'  }}>
            <div className='testPrint' >
                <div className='Header'>
                    <div style={{width:'100%' , textAlign:'center'}}>
                    <h4>{localStorage.getItem('Store_Name')} สาขา {branchName ? branchName:localStorage.getItem('Branch_Name')}</h4>
                    </div>
                    <div style={{width:'100%' , textAlign:'center'}}>
                        <h2>สรุปยอดขายประจำเดือน { monthNames[(day.substring(5))-1] + " " + (parseFloat(day.substring(0,4))+543)}</h2>
                    </div>

                </div>
                <div className='printTable' >
                <Table style={{textAlign:'center'}}>
                            <thead>
                                <tr>
                                    <th>ลำดับที่</th>
                                    <th>สินค้า</th>
                                    <th>ยอดจำนวน</th>
                                    <th>ยอดขาย</th>
                                    <th>กำไร</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((e,idx)=>{

                                        return data2.map((e2,idx)=>{
                                            if(e.Goods_ID == e2.Goods_ID){

                                                return(
                                                    <tr>
                                                        <th scope="row">{idx+1}</th>
                                                        <td>{e2.Goods_Name}</td>
                                                        <td>{e['SUM(Sell_History.Count_Sell)']}</td>
                                                        <td>{e['SUM(Sell_History.Price_Total)']} บาท</td>
                                                        <td>{e['SUM(Sell_History.Price_Total)']-(e['SUM(Sell_History.Count_Sell)']*e2['AVG(Goods_History.Cost_Unit)'])} บาท</td>
                                                     </tr>
                                                )

                                            }
                                           
                                        })
                                        
                                        
                                    })
                                }
                          
                                 <tr>
                                    <th scope="row"></th>
                                    <td></td>
                                    <td></td>
                                    <td><b>รวม</b></td>
                                    <td>{total} บาท</td>
                                </tr>
                              
                            </tbody>
                        </Table>

                </div>
                
            </div>

        </div>
    )
}

export default MonthReport
