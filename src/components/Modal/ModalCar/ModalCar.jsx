import { StyledModalCar } from './ModalCar.styled';

export const ModalCar = ({ carData }) => {
  return (
    <StyledModalCar>
      <div className="modal__img-wrapper">
        <img className="modal__img" src={carData.img} alt="car" />
      </div>
    </StyledModalCar>
  );
};
