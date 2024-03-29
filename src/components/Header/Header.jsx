import { StyledHeader } from './Header.styled';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {
  return (
    <StyledHeader>
      <div className='warraper-nav'>
        <Logo />
        <Navigation />
      </div>
    </StyledHeader>
  );
};
