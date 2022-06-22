import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import MyList from './pages/MyList';
import Search from './pages/Search';
import Disney from './pages/Disney';
import Marvel from './pages/Marvel';
import Star from './pages/Star';
import StarWars from './pages/Star_Wars';
import NationalGeographic from './pages/National_Geographic';
import Pixar from './pages/Pixar';
import DetailMovie from './pages/DetailMovie';
import DetailTv from './pages/DetailTv';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="brand/disney" element={<Disney />} />
        <Route path="brand/marvel" element={<Marvel />} />
        <Route path="brand/pixar" element={<Pixar />} />
        <Route path="brand/star" element={<Star />} />
        <Route path="brand/star-wars" element={<StarWars />} />
        <Route path="brand/national-geographic" element={<NationalGeographic />} />
        <Route path="movie/:id" element={<DetailMovie />} />
        <Route path="tv/:id" element={<DetailTv />} />
        <Route path="my-list" element={<MyList />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
