'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: 'rgb(255,255,255)' },
  };

  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: 'rgb(255,255,255)' },
  };

  const listVariants = {
    closed: { x: '100vw' },
    opened: { x: 0, transition: { when: 'beforeChildren', staggerChildren: 0.2 } },
  };

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="/">
          <div className={`rounded p-3 ${router.pathname === '/' ? 'bg-black text-white' : ''} hover:bg-black hover:text-white`}>
            Home
          </div>
        </Link>
        <Link href="/about">
          <div className={`rounded p-3 ${router.pathname === '/about' ? 'bg-black text-white' : ''} hover:bg-black hover:text-white`}>
            About
          </div>
        </Link>
        <Link href="/contact">
          <div className={`rounded p-3 ${router.pathname === '/contact' ? 'bg-black text-white' : ''} hover:bg-black hover:text-white`}>
            Contact
          </div>
        </Link>
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/" passHref>
          <div className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
            <span className="text-4xl text-white mr-1">Apophis</span>
            <span className="text-4xl w-28 h-18 rounded bg-white text-black flex items-center justify-center">
              .InQtel
            </span>
          </div>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="/" passHref><Image src="/github.png" alt="" width={24} height={24} /></Link>
        <Link href="/" passHref><Image src="/dribbble.png" alt="" width={24} height={24} /></Link>
        <Link href="/" passHref><Image src="/instagram.png" alt="" width={24} height={24} /></Link>
        <Link href="/" passHref><Image src="/facebook.png" alt="" width={24} height={24} /></Link>
        <Link href="/" passHref><Image src="/pinterest.png" alt="" width={24} height={24} /></Link>
        <Link href="/" passHref><Image src="/linkedin.png" alt="" width={24} height={24} /></Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            <motion.div
              variants={listItemVariants}
              className=""
            >
              <Link href="/about">About</Link>
            </motion.div>
            <motion.div
              variants={listItemVariants}
              className=""
            >
              <Link href="/">Home</Link>
            </motion.div>
            <motion.div
              variants={listItemVariants}
              className=""
            >
              <Link href="/contact">Contact</Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
