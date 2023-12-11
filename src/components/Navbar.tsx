import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

const routes = [
  {
    name: 'Investment',
    path: '/investment',
  },
  {
    name: 'Budget',
    path: '/budget',
  },
  {
    name: 'Goals',
    path: '/goals',
  },
  {
    name: 'Blogs',
    path: '/blogs',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className='w-1/4 p-6'>
      <h1 className='text-4xl'>Finease</h1>
      <ul className='flex flex-col space-y-4 mt-6'>
        <Link
          href={{
            pathname: '/',
          }}
        >
          <li className={pathname === '/' ? 'btn-solid' : 'btn-outline'}>
            Dashboard
          </li>
        </Link>
        {routes.map((route, i) => (
          <Link
            key={i}
            href={{
              pathname: route.path,
            }}
          >
            <li
              className={
                pathname.includes(route.path) ? 'btn-solid' : 'btn-outline'
              }
            >
              {route.name}
            </li>
          </Link>
        ))}
                <div className=" p-6 bg-gray-200 rounded-lg text-center">
          {/* Circular image */}
          <div className="mx-auto mb-4 h-20 w-20 rounded-full overflow-hidden">
            <Image
                src="/author.jpg"
                alt="Author"
                width={150}
                height={150}
                className="rounded-full object-cover border-4 border-white"
            />
          </div>

          {/* Heading */}
          <h2 className="text-large font-bold mb-2">
            Receive advice via one-on-one conversation with experts
          </h2>

          {/* Upgrade button */}
          <button className="bg-[#A8DADC] hover:bg-[#19686b] text-white px-4 py-2 rounded-full">
            Upgrade
          </button>
        </div>

        <li className='btn-cancel'>Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;
