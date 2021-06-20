import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
function Footer() {
    return (
        <>
            <div className="Section-A" style={{ backgroundColor: `#802BB1`, color: `black`, width: '100%', height: "15vh", display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Container style={{ backgroundColor: '#802BB1' , textAlign:"center" }}>
                    <Row>
                        <Col>
                            <div>
                                <h4>จัดทำโดย</h4>
                                <p>นาย อามรเทพ ทันแล้ว 6121650796</p>
                                <p>นาย วัชรินทร์ ราชกุณา 61216507xx</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h4>อาจารย์ที่ปรึกษา</h4>
                                <p>ดร.วรัทภพ ธภัทรสุวรรณ</p>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h4>อาจารย์โปรเจค</h4>
                                <p>ดร.วรัทภพ ธภัทรสุวรรณ</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>

    )
}

export default Footer
