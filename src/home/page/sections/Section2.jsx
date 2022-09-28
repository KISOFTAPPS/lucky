import React from "react";
import logo2 from "../../../assets/img/logo-2.png";
import bg2 from "../../../assets/img/bg-2.jpg";
import { GiRefinery } from "react-icons/gi";
import { FiPackage, FiTruck } from "react-icons/fi";
import { GrStorage } from "react-icons/gr";

export const Section2 = () => {
    return (
        <section
            id="our_process"
            className="min-h-screen w-full flex justify-center "
        >
            <div className="flex flex-col justify-center items-center gap-5 shadow-xl w-8/12 p-5 text-green-900 bg-green-50">
                <img src={logo2} className="w-48 rounded-xl" />
                <div className="font-bold text-4xl w-72 text-center">
                    <span>OUR PROCESS</span>
                    <hr />
                </div>

                <p className="w-96 font-semibold text-justify">
                    Business alliances are key to the success of the Trust's
                    operations. The company is committed to providing its
                    partners with reliable supplies directly from U.S.
                    refineries.
                </p>

                <div className="flex items-center gap-1">
                    <div className="flex flex-col items-center">
                        <GiRefinery className="text-8xl text-black hover:scale-110 duration-200" />
                        Refinery
                    </div>

                    <div className="flex flex-col items-center">
                        <FiPackage className="text-8xl text-black hover:scale-110 duration-200" />
                        Distribution Logistics
                    </div>

                    <div className="flex flex-col items-center">
                        <GrStorage className="text-8xl text-black hover:scale-110 duration-200" />
                        Storage Terminals
                    </div>

                    <div className="flex flex-col items-center">
                        <FiTruck className="text-8xl text-black hover:scale-110 duration-200" />
                        Costumer Load
                    </div>
                </div>
            </div>
            <div
                className="w-4/12"
                style={{
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: "cover",
                }}
            ></div>
        </section>
    );
};
