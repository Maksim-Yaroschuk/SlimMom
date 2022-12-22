import { Field } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  border: none;
  width: 100%;
  padding-bottom: 8px;
  margin-bottom: 32px;
  border-bottom: ${p => p.theme.borders.normal};
  font-family: ${p => p.theme.fonts.body};
  /* line-height: ${p => p.theme.lineHeights.body}; */
  line-height: 16px;
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
  &:hover,
  &:focus {
    &::placeholder {
      color: ${p => p.theme.colors.orange};
    }
  }
  @media (min-width: 554px) and (max-width: 1023px) {
    padding-bottom: 20px;
    margin-bottom: 0;
    width: 240px;
  }
  @media (min-width: 1024px) {
    padding-bottom: 20px;
    margin-bottom: 0;
    width: 240px;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 8px;
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  color: ${p => p.theme.colors.gray};
  letter-spacing: 0.04em;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.orange};
  }

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
  /* border: 1px solid #e0e0e0; */
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
  position: absolute;
  margin-top: -30px;
  font-size: 10px;
  color: white;
  background-color: red;
  padding: 5px;
  border-radius: 5px;
  width: 75%;
  @media (min-width: 426px) {
    margin-top: 0;
    width: 240px;
  }
`;

export const List = styled.ul`
  margin-bottom: 40px;
  padding-right: 40px;
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
  position: relative;
  &:hover,
  :focus {
    background: ${p => p.theme.colors.hover};
    /* &::before {
      content: '';
      position: ${p => p.theme.btnBefore.position};
      top: ${p => p.theme.btnBefore.top};
      left: ${p => p.theme.btnBefore.left};
      width: ${p => p.theme.btnBefore.width};
      height: ${p => p.theme.btnBefore.height};
      background: ${p => p.theme.btnBefore.background};
      border-radius: ${p => p.theme.btnBefore.borderRadius};
      box-shadow: ${p => p.theme.btnBefore.boxShadow};
      opacity: 0;
    }
    &::after {
      content: '';
      position: ${p => p.theme.btnAfter.position};
      top: ${p => p.theme.btnAfter.top};
      left: ${p => p.theme.btnAfter.left};
      width: ${p => p.theme.btnAfter.width};
      height: ${p => p.theme.btnAfter.height};
      background: ${p => p.theme.btnAfter.background};
      border-radius: ${p => p.theme.btnAfter.borderRadius};
      box-shadow: ${p => p.theme.btnAfter.boxShadow};
      opacity: 0;
    } */
  }
  &::before {
    content: '';
    position: ${p => p.theme.btnBefore.position};
    top: ${p => p.theme.btnBefore.top};
    left: ${p => p.theme.btnBefore.left};
    width: ${p => p.theme.btnBefore.width};
    height: ${p => p.theme.btnBefore.height};
    background: ${p => p.theme.btnBefore.background};
    border-radius: ${p => p.theme.btnBefore.borderRadius};
    box-shadow: ${p => p.theme.btnBefore.boxShadow};
    opacity: 1;
    transition: opacity 700ms linear;
  }
  &::after {
    content: '';
    position: ${p => p.theme.btnAfter.position};
    top: ${p => p.theme.btnAfter.top};
    left: ${p => p.theme.btnAfter.left};
    width: ${p => p.theme.btnAfter.width};
    height: ${p => p.theme.btnAfter.height};
    background: ${p => p.theme.btnAfter.background};
    border-radius: ${p => p.theme.btnAfter.borderRadius};
    box-shadow: ${p => p.theme.btnAfter.boxShadow};
    opacity: 1;
    transition: opacity 700ms linear;
  }
`;
