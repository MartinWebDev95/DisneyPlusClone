import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DatabaseProvider } from './context/DatabaseContext';
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

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <DatabaseProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="my-list" element={<MyList />} />
            <Route path="movie/:id" element={<Detail type="movie" />} />
            <Route path="tv/:id" element={<Detail type="tv" />} />
            <Route path="brand/disney" element={<Disney />} />
            <Route path="brand/marvel" element={<Marvel />} />
            <Route path="brand/pixar" element={<Pixar />} />
            <Route path="brand/star" element={<Star />} />
            <Route path="brand/star-wars" element={<StarWars />} />
            <Route path="brand/national-geographic" element={<NationalGeographic />} />
          </Routes>
        </DatabaseProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
