const AboutUs = () => {
  return (
    <section className="relative w-full text-white px-6 flex items-center justify-center bg-[#18181B]">
      <div className="w-9/12 pt-10 pb-24 flex flex-col md:flex-row items-center justify-between gap-8 ">
        <div className="absolute left-0 mt-60 z-0">
          <img className="h-64" src="/aboutUsL.png" alt="" />
        </div>

        <div className="absolute right-0 mb-0  ">
          <img className="" src="/aboutUsR.png" alt="" />
        </div>
   
        <div className="absolute right-[600px] top-10  ">
                    <img className=" w-8 h-8" src="/aboutStar.png" alt="" />
        </div>



        <div className="flex-1 text-center md:text-left ">
          <div className="flex justify-between">
            <h2 className="text-[48px] font-semibold mb-4 whitespace-nowrap">About Us</h2>
            <img className="ml-[700px] w-8 h-8" src="/aboutStar.png" alt="" />
          </div>
          <p className="text-white mb-6 text-sm w-[400px]">
            We aim to revolutionize the way businesses collect and manage their finances by providing an all-in-one digital wallet and payment platform built for speed, transparency, and control. Our mission is to eliminate the friction of traditional banking processes, empowering businesses to move money instantly, track payments in real time, and streamline financial operations with ease.
          </p>
          <img className="absolute w-8 left-[640px] bottom-36" src="/aboutStar.png" alt="" />
         <button className="bg-white text-black px-6 py-3 rounded-lg z-10 relative flex items-center gap-2">
  Download App
  <img src="/apple.png" alt="Apple Icon" className="w-5 h-5" />
</button>





        </div>

        <div className="flex items-center  justify-end absolute h-full right-16 top-0">
          <img
            src="./aboutPhone2.png"
            alt="Phone Back"
            className="w-96 h-full"
          />

          <img
            src="./aboutPhone.png"
            alt="Phone Front"
            className=" h-full absolute right-32 transform   z-10 rounded-xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
