import React from 'react';
import {HeroBoxLeft, HeroBoxRight, StyledSection, StyledSubtitle, StyledTextBox, StyledTitle} from "./hero.styles";

const Hero = () => {
    return (
        <StyledSection>
            <HeroBoxLeft>
                <StyledTextBox>
                    <StyledTitle>CIAO</StyledTitle>
                    <StyledSubtitle>WHERE FASHION BEGINS</StyledSubtitle>
                </StyledTextBox>
            </HeroBoxLeft>
            <HeroBoxRight>

            </HeroBoxRight>
        </StyledSection>
    );
};

export default Hero;