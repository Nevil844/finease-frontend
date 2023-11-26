import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

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

        <li className='btn-cancel'>Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;
