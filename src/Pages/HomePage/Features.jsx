
const Features = () => {
    const features = [
        { icon: "/icon.png", text: "Instant P2P payments" },
        { icon: "/icon.png", text: "Linked bank accounts & debit cards" },
        { icon: "/icon.png", text: "Digital wallet balance" },
        // { icon: "/icon.png", text: "Prepaid card access" },
        { icon: "/icon.png", text: "Optional social feed / memo sharing" },
        { icon: "/icon.png", text: "Group transactions and shared accounts" },
    ];
    return (
        <>
            <section className="w-full  flex items-center justify-center px-6 mt-44">

                <div className="w-9/12 mt-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left Text Section */}
                    <div className="flex-1 text-center md:text-left relative">
<img src="../../../public/1circle.png" className="absolute w-60 top-[-120px] right-64" alt="" />
<img src="../../../public/2circle.png" className="absolute w-60 top-[-80px] right-68" alt="" />
<img src="../../../public/3circle.png" className="absolute w-60 top-[-60px] right-72" alt="" />
                        <div className=" w-72 h-44 bg-[#1929D6] "></div>
                        <img
                            src="/iphoneFeature.png"
                            alt="Phone"
                            className="absolute top-1/2 left-[180px] transform -translate-x-1/2 -translate-y-1/2 w-[350px] "
                        />
                    </div>


                    {/* Right Image Section */}
                    <div className="flex-1 ">
                        <div className="">
                            <h3 className="text-[#1929D6] text-xl">FEATURES</h3>
                            <h2 className="text-2xl font-bold ">Designed For Business.</h2>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-2">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <img src={feature.icon} alt="Feature Icon" className="w-6 h-6" />
                                    <p className="text-gray-800">{feature.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="relative">
<div className="absolute right-16 top-24">
    <img src="./Star.png" alt="" />
</div>
</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
