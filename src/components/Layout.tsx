import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Inter } from 'next/font/google';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState, setAuthState, setAuthToken } from '@/store/authSlice';
// import { redirect } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

// import Footer from './Footer';
const inter = Inter({ subsets: ['latin'] });

function Layout({ children }: { children: React.ReactNode }) {
  const authState = useSelector(selectAuthState);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      // Check if user is logged in
      if (authState) {
        toast.success('Welcome back, Logged in successful!');
        return;
      }

      // Login redirect workflow
      if (
        window.location.href.split('#')[1].split('&')[0].split('=')[1] !==
        undefined
      ) {
        dispatch(
          setAuthToken(
            window.location.href.split('#')[1].split('&')[0].split('=')[1]
          )
        );
        dispatch(setAuthState(true));
        toast.success('Logged in successfully');
        router.push('/');
      }
    } catch (err) {
      console.log(err);
      // window.location.assign(
      //   'https://finease.auth.us-east-1.amazoncognito.com/login?client_id=19l6pg30ghq8lttdkg435i6hlc&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F'
      // );
      // toast.error('Please login to continue');
    }
  }, []);

  return (
    <div
      className={
        `${inter.className}` +
        ' w-full flex overflow-hidden mx-auto max-w-screen-2xl'
      }
    >
      <Toaster />
      <Navbar />
      <main className='bg-[#ECECEC] w-full min-h-screen p-6'>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
