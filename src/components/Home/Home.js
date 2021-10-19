import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import './Home.css'
import Services from '../Services/Services';
import Banner from '../Shared/Header/Banner/Banner';
import About from '../About/About';
import Specialist from '../Specialist/Specialist';

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
            <div className="mb-5 banner">
                <Banner></Banner>
            </div>
            {/* Services Section */}
            <div className="container mb-5">
                <h2 className="my-5 text-danger service-title">Our Services</h2>
                <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Services service={service}></Services>)
                }
                </Row>
            </div>

            {/* Bonus part */}
            <div id="about" className="container mb-5">
                <About></About>
            </div>
            <div className="container">
                <Specialist></Specialist>
            </div>
        </div>
    );
};

export default Home;