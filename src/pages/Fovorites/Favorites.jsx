import { CarList } from '../../components/CarList/CarList';
import { StyledPage } from '../Page.styled';

export const Favorites = () => {
  return (
    <StyledPage>
      <CarList favorite />
    </StyledPage>
  );
};
