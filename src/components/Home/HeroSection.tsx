import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[450px] lg:h-screen overflow-hidden bg-blueDark">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          playsInline
          loop
          muted
          poster="automotive.webp"
          className="h-full w-full object-cover object-center"
        >
          <source src="automotive.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center w-11/12 mx-auto gap-4 px-4 md:px-8">
        {/* Subtitle */}
        <span className="sg-translate font-light text-lg md:text-xl xl:text-2xl text-white leading-snug">
          Driven by performance
        </span>
        
        {/* Main Heading */}
        <h2 className="sg-translate text-white font-light leading-tight text-xl md:text-2xl xl:text-3xl">
          <span className="font-semibold">
            Soft trims and <span className="text-blue">NVH solutions</span>
          </span>
          <br className="hidden md:block" /> for seamless rides
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
