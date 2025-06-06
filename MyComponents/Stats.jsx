'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedCount = dynamic(() => import('@/components/AnimatedCount'), { ssr: false });

const Statistics = () => {
  return (
    <section className="relative h-auto overflow-hidden bg-gray-900">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src="/videos/0.webm" type="video/webm" />
        <source src="/videos/0.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white bg-black/80 h-full py-10 px-8 lg:p-20">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold mb-8 uppercase">
          The Proud Pulse of Us
        </h2>

        <p className='text-white mm lg:text-[15px] text-[13px] mb-8 max-w-3xl -mt-5'>At Happy Hours School, every heartbeat echoes with purpose — from the laughter of students to the dedication of teachers, from proud parents to timeless traditions. </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {/* Stat Item 1 */}
          <div className="glass-box max-md:py-3 p-6 rounded-2xl bg-white/0 backdrop-blur-sm border-b border-white/50 bg-clip-padding shadow-lg 
            relative before:absolute before:inset-0 before:rounded-2xl before:p-[1px] 
            before:bg-gradient-to-br before:from-white/10 before:to-white/5 
            before:content-[''] before:pointer-events-none hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
            <div className="lg:text-6xl max-md:text-4xl text-5xl text-[#f1a706] font-bold">
              <AnimatedCount end={500} suffix="+" />
            </div>
            <div className="text-[17px] uppercase mt-4 lg:text-lg">Happy Students</div>
          </div>

          {/* Stat Item 2 */}
          <div className="glass-box max-md:py-3 p-6 rounded-2xl bg-white/0 backdrop-blur-sm border-b border-white/50 bg-clip-padding shadow-lg 
            relative before:absolute before:inset-0 before:rounded-2xl before:p-[1px] 
            before:bg-gradient-to-br before:from-white/10 before:to-white/5 
            before:content-[''] before:pointer-events-none hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
            <div className="lg:text-6xl max-md:text-4xl text-5xl text-[#f1a706] font-bold">
              <AnimatedCount end={50} suffix="+" />
            </div>
            <div className="text-[17px] uppercase mt-4 lg:text-lg">Dedicated Teachers</div>
          </div>

          {/* Stat Item 3 */}
          <div className="glass-box max-md:py-3 p-6 rounded-2xl bg-white/0 backdrop-blur-sm border-b border-white/50 bg-clip-padding shadow-lg 
            relative before:absolute before:inset-0 before:rounded-2xl before:p-[1px] 
            before:bg-gradient-to-br before:from-white/10 before:to-white/5 
            before:content-[''] before:pointer-events-none hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
            <div className="lg:text-6xl max-md:text-4xl text-5xl text-[#f1a706] font-bold">
              <AnimatedCount end={25} suffix="+" />
            </div>
            <div className="text-[17px] uppercase mt-4 lg:text-lg">Years of Excellence</div>
          </div>

          {/* Stat Item 4 */}
          <div className="glass-box max-md:py-3 p-6 rounded-2xl bg-white/0 backdrop-blur-sm border-b border-white/50 bg-clip-padding shadow-lg 
            relative before:absolute before:inset-0 before:rounded-2xl before:p-[1px] 
            before:bg-gradient-to-br before:from-white/10 before:to-white/5 
            before:content-[''] before:pointer-events-none hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
            <div className="lg:text-6xl max-md:text-4xl text-5xl text-[#f1a706] font-bold">
              <AnimatedCount end={100} suffix="%" />
            </div>
            <div className="text-[17px] uppercase mt-4 lg:text-lg">Parent Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
