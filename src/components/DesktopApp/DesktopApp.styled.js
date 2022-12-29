import styled from 'styled-components';

export const DeskApp = styled.div`
  padding: 0 20px;
  padding-top: 50px;
  text-align: center;
  padding-bottom: 300px;
  color: ${p => p.theme.colors.black};
  @media (min-width: 426px) and (max-width: 1023px) {
    padding-top: 70px;
    padding-bottom: 450px;
  }
  @media (min-width: 1024px) {
    padding-top: 280px;
    padding-bottom: 20px;
  }
`;
