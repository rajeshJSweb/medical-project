import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../../image/banner.jpg';
import banner2 from '../../../../image/banner2.jpg';
import banner3 from '../../../../image/banner3.jpg';

const Banner = () => {
    return (
        <div className="banner-container">
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 img-fluid image"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 image"
                src={banner2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 image"
                src={banner3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;