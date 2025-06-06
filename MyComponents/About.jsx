'use client'

import Image from 'next/image'; // Import the Image component from Next.js for optimized images 
import Link from 'next/link';

export const AboutUs = () => {
  return (
    // Section container with responsive padding and max-width 
    <section className=" max-md:px-10 p-10 px-16">
      {/* Flex container for the content and image grid */}
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-12">

        {/* Content Section */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl mbl uppercase text-[#2d1a6b]">
            About Us
          </h2>
          <p className="text-[15px] lg:text-lg text-black mm leading-relaxed m-0">
            At <strong>Happy Hours School</strong>, we're driven by a passion for nurturing young minds and fostering a love for learning. Since <strong>1995</strong>, we've been committed to <strong>providing a holistic educational experience that empowers children to thrive academically, socially, and emotionally</strong>. Our journey is built on a foundation of care, innovation, and a relentless pursuit of excellence in education.
          </p>

          <p className="text-[15px] lg:text-lg text-black mm leading-relaxed m-0 mt-4">
            Our commitment revolves around <strong>Child-Centric Learning</strong>, facilitated by an <strong>Innovative Curriculum</strong> and delivered by our <strong>Dedicated Educators</strong>, all aimed at fostering each child's <strong>Holistic Development</strong>.
          </p>
          {/* Button for small/medium screens - hidden on large screens */}
          <Link href='/about' className="btn rounded-tl-2xl rounded-br-2xl bg-[#bf213e] text-white mt-5 border-0 px-10 uppercase shadow-none hover:scale-95 transition-all duration-200 max-lg:hidden">
            Read More
          </Link>
        </div>

        {/* Image Grid Section */}
        {/* Note: The first image uses col-span-2, so it will take full width on sm (if sm:grid-cols-2 is parent) */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
          {/* Image 1 */}
          <div className="relative w-full h-64 overflow-hidden rounded-tl-2xl rounded-br-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] col-span-2 group">
            <Image
              src="/img/1.jpeg" // Replace with your actual image path (e.g., of children learning)
              alt="Children engaged in a classroom activity"
              className="transition-transform duration-300 group-hover:scale-105 w-full h-full object-cover"
              width={1000}
              height={1000}
              unoptimized
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-64 overflow-hidden rounded-tl-2xl rounded-br-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] group">
            <Image
              src="/img/2.png" // Replace with your actual image path (e.g., a teacher interacting)
              alt="Teacher interacting with students during lesson"
              className="transition-transform duration-300 group-hover:scale-105 w-full h-full object-cover"
              width={1000}
              height={1000}
              unoptimized
            />
          </div>

          {/* Image 3 */}
          <div className="relative w-full h-64 overflow-hidden rounded-tl-2xl rounded-br-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] group">
            <Image
              src="/img/3.png" // Replace with your actual image path (e.g., students in a playful setting)
              alt="Students happily playing during school hours"
              className="transition-transform duration-300 group-hover:scale-105 w-full h-full object-cover"
              width={1000}
              height={1000}
              unoptimized
            />
          </div>
        </div>
      </div> {/* End of main flex container for content and images */}

      {/* Read More button for large screens - hidden on small/medium screens */}
      {/* This button is placed outside the lg:flex-row layout, ensuring it appears below both columns on large screens. */}
      <div className="text-center mt-12 lg:hidden"> 
        <Link href='/about' className="btn rounded-tl-2xl rounded-br-2xl bg-[#bf213e] text-white border-0 px-10 uppercase shadow-none hover:scale-95 transition-all duration-200">
          Read More
        </Link>
      </div>

    </section>
  );
};
