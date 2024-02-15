import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { TailSpin } from 'react-loader-spinner';

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
    </>
  );
};

export default SharedLayout;
