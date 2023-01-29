import { Navbar } from './Navbar/navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes , Route } from 'react-router-dom';
import { Film } from './Film/film';
import { Series } from './Series/Series';
import { Films } from './Film/films';
import { MovieDetails } from './Film/movieDetails';
import { Person } from './Person/person';


function App() {

  return (
    
    <>

      <Navbar/>
      <Routes>
        <Route path='/' element="" />
        <Route path="series" element={<Films />}>
            <Route  index element={<Series />}/>
        </Route>
        <Route path=':idPerson' element={<Person />} />
        <Route path="movies" element={<Films />}>
            <Route index element={<Film/>}/>
            <Route path='popular' element={<Film />}/>
            <Route path='top-rated' element={<Film/>}/>
            <Route path='up-coming' element={<Film/>}/>
            <Route path=":id" element={<MovieDetails/>}/>
            


        </Route>
 


      </Routes>
    </>
  );
}

export default App;
