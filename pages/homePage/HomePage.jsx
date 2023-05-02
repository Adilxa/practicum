import React from "react";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation, FullpageCount } from "@ap.cx/react-fullpage";
import Title from "../../src/components/Title/Title";
import Header from "../../src/components/header/Header";
import AboutUs from "../../src/components/aboutUS/AboutUs";
import Technology from "../../src/components/whatTechnology/Technology";
import FeedBack from "../../src/components/feedBack/FeedBack";
import Footer from "../../src/components/Footer/Footer";

const HomePage = () => {

    return (
        <Fullpage >
            <FullPageSections>
                <FullpageSection >
                    <Header />
                    <Title />
                </FullpageSection>
                <FullpageSection>
                    <AboutUs />
                </FullpageSection>
                <FullpageSection>
                    <Technology />
                </FullpageSection>
                <FullpageSection style={{
                    height: "100vh"
                }} >
                    <FeedBack />
                </FullpageSection>
                <FullpageSection style={{
                    height: "50vh"
                }}>
                    <Footer />
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}

export default HomePage;