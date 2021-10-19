import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const specialistDetails = ({doctor}) => {
    // const { id, name, img, details } = props.doctor;
    return (
        <div>
            <h1>This is details</h1>
            <Col>
                <Card className="service">
                   <Card.Img className="service-img" variant="top" src={doctor.img} />
                      <Card.Body>
                        <Card.Title>{doctor.name}</Card.Title>
                            <Card.Text>
                              {doctor.details}
                            </Card.Text>
                        </Card.Body>
                     {/*  <Link to={`/doctor/${doctor.id}`}><Button className="btn btn-danger">Get Appointment</Button></Link> */}
                </Card>
            </Col>
        </div>
    );
};

export default specialistDetails;