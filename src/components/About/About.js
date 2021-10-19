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
                <div className="details">Soon after severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) vaccinations became public, menstruating women reported unexpected menstrual bleeding experiences post-vaccination. Unfortunately, menstrual changes were not monitored during vaccine trials, and it wasn't easy to understand whether this observation was coincidental or potentially a side effect.</div>
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