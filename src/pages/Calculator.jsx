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
                        <Col className='pageColumn leftColumn' md={6}>
                            <div>
                                <h1 className='pageTitle'>Calculator</h1>
                                <h5 className='bottomSpace'>You know how a calculator works...</h5>
                            </div>
                        </Col>
                        <Col className='pageColumn rightColumn' md={6}><CalculatorComponent /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Calculator