import styled from 'styled-components';

export const StyledModalCar = styled.div`
  max-width: 461px;

  .modal__img-wrapper {
    margin-bottom: 14px;
    .modal__img {
      width: 100%;
      border-radius: 14px;

      object-fit: cover;
    }
  }

  .modal__info-header {
    margin-bottom: 14px;
	 max-width: 277px;
    .modal__title {
      margin-bottom: 9px;
    }
    .modal__info-header-list {
      display: flex;
      flex-wrap: wrap;

      column-gap: 12px;
      row-gap: 4px;

      color: rgba(18, 20, 23, 0.5);

      font-size: 12px;
    }
  }
`;
