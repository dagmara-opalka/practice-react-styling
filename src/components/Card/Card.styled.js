import styled from 'styled-components';

export const StyledCard = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.primary || '#ccc'};
    border-radius: 0.25rem;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
`;

export const StyledCardBody = styled.div`
    padding: 1rem;
`;

export const StyledCardImg = styled.img`
    width: 100%;
    height: auto;
`;

export const StyledCardTitle = styled.h5`
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.textColors.primary || '#000'};
`;

export const StyledCardText = styled.p`
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.textColors.secondary || '#555'};
`;
