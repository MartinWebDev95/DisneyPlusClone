import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import MyList from './pages/MyList';
import Search from './pages/Search';
import Detail from './pages/Detail';
import AuthLayout from './layout/AuthLayout';
import BrandPage from './pages/BrandPage';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route element={<AuthLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="my-list" element={<MyList />} />
          <Route path="movies" element={<Categories type="movie" />} />
          <Route path="tv" element={<Categories type="tv" />} />
          <Route path="movie/:id" element={<Detail type="movie" />} />
          <Route path="tv/:id" element={<Detail type="tv" />} />
          <Route path="brand/disney" element={<BrandPage brand="disney" />} />
          <Route path="brand/marvel" element={<BrandPage brand="marvel" />} />
          <Route path="brand/pixar" element={<BrandPage brand="pixar" />} />
          <Route path="brand/star" element={<BrandPage brand="star" />} />
          <Route path="brand/star-wars" element={<BrandPage brand="starWars" />} />
          <Route path="brand/national-geographic" element={<BrandPage brand="nationalGeographic" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
