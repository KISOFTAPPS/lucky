import bg1 from "../../../assets/img/bg-1.png";
export const Section1 = () => {
    return (
        <section
        id="about_us"
            className="min-h-screen w-full flex justify-center items-center"
            style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container w-full flex justify-between items-center bg-green-900 bg-opacity-75 p-5 rounded-xl text-white">
                <div className="flex flex-col gap-5">
                    <samp className=" font-bold text-7xl  bg-opacity-75 rounded-xl ">
                        Powering your <br /> purpose.
                    </samp>
                    <hr />
                </div>

                <div className="flex flex-col gap-2 text-2xl w-96">
                    <span className="font-bold text-3xl">
                        We want to help you achieve your purpose.
                    </span>
                    <hr />
                    <p>
                        We are America's hydrocarbons and Oil Derivatives
                        Trading Company. Our daily goal is to serve business
                        hope directly from U.S., Procurement Process and
                        Operations Improvements.
                    </p>
                </div>
            </div>
        </section>
    );
};
