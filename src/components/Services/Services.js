import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = ({service}) => {
    return (
        <div>
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
            </Card.Text>
            <Link to="/details"><Button>Book Now</Button></Link>
            </Card.Body>
            
      </Card>
    </Col>
        </div>
    );
};

export default Services;