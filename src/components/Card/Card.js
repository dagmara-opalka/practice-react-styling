// ./src/components/Card/Card.js
import React from 'react';
import { StyledCard } from './Card.styled';

const Card = ({ children, className }) => {
    return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;
