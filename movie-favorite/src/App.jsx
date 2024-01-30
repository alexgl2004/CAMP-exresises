import { Card } from "./components/Card";
import { initialMovies } from "./data/movies";
import { useState } from 'react';
import './App.css';


function App() {

  const [movies, setMovies] = useState(initialMovies)
  
  const movies_out = movies.map((movie) => {
    return <Card key={movie.title} movie={movie} />;
  });

  return (
    <>
      <header>
        <h1>Movie</h1>
      </header>
      <main>
        <div>
          <section className="card-list">{movies_out}</section>
        </div>
      </main>
    </>
  )

}

export default App;