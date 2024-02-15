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

  const arrRentalConditionsc = rentalConditions.split('\n');
  const minimumAge = arrRentalConditionsc[0];
  const license = arrRentalConditionsc[1];
  const deposite = arrRentalConditionsc[2];

  return (
    <StyledModalCar>
      <div className="modal__img-wrapper">
        <img className="modal__img" src={img} alt="car" />
      </div>

      <div className="modal__content">
        <div className="modal__info-header">
          <p className='modal__title'>
            {make} <span className="modal__accent">{model}</span>,&nbsp;
            <span>{year}</span>
          </p>

          <ul className='modal__info-header-list'>
            <li>{city}</li>
            <li>{country}</li>
            <li>id: {id}</li>
            <li>Year: {year}</li>
            <li>Type: {type}</li>
            <li>Fuel Consumption: {fuelConsumption}</li>
            <li>Engine Size: {engineSize}</li>
          </ul>
        </div>

        <p>Description: {description}</p>

        <p>Accessories and functionalities:</p>
        <ul>
          {accessories.map((item) => {
            return <li key={item}>{item}</li>;
          })}
          {functionalities.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        <p>Rental Conditions: </p>
        <ul>
          <li>Minimum age: {minimumAge}</li>
          <li>{license}</li>
          <li>{deposite}</li>
          <li>Mileage: {formattedMileage}</li>
          <li>Price: {rentalPrice}</li>
        </ul>
      </div>
    </StyledModalCar>
  );
};
