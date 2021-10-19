import Button from '@restart/ui/esm/Button';
import './article.css'
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('/../articles.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    },[])
    
    return (
        <div className="container">
            <div className="article mb-5">
                <h1>Articles</h1>
                <h4>Our Published Article</h4>
            </div>
            <Row xs={1} md={4} className="g-4 service">
                {
                    articles.map(article => <Col>
                        <Card className="service">
                          <Card.Img className="service-img" variant="top" src={article.img} />
                          <Card.Body>
                                <Card.Title>{ article.articlesTitle}</Card.Title>
                            <Card.Text>
                              {article.details}
                              </Card.Text>
                              <Link to="/home"><Button className="btn btn-danger">Read More</Button></Link>
                              </Card.Body>
                        </Card>
                      </Col>)
                }
            </Row>
        </div>
    );
};

export default Articles;