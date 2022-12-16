import { Field, Form } from 'formik';
import styled from 'styled-components';

export const NameInput = styled(Field)`
  border: none;
  width: 280px;
  margin-bottom: 32px;
  padding-bottom: 8px;
  border-bottom: ${p => p.theme.borders.normal};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  color: ${p => p.theme.colors.black};
  letter-spacing: 0.04em;
  &::placeholder {
    color: ${p => p.theme.colors.gray};
    opacity: 1;
  }
  &:focus-visible {
    outline: none;
  }

  @media (min-width: 426px) and (max-width: 1023px) {
    margin-right: 22px;
    width: 240px;
  }
  @media (min-width: 1024px) {
    width: 240px;
    margin-right: 48px;
  }
`;

export const GramsInput = styled(Field)`
  border: none;
  width: 280px;
  margin-bottom: 60px;
  padding-bottom: 8px;
  border-bottom: ${p => p.theme.borders.normal};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  color: ${p => p.theme.colors.black};
  letter-spacing: 0.04em;
  &::placeholder {
    color: ${p => p.theme.colors.gray};
    opacity: 1;
  }
  &:focus-visible {
    outline: none;
  }

  @media (min-width: 426px) and (max-width: 1023px) {
    width: 107px;

  }
  @media (min-width: 1024px) {
    width: 107px;

  }
`;

export const NameError = styled.div`
  display: inline;
  text-align: center;
  top: 35px;
  right: 15px;
  position: absolute;
  font-size: 10px;
  color: white;
  background-color: red;
  padding: 5px;
  border-radius: 5px;
  width: 240px;
  @media (min-width: 426px) and (max-width: 1023px) {
    right: 20px;
    text-align: left;
  }
  @media (min-width: 1024px) {
    right: 45px;
    text-align: left;
  }
`;

export const GramsError = styled.div`
  display: inline;
  position: absolute;
  top: 35px;
  right: 65px;
  font-size: 10px;
  color: white;
  background-color: red;
  padding: 5px;
  border-radius: 5px;
  @media (min-width: 426px) and (max-width: 1023px) {
    right: 0px;
    width: 107px;
  }
  @media (min-width: 1024px) {
    right: 0px;
    width: 107px;
  }
`;

export const Button = styled.button`
  border-radius: 30px;
  padding: 13px 76px;
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  letter-spacing: 0.04em;
  cursor: pointer;

  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.orange};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);

  @media (min-width: 426px) and (max-width: 1023px) {
    margin-left: 87px;
    padding: 10px 12px;
    border-radius: 50%;
  }
  @media (min-width: 1024px) {
    margin-left: 60px;
    padding: 10px 12px;
    border-radius: 50%;
  }
`

export const Label = styled.label`
  position: relative;
`;

export const FormWrapper = styled(Form)`
  display: block;
  max-width: 285px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (min-width: 426px) and (max-width: 1023px) {
    display: inline;

  }
  @media (min-width: 1024px) {
    display: inline;

  }
`