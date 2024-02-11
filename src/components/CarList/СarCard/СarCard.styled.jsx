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

			 row-gap: 4px;

          li {
            border-right: 1px solid rgba(18, 20, 23, 0.1);
            padding: 3px 5px;

            line-height: 1.2;
          }

          .mod-padding {
            padding-left: 0;
          }
          .mod-border {
            border-right: none;
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
    }
  }
`;
