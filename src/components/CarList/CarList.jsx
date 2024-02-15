import { useDispatch, useSelector } from 'react-redux';
import { StyledCarList } from './CarList.styled';
import { carsData, favoriteCarsData } from '../../redux/car/carSelectors';
import { setPage } from '../../redux/car/carReducer';
import { CarCard } from './СarCard/СarCard';
import { Button } from '../Button/Button';

export const CarList = ({ favorite }) => {
  const dispatch = useDispatch();

  const arrCars = useSelector(favorite ? favoriteCarsData : carsData);

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
                id={car.id}
                year={car.year}
                make={car.make}
                type={car.type}
                favorite={car.favorite}
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

      {!favorite && (
        <Button handleChangePage={handleChangePage}>Load more</Button>
      )}

      {favorite && arrCars.length === 0 && (
        <p className="car-list__message">There are no selected cars</p>
      )}
    </>
  );
};
