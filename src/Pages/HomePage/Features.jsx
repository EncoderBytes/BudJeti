
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
            <section className="w-full  flex items-center justify-center px-6 mt-20">

                <div className="w-8/12 mt-10 border  flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left Text Section */}
                 <div className="flex-1 text-center md:text-left relative">
  {/* Rectangle Background Image */}
  <img
    src="/Rectangle.png" // make sure this is in your public folder
    alt="Rectangle Background"
    className="w-full md:w-auto h-44 "
  />

  {/* Phone Image Positioned Over Rectangle */}
  <img
    src="/iphoneFeature.png" // also in public folder
    alt="Phone"
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[250px]"
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

                    </div>

                </div>
            </section>
        </>
    )
}

export default Features
