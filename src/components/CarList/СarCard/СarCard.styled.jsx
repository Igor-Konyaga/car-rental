import styled from 'styled-components';

export const StyledCard = styled.li`
  flex-basis: calc(25% - 21px);
  position: relative;

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

      .card__info-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 8px;

        font-weight: 500;

        .card__accent {
          color: #3470ff;
        }
      }

      .card__info-footer {
        font-size: 12px;
        font-weight: 400;
        color: rgba(18, 20, 23, 0.5);

        ul {
          display: flex;
          flex-wrap: wrap;

          width: 100%;

          row-gap: 7px;
          column-gap: 14px;

          li {
            position: relative;
            line-height: 1.2;
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
            &:nth-child(4) {
              &::after {
                display: none;
              }
            }
          }
        }
      }
    }
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
      color: #fefacc;
    }
  }

  .card__icon-btn {
    position: absolute;
    top: 14px;
    right: 14px;

    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: transparent;

    .card__icon-heart {
      fill: white;
      width: 18px;
      height: 18px;
    }
    .card__icon-heart-mod {
      fill: #3470ff;
    }
  }
`;
