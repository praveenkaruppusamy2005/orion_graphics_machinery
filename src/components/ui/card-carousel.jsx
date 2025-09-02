import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

export const CardCarousel = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 60px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    border-radius: 16px;
  }
  
  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right {
    background: none !important;
  }

  /* ✅ Pagination dots */
  .swiper-pagination-bullet {
    background: white;
    opacity: 1;
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet-active {
    background: #fb8500 !important;
    transform: scale(1.2);
  }

  /* ✅ Custom navigation buttons */
  .swiper-button-next,
  .swiper-button-prev {
    position: relative;
    top: auto;
    bottom: -20px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #fb8500;
    color: white;
    font-weight: bold;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 18px;
    font-weight: bold;
  }

  .swiper-button-prev {
    margin-right: 15px;
  }
  .swiper-button-next {
    margin-left: 15px;
  }

  /* Center buttons container */
  .swiper-navigation-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 20px;
  }
  `

  return (
    <section className="w-full">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl text-center">
        <Swiper
          spaceBetween={50}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={showPagination ? { clickable: true } : false}
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : undefined
          }
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex)
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="size-full rounded-3xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="size-full rounded-xl object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Show current image name */}
        <div className="mt-4 text-lg font-semibold text-white">
          {images[activeIndex]?.alt}
        </div>
      </div>
    </section>
  )
}
