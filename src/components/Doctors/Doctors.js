import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
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
        <Row xs={1} md={1} className="details-container">
        <Col>
        <div>
            <div className="image">
                <img src={ singleDoctor?.img} alt="" />
            </div>
        </div>
        <div>
        <Card>   
        <Card.Body>
        <Card.Title className='fs-5'>Name: {singleDoctor?.name}</Card.Title> 
          <Card.Text>Gender: { singleDoctor?.gender}  Age: <span className='fw-bold'>{ singleDoctor?.age}</span></Card.Text>
          <Card.Text></Card.Text>
          <Card.Text>Phone: <span className='fw-bold text-warning'>{ singleDoctor?.phone}</span></Card.Text>
          <Card.Text>Country: <span className='fw-bold text-danger'>{ singleDoctor?.country}</span></Card.Text>
                  <Card.Text>Designation {singleDoctor?.details}</Card.Text>
                  <Link to='/home'><Button className='btn btn-danger'>Get Serial</Button></Link>
          </Card.Body>
      </Card>
      </div>
    </Col>
      </Row>
        </div>
    );
};

export default Doctors;