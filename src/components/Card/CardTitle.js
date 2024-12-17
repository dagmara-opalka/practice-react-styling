// ./src/components/Card/CardTitle.js
import React from 'react';
import { StyledCardTitle } from './Card.styled';

const CardTitle = ({ children }) => {
    return <StyledCardTitle>{children}</StyledCardTitle>;
};

export default CardTitle;
