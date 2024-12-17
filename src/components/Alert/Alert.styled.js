import styled from 'styled-components';

const StyledAlert = styled.div`
    display: block;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;

    background-color: ${({ theme, variant }) => 
        theme.colors?.[variant] || defaultColors[variant]};
    color: ${({ theme, variant }) => 
        theme.textColors?.[variant] || defaultTextColors[variant]};
`;

const defaultColors = {
    primary: '#cce5ff',
    secondary: '#e2e3e5',
};

const defaultTextColors = {
    primary: '#004085',
    secondary: '#383d41',
};

export { StyledAlert };