import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  column-gap: 120px;

  margin: 0 auto;

  font-size: 26px;
  font-weight: 600;

  color: #fefacc;

  a {
    padding: 24px 0;
    transition: 0.3s;

    &:hover {
      color: #f8a91b;
    }
  }

  .active {
    color: #f8a91b;
  }
`;
