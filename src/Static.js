
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
            <Container>
                <Row>Button</Row>
                <Row>Button</Row>
                <Row>Button</Row>
            </Container>
        )
    }
}

export default Static;