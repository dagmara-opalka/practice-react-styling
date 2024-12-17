// ./src/components/Tabs/Tabs.styled.js
import styled from 'styled-components';

export const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TabList = styled.div`
    display: flex;
    border-bottom: 2px solid ${({ theme }) => theme.colors?.secondary || '#e9ecef'};
    margin-bottom: 1rem;
`;

export const TabButton = styled.button`
    flex: 1;
    padding: 0.75rem 1rem;
    background-color: ${({ isActive, theme }) =>
        isActive ? theme.colors?.primary || '#007bff' : 'transparent'};
    color: ${({ isActive, theme }) =>
        isActive ? theme.textColors?.secondary || '#fff' : theme.textColors?.primary || '#000'};
    border: none;
    border-bottom: ${({ isActive }) =>
        isActive ? '3px solid' : 'none'};
    border-bottom-color: ${({ theme }) => theme.colors?.primary || '#007bff'};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
    text-align: center;
    font-size: 1rem;

    &:hover {
        background-color: ${({ isActive, theme, disabled }) =>
            !disabled ? (isActive ? theme.colors?.primary : theme.colors?.secondary || '#f8f9fa') : 'transparent'};
    }
`;

export const TabContent = styled.div`
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors?.secondary || '#f8f9fa'};
    border: 1px solid ${({ theme }) => theme.colors?.primary || '#007bff'};
    border-radius: 0.25rem;
`;
