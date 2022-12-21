import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  max-width: 70vw;
   {
    /* height: 100px; */
  }
  margin: 60px auto 80px auto;

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
    margin-bottom: 28px;
  }
  @media (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 34px;
  }
`;
export const H1 = styled.h1`
  font-size: 40px;
  line-height: 1.4;
  margin-bottom: 24px;
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
  color: #9b9faa;
  padding: 0 30px;
  max-width: 326px;
  text-align: left;
  font-size: 12px;
  font-weight: 100;
  ${'' /* line-height: 1.4; */}
  margin-bottom: 10px;
`;
