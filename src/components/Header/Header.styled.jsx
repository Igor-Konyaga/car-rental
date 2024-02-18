import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  z-index: 1;
  width: 100%;
  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(36, 39, 40);
  background-image: linear-gradient(
    90deg,
    rgba(36, 39, 40, 1) 26%,
    rgba(2, 66, 139, 1) 75%
  );

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .warraper-nav {
    display: flex;
    justify-content: space-between;

	 padding: 0 15px;

    width: 100%;
    max-width: 1250px;
  }
`;
