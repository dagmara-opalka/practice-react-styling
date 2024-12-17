// ./02/Task02.js
import React from 'react';
import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

const Task02 = () => {
    return (
        <Row>
            <Col>
                <RBButton variant="primary" size="lg" active>
                    React Bootstrap
                </RBButton>
            </Col>
            <Col>
                <Button variant="primary" size="lg" active>
                    Custom Button
                </Button>
            </Col>
        </Row>
    );
};

export default Task02;
