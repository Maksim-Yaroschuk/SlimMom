import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0px auto;
  padding: 100px 15px;
  @media (max-width: 425px) {
    max-width: 280px;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    padding-top: 100px;
    padding-left: 32px
  }
  @media (min-width: 1024px) {
    padding-top: 250px;
    padding-left: 16px
  }
` 

export const Button = styled.button`
  padding: 12px 13px 11px;
  border-radius: 50%;
  border: ${p => p.theme.borders.none};
  background: ${p => p.theme.colors.orange};
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  margin-top: 60px;
`