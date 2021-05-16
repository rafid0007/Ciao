import styled from "styled-components";

export const StyledSection = styled.section`
  margin-top: -120px;
  width: 100%;
  height: 85vh;
  display: flex;
  z-index: -20;
`;

export const HeroBoxLeft = styled.div`
  flex-grow: 4;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 900px) {
    background-position: -50px 0;
    flex-grow: 3;
  }
`;

export const StyledTextBox = styled.div`
  position: absolute;
  right: -100px;
  text-align: right;
  font-weight: 700;
  font-size: 80px;
  line-height: 100px;
  font-family: "Poppins", sans-serif;
  padding-left: 30px;
  @media (max-width: 960px) {
    font-size: 60px;
    line-height: 70px;
    right: -80px;
}
  @media (max-width: 600px) {
    font-size: 30px;
    line-height: 50px;
    right: -60px
  }
`

export const StyledTitle = styled.div`
  color: #000000;
  line-height: 120px;
  @media (max-width: 960px) {
    line-height: 100px;
  }
  @media (max-width: 600px) {
    line-height: 80px;
  }
  
`

export const StyledSubtitle = styled.div`
  color: #e7e7e7;
`

export const HeroBoxRight = styled.div`
  flex-grow: 6;
  background-color: #f0f1f3;
  background-image: url("hero2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -130px 20%;
  z-index: -10;
  @media (max-width: 900px) {
    background-position: -50px 0;
    flex-grow: 7;
  }
`;
