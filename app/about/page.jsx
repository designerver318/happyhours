'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Spotlight } from '@/components/motion-primitives/spotlight';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectCube,
} from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';

const images = [
  { src: '/hero/a1.JPG' },
  { src: '/hero/a2.png' },
  { src: '/hero/a3.JPG' },
  { src: '/hero/a4.png' },
];

const AboutPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/hero/ab.png"
          alt="Happy children at Happy Hours School campus"
          className="z-0 w-full h-full object-cover"
          unoptimized
          width={1000}
          height={1000}
        />
        <div className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-4 drop-shadow-lg">
            About Happy Hours
          </h1>
        </div>
      </section>

      {/* Our Philosophy / Why Choose Us */}
      <section className="container mx-auto max-md:px-10 p-10 px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Slider */}
          <div className="lg:w-1/2 flex justify-center order-last lg:order-first">
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-full h-80 md:h-96  rounded-none overflow-hidden">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={800}
                grabCursor={true}
                effect="cube"
                cubeEffect={{
                  shadow: false,
                  slideShadows: false,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                modules={[EffectCube, Autoplay]}
                className="w-full h-full"
              >
                {images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={`Slide ${i + 1}`}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl mbl uppercase text-[#2d1a6b]">
              Our Unique Philosophy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <strong>Happy Hours School</strong>, we redefine education. Our unique approach ensures every child isn't just a participant, but a <strong>performer</strong> in all activities—from sports to arts and debates. What truly sets us apart is how our students consistently achieve <strong>academic excellence</strong> simultaneously.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              We foster an environment where active engagement in extracurriculars goes hand-in-hand with outstanding results. Our dedicated educators and innovative teaching methods empower students to manage their time effectively, embrace challenges, and excel across the board. Choosing Happy Hours School means your child can be both an all-rounder and a <strong>topper</strong>, building a strong foundation for a confident, successful future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-r from-[#2d1a6b] to-[#4a2e9a] text-white max-md:px-10 p-10 px-16">
        <div className="container p-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 text-white border border-white/20 transition-all duration-300 hover:scale-[1.02]">
            <Spotlight
              className="bg-white blur-3xl"
              size={100}
              springOptions={{
                bounce: 0.5,
                duration: 0.1,
              }}
            />
            <h3 className="text-3xl lg:text-4xl mbl uppercase text-[#fff]">Our Mission</h3>
            <p className="text-lg leading-relaxed opacity-90">
              To provide a nurturing and dynamic learning environment that fosters intellectual curiosity, critical thinking, and holistic development, preparing students to be responsible, compassionate, and successful global citizens.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 text-white border border-white/20 transition-all duration-300 hover:scale-[1.02]">
            <Spotlight
              className="bg-white blur-3xl"
              size={100}
              springOptions={{
                bounce: 0.5,
                duration: 0.1,
              }}
            />
            <h3 className="text-3xl lg:text-4xl mbl uppercase text-[#fff]">Our Vision</h3>
            <p className="text-lg leading-relaxed opacity-90">
              To be a beacon of educational excellence, recognized for empowering every child to discover their unique talents, achieve their highest potential, and contribute positively to society.
            </p>
          </div>
        </div>
      </section>

      {/* Why Grow With Us */}
      <section className=" max-md:px-10 p-16">
        <h2 className="text-3xl lg:text-4xl text-center mbl uppercase text-[#2d1a6b] mb-12">
          Why Grow With Happy Hours?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Holistic Development',
              desc: 'We focus on nurturing every aspect of a child\'s personality – academic, physical, emotional, and social – ensuring well-rounded growth.',
            },
            {
              title: 'Experienced Faculty',
              desc: 'Our passionate educators are highly qualified and dedicated to inspiring a love for learning and guiding students to success.',
            },
            {
              title: 'Modern Facilities',
              desc: 'Equipped with state-of-the-art classrooms, labs, libraries, and sports facilities to support diverse learning needs.',
            },
            {
              title: 'Strong Community',
              desc: 'We foster a supportive and inclusive school community where parents, teachers, and students collaborate for shared success.',
            },
            {
              title: 'Innovative Pedagogy',
              desc: 'Our teaching methods are dynamic and engaging, incorporating the latest educational research to make learning effective and fun.',
            },
            {
              title: 'Safety & Care',
              desc: 'A safe, secure, and caring environment is paramount, ensuring every child feels valued and protected.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-[#bf213e]"
            >
              <h4 className="text-2xl font-bold text-[#2d1a6b] mb-3">{item.title}</h4>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
