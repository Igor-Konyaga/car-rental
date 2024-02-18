import styled from 'styled-components';

export const StyledBtn = styled.button`
  margin: ${({ center }) => (center ? '0 auto' : '')};
  margin-bottom: 100px;

  font-weight: 500;

  color: #3470ff;
  background-color: transparent;
  border: none;
  transition: 0.3s;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
