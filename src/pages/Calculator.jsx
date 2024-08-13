import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalculatorComponent from '../components/CalculatorComponent';

function Calculator() {
    return (
        <div className='flexContainer'>
            <div className='box'>
                <Container>
                    <Row className='pageRow'>
                        <Col className='pageColumn leftColumn' md={6}><h1 className='pageTitle'>Calculator</h1></Col>
                        <Col className='pageColumn rightColumn' md={6}><CalculatorComponent /></Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default Calculator