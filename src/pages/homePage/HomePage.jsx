import React from "react";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import Title from "../../components/Title/Title";
import Header from "../../components/header/Header";
import AboutUs from "../../components/aboutUS/AboutUs";
import Technology from "../../components/whatTechnology/Technology";

const HomePage = () => {

    return (
        <Fullpage>
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection style={{
                    height: "100vh"
                }}>
                    <Header />
                    <Title />
                </FullpageSection>
                <FullpageSection style={{
                    height: "100vh"
                }}>                    <AboutUs />
                </FullpageSection>
                <FullpageSection style={{
                    height: "100vh"
                }}>
                    <Technology />
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}

export default HomePage;