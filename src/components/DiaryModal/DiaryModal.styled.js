import styled from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const BackBtn = styled.button`
  position: absolute;
  left: 20px;
  top: 167px;
  padding: 8px 8px;
  border: ${p => p.theme.borders.none};
  border-radius: 10px;
  background-color: #F0F1F3;
`

export const ModalWrapper = styled.div`
    position: relative;
    border-radius: 10px;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 80px;
    flex-wrap: wrap;
    
    background-color: #fff;
    text-align: center;
    @media (max-width: 426px) {
            height: 100vh;
            overflow: hidden;
    }
    @media (min-width:426px) and (max-width:1023px) {
        position: absolute;
        margin: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 594px;
       
        max-height: 573px;
    }
        @media (min-width: 1023px) {
            max-width: 690px;
            
        }
`;