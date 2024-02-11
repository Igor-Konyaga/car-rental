import { useDispatch, useSelector } from 'react-redux';
import { StyledCarList } from './CarList.styled';
import { carsData } from '../../redux/car/carSelectors';
import { useEffect } from 'react';
import { fetchAllCar } from '../../redux/car/carReducer';
import { CarCard } from './СarCard/СarCard';

export const CarList = () => {
  const dispatch = useDispatch();
  const arrCars = useSelector(carsData);

  useEffect(() => {
    const params = {
      page: 1,
      limit: 12,
    };
    dispatch(fetchAllCar(params));
  }, [dispatch]);

  const validArr = Array.isArray(arrCars) && arrCars.length > 0;

  return (
    <StyledCarList>
      {validArr &&
        arrCars.map((car) => {
          return (
            <CarCard
              key={car.id}
              year={car.year}
              make={car.make}
              type={car.type}
              img={car.img}
              rentalPrice={car.rentalPrice}
              address={car.address}
              mileage={car.mileage}
              functionalities={car.functionalities}
              model={car.model}
            />
          );
        })}
    </StyledCarList>
  );
};
