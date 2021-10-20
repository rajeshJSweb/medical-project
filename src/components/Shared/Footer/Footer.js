import React from 'react';
import './Footer.css'
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer-container bg-dark mt-5 d-flex">
                <div className="left text-white py-5">
                    <h1><span className="medi">M</span>edibles</h1>
                    <p className='description'>Soon after severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) vaccinations became public, menstruating women reported unexpected menstrual bleeding experiences post-vaccination. </p>
                </div>
                <div className="lefy-center text-white p-5">
                    <h4 className="heading">Department</h4>
                    <div className="d-flex dep-item">
                        <Link className="item">Surgery</Link>
                        <Link className="item">Wome's Health</Link>
                        <Link className="item">Radiology</Link>
                        <Link className="item">Medicine</Link>
                    </div>
                </div>
                <div className="lefy-center text-white p-5">
                    <h4 className="heading">Department</h4>
                    <div className="d-flex dep-item">
                        <Link className="item">Surgery</Link>
                        <Link className="item">Wome's Health</Link>
                        <Link className="item">Radiology</Link>
                        <Link className="item">Medicine</Link>
                    </div>
                </div>
                <div className="right text-white p-5">
                    <h3 className="footer-text text-white">Get In Touch</h3>
                    <p  className="footer-text text-white" >Support Available for 24/7</p>
                    <h3 className="footer-text text-white">Support@email.com</h3>
                    <h5 className="footer-text text-white">Mon to Fri : 08:30 - 18:00</h5>
                </div>
            </div>
            <div className="footer-buttom">
                <p>Copyright © 2021, Designed & Developed by Sengbath Rajesh Khoksi</p>
            </div>
        </div>
    );
};

export default Footer;