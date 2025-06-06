"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="rounded-md flex flex-col antialiased bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </div>
  );
}

const testimonials = [
  {
    img: '/img/g1.JPG',
  },
  {
    img: '/img/g2.JPG',
  },
  {
    img: '/img/g3.JPG',
  },
  {
    img: '/img/g4.JPG',
  },
  {
    img: '/img/g5.jpeg',
  },
  {
    img: '/img/g6.jpeg',
  },
  {
    img: '/img/g7.jpeg',
  },
];
