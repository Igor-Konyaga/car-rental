import { Route, Routes } from 'react-router-dom';
import { AppContainer } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllCar, fetchCars } from './redux/car/carReducer';
import { page } from './redux/car/carSelectors';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { Home } from './pages/Home/Home';
import { CarPark } from './pages/CarPark/CarPark';
import { Favorites } from './pages/Favorites/Favorites';

function App() {
  const dispatch = useDispatch();

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
    </AppContainer>
  );
}
export default App;
