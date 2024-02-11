import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLogoLink = styled(Link)`
  display: flex;
  column-gap: 10px;
  align-items: center;

  &:hover {
    .logo-icon {
      transform: translate(-20px, -20px);
      transition-delay: 0.3s;
    }
  }

  .logo-icon {
    width: 60px;
    height: 60px;

    transition: 1s;
  }
  .logo-title {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    word-spacing: 2px;

    transition: 0.3s;
	 color: #fefacc;

    &:hover {
      color: #f8a91b;
    }
  }
`;
