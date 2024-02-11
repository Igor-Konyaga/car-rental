import { useDispatch, useSelector } from 'react-redux';
import { StyledCarList } from './CarList.styled';
import { carsData } from '../../redux/car/carSelectors';
import { useEffect, useState } from 'react';
import { fetchAllCar } from '../../redux/car/carReducer';
import { CarCard } from './СarCard/СarCard';
import { Button } from '../Button/Button';

export const CarList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const arrCars = useSelector(carsData);

  useEffect(() => {
    dispatch(fetchAllCar(page));
  }, [dispatch, page]);

  const handleChangePage = () => {
    setPage(page + 1);
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
                year={car.year}
                make={car.make}
                type={car.type}
                img={car.img}
                rentalPrice={car.rentalPrice}
                address={car.address}
                mileage={car.mileage}
                engineSize={car.engineSize}
                model={car.model}
                rentalCompany={car.rentalCompany}
              />
            );
          })}
      </StyledCarList>
      <Button handleChangePage={handleChangePage}>Load more</Button>
    </>
  );
};
