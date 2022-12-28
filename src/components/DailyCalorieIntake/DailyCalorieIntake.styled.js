import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  /* margin: 60px auto 20px auto; */
  padding-top: 64px;
  padding-bottom: 80px;
  flex-wrap: wrap;
  background-color: #fff;
  text-align: center;
  @media (min-width: 426px) {
    overflow: hidden;
  }
`;

export const H2 = styled.h2`
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 24px;
  @media (min-width: 426px) {
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 20px;
  }
`;

export const H1 = styled.h1`
  font-size: 40px;
  line-height: 1.4;
  margin-bottom: 24px;
  color: #264061;
  @media (min-width: 426px) {
    font-size: 42px;
    margin-bottom: 28px;
  }
  @media (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 32px;
  }
`;

export const H4 = styled.h4`
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 14px;
`;

export const LI = styled.li`
  margin: 0 auto;
  max-width: 326px;
  text-align: center;

  margin-bottom: 10px;
`;

export const BOX = styled.div`
  color: #9b9faa;
  padding: 0 0 0 30px;

  text-align: left;
  font-size: 12px;
  font-weight: 100;
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    display: inline-block;
    position: relative;
  }
`;

export const ButtonForm = styled.button`
  padding: 13px 25px;
  border-radius: 30px;
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  letter-spacing: 0.04em;
  display: block;
  cursor: pointer;

  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.orange};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  &:hover,
  &:focus {
    background: ${p => p.theme.colors.hover};
  }
`;
