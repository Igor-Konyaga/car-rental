import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  padding-top: 20px;
  padding-bottom: 20px;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  overflow-y: auto;

  z-index: 1;
  background-color: rgba(18, 20, 23, 0.5);

  .modal__body {
    padding: 40px;
    position: relative;

    overflow-y: auto;

    border-radius: 24px;
    background-color: white;

    .modal__close-btn {
      position: absolute;
      top: 16px;
      right: 16px;

      padding: 0;
      border: none;
      background-color: transparent;

      .modal__close-icon {
        width: 24px;
        height: 24px;

        transition: color 0.3s;

        &:hover,
        &:focus {
          color: #3470ff;
          transition: color 0.3s;
        }
      }
    }
  }
`;
