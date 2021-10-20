import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import './Booking.css'

const Booking = () => {
  const { id } = useParams();

  const [serviceDetails, setServiceDetails] = useState([]);
  const [singleServiceDetails, setSingleServicedetails]=useState({})

  useEffect(() => {
    fetch('/../services.json')
      .then(res => res.json())
      .then(data => setServiceDetails(data))
  },[])

  useEffect(() => {
    const getService = serviceDetails.find(singleService => singleService.id==id)
    console.log(getService);
    setSingleServicedetails(getService);
  },[serviceDetails])
  return (
    <div className='container'>
      <div className='top-title'>
        <h1>Our Services</h1>
      </div>
      <Row xs={1} md={1} className="g-4">
      <Col>
      <Card>
            <Card.Img className='image' variant="top" src={ singleServiceDetails?.img} />
            <Card.Body>
              <h1>$<span className='text-danger fs-3'>{ singleServiceDetails?.price}</span></h1>
              <Card.Title>{ singleServiceDetails?.serviceName}</Card.Title>
          <Card.Text>
          { singleServiceDetails?.details}
              </Card.Text>
              <Link to='/contact'><Button className='btn btn-danger'>Contact Us</Button></Link>
        </Card.Body>
      </Card>
    </Col>
      </Row>
    </div>
  );
};

export default Booking;