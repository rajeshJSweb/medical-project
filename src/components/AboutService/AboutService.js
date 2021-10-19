import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AboutService = ({ service }) => {
    const { serviceName ,img, details} = service;
    return (
        <div>
          <Col>
            <Card className="service">
              <Card.Img className="service-img" variant="top" src={img} />
              <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                <Card.Text>
                  {details}
                  </Card.Text>
                  </Card.Body>
            </Card>
          </Col>                      
        </div>
    );
};

export default AboutService;