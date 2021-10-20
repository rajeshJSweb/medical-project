import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
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
      
      <Row xs={1} md={1} className="g-4">
      <Col>
      <Card>
            <Card.Img className='image' variant="top" src={ singleServiceDetails?.img} />
        <Card.Body>
              <Card.Title>{ singleServiceDetails?.serviceName}</Card.Title>
          <Card.Text>
          { singleServiceDetails?.details}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
      </Row>
    </div>
  );
};

export default Booking;