import React from "react";

import Directory from "../../components/directory/directory.component";
import Hero from "../../components/hero/hero.comp";

import {HomePageContainer} from "./homePage.styles";

const HomePage = () => (
    <HomePageContainer>
        <Hero/>
        <Directory/>
    </HomePageContainer>
);

export default HomePage;