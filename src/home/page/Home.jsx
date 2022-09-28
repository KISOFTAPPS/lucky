import React from "react";
import {
    Navbar,
    Footer,
    Section1,
    Section2,
    Section3,
    Section4,
} from "../../home";

export const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </main>
            <Footer />
        </>
    );
};
