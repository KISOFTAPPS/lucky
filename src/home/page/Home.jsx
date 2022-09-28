import React from "react";
import {
    Navbar,
    Footer,
    Section1,
    Section2,
    Section3,
    Section4,
} from "../../home";

import Fade from "react-reveal/Fade";

export const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Section1 />
                <Fade bottom>
                    <Section2 />
                </Fade>
                <Fade bottom>
                    <Section3 />
                </Fade>
                <Fade bottom>
                    <Section4 />
                </Fade>
            </main>
            <Footer />
        </>
    );
};
