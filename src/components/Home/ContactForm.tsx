import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="w-full bg-blueDark" id="#2">
<div className="max-w-[1380px]  mx-auto  px-1.5   lg:w-10/12  relative   -mt-[4rem] md:-mt-[6rem] lg:-mt-[8rem] xl:-mt-[10rem] 2xl:-mt-[12rem]">
 <div className=" grid grid-cols-12 px-4 md:px-0  2xl:grid-cols-11 py-8 md:py-10 lg:py-[3rem] xl:py-[3.5rem] 2xl:py-[5rem] ">
      <div className="grid grid-cols-1 gap-y-10 col-start-1 md:grid-cols-2 md:col-start-2 col-end-13 md:col-end-12 2xl:col-end-11 text-white mb-3">
        <div>
          <span className="sg-translate text-2xl lg:text-[28px] xlg:text-3xl 2xl:text-4xl md:leading-snug lg:leading-snug 2xl:leading-snug font-semibold">
            Get in touch
          </span>
          <div className="h-[2px] w-12 bg-white my-3 md:my-5 lg:my-6 2xl:my-8"></div>
          
          {/* Mobile Form */}
          <div className="md:hidden mt-6 mb-8">
            <section className="w-full">
              <form className="mx-auto w-full grid 2xl:gap-9 xl:gap-4 gap-4">
                {['Full name', 'Email', 'Company'].map((placeholder, index) => (
                  <div key={index} className="relative">
                    <input 
                      className="text-white placeholder:text-opacity-90 border-white border-opacity-40 border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:border-opacity-100"
                      placeholder={placeholder}
                      name={placeholder.toLowerCase()}
                    />
                  </div>
                ))}
                <div>
                  <textarea
                    rows={3}
                    className="text-white placeholder:text-opacity-90 border-white border-opacity-40 border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:border-opacity-100"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                </div>
                <div className="flex justify-center md:grid relative place-content-center md:place-content-start">
                  <button 
                    type="submit" 
                    className="flex justify-center gap-1 w-full disabled:opacity-70 disabled:cursor-not-allowed outline-none bg-transparent rounded-full transition-all duration-700 ease-in-out hover:text-black hover:bg-white text-white border border-white lg:text-base text-sm px-8 md:px-12 py-3"
                  >
                    Send
                  </button>
                </div>
              </form>
            </section>
          </div>
          
          {/* Contact Details */}
          <span className="sg-translate block font-normal text-base md:text-lg 2xl:text-2xl">For general enquiries</span>
          <ul className="list-none flex flex-col gap-3 md:gap-5 2xl:gap-7 pt-5 md:pt-7 2xl:pt-8">
            <li className="flex flex-col gap-px items-start">
              <span className="font-semibold text-lg md:text-lg xl:text-xl">Address :</span>
              <span className="font-normal text-white text-opacity-90 text-sm md:text-base 2xl:text-xl">
                110, 16th Road, Chembur, <br className="xl:hidden block" /> Mumbai - 400071
              </span>
            </li>
            <li className="flex flex-col items-start gap-px text-base md:text-lg 2xl:text-xl">
              <span className="font-semibold text-lg md:text-lg xl:text-xl">Phone :</span>
              <a href="tel:+912225208822" className="font-normal hover:underline text-white text-opacity-90 text-sm md:text-base 2xl:text-xl">
                +91 22 25208822
              </a>
            </li>
            <li className="flex items-start flex-col gap-px text-base md:text-lg 2xl:text-xl">
              <span className="font-semibold text-lg md:text-lg xl:text-xl">Email :</span>
              <a href="mailto:info@supremegroup.co.in" className="font-normal text-white hover:underline text-opacity-90 text-sm md:text-base 2xl:text-xl">
                info@supremegroup.co.in
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Form */}
        <div className="hidden md:block">
          <section className="w-full">
            <form className="mx-auto w-full grid 2xl:gap-9 xl:gap-4 gap-4">
              {['Full name', 'Email', 'Company'].map((placeholder, index) => (
                <div key={index} className="relative">
                  <input 
                    className="text-white placeholder:text-opacity-90 border-white border-opacity-40 border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:border-opacity-100"
                    placeholder={placeholder}
                    name={placeholder.toLowerCase()}
                  />
                </div>
              ))}
              <div>
                <textarea
                  rows={3}
                  className="text-white placeholder:text-opacity-90 border-white border-opacity-40 border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:border-opacity-100"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>
              <div className="flex justify-center md:grid relative place-content-center md:place-content-start">
                <button 
                  type="submit" 
                  className="flex justify-center gap-1 w-full disabled:opacity-70 disabled:cursor-not-allowed outline-none bg-transparent rounded-full transition-all duration-700 ease-in-out hover:text-black hover:bg-white text-white border border-white lg:text-base text-sm px-8 md:px-12 py-3"
                >
                  Send
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
    </div>
    </div>
    
   
  );
};

export default ContactForm;
