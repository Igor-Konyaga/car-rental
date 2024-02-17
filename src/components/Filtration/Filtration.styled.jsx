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

      .form__select-list {
        position: absolute;
        top: 53px;
        left: 0;

        display: flex;
        flex-direction: column;

        padding: 14px 18px;

        width: 100%;
        max-height: 272px;

        border: 1px solid rgba(18, 20, 23, 0.08);
        border-radius: 14px;
        box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
        background-color: rgb(255, 255, 255);

        overflow-y: scroll;
        z-index: 1;

        color: rgba(18, 20, 23, 0.2);
        font-size: 16px;
        font-weight: 500;
        line-height: 1.25;

        &::-webkit-scrollbar {
          width: 8px;
        }

        &::-webkit-scrollbar-track {
          margin: 14px 0;
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

  .form__car-select--price{
	min-width: 125px;
  }
`;
