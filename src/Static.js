
import React from 'react';
import './Static.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Static extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container className='pr-3'>
                <Row className='mt-3'>
                    <button onClick={''}>Sign in</button>
                </Row>
                <Row className='mt-3'>
                    <button onClick={''}>Launch</button>
                </Row>
                <Row className='mt-3'>
                    <button onClick={''}>Settings Import</button>
                </Row>
                <Row className='mt-3'>
                    <div className='p-0 checkboxAllow'>
                        <input type="checkbox" /> fss
                    </div>
                </Row>
            </Container>
        )
    }
}

export default Static;