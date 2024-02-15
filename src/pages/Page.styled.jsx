import styled from 'styled-components';

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 30px;
  padding-bottom: 50px;

  .car-list__message {
    position: fixed;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    font-size: 40px;
    letter-spacing: 1px;
    word-spacing: 4px;
    font-weight: 600;

    color: #02428b;

	 text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 
    0px -4px 10px rgba(255,255,255,0.3);
  }
`;
