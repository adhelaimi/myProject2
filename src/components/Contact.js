import {Form, Col, Row, Button} from 'react-bootstrap';
import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
              <br/>
              <br/>
             
             <br/>
              <Col style={{marginLeft: '36%'}}>
                
     <Form style={{width: '24rem'}}>
     <h1 style={{textAlign: 'center'}}>Ask US/Feedback</h1>
     <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="email" placeholder="phone number" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Feedback/Questions</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>
<Button style={{marginLeft: '145px'}} variant="dark">Submit</Button>
</Col>
            </div>
        )
    }
}
