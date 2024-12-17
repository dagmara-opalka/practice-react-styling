// ./src/components/Breadcrumb/Breadcrumb.styled.js
import styled from 'styled-components';

const StyledBreadcrumb = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: ${({ theme }) => theme.colors?.secondary || '#f8f9fa'};
    border-radius: 0.25rem;
`;

const StyledBreadcrumbItem = styled.li`
    display: inline;
    font-size: 1rem;

    &::after {
        content: '/';
        margin: 0 0.5rem;
        color: ${({ theme }) => theme.colors?.primary || '#6c757d'};
    }

    &:last-child::after {
        content: '';
    }

    ${({ active }) =>
        active &&
        `
        color: ${({ theme }) => theme.colors?.primary || '#6c757d'};
        font-weight: bold;
    `}
`;

const StyledBreadcrumbLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors?.primary || '#007bff'};
    &:hover {
        text-decoration: underline;
    }
`;

export { StyledBreadcrumb, StyledBreadcrumbItem, StyledBreadcrumbLink };
