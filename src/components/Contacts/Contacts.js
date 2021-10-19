import Button from '@restart/ui/esm/Button';
import './contact.css'
import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const Contacts = () => {
    return (
        <div className='conatact'>
            <h2>Contact with us</h2>
             <Form>
  <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Name" />
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Last Name" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Enter Your Address" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Country</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Bangladesh</option>
        <option>India</option>
        <option>Japan</option>
        <option>China</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <>
  <FloatingLabel controlId="floatingTextarea2" label="Please Write your massege">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
</>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Contacts;