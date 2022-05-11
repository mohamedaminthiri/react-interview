import React from "react";
import "./Movies.css";
//function  presente une seule movie et ces informations et les opérations effectué(supression,ajout likes,ajout dislikes)
const Movies = ({ handleClick,addlike,deslike, id, title, category, likes, dislikes }) => {
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
      <div className="row">
        <button onClick={() => addlike(id)}>like</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => deslike(id)}>dislike</button>
      </div>
      <div className="div-movie-button-delete">
        <button className="movie-button-delete" onClick={() => handleClick(id)}>
          X
        </button> 
        </div>  
    </figure>
  );
};

export default Movies;