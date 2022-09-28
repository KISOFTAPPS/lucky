import React from "react";
import joggers from "../../../assets/img/joggers.jpg";
import mining from "../../../assets/img/mining.jpg";
import gas from "../../../assets/img/gas.jpg";
import truck from "../../../assets/img/truck.jpg";

export const Section3 = () => {
    return (
        <section
            id="client"
            className="min-h-screen w-full flex flex-col gap-5 justify-center items-center bg-gradient-to-r from-green-200 to-green-900 shadow-xl"
        >
            <h1 className="text-5xl font-bold">OUR CLIENTS</h1>
            <hr className="border w-full " />
            <div className="flex flex-col justify-center items-center gap-5 w-full bg-black bg-opacity-70 p-5 shadow-xl">
                <div className="flex flex-col md:flex-row gap-5 text-green-100">
                    <div className="text-center  font-bold">
                        <div className="h-80 w-80 bg-white rounded-xl overflow-hidden">
                            <img
                                src={truck}
                                className="w-96 h-96  hover:-translate-y-6 duration-300 delay-200"
                            />
                        </div>
                        <p>TRUCK FLEET COMPANIES</p>
                    </div>
                    <div className="text-center font-bold">
                        <div className="h-80 w-80 bg-white rounded-xl overflow-hidden">
                            <img
                                src={gas}
                                className="w-96 h-96 hover:-translate-y-6 duration-300 delay-200"
                            />
                        </div>
                        <p>GAS STATION</p>
                    </div>
                    <div className="text-center font-bold">
                        <div className="h-80 w-80 bg-white rounded-xl overflow-hidden">
                            <img
                                src={mining}
                                className="w-96 h-96 hover:-translate-y-6 duration-300 delay-200"
                            />
                        </div>
                        <p>MINING INDUSTRY</p>
                    </div>
                    <div className="text-center  font-bold">
                        <div className="h-80 w-80 bg-white rounded-xl overflow-hidden">
                            <img
                                src={joggers}
                                className="w-96 h-96 hover:-translate-y-6 duration-300 delay-200"
                            />
                        </div>
                        <p>MEXICAN BROKERS OR JOGGERS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
