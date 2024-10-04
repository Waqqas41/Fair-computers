"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const ITEMS = [
  {
    title: "BMO",
    width: 53,
    url: "https://companieslogo.com/img/orig/BMO-20802943.png",
  },
  {
    title: "Scotiabank",
    width: 167,
    url: "https://cdnlogo.com/logos/s/30/scotiabank.svg",
  },
  {
    title: "Air Canada",
    width: 42,
    url: "https://seeklogo.com/images/A/air-canada-logo-A0180CCDB8-seeklogo.com.png",
  },
  {
    title: "Rogers Wireless",
    width: 200,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Rogers_logo.svg/856px-Rogers_logo.svg.png",
  },
  {
    title: "Royal Bank",
    width: 38,
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/RBC_Royal_Bank.svg/554px-RBC_Royal_Bank.svg.png",
  },
  {
    title: "Bell Mobility",
    width: 75,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bell_logo.svg/540px-Bell_logo.svg.png",
  },
];

export default function Partners() {
  return (
    <section className="container max-w-[1024px] mx-auto p-6 lg:mb-6">
      <div className="md:hidden text-center text-xs text-powerful-gray font-semibold font-general-sans">
        Find jobs from
      </div>
      <div className="flex items-center">
        <div className="hidden md:block w-[140px] text-xs text-powerful-gray font-semibold font-general-sans">
          Find jobs from
        </div>
        <Swiper
          slidesPerView={3}
          modules={[Autoplay]}
          autoplay={false}
          wrapperClass="items-center grayscale"
          breakpoints={{
            1280: {
              slidesPerView: 5,
            },
            769: {
              slidesPerView: 4,
            },
          }}
        >
          {ITEMS.map((i, idx) => (
            <SwiperSlide key={idx}>
              <img
                alt={i.title}
                className="mx-auto"
                width={i.width}
                src={i.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}