import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
  const { id, serviceName, details, img } = service;
  return (
    <div>
      <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{serviceName}</Card.Title>
          <Card.Text>
            {details}
            </Card.Text>
            <Link to={`booking/${service.id}`}><Button className='btn btn-danger'>Booking Now</Button></Link>
          </Card.Body>
      </Card>
    </Col>
      
    </div>
  );
};

export default Services;