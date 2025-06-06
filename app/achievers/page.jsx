
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import classNames from 'classnames';

const getAchievers = async () => {
  try {
    const res = await fetch('/api/achievers', {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) throw new Error('Failed to fetch data');
    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};


export default function AchieversPage() {
  const [achievers, setAchievers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    console.log('Fetching achievers...');
    getAchievers()
      .then((data) => {
        console.log('Received data:', data);
        setAchievers(data);
        setError(null);
      })
      .catch((err) => {
        console.error('Error:', err);
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <>
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
            🏆 Achievers 🏆
          </h1>
        </div>
      </section>
      <div className="p-6">

        <div className="relative">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-[#2d1a6b] text-white px-3 py-2 rounded-full shadow-md hover:bg-[#1f104e] transition-all hidden md:block"
          >
            ⬅
          </button>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-[#2d1a6b] text-white px-3 py-2 rounded-full shadow-md hover:bg-[#1f104e] transition-all hidden md:block"
          >
            ➡
          </button>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView={1.5}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            className="p-10 flex justify-center"
          >
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <SkeletonCard />
                </SwiperSlide>
              ))
              : achievers.map((a, index) => {
                const isActive = index === activeIndex;


                return (
                  <SwiperSlide key={a._id} className="flex justify-center"
                    style={{ margin: "0 15px 0 18px" }}
                  >
                    <div
                      className={classNames(
                        'transition-transform bg-red-100 text-gray-900 p-6 shadow-lg rounded-3xl duration-300 ease-in-out px-10 max-w-md w-full',
                        {
                          'scale-110 z-20': isActive,
                          'scale-90 z-10': !isActive,
                        }
                      )}
                    >
                      <div className="flex max-sm:flex-col sm:flex-row md:flex-col lg:flex-row space-x-5 items-center  text-start transition-all duration-300 ease-in-out hover:scale-105">
                        <div className="w-40 h-40 flex-shrink-0 ring-2 ring-[#bf213e] ring-offset-2 rounded-full overflow-hidden bg-gray-200">
                          <Image
                            src={a.image}
                            alt={a.name}
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                            unoptimized
                          />
                        </div>

                        <div className="mt-4 text-left space-y-1">
                          <h2 className="text-xl mb text-black capitalize">{a.name}</h2>
                          <p>
                            <span className="font-medium text-[#bf213e]">Result:</span>{' '}
                            <span className="text-black font-medium">{a.result}%</span>
                          </p>
                          <p>
                            <span className="font-medium text-[#bf213e]">Subject:</span>{' '}
                            <span className="text-black font-medium">{a.subject}</span>
                          </p>
                          <p className="text-xs mt-2">
                            <span className="font-medium text-[#bf213e]">Posted on:</span>{' '}
                            <span className="text-black font-medium">
                              {new Date(a.date).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                              })}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
}



// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import classNames from 'classnames';



// export default function AchieversPage() {
//   const [achievers, setAchievers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);



//   const handlePrev = () => swiperRef.current?.slidePrev();
//   const handleNext = () => swiperRef.current?.slideNext();

//   if (error) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-2xl text-red-500">Error loading achievers</h2>
//         <p className="mt-2">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center text-white overflow-hidden">
//         <Image
//           src="/hero/ab.png"
//           alt="Happy children at Happy Hours School campus"
//           className="z-0 w-full h-full object-cover"
//           unoptimized
//           width={1000}
//           height={1000}
//         />
//         <div className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center p-4 text-center">
//           <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-4 drop-shadow-lg">
//             🏆 Achievers 🏆
//           </h1>
//         </div>
//       </section>

//       <div className="p-6">
//         {isLoading ? (
//           <div className="text-center py-10">
//             <p>Loading achievers...</p>
//             <div className="flex justify-center space-x-4 mt-4">
//               {Array.from({ length: 3 }).map((_, i) => (
//                 <SkeletonCard key={i} />
//               ))}
//             </div>
//           </div>
//         ) : achievers.length > 0 ? (
//           <div className="relative">
//             {/* Navigation buttons and Swiper */}
//             <button
//               onClick={handlePrev}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-[#2d1a6b] text-white px-3 py-2 rounded-full shadow-md hover:bg-[#1f104e] transition-all hidden md:block"
//             >
//               ⬅
//             </button>

//             {/* Right Button */}
//             <button
//               onClick={handleNext}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-[#2d1a6b] text-white px-3 py-2 rounded-full shadow-md hover:bg-[#1f104e] transition-all hidden md:block"
//             >
//               ➡
//             </button>
//             <Swiper
//               modules={[Autoplay]}
//               spaceBetween={32}
//               slidesPerView={1.5}
//               centeredSlides={true}
//               loop={true}
//               autoplay={{ delay: 2000, disableOnInteraction: false }}
//               onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//               onSwiper={(swiper) => (swiperRef.current = swiper)}
//               breakpoints={{
//                 768: {
//                   slidesPerView: 3,
//                 },
//               }}
//               className="p-10 flex justify-center"
//             >
//               {isLoading
//                 ? Array.from({ length: 3 }).map((_, index) => (
//                   <SwiperSlide key={index}>
//                     <SkeletonCard />
//                   </SwiperSlide>
//                 ))
//                 : achievers.map((a, index) => {
//                   const isActive = index === activeIndex;


//                   return (
//                     <SwiperSlide key={a._id} className="flex justify-center"
//                       style={{ margin: "0 15px 0 18px" }}
//                     >
//                       <div
//                         className={classNames(
//                           'transition-transform bg-red-100 text-gray-900 p-6 shadow-lg rounded-3xl duration-300 ease-in-out px-10 max-w-md w-full',
//                           {
//                             'scale-110 z-20': isActive,
//                             'scale-90 z-10': !isActive,
//                           }
//                         )}
//                       >
//                         <div className="flex max-sm:flex-col sm:flex-row md:flex-col lg:flex-row space-x-5 items-center  text-start transition-all duration-300 ease-in-out hover:scale-105">
//                           <div className="w-40 h-40 flex-shrink-0 ring-2 ring-[#bf213e] ring-offset-2 rounded-full overflow-hidden bg-gray-200">
//                             <Image
//                               src={a.image}
//                               alt={a.name}
//                               width={1000}
//                               height={1000}
//                               className="w-full h-full object-cover"
//                               unoptimized
//                             />
//                           </div>

//                           <div className="mt-4 text-left space-y-1">
//                             <h2 className="text-xl mb text-black capitalize">{a.name}</h2>
//                             <p>
//                               <span className="font-medium text-[#bf213e]">Result:</span>{' '}
//                               <span className="text-black font-medium">{a.result}%</span>
//                             </p>
//                             <p>
//                               <span className="font-medium text-[#bf213e]">Subject:</span>{' '}
//                               <span className="text-black font-medium">{a.subject}</span>
//                             </p>
//                             <p className="text-xs mt-2">
//                               <span className="font-medium text-[#bf213e]">Posted on:</span>{' '}
//                               <span className="text-black font-medium">
//                                 {new Date(a.date).toLocaleDateString('en-GB', {
//                                   day: 'numeric',
//                                   month: 'long',
//                                   year: 'numeric',
//                                 })}
//                               </span>
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   );
//                 })}
//             </Swiper>
//           </div>
//         ) : (
//           <div className="text-center py-20">
//             <h2 className="text-2xl">No achievers found</h2>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

const SkeletonCard = () => {
  return (
    <div className="bg-gray-100 text-gray-900 p-6 rounded-3xl shadow-lg flex items-center text-center animate-pulse max-w-md w-full mx-auto">
      <div className="w-40 h-40 rounded-full bg-gray-300 mr-4" />
      <div className="flex flex-col space-y-2 text-left w-full">
        <div className="w-32 h-4 bg-gray-300 rounded" />
        <div className="w-24 h-3 bg-gray-300 rounded" />
        <div className="w-24 h-3 bg-gray-300 rounded" />
        <div className="w-40 h-3 bg-gray-300 rounded mt-2" />
        <div className="w-20 h-2 bg-gray-300 rounded mt-2" />
      </div>
    </div>
  );
};
