import { useState } from 'react';
import { StyledCard } from './СarCard.styled';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

export const CarCard = ({
  year,
  make,
  model,
  type,
  img,
  rentalPrice,
  address,
  mileage,
  engineSize,
  rentalCompany,
}) => {
  const [favorite, setFavorite] = useState(false);

  const arr = address.split(',');
  const city = arr[1];
  const country = arr[2];

  return (
    <StyledCard>
      <div className="card__img-wrapper">
        <img className="card__img" src={img} alt="car" />
      </div>
      <div className="card__content">
        <div className="card__info">
          <div className="card__info-header">
            <p>
              {make} <span className="card__accent">{model}</span>,{' '}
              <span>{year}</span>
            </p>
            <p>{rentalPrice}</p>
          </div>

          <div className="card__info-footer">
            <ul>
              <li>{city}</li>
              <li>{country}</li>
              <li>{rentalCompany}</li>
              <li>{type}</li>
              <li>{model}</li>
              <li>{mileage}</li>
              <li>{engineSize}</li>
            </ul>
          </div>
        </div>
        <button type="button" className="card__btn">
          Learn more
        </button>
      </div>
      <button
        onClick={() => setFavorite(!favorite)}
        className="card__icon-btn"
        type="button"
      >
        {favorite ? (
          <FaHeart className="card__icon-heart card__icon-heart-mod" />
        ) : (
          <FaRegHeart className="card__icon-heart" />
        )}
      </button>
    </StyledCard>
  );
};
