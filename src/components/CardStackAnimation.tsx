'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CardStackProps {
  isRevealed?: boolean;
}

export default function CardStackAnimation({ isRevealed = true }: CardStackProps) {
  // Stack of 6 authentic Zazo cards from back (bottom) to front (top)
  // Matching the fan spread and angle of the reference image
  const cards = [
    {
      id: 'card-6',
      src: '/card-6.png',
      alt: 'Zazo Debit Card Coral',
      revealedRotate: -28,
      revealedX: -36,
      revealedY: -16,
      zIndex: 10,
    },
    {
      id: 'card-5',
      src: '/card-5.png',
      alt: 'Zazo Debit Card Orchid',
      revealedRotate: -20,
      revealedX: -26,
      revealedY: -24,
      zIndex: 20,
    },
    {
      id: 'card-4',
      src: '/card-4.png',
      alt: 'Zazo Debit Card Purple',
      revealedRotate: -12,
      revealedX: -14,
      revealedY: -30,
      zIndex: 30,
    },
    {
      id: 'card-3',
      src: '/card-3.png',
      alt: 'Zazo Debit Card Royal Blue',
      revealedRotate: -4,
      revealedX: 2,
      revealedY: -28,
      zIndex: 40,
    },
    {
      id: 'card-2',
      src: '/card-2.png',
      alt: 'Zazo Debit Card Aqua Cyan',
      revealedRotate: 5,
      revealedX: 20,
      revealedY: -18,
      zIndex: 50,
    },
    {
      id: 'card-1',
      src: '/card-1.png',
      alt: 'Zazo Debit Card Signature Green',
      revealedRotate: -10,
      revealedX: 0,
      revealedY: 0,
      zIndex: 60,
    },
  ];

  return (
    <div className="relative w-[300px] sm:w-[360px] xl:w-[420px] aspect-[1.589/1] flex items-center justify-center select-none group cursor-pointer">
      {cards.map((card, idx) => {
        const isFront = card.id === 'card-1';

        return (
          <motion.div
            key={card.id}
            initial={{ rotate: -10, x: 0, y: 0, scale: 0.95 }}
            animate={
              isRevealed
                ? {
                    rotate: card.revealedRotate,
                    x: card.revealedX,
                    y: card.revealedY,
                    scale: 1,
                  }
                : {
                    rotate: -10,
                    x: 0,
                    y: 0,
                    scale: 0.95,
                  }
            }
            whileHover={
              isRevealed
                ? {
                    rotate: card.revealedRotate * 1.08,
                    x: card.revealedX * 1.15,
                    y: card.revealedY * 1.15,
                    scale: 1.03,
                    transition: { duration: 0.25 },
                  }
                : undefined
            }
            transition={{
              duration: 0.75,
              delay: (cards.length - 1 - idx) * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ zIndex: card.zIndex }}
            className="absolute inset-0 w-full h-full"
          >
            <div
              className={`relative w-full h-full ${
                isFront
                  ? 'drop-shadow-[0_24px_45px_rgba(0,0,0,0.8)]'
                  : 'drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]'
              }`}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 640px) 300px, 420px"
                className="object-contain"
                priority={isFront}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
