import { Route, Routes } from 'react-router-dom';
import { AppContainer, AppWrapper } from './App.styled';
import { NotFound } from './pages/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllCar } from './redux/car/carReducer';
import { page } from './redux/car/carSelectors';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { Home } from './pages/Home/Home';
import { CarPark } from './pages/CarPark/CarPark';
import { Favorites } from './pages/Fovorites/Favorites';

function App() {
  const dispatch = useDispatch();

  const pageValue = useSelector(page);

  useEffect(() => {
    dispatch(fetchAllCar(pageValue));
  }, [dispatch, pageValue]);
  return (
    <AppWrapper>
      <AppContainer>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<CarPark />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AppContainer>
    </AppWrapper>
  );
}
export default App;
