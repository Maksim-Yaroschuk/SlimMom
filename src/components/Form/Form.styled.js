import { Field } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  border: none;
  width: 240px;
  padding-bottom: 8px;
  margin-bottom: 32px;
  border-bottom: ${p => p.theme.borders.normal};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  color: ${p => p.theme.colors.black};
  letter-spacing: 0.04em;
  background-color: transparent;
  &::placeholder {
    color: ${p => p.theme.colors.gray};
    opacity: 1;
  }
  &:focus-visible {
    outline: none;
  }
  @media (min-width: 554px) and (max-width: 1023px) {
    padding-bottom: 20px;
    margin-bottom: 0;
  }
  @media (min-width: 1024px) {
    padding-bottom: 20px;
    margin-bottom: 0;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 8px;
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  color: ${p => p.theme.colors.gray};
  letter-spacing: 0.04em;

  @media (min-width: 426px) and (max-width: 1023px) {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
    width: 240px;
  }
  @media (min-width: 1024px) {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
    width: 240px;
  }
`;

export const Checkbox = styled(Field)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border: 1px solid #e0e0e0;
  &:checked {
    appearance: none;
    border-radius: 50%;
    background: ${p => p.theme.colors.orange};
    border: 5px solid #fff;
    box-shadow: 0 0 0 1px ${p => p.theme.colors.gray};
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.orange};
`;

export const Error = styled.div`
  margin-top: -30px;
  font-size: 10px;
  color: white;
  background-color: red;
  padding: 5px;
  border-radius: 5px;
  width: 240px;
`;

export const List = styled.ul`
  margin-bottom: 40px;
  @media (min-width: 554px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 40px;

    padding-right: 224px;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 40px;
    width: 608px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 426px) and (max-width: 1023px) {
    justify-content: flex-start;
  }
  @media (min-width: 1024px) {
    justify-content: flex-start;
    display: inline-block;
    position: relative;
    /* width: 100%; */
    left: 339px;
  }
`;
