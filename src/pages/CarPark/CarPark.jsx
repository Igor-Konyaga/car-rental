import { Button } from '../../components/Button/Button';
import { CarList } from '../../components/CarList/CarList';
import { Filtration } from '../../components/Filtration/Filtration';
import { StyledCarPark } from './CarPark.styled';

export const CarPark = () => {
  return (
    <StyledCarPark>
      <Filtration />
      <CarList />
      <Button >Load more</Button>
    </StyledCarPark>
  );
};
