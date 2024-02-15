import { StyledLogoLink } from './Logo.styled';
import { ReactComponent as IconCar } from '../../../../public/car.svg';
// import { Link } from 'react-router-dom';
export const Logo = () => {
  return (
    <StyledLogoLink to={'tel:+380730000000'}>
      <IconCar className="logo-icon" />
      <p className="logo-title">car rental</p>
    </StyledLogoLink>
  );
};
