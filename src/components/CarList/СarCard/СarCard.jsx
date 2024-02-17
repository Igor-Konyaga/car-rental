import { useState } from 'react';
import { StyledCard } from './СarCard.styled';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
  addFavoriteCar,
  deleteFavoriteCar,
} from '../../../redux/car/carReducer';
import { Modal } from '../../Modal/Modal';
import { ModalCar } from '../../Modal/ModalCar/ModalCar';

export const CarCard = ({ carData, favorite }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [openModal, setOpenModal] = useState(false);
  
  const dispatch = useDispatch();

  const {
    address,
    img,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    type,
    mileage,
    engineSize,
  } = carData;

  const formattedMileage = mileage
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');


  const handleFavorite = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      dispatch(addFavoriteCar(carData));
    } else {
      dispatch(deleteFavoriteCar(carData.id));
    }
  };

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
              {make} <span className="card__accent">{model}</span>,&nbsp;
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
              <li>{formattedMileage}</li>
              <li>{engineSize}</li>
            </ul>
          </div>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          type="button"
          className="card__btn"
        >
          Learn more
        </button>
      </div>
      <button onClick={handleFavorite} className="card__icon-btn" type="button">
        {isFavorite ? (
          <FaHeart className="card__icon-heart card__icon-heart-mod" />
        ) : (
          <FaRegHeart className="card__icon-heart" />
        )}
      </button>

      {openModal && (
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <ModalCar carData={carData} />
        </Modal>
      )}
    </StyledCard>
  );
};
