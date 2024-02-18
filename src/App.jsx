import { Route, Routes } from 'react-router-dom';
import { AppContainer } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllCar, fetchCars } from './redux/car/carReducer';
import { loading, page } from './redux/car/carSelectors';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { Home } from './pages/Home/Home';
import { CarPark } from './pages/CarPark/CarPark';
import { Favorites } from './pages/Favorites/Favorites';
import { Loader } from './components/Loader/Loader';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(loading);

  const pageValue = useSelector(page);

  useEffect(() => {
    dispatch(fetchAllCar());
    dispatch(fetchCars(pageValue));
  }, [dispatch, pageValue]);
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CarPark />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>

      {isLoading && <Loader />}
    </AppContainer>
  );
}
export default App;
