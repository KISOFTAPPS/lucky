import React from "react";
import bg3 from "../../../assets/img/bg-3.jpg";
import { Map } from "../../";

export const Section4 = () => {
    return (
        <section
            id="contact_us"
            className="min-h-screen w-full flex justify-center"
        >
            <div
                className="w-7/12"
                style={{
                    backgroundImage: `url(${bg3})`,
                    backgroundSize: "cover",
                }}
            ></div>
            <div className="w-5/12 flex flex-col justify-center items-center">
                <div className="h-1/2 flex flex-col justify-center items-center gap-2">
                    <span>LET'S REACH MORE ACHIEVEMENTS</span>
                    <hr className="bg-black w-full" />
                    <div>
                        <p className="font-bold">Alonso Villarreal</p>
                        <p className="font-semibold">President</p>
                        <p>
                            19230 STONE OAK PKWY STE 102, SAN ANTONIO, TX, 78258
                        </p>
                        <p>alonso_vh@luckytrg.com</p>
                        <p>+1 210 748 1007</p>
                    </div>
                    <div>
                        <p className="font-bold">Juan Antonio Perdomo</p>
                        <p className="font-semibold">Chief Operating Officer</p>
                        <p>
                            19230 STONE OAK PKWY STE 102, SAN ANTONIO, TX, 78258
                        </p>
                        <p>japerdomo@luckytrg.com</p>
                        <p>+1 210 793 6001</p>
                    </div>
                </div>
                <div className="h-1/2">
                    <Map />
                </div>
            </div>
        </section>
    );
};
