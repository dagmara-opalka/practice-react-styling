// ./src/components/Breadcrumb/Breadcrumb.js
import React from 'react';
import { StyledBreadcrumb } from './Breadcrumb.styled';

const Breadcrumb = ({ children, ...props }) => {
    return <StyledBreadcrumb {...props}>{children}</StyledBreadcrumb>;
};

export default Breadcrumb;