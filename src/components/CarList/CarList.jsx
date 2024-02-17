import { useDispatch, useSelector } from 'react-redux';
import { StyledCarList } from './CarList.styled';
import {
  allCar,
  carsData,
  favoriteCarsData,
  selectedCar,
} from '../../redux/car/carSelectors';
import { setPage } from '../../redux/car/carReducer';
import { CarCard } from './СarCard/СarCard';
import { Button } from '../Button/Button';

export const CarList = () => {
  const dispatch = useDispatch();

  const arrCars = useSelector(carsData);
  const cars = useSelector(allCar);
  const favoriteCars = useSelector(favoriteCarsData);
  const selectedValue = useSelector(selectedCar);

  const filtrationCars =
    selectedValue !== 'All cars'
      ? cars.filter((car) => car.make === selectedValue)
      : arrCars;

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
          filtrationCars.map((car) => {
            return (
              <CarCard
                key={car.id}
                carData={car}
                favorite={isFavoriteCar(car)}
              />
            );
          })}
      </StyledCarList>

      {filtrationCars.length >= 12 && (
        <Button handleChangePage={handleChangePage}>Load more</Button>
      )}
      {filtrationCars.length === 0 && (
        <p className="car-list__message">There are no matches</p>
      )}
    </>
  );
};
