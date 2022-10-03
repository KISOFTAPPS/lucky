import bg1 from "../../../assets/img/bg-1.png";
export const Section1 = () => {
    return (
        <section
            id="about_us"
            className="min-h-screen w-full flex justify-center items-center p-1"
            style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container w-full flex flex-col md:flex-row justify-between items-center bg-green-900 bg-opacity-75 p-5 rounded-xl text-white shadow-xl">
                <div className="flex flex-col gap-5 p-1">
                    <samp className=" font-bold text-5xl md:text-7xl  bg-opacity-75 rounded-xl  text-center">
                        Let us help you achieve
                        <br />
                        your purpose.
                    </samp>
                    <hr />
                </div>

                <div className="flex flex-col gap-2 md:text-2xl md:w-96 p-1">
                    <span className="font-bold text-xl md:text-3xl">
                        We want to help you achieve your purpose.
                    </span>
                    <hr />
                    <p>
                        We are a global trading company specialized in
                        hydrocarbons and petroleum derivatives. <br /> The LUCKY
                        team is built of world class and experienced
                        professionals, that will make sure that our clients meet
                        all of their energy needs by offering innovative
                        solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};
