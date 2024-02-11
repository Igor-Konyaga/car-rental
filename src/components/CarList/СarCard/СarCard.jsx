import { Link } from 'react-router-dom';
import { StyledCard } from './СarCard.styled';

export const CarCard = ({
  id,
  year,
  make,
  model,
  type,
  img,
  rentalPrice,
  address,
  mileage,
  functionalities,
}) => {
  return (
    <StyledCard>
      <div className="card__img-wrapper">
        <img className="card__img" src={img} alt="car" />
      </div>
      <div className="card__content">
        <div className="card__info"></div>
        <button type="button" className="card__btn">
          Learn more
        </button>
      </div>
    </StyledCard>
  );
};
