import { useState } from 'react';
import "./Card.css";

export function Card(props) {

  const movie = props.movie;
  const [favorite, setFavorite] = useState(movie.favorite)
  const [delete_state, setDelete_state] = useState(0)

  let out_variable = delete_state?
        <div></div>:
        <div className="card">
          <h2>{`${movie.title}`}</h2>
          <div>
            <div>Favorite: <small><button 
            onClick={() => {
              console.log('Favorite: ' + favorite)
              setFavorite(favorite?false:true)}
            }
            className="detele_button">{favorite?'Yes':'No'}</button></small></div>
            <div>Released: {movie.released}</div>
            <div>Director: {movie.director}</div>
          </div>
          <div>
            <div>&nbsp;</div>
            <button onClick={() => {
                console.log('Deleted movie')
                setDelete_state(1)}
              }
              className="detele_button">Detele Movie</button>
            </div>
        </div>


  return (out_variable);

}