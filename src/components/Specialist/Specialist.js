import React, { useEffect, useState } from 'react';
import './Specialist.css'
import { Card, Col, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';
import specialistDetails from './specialistDetails';

const Specialist = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/../doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    },[])
    return (
        <div>
            <div className="specialist-container mb-5">
                <div className="div-title">
                    <Col>
                    <h1 className="buttom-title">Meet Our Specialist</h1>
                    <p>Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles</p>
                    </Col>
                </div>
                <Row xs={1} md={4} className="g-4">
                    {
                        doctors.map(doctor => <Col>
                            <Card className="service">
                               <Card.Img className="service-img" variant="top" src={doctor.img} />
                                  <Card.Body>
                                    <Card.Title>{doctor.name}</Card.Title>
                                        <Card.Text>
                                          {doctor.details}
                                        </Card.Text>
                                    </Card.Body>
                                  <Link to={`/doctor/${doctor.id}`}><Button className="btn btn-danger">Get Appointment</Button></Link>
                            </Card>
                        </Col>)
                }
                   
                </Row>
            </div>
        </div>
    );
};

export default Specialist;