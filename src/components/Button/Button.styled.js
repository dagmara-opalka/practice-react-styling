// ./src/components/Button/Button.styled.js
import styled, { css } from 'styled-components';

const sizeStyles = {
    sm: css`
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
    `,
    md: css`
        padding: 0.5rem 1rem;
        font-size: 1rem;
    `,
    lg: css`
        padding: 0.75rem 1.25rem;
        font-size: 1.25rem;
    `,
};

const StyledButton = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: all 0.15s ease-in-out;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    /* Warianty przycisków */
    background-color: ${({ theme, variant }) =>
        theme.colors?.[variant] || defaultColors[variant]};
    color: ${({ theme, variant }) => theme.textColors?.[variant] || defaultTextColors[variant]};

    /* Styl dla aktywnego przycisku */
    ${({ active }) =>
        active &&
        css`
            opacity: 0.85;
        `}

    /* Styl dla wyłączonego przycisku */
    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.65;
        `}

    /* Rozmiary przycisku */
    ${({ size }) => sizeStyles[size] || sizeStyles.md};
`;

const defaultColors = {
    primary: '#007bff',
    secondary: '#6c757d',
};

const defaultTextColors = {
    primary: '#fff',
    secondary: '#fff',
};

export { StyledButton };
