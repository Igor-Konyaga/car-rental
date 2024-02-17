import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button';
import { StyledModalCar } from './ModalCar.styled';

export const ModalCar = ({ carData }) => {
  const {
    address,
    img,
    make,
    model,
    year,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = carData;

  const formattedMileage = mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const arrAddress = address.split(',');
  const city = arrAddress[1];
  const country = arrAddress[2];

  const arrRentalConditions = rentalConditions.split('\n');
  const minimumAge = arrRentalConditions[0].split(':')[1];
  const license = arrRentalConditions[1];
  const deposite = arrRentalConditions[2];

  return (
    <StyledModalCar>
      <div className="modal__img-wrapper">
        <img className="modal__img" src={img} alt="car" />
      </div>

      <div className="modal__content">
        <div className="modal__info-header">
          <p className="modal__title">
            {make} <span className="modal__accent">{model}</span>,&nbsp;
            <span>{year}</span>
          </p>

          <ul className="modal__info-header-list">
            <li>{city}</li>
            <li>{country}</li>
            <li>id: {id}</li>
            <li>Year: {year}</li>
            <li>Type: {type}</li>
            <li>Fuel Consumption: {fuelConsumption}</li>
            <li>Engine Size: {engineSize}</li>
          </ul>
        </div>

        <p className="modal__desc">{description}</p>

        <p className="modal__acces-func modal__sub-title">
          Accessories and functionalities:
        </p>

        <ul className="modal__list-acces-func ">
          {accessories.map((item) => {
            return <li key={item}>{item}</li>;
          })}
          {functionalities.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        <p className="modal__sub-title modal__sub-title-mod">
          Rental Conditions:
        </p>
        <ul className="modal__list-conditions">
          <li className="modal__conditions-item">
            Minimum age:&nbsp;
            <span className="modal__accent modal__accent-mod">
              {minimumAge}
            </span>
          </li>
          <li className="modal__conditions-item">{license}</li>
          <li className="modal__conditions-item">{deposite}</li>
          <li className="modal__conditions-item">
            Mileage:&nbsp;
            <span className="modal__accent modal__accent-mod">
              {formattedMileage}
            </span>
          </li>
          <li className="modal__conditions-item">
            Price:&nbsp;
            <span className="modal__accent modal__accent-mod">
              {rentalPrice}
            </span>
          </li>
        </ul>
        <Link to={'tel:+380730000000'} className="modal__btn">
          Rental car
        </Link>
      </div>
    </StyledModalCar>
  );
};
