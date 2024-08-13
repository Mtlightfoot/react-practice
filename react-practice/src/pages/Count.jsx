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
                        <Col className='pageColumn' md={6}><h1 className='pageTitle'>Count</h1></Col>
                        <Col className='pageColumn' md={6}><CountComponent /></Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default Count