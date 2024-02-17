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

  .modal__sub-title {
    color: rgb(18, 20, 23);

    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
  }
  .modal__sub-title-mod {
    margin-bottom: 15px;
  }
  .modal__accent {
    color: #3470ff;
  }
  .modal__accent-mod {
    font-weight: 600;
  }

  .modal__info-header {
    margin-bottom: 14px;
    .modal__title {
      margin-bottom: 9px;

      font-size: 18px;
      font-weight: 500;
      line-height: 1.3;
    }
    .modal__info-header-list {
      display: flex;
      flex-wrap: wrap;

      column-gap: 12px;
      row-gap: 4px;

      color: rgba(18, 20, 23, 0.5);

      line-height: 1.5;
      font-size: 12px;

      li {
        position: relative;
        &::after {
          content: '';
          display: block;
          width: 1px;
          height: 16px;
          position: absolute;
          top: 0;
          right: -7px;

          background-color: rgba(18, 20, 23, 0.1);
        }

        &:last-child {
          &::after {
            display: none;
          }
        }
        &:nth-child(6) {
          &::after {
            display: none;
          }
        }
      }
    }
  }
  .modal__desc {
    margin-bottom: 24px;

    color: rgb(18, 20, 23);
    font-size: 14px;
    line-height: 1.4;
  }
  .modal__acces-func {
    margin-bottom: 8px;
  }
  .modal__list-acces-func {
    display: flex;
    flex-wrap: wrap;
    column-gap: 12px;
    row-gap: 4px;

    margin-bottom: 24px;

    color: #1214177f;
    font-size: 12px;
    line-height: 1.5;

    li {
      position: relative;
      &::after {
        content: '';
        display: block;
        width: 1px;
        height: 16px;
        position: absolute;
        top: 0;
        right: -7px;

        background-color: #12141719;
      }

      &:last-child {
        &::after {
          display: none;
        }
      }
    }
  }
  .modal__list-conditions {
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 15px;

    margin-bottom: 24px;

    font-size: 12px;
    line-height: 1.5;
    font-weight: 400;

    .modal__conditions-item {
      padding: 7px 14px;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 35px;
      background: #f9f9f9;
    }
  }
  .modal__btn {
    padding: 12px 50px;
    max-width: 168px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 12px;
    background-color: #3470ff;
    transition: 0.3s;

    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.4;

    border: none;

    &:hover,
    &:focus {
      background-color: #0b44cd;
    }
  }
`;
