import { StyledBtn } from './Button.styled';

export const Button = ({ children, center }) => {
  return (
    <StyledBtn center={center} type="button">
      {children}
    </StyledBtn>
  );
};
