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

  opacity: 0;
  pointer-events: none;
  transition: all 1s;

  &.active {
    opacity: 1;
    pointer-events: fill;
    transition: all 1s;
  }

  z-index: 1;
  background-color: rgba(18, 20, 23, 0.5);

  .modal__body {
    padding: 40px;
    position: relative;

    transform: rotate(0deg) scale(0);
    transition: all 0.7s;

    overflow-y: auto;

    border-radius: 24px;
    background-color: white;

    &.active {
      transform: rotate(1080deg) scale(1);

      transition: all 0.7s;
    }

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
