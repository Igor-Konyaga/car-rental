import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const AppContainer = styled.div`
  padding: 0 15px;

  min-width: 350px;
  max-width: 350px;

  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 750px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1230px;
  }
`;

