import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Doctor.css'

const Doctors = () => {
    const { id } = useParams();
    const [doctorDetails, setDoctorDetails] = useState([]);
    const [singleDoctor, setSingleDoctor] = useState({});
    useEffect(() => {
        fetch('/../doctorsDetails.json')
            .then(res => res.json())
            .then(data => setDoctorDetails(data))
    }, []);

    useEffect(() => {
        const foundDoctor = doctorDetails.find(doctor => doctor.id==id)
        console.log(foundDoctor);
        setSingleDoctor(foundDoctor);
    },[doctorDetails]);

    return (
        <div className='container'>
            <Row xs={1} md={1} className="g-4">
      <Col>
      <Card className='elements'>
            <Card.Img className='doctorImage' variant="top" src={ singleDoctor?.img} />
        <Card.Body>
              <Card.Title>{singleDoctor?.name}</Card.Title>
          <Card.Text>
          { singleDoctor?.details}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
      </Row>
        </div>
    );
};

export default Doctors;