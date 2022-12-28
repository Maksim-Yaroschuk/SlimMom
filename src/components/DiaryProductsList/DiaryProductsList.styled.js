import styled from "styled-components";

export const List = styled.ul`
  @media (min-width: 426px) and (max-width: 1023px) {
    overflow-y: scroll;
    height: 244px;
    max-width: 610px;
  }
  @media (min-width: 1024px) {
    width: 610px;
    overflow-y: scroll;
    height: 244px;
  }
  &.hidden {
    overflow: hidden;
  }
` 

export const NoProductsContainer = styled.div`
  text-align: center;
  @media(min-width: 426px) {
    text-align: start;
  }
  & p {
    font-size: ${p => p.theme.fontSizes[1]};
    font-family: ${p => p.theme.fonts.body};
    @media(max-width: 425px) {
      padding: 20px 0 30px;
    }
  }

  & svg {
    @media(max-width: 425px) {
      transform: rotate(180deg);
    }
    @media(min-width: 426px) {
      margin-left: 90px;
    }
  }
`