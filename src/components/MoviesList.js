import React from 'react'
import Movies from './Movies'
import './MoviesList.css'
import {movies} from './../movies'
//composant d'affichage la liste des movies
class MoviesList extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    canSee: 4,//npmbre des movies affichées
    movie :movies//array des movies importé de fichier movies.js dans le dossier src
}

this.loadMore = this.loadMore.bind(this)//binding de fonction
}
//founction d'afficher les movies suivantes(affichage par 4 movies)
loadMore = () => {
  this.setState((old)=> {
    return {canSee: old.canSee + 4}
  })
}

render() 
{ 
  return (
    //affichage des movies par 4
    <div>
    <div className="movieslist-container">
     {this.state.movie.filter(movies => movies.category.includes(this.props.category)).slice(0,this.state.canSee).map((id) => (<Movies {...id} handleClick={this.handleClick} likehandler={this.likeHandler}/>))}
    </div>
    <button className="movieslist-loadmore-button" type="button" onClick={this.loadMore}>afficher</button>
    </div>
  )
}
}

  export default MoviesList;