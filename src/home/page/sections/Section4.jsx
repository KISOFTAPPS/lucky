import React from "react";
import bg3 from "../../../assets/img/bg-3.jpg";
import bg4 from "../../../assets/img/bg-4.jpg"

export const Section4 = () => {
    return (
        <section
            id="contact_us"
            className="min-h-screen w-full flex flex-col md:flex-row justify-center"
        >
            <div
                className="w-full h-96 md:w-7/12 md:h-auto shadow-xl"
                style={{
                    backgroundImage: `url(${bg3})`,
                    backgroundSize: "cover",
                }}
            ></div>
            <div className="md:w-5/12 flex flex-col justify-center items-center gap-5 p-5 bg-green-50 text-green-900 shadow-xl" >
                <div className="flex flex-col justify-center items-center gap-5">
                    <span className="text-3xl font-bold text-center">LET'S REACH MORE ACHIEVEMENTS</span>
                    <hr className="bg-black w-full" />
                    <div>
                        <p className="font-bold">Alonso Villarreal</p>
                        <p className="font-semibold">President</p>
                        <p>
                            19230 STONE OAK PKWY STE 102, SAN ANTONIO, TX, 78258
                        </p>
                        <p>alonso_vh@luckytrgr.com</p>
                        <p>+1 210 748 1007</p>
                    </div>
                    <div>
                        <p className="font-bold">Juan Antonio Perdomo</p>
                        <p className="font-semibold">Chief Operating Officer</p>
                        <p>
                            19230 STONE OAK PKWY STE 102, SAN ANTONIO, TX, 78258
                        </p>
                        <p>japerdomo@luckytrgr.com</p>
                        <p>+1 210 793 6001</p>
                    </div>
                </div>
                <img src={bg4} className="rounded-lg border border-green-900 " />
            </div>
            
        </section>
    );
};
