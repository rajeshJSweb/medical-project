import React, { useState ,useEffect} from 'react';
import { Row } from 'react-bootstrap';
import AboutService from '../AboutService/AboutService';
import './About.css'

const About = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/../aboutService.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div className="mt-5">
            <div className="about-container">
                <div className="title">
                    <h1>Personal care for your healthy living</h1>
                </div>
                <div className="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, minima.</div>
            </div>
            <Row xs={1} md={4} className="g-4 service">
                {
                    services.map(service => <AboutService service={service}></AboutService>)
                }
            </Row>
        </div>
    );
};

export default About;