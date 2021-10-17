import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Services from '../Services/Services';
import Banner from '../Shared/Header/Banner/Banner';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/../services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div>
            {/* Banner / Carousel Section */}
            <div className="my-5">
                <Banner></Banner>
            </div>
            {/* Services Section */}
            <div className="container mb-5">
                <h2 className="my-5">Our Services</h2>
                <Row xs={1} md={2} className="g-4">
                {
                    services.map(service => <Services service={service}></Services>)
                }
                </Row>
            </div>

            {/* Bonus part */}
            <div>
                <h2>This sis bonus</h2>
            </div>
        </div>
    );
};

export default Home;