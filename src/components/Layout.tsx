import React from 'react';
import Navbar from './Navbar';
// import Footer from './Footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full flex overflow-hidden mx-auto max-w-screen-2xl'>
      <Navbar />
      <main className='bg-[#ECECEC] w-full min-h-screen p-6'>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
