import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppContainer, AppWrapper } from './App.styled';
import { Home } from './pages/Home/Home';
import { CarPark } from './pages/CarPark/CarPark';
import { Favorite } from './pages/Fovorite/Favorite';

function App() {
  return (
    <AppWrapper>
      <AppContainer>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="catalog" element={<CarPark />} />
            <Route path="favorites" element={<Favorite />} />
          </Route>
        </Routes>
      </AppContainer>
    </AppWrapper>
  );
}
export default App;
