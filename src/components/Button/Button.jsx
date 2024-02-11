import { StyledBtn } from './Button.styled';

export const Button = ({ children, center, handleChangePage }) => {
  return (
    <StyledBtn onClick={handleChangePage} center={center} type="button">
      {children}
    </StyledBtn>
  );
};
