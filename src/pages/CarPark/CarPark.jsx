import { CarList } from '../../components/CarList/CarList';
import { Filtration } from '../../components/Filtration/Filtration';
import { StyledPage } from '../Page.styled';

export const CarPark = () => {
  return (
    <StyledPage>
      <Filtration />
      <CarList />
    </StyledPage>
  );
};
