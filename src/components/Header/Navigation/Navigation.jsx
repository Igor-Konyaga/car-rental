import { NavLink } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styled';

export const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink to={'/home'}>Home</NavLink>
      <NavLink to={'/catalog'}>Car park</NavLink>
      <NavLink to={'/favorites'}>Favorite</NavLink>
    </StyledNavigation>
  );
};
