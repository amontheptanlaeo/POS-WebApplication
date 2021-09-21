import React , { useState } from 'react'
import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Input,InputGroup,InputGroupText,InputGroupAddon
} from "reactstrap";
import '../styles/ModalSell.scss'
function ModalSell({show , onHide , toggle}) {
    return (
        <Modal isOpen={show} toggle={toggle} className='testModal' centered>
            <ModalHeader toggle={toggle}>หน้าต่างชำระ</ModalHeader>
            <ModalBody>
                <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'flex-start'}}>
                    <h4>ยอดชำระ</h4>
                    <div className="CasheerBoxSell" >
                    <div className="TotalBox">
                        <p>96.00</p>
                    </div>
                    </div>
                    <h4>จำนวนเงิน</h4>
                    <Input/>
                    <div style={{marginTop:'1rem' ,display:'flex' ,flexWrap:'wrap'}}>
                        <div className="RecieveMoney">20</div>
                        <div className="RecieveMoney">50</div>
                        <div className="RecieveMoney">100</div>
                        <div className="RecieveMoney">500</div>
                        <div className="RecieveMoney">1000</div>
                        <div className="RecieveMoney">10</div>
                        <div className="RecieveMoney">5</div>
                        <div className="RecieveMoney">2</div>
                        <div className="RecieveMoney">1</div>
                        <div className="RecieveMoney">0.25</div>
                        <div className="RecieveMoney">0.5</div>
                    </div>
                </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalSell
