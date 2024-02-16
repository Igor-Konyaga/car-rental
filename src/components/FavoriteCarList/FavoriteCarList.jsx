import { useSelector } from 'react-redux';
import { favoriteCarsData } from '../../redux/car/carSelectors';
import { StyledCarList } from '../CarList/CarList.styled';
import { CarCard } from '../CarList/СarCard/СarCard';

export const FavoriteCarList = () => {
  const favoriteCars = useSelector(favoriteCarsData);

  const validArr = Array.isArray(favoriteCars) && favoriteCars.length > 0;

  return (
    <>
      <StyledCarList>
        {validArr &&
          favoriteCars.map((car) => {
            return <CarCard key={car.id} carData={car} favorite />;
          })}
      </StyledCarList>

      {favoriteCars.length === 0 && (
        <p className="car-list__message">There are no selected cars</p>
      )}
    </>
  );
};
