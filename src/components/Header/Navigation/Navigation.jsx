import { NavLink } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styled';

export const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/catalog'}>Car park</NavLink>
      <NavLink to={'/favorites'}>Favorites</NavLink>
    </StyledNavigation>
  );
};
