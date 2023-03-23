import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import MyList from './pages/MyList';
import Search from './pages/Search';
import Disney from './pages/Disney';
import Marvel from './pages/Marvel';
import Star from './pages/Star';
import StarWars from './pages/Star_Wars';
import NationalGeographic from './pages/National_Geographic';
import Pixar from './pages/Pixar';
import Detail from './pages/Detail';
import Movies from './pages/Movies';
import Series from './pages/Series';
import AuthLayout from './layout/AuthLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route element={<AuthLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="my-list" element={<MyList />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tv" element={<Series />} />
          <Route path="movie/:id" element={<Detail type="movie" />} />
          <Route path="tv/:id" element={<Detail type="tv" />} />
          <Route path="brand/disney" element={<Disney />} />
          <Route path="brand/marvel" element={<Marvel />} />
          <Route path="brand/pixar" element={<Pixar />} />
          <Route path="brand/star" element={<Star />} />
          <Route path="brand/star-wars" element={<StarWars />} />
          <Route path="brand/national-geographic" element={<NationalGeographic />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
