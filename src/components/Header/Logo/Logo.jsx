import { StyledLogoLink } from './Logo.styled';
import { ReactComponent as IconCar } from '../../../../public/car.svg';
export const Logo = () => {
  return (
    <StyledLogoLink to={'/'}>
      <IconCar className="logo-icon" />
      <p className="logo-title">car rental</p>
    </StyledLogoLink>
  );
};
