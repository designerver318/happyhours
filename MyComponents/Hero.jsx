'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'

const images = [
  {
    id: 1,
    src: '/hero/h1.jpg',
    alt: 'Slide 1',
    className: 'object-bottom',
    heading: 'Joyful Journeys Begin Here',
    subtext: 'Nurturing young minds with love and laughter.',
  },
  {
    id: 2,
    src: '/hero/h2.jpeg',
    alt: 'Slide 2',
    className: 'object-bottom',
    heading: 'Empowering Curiosity',
    subtext: 'Every question sparks a new adventure.',
  },
  {
    id: 3,
    src: '/hero/h3.JPG',
    alt: 'Slide 3',
    className: 'object-top',
    heading: 'Building Bright Futures',
    subtext: 'Where knowledge meets fun and creativity.',
  },
  {
    id: 4,
    src: '/hero/h4.JPG',
    alt: 'Slide 4',
    className: 'object-center',
    heading: 'Together We Grow',
    subtext: 'Inspiring confidence and kindness every day.',
  },
  {
    id: 5,
    src: '/hero/h5.JPG',
    alt: 'Slide 5',
    className: 'object-bottom',
    heading: 'Learning Through Play',
    subtext: 'Community, care, and endless possibilities.',
  },
]

const Hero = () => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[83vh] overflow-hidden group">
      {/* Overlay for drama */}
      

      {/* Swiper with creative effect */}
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1800}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white !opacity-70',
          bulletActiveClass: '!bg-pink-500 !scale-125',
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                className={`object-cover w-full h-full transition-transform duration-[4500ms] ease-in-out group-hover:scale-110 ${image.className}`}
                width={1000}
                height={1000}
                unoptimized
              />
              {/* Text overlay per slide */}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[2] pointer-events-none" />
              <div className="absolute bottom-10 left-0 w-full flex flex-col items-center z-[2000]  text-white drop-shadow-lg">
                <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight uppercase">
                  {image.heading}
                </h2>
                <p className="mt-1 text-lg">{image.subtext}</p>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <button className="custom-prev absolute top-1/2 left-4 z-20 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white backdrop-blur-md p-3 rounded-full transition duration-300 group-hover:opacity-100 opacity-0">
        ❮
      </button>
      <button className="custom-next absolute top-1/2 right-4 z-20 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white backdrop-blur-md p-3 rounded-full transition duration-300 group-hover:opacity-100 opacity-0">
        ❯
      </button>
    </div>
  )
}

export default Hero
