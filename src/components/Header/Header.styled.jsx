import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 0 36px;
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;

  /* background-color: #02428b; */
  background-color: rgb(36, 39, 40);
  background-image: linear-gradient(
    90deg,
    rgba(36, 39, 40, 1) 26%,
    rgba(2, 66, 139, 1) 75%
  );

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
