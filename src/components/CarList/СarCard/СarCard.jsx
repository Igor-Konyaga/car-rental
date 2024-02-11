import { StyledCard } from './СarCard.styled';

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
  const arr = address.split(',');

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
              <li className="mod-padding">{arr[1]}</li>
              <li>{arr[2]}</li>
              <li>{rentalCompany}</li>
              <li className="mod-border">{type}</li>
              <li className="mod-padding">{model}</li>
              <li>{mileage}</li>
              <li className="mod-border">{engineSize}</li>
            </ul>
          </div>
        </div>
        <button type="button" className="card__btn">
          Learn more
        </button>
      </div>
    </StyledCard>
  );
};
