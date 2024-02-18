import styled from 'styled-components';

export const StyledHome = styled.section`
  padding: 50px 36px;

  .hero__title {
    margin-bottom: 44px;

    display: flex;
    flex-direction: column;
    row-gap: 6px;

    font-size: 40px;
    letter-spacing: 1.2px;
    font-weight: 800;

    .hero__sub-title {
      color: #f8a91b;
    }
    .hero__sub-title--mod {
      color: #003571;
    }
  }
  /* rgba(2, 66, 139, 0.2) */

  .hero__advantages {
    padding: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(2, 66, 139, 0.2);
    border-radius: 12px;

    background-color: rgb(250, 244, 244);
    background-image: linear-gradient(
      90deg,
      rgba(250, 244, 244, 1) 2%,
      rgba(2, 66, 139, 0.2) 37%,
      rgba(30, 86, 151, 0.2) 63%,
      rgba(250, 244, 244, 1) 97%
    );

    .hero__advantage {
      display: flex;
      flex-direction: column;
      align-items: center;

      row-gap: 26px;

      cursor: pointer;

      p {
        font-size: 22px;
        font-weight: 600;
      }

      .hero__advantage-icon {
        width: 60px;
        height: 60px;

        fill: #003571;
        color: #003571;
        transition: all 0.3s;
      }

      &:hover {
        .hero__advantage-icon {
          fill: #f8a91b;
          color: #f8a91b;

          transition: all 0.3s;
        }
      }
    }
  }
`;
