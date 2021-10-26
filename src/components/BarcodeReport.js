import React from 'react'
import BarcodeGen from 'react-barcode'
function BarcodeReport({data , count}) {
    const temp = []
    for(let i=0;i<count;i++){
        temp.push(data.barcode)
    }
    return (
         <div className='mainContain' style={{display:'flex' , justifyContent:'flex-start' , alignItems:'center' , width:'100%' , margin:'0' , padding:'0' ,marginTop:'1.2rem' , flexDirection:'column'  }}>
            <div className='testPrint' >
                <div>
                    {
                        temp.map((e)=> <BarcodeGen value={e}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default BarcodeReport
