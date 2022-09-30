import React from "react";
import logo2 from "../../../assets/img/logo-2.png";
import bg2 from "../../../assets/img/bg-2.jpg";
import { GiRefinery } from "react-icons/gi";
import { FiPackage, FiTruck } from "react-icons/fi";
import { GrStorage } from "react-icons/gr";
import { BiRightArrow } from "react-icons/bi";

export const Section2 = () => {
    return (
        <section
            id="our_process"
            className="min-h-screen w-full flex flex-col md:flex-row justify-center bg-green-50 pt-16 md:pt-0"
        >
            <div className="flex flex-col justify-center items-center gap-5 shadow-xl w-full md:w-8/12 p-5 text-green-900">
                <img src={logo2} className="w-48 rounded-xl" />
                <div className="font-bold text-4xl w-72 text-center">
                    <span>OUR PROCESS</span>
                    <hr />
                </div>

                <p className="md:w-96 font-semibold text-justify">
                    By participating in a major part of the entire supply chain
                    and by maintaining commercial partnerships and alliances
                    with trustworthy associates we provide reliable supply for
                    all our clients and partners.
                </p>

                <div className="flex flex-col md:flex-row items-center gap-1">
                    <div className="flex">
                        <div className="flex flex-col items-center">
                            <GiRefinery className="text-5xl md:text-8xl text-black hover:scale-110 duration-200" />
                            Refinery
                        </div>
                        <BiRightArrow className="text-5xl  md:text-8xl hover:scale-110 duration-200" />
                        <div className="flex flex-col items-center">
                            <FiPackage className="text-5xl  md:text-8xl text-black hover:scale-110 duration-200" />
                            Distribution Logistics
                        </div>
                        <BiRightArrow className="text-5xl md:text-8xl hover:scale-110 duration-200" />
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center">
                            <GrStorage className="text-5xl md:text-8xl text-black hover:scale-110 duration-200" />
                            Storage Terminals
                        </div>
                        <BiRightArrow className="text-5xl md:text-8xl hover:scale-110 duration-200" />
                        <div className="flex flex-col items-center">
                            <FiTruck className="text-5xl md:text-8xl text-black hover:scale-110 duration-200" />
                            Costumer Load
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-full h-96 md:w-4/12 md:h-auto"
                style={{
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: "cover",
                }}
            ></div>
        </section>
    );
};
