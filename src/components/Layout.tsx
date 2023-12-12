import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Inter } from 'next/font/google';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthState,
  selectAuthToken,
  setAuthState,
  setAuthToken,
} from '@/store/authSlice';
// import { redirect } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import userFunctions from '@/service/userProfile';
import { jwtDecode } from 'jwt-decode';
import { setUserData } from '@/store/userSlice';

// import Footer from './Footer';
const inter = Inter({ subsets: ['latin'] });

function Layout({ children }: { children: React.ReactNode }) {
  const authState = useSelector(selectAuthState);
  const authToken = useSelector(selectAuthToken);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      // Check if user is logged in
      if (authState == true) {
        toast.success('Welcome back, Logged in successful!');
        const decode = jwtDecode(authToken);

        const userId: string = decode.sub as string;

        userFunctions.getUserInfo(userId, authToken).then((res) => {
          console.log('User info', res.user);
          dispatch(setUserData(res.user));
        });
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
        const authT = window.location.href
          .split('#')[1]
          .split('&')[0]
          .split('=')[1];

        const decode = jwtDecode(
          window.location.href.split('#')[1].split('&')[0].split('=')[1]
        );
        const userId: string = decode.sub as string;
        dispatch(setAuthState(true));
        toast.success('Logged in successfully');
        userFunctions.createUser(authT).then((res) => {
          console.log('User created', res);
          if (res.status === 200) {
            router.push('/profile');
          } else {
            if (res.message === 'User already exists') {
              router.push('/profile');
              userFunctions.getUserInfo(userId, authT).then((res) => {
                console.log('User info', res.user);
                dispatch(setUserData(res.user));
              });
            } else {
              console.log(res);

              toast.error('Something went wrong, please try again');
            }
          }
        });
      }
    } catch (err) {
      console.log(err);
      window.location.assign(
        'https://finease.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=19l6pg30ghq8lttdkg435i6hlc&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2F'
      );
      toast.error('Please login to continue');
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
