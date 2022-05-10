import React from "react";
import "./Movies.css";
//composant presente une seule movie et ces informations
const Movies = ({ handleClick, id, title, category, likes, dislikes }) => {
  return (
    <figure className="movie-container">
      <div className="oui">
        <img
          className="movie-img"
          href=""
          src={require('./../img/logo.jpg')}
        ></img>

      </div>
      <div className="description">
        <div>
        <h1 className="movie-title">{title}</h1>
        <p>{category}</p>
        </div>
        <div>
          <p className="movie-p-like">like: {likes}</p>
          <p>dislike : {dislikes}</p>
        </div>
      </div>
    </figure>
  );
};

export default Movies;