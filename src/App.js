import './App.css';
import React from 'react';
import Dynamic from './Dynamic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { base64DynamoLogo, base64DynamoBackground } from './encodedImages';


class App extends React.Component {
  constructor() {
    super();
    this.setBackgroundImage();
  }

  setBackgroundImage() {
    const backgroundImage = "#base64BackgroundImage"
    if (!backgroundImage.includes('#'))
      base64DynamoBackground = backgroundImage;
  }

  render() {
    return (
      <Container className='fill' fluid="md">
        <Row>
          <Col className='menuOptions' >
            <Row className='bottomMenu'>
              <Col>
                <Row>
                  <div>
                    <img className='dynamoLogo' src={base64DynamoLogo}></img>
                  </div>
                </Row>
                <Row className='welcomeRow'>
                  <div >
                    Welcome to Dynamo!
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className='bottomMenu'>
              <Col>
                <Dynamic />
              </Col>
            </Row>
          </Col>
          <Col className='p-0' >
            <img className='screenBackground' src={base64DynamoBackground}></img>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;