import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountComponent from '../components/CountComponent';

function Count() {
    return (
        <div className='flexContainer'>
            <div className='box'>
                <Container>
                    <Row className='pageRow'>
                        <Col className='pageColumn leftColumn' md={6}>
                            <div>
                                <h1 className='pageTitle'>Count</h1>
                                <h5 className='bottomSpace'>Click an option to change the number</h5>
                            </div>
                        </Col>
                        <Col className='pageColumn rightColumn' md={6}><CountComponent /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Count