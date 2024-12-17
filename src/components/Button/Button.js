// ./src/components/Button/Button.js
import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ children, variant = 'primary', size = 'md', active, disabled, ...props }) => {
    return (
        <StyledButton
            variant={variant}
            size={size}
            active={active}
            disabled={disabled}
            {...props}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
