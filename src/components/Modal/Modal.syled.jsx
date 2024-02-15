import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
  background-color: rgba(18, 20, 23, 0.5);

  .modal__body {
    padding: 40px;

    overflow-y: auto;

    border-radius: 24px;
    background-color: white;
  }
`;
