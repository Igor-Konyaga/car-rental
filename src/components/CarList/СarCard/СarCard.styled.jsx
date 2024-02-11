import styled from 'styled-components';

export const StyledCard = styled.li`
  flex-basis: calc(25% - 21px);

  .card__img-wrapper {
    margin-bottom: 14px;
    .card__img {
      width: 100%;
      min-height: 268px;

      object-fit: cover;
      border-radius: 14px;
    }
  }

  .card__content {
    .card__info {
      margin-bottom: 28px;
    }

    .card__btn {
      width: 100%;
      padding: 12px;
      min-height: 44px;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #3470ff;
      color: #fff;
      border: none;
      border-radius: 12px;
      transition: 0.3s;

      &:hover,
      &:focus {
        background-color: #0b44cd;
      }
    }
  }
`;
