import Image from 'next/image';
import Link from 'next/link';

const WhyChooseUs = () => {
  return (
    <section className=" max-md:px-10 p-10 px-16 bg-red-100">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        {/* Image Section - Appears first on mobile, second on larger screens */}
        <div className="lg:w-1/2 w-full flex justify-center h-full">
          {/* Using a div for styling the image container */}
          <div className="relative w-full    lg:max-w-full h-80 md:h-96 rounded-3xl shadow-lg overflow-hidden">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hq-ti4A37XQ?si=GZ5OEhrxC3_QAbxO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
            {/* <Image
              src="/img/why-choose-us.jpg" // **IMPORTANT: Replace with your actual image path**
              alt="Happy Hours School students excelling in academics and activities"
              layout="fill" // Makes the image fill the parent div
              objectFit="cover" // Ensures the image covers the area without distortion
              className="transition-transform duration-300 hover:scale-105"
              unoptimized // Use this if your image is not optimized by Next.js or is external
            /> */}
          </div>
        </div>

        {/* Content Section - Appears second on mobile, first on larger screens */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left order-last lg:order-first">
          <h2 className="text-3xl lg:text-4xl mbl uppercase text-[#2d1a6b]">
            Why Choose Happy hours?
          </h2>
          <p className="text-[15px] lg:text-lg text-black mm leading-relaxed mb-0">
            At <strong>Happy Hours School</strong>, we redefine education. Our unique approach ensures every child isn't just a participant, but a performer in all activities—from sports to arts and debates. What truly sets us apart is how our students consistently achieve academic excellence simultaneously.
          </p>
          <p className="text-[15px] lg:text-lg text-black mm leading-relaxed mb-0 mt-4">
            Choosing Happy Hours School means your child can be both an <strong> all-rounder</strong> and a <strong>topper</strong> , building a strong foundation for a confident, successful future.
          </p>
          {/* Optional: Add a call to action button */}
          <Link href='/about' className="btn rounded-tl-2xl rounded-br-2xl bg-[#2d1a6b] text-white mt-5 border-0 px-10 uppercase shadow-none hover:scale-95 transition-all duration-200 max-lg:hidden">
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;