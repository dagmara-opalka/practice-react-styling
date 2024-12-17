// ./src/components/Card/CardImg.js
import React from 'react';
import { StyledCardImg } from './Card.styled';

const CardImg = ({ src, alt }) => {
    return <StyledCardImg src={src} alt={alt} />;
};

export default CardImg;
