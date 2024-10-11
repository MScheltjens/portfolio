'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

type Props = {
  cards: Card[];
};

//in order to make the card close-able from the selected card we need to lift state and make a wrapper with the state inside

export const LayoutGrid = ({ cards }: Props) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="relative h-screen">
      <div className="mx-auto grid h-full w-full max-w-5xl grid-cols-1 gap-3 px-10 pb-24 pt-64 md:grid-cols-3 md:gap-6">
        {cards.map((card, i) => (
          <div key={i} className={cn(card.className)}>
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                card.className,
                'relative overflow-hidden hover:cursor-pointer',
                selected?.id === card.id
                  ? 'absolute inset-0 z-50 m-auto flex h-2/3 w-full flex-col flex-wrap items-center justify-center rounded-lg md:w-2/3'
                  : lastSelected?.id === card.id
                    ? 'z-40 h-full w-full rounded-xl bg-white dark:bg-muted'
                    : 'h-full w-full rounded-xl bg-white dark:bg-muted'
              )}
              layoutId={`card-${card.id}`}
            >
              {selected?.id === card.id && <SelectedCard selected={selected} />}

              {/* <ImageComponent card={card} /> */}
              <ImageComponent />
            </motion.div>
          </div>
        ))}
        <motion.div
          onClick={handleOutsideClick}
          className={cn(
            'absolute left-0 top-0 z-10 h-full w-full opacity-0',
            selected?.id ? 'pointer-events-auto' : 'pointer-events-none'
          )}
          animate={{ opacity: selected?.id ? 0.3 : 0 }}
        />
      </div>
    </div>
  );
};

// const ImageComponent = ({ card }: { card: Card }) => (
const ImageComponent = () => (
  // <motion.img
  //   layoutId={`image-${card.id}-image`}
  //   src={card.thumbnail}
  //   height="500"
  //   width="500"
  //   className={cn(
  //     'absolute inset-0 h-full w-full object-cover object-top transition duration-200'
  //   )}
  //   alt="thumbnail"
  // />
  <Skeleton className="absolute inset-0 h-full w-full object-cover object-top" />
);

const SelectedCard = ({ selected }: { selected: Card | null }) => (
  <div className="absolute top-0 z-[60] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl">
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 0.6
      }}
      className="absolute inset-0 z-10 h-full w-full opacity-60"
    />
    <motion.div
      layoutId={`content-${selected?.id}`}
      initial={{
        opacity: 0,
        y: 100
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        y: 100
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut'
      }}
      className="relative z-[70] px-8 pb-4"
    >
      {selected?.content}
    </motion.div>
  </div>
);
