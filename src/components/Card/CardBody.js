// ./src/components/Card/CardBody.js
import React from 'react';
import { StyledCardBody } from './Card.styled';

const CardBody = ({ children }) => {
    return <StyledCardBody>{children}</StyledCardBody>;
};

export default CardBody;
