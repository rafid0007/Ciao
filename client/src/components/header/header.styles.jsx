import styled from 'styled-components';
import {Link} from "react-router-dom";

export const HeaderContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;    
  font-size: 12px;    
  padding: 60px 60px;
  background-color: transparent;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 20;    
      
  @media (max-width: 1280px) {
    padding: 50px 50px;
    margin-bottom: 20px;
}
  @media (max-width: 960px) {
    padding: 30px 30px;
    margin-bottom: 20px;
}
      
  @media (max-width: 600px) {
    padding: 20px 20px;
    margin-bottom: 10px;
}
`;

export const MenuAndLogoContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const LogoContainer = styled(Link)`
      width: 40px;
      height: 40px;
      background-color: #000000;
      font-size: 16px;
      letter-spacing: 3px;
      line-height: 32px;
      color: #ffffff;
      font-weight: 700;
      font-family: "Montserrat", sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 40px;
      @media (max-width: 960px) {
            margin-right: 20px;
      }
`;

export const CartAndProfileContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    
`

export const MenuLink = styled(Link)`
      padding: 10px 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: border-bottom 1s;
      &:hover{
            border-bottom: 1px solid black;
      }
      @media (max-width: 1280px) {
          padding: 5px 8px;
      }
      @media (max-width: 768px) {
            display: none;
      }
`

export const HeaderLink = styled(Link)`
      padding: 10px 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: border-bottom 1s;
      @media (max-width: 1280px) {
          padding: 5px 8px;
      }
      `
;

export const UserNameContainer = styled.span`
      margin-left: 8px;
      text-transform: uppercase;
      @media (max-width: 600px) {
          display: none;
        }
`
