import React from 'react'
import {  Col } from 'react-bootstrap'
function List({img , head , body}) {
    return (
        <Col>
            <div className="ListItem" style={{display:"flex", justifyContent:'center' , alignItems:'center' ,width:"100%"}}>
                <img src={img} style={{width:'200px' , height:'200px' , objectFit:'contain'}} alt="PIC"/>
                
                <div className="ListText" style={{display:"flex", justifyContent:'center' , alignItems:'center' , flexDirection:'column' , marginLeft:'2rem'}}>
                    <h5>{head}</h5>
                    <p>{body}</p>
                </div>
            </div>
        </Col>
        
    )
}

export default List
