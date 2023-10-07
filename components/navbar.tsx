import { LINKS } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Navbar = () => (
  <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
    <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
      {LINKS.map(({ name, hash }) => (
        <motion.li key={hash} className="h-3/4 flex items-center justify-center" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <Link href={hash} className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950">
            {name}
          </Link>
        </motion.li>
      ))}
    </ul>
  </nav>
);
