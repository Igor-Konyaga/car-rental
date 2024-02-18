import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { TailSpin } from 'react-loader-spinner';
import { Footer } from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <TailSpin
            height="60"
            width="60"
            color="#fd8451"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
