import styled from 'styled-components';

export const StyledFiltration = styled.form`
  margin: 0 auto 50px;
  width: 859px;

  display: flex;
  column-gap: 18px;

  .form__car-select {
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    min-width: 224px;

    label {
      color: #8a8a89;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.3;
    }

    .form__select-wrapper {
      position: relative;

      background-color: #f7f7fb;
      .select-car {
        padding: 14px 18px;
        width: 100%;

        border: none;

        color: #121417;
        border-radius: 14px;

        background-color: rgb(247, 247, 251);

        cursor: pointer;

        font-size: 18px;
        font-weight: 500;
        line-height: 1.1;
        text-align: left;

        &:focus {
          outline: none;
          box-shadow:
            rgba(0, 0, 0, 0.4) 0px 2px 4px,
            rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
            rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        }
      }

      .car-select-icon {
        position: absolute;
        top: 14px;
        right: 18px;

        width: 20px;
        height: 20px;

        pointer-events: none;
      }

      input {
        visibility: hidden;
        position: absolute;
      }

      .form__wrapper-select-list {
        position: absolute;
        top: 53px;
        left: 0;
        padding: 14px 8px 14px 18px;
        width: 100%;

        border: 1px solid rgba(18, 20, 23, 0.08);
        border-radius: 14px;
        box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
        background-color: rgb(255, 255, 255);
        z-index: 1;
      }

      .form__select-list {
        display: flex;
        flex-direction: column;

        max-height: 272px;

        overflow-y: scroll;

        color: rgba(18, 20, 23, 0.2);
        font-size: 16px;
        font-weight: 500;
        line-height: 1.25;

        &::-webkit-scrollbar {
          width: 8px;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: rgba(18, 20, 23, 0.05);

          height: 30px;
        }

        li {
          &:not(:first-child) {
            padding-top: 8px;
          }
          cursor: pointer;
          transition: color 0.3s;

          &:hover,
          &:focus {
            color: #121417;

            transition: color 0.3s;
          }
        }
      }
    }
  }

  .form__car-select--price {
    min-width: 125px;
  }

  .form__car-diapazon-mileage {
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    align-self: flex-end;

    label {
      color: #8a8a89;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.3;
    }
    .wrapper-car-mileage {
      display: flex;

      .car-mileage {
        padding: 14px 24px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        min-width: 160px;

        border-right: 1px solid rgba(138, 138, 137, 0.2);
        border-radius: 14px 0px 0px 14px;
        background-color: rgb(247, 247, 251);

        &:last-child {
          border: none;
          border-radius: 0px 14px 14px 0px;
        }
        .car-mileage-input {
          max-width: 65px;

          border: none;
          outline: none;
          background-color: inherit;
        }
        .car-mileage-input--mod {
          max-width: 88px;
        }

        span,
        .car-mileage-input {
          color: #121417;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.1;
        }
      }
    }
  }

  .filtration__btn {
    padding: 14px;
    min-width: 136px;
    max-height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    align-self: flex-end;

    background-color: #3470ff;
    color: #fff;
    border: none;
    border-radius: 12px;
    transition: 0.3s;

    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;

    &:hover,
    &:focus {
      background-color: #0b44cd;
      color: #fefacc;
    }
  }
`;
