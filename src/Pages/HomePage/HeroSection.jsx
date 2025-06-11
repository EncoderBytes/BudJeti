import Navbar from "../../Components/Navbar/Navbar";

const HeroSection = () => {
    const images = [
        "/pic3.png",
        "/pic2.png",
        "/pic1.png",
    ];

    return (
        <>
            <section className="w-full flex items-center justify-center px-6 relative">
                <div className="absolute right-[280px] top-0 z-0">
                    <img className="h-96" src="/arrow.png" alt="" />
                </div>
                <div className="absolute right-64 top-32">
                    <img className="w-10" src="/Star.png" alt="" />
                </div>
                 <div className="absolute right-[650px] bottom-48">
                    <img className="w-8" src="/Star.png" alt="" />
                </div>
                <div className="w-9/12 mt-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-center md:text-left ">
                        <div className="">
                            <h1 className="text-[64px] md:text-5xl font-bold text-gray-800 mt-6">
                                Empower Your <br /> Business With <span className="text-[#1929D6] whitespace-nowrap">Seamless Payments</span>
                            </h1>
                            <p className="text-[#71717A] text-[18px] w-[420px]">
                                Send, receive, and manage payments effortlessly — with a secure digital wallet designed for business.
                            </p>
                        </div>

                        <div className="mt-14">
                            <button className=" bg-[#1929D6] text-white px-6 py-3 rounded-md cursor-pointer transition">
                                Get Started Today <span className="p-3 text-xl"> → </span>
                            </button>
                        </div>


                        <div className="w-[413px] flex gap-4 mt-[114px]">
                            <div className="w-[55px] h-[65px] rounded-[13px] text-white bg-black flex items-center justify-center">
                               <span className="text-xl font-semibold">1.0m</span> 
                            </div>
                            <div className="w-[294px] ">
                                <div className="flex gap-2">
                                    {images.map((src, index) => (
                                        <img
                                            key={index}
                                            src={src}
                                            alt={`Image ${index + 1}`}
                                            className="w-7 h-7  rounded-full"
                                        />
                                    ))}
                                </div>
                                <p className="text-[16px]">There are 1.0 million users in the world,
                                    everyone is happy with our service.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 z-10">
                        <img
                            src="/heroSectionPhone.png"
                            alt="Hero"
                            className="w-[500px]  mt-[100px] ml-[120px]"
                        />
                    </div>

                </div>
            </section>
        </>
    );
};

export default HeroSection;
