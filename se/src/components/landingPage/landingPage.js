import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, CardBody, CardSubtitle, CardImg,CardTitle,CardText,Button, Form ,FormGroup, Input, Label } from 'reactstrap';
import nova from '../../assets/images/nova.png';
import './LandingPage.css'

const propTypes = {};

const defaultProps = {};

export default function LandingPage(props) {
    return (
        <div className="bg">
        <Container  > 
    <Row >
     <Col xs={{offset: 4, size: 4}}>
     <img src={nova} class="img-fluid" alt="Responsiveimage"/></Col>
    </Row>
    <Row className="top-buffer"> 
    <Col xs={{offset: 4, size: 4}}>
    <Card>
        <CardBody>
          <CardTitle className='text-center'>Sign in</CardTitle>
          <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
          <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        </Form>
        <Button outline color="primary" size="lg" className="btn-block">Sign in</Button>{' '}
        </CardBody>
      </Card>
      </Col>
      </Row>
        </Container>
        </div>
    );
}

LandingPage.propTypes = propTypes;
LandingPage.defaultProps = defaultProps;