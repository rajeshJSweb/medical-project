import Button from '@restart/ui/esm/Button';
import './Service.css'
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = ({service}) => {
  const {id, serviceName, details, img } = service;

return (
  <div id="service">
    <Col>
      <Card className="service">
        <Card.Img className="service-img" variant="top" src={img} />
        <Card.Body>
              <Card.Title>{serviceName}</Card.Title>
          <Card.Text>
            {details}
            </Card.Text>
            <Link to={`/booking/${id}`}><Button className="btn btn-danger">Book Now</Button></Link>
            </Card.Body>
      </Card>
    </Col>
  </div>
    );
};

export default Services;