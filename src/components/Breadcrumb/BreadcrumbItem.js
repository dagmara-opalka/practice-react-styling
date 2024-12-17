// ./src/components/Breadcrumb/BreadcrumbItem.js
import React from 'react';
import { StyledBreadcrumbItem, StyledBreadcrumbLink } from './Breadcrumb.styled';

const BreadcrumbItem = ({ href, active, children, ...props }) => {
    if (active) {
        return (
            <StyledBreadcrumbItem active {...props}>
                {children}
            </StyledBreadcrumbItem>
        );
    }

    return (
        <StyledBreadcrumbItem {...props}>
            <StyledBreadcrumbLink href={href}>{children}</StyledBreadcrumbLink>
        </StyledBreadcrumbItem>
    );
};

export default BreadcrumbItem;
