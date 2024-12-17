// ./05/Task05.js
import React from 'react';
import Card from './../src/components/Card';
import Button from './../src/components/Button';
import { Row, Col } from 'react-bootstrap';

const Task05 = () => {
    return (
        <Row>
            <Col>
                <h4>React Bootstrap Card</h4>
                {/* Możesz tutaj umieścić przykładową kartę z React Bootstrap */}
            </Col>
            <Col>
                <h4>Custom Card</h4>
                <Card>
                    <Card.Img src="https://via.placeholder.com/300x150" alt="Example image" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            This is a simple card example created using React and styled-components.
                        </Card.Text>
                        <Button variant="primary" size="sm">
                            Go somewhere
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Task05;
