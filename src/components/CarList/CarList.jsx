import { useDispatch, useSelector } from 'react-redux';
import { StyledCarList } from './CarList.styled';
import { carsData, favoriteCarsData } from '../../redux/car/carSelectors';
import { setPage } from '../../redux/car/carReducer';
import { CarCard } from './СarCard/СarCard';
import { Button } from '../Button/Button';

export const CarList = () => {
  const dispatch = useDispatch();

  const arrCars = useSelector(carsData);
  const favoriteCars = useSelector(favoriteCarsData);

  const isFavoriteCar = (car) => {
    return favoriteCars.some((favoriteCar) => favoriteCar.id === car.id);
  };

  const handleChangePage = () => {
    dispatch(setPage());
  };

  const validArr = Array.isArray(arrCars) && arrCars.length > 0;

  return (
    <>
      <StyledCarList>
        {validArr &&
          arrCars.map((car) => {
            return (
              <CarCard
                key={car.id}
                carData={car}
                favorite={isFavoriteCar(car)}
              />
            );
          })}
      </StyledCarList>

      <Button handleChangePage={handleChangePage}>Load more</Button>
    </>
  );
};
