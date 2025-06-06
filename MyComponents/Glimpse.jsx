
import { InfiniteMovingCardsDemo } from '@/components/movingCards'
import Link from 'next/link'
import React from 'react'

const Glimpse = () => {
  return (
    <section className='bg-white py-16'>
          <div className="max-w-6xl mx-auto mb-5 text-center px-6">
           <h2 className="text-3xl lg:text-4xl mbl uppercase text-[#2d1a6b]">
          Glimpses of Happy hours
        </h2>

        <p className='text-[15px] lg:text-lg text-black mt-3 mm leading-relaxed m-0'>Every moment is designed to spark joy and foster growth. Step into our vibrant campus and you'll see children actively engaged in child-centric learning, their laughter echoing through classrooms filled with curiosity</p>
          </div>
          <InfiniteMovingCardsDemo />
          <Link href='/gallery' className="btn rounded-tl-2xl rounded-br-2xl bg-[#bf213e] text-white mt-5 border-0 px-10 uppercase shadow-none hover:scale-95 transition-all duration-200 max-lg:hidden">
            GO to gallery
          </Link>
        </section>
  )
}

export default Glimpse