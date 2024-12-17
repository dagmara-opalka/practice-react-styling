// ./src/components/Card/CardText.js
import React from 'react';
import { StyledCardText } from './Card.styled';

const CardText = ({ children }) => {
    return <StyledCardText>{children}</StyledCardText>;
};

export default CardText;
