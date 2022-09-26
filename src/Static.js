
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
                    <button className='primaryButton' onClick={this.menuOnClick}>Sign in</button>
                </Row>
                <Row className='mt-3'>
                    <button className='secondaryButton' onClick={this.menuOnClick}>Launch Dynamo 2.14.0</button>
                </Row>
                <Row className='mt-3'>
                    <button  className='primaryButton' onClick={this.menuOnClick}>Import settings</button>
                </Row>
                <Row className='mt-3'>
                    <div className='p-0 checkboxAllow'>
                        <input type="checkbox" /> Don't show this screen again
                    </div>
                </Row>
            </Container>
        )
    }

    menuOnClick() {

    }
}

export default Static;