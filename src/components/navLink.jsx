'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NavLink = ({ link }) => {
  const router = useRouter();

  const isActive = router.pathname === link.url;

  return (
    <Link href={link.url}>
      <div className={`rounded p-1 ${isActive ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`} style={{ cursor: 'pointer' }}>
        {link.title}
      </div>
    </Link>
  );
};

export default NavLink;