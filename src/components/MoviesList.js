import React from 'react'
import Movies from './Movies'
import './MoviesList.css'
import {movies$} from './../movies'
//composant d'affichage la liste des movies
class MoviesList extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    canSee: 4,//npmbre des movies affichées
    movie :[]//array des movies 
}
//binding des fonctions
this.addlike = this.addlike.bind(this)
this.deslike=this.deslike.bind(this)
this.loadMore = this.loadMore.bind(this)
}
componentWillMount() {
  //sans suppression du comportement asynchrone dans movies.js
movies$
.then(
    movies => { this.setState({
      movie: movies//remplir array movie par les méta-data dans movies importé de fichier movies.js dans le dossier src
  })
   console.log(this.state.movie);    
    }
  
)
.catch(error => console.log(error))

}
//founction d'afficher les movies suivantes(affichage par 4 movies)
loadMore = () => {
  this.setState((old)=> {
    return {canSee: old.canSee + 4}
  })
}
//supression d'un film
handleClick = (e) => {
  const newMovie = this.state.movie
  const index = newMovie.findIndex(item => item.id === (e))
  const remove = window.confirm("supprimer ce film de la site ?")
  if (remove) {
    const cat=newMovie[index].category;
    console.log(cat)
      newMovie.splice(index, 1)
      this.setState({ movie : newMovie})
     
      //supression de catégorie de film suprimé de la liste dynamique  si elle est unique
       if(this.state.movie.findIndex(item => item.category===(cat))<0){
         const indexcategorie=this.props.categories.findIndex(item => item.category === cat);
         this.props.categories.splice(indexcategorie,1) 
       }
      
  }
}
//ajout les likes
addlike= (e) => {
  const newMovie = this.state.movie
  const index = newMovie.findIndex(item => item.id === (e))
  newMovie[index].likes++
  this.setState({ movie : newMovie}) 
}
//ajout les dislikes
deslike= (e) => {
   const newMovie = this.state.movie
   const index = newMovie.findIndex(item => item.id === (e))

     newMovie[index].dislikes++;
     this.setState({ movie : newMovie})
   
}

render() 
{ 
  return (
    //affichage des movies par 4
    <div>
    <div className="movieslist-container">
      {/* passage des données et function avec props */}
     {this.state.movie.filter(movies => movies.category.includes(this.props.category)).slice(0,this.state.canSee).map((id) => (<Movies {...id} handleClick={this.handleClick} addlike={this.addlike} deslike={this.deslike}/>))}
    </div>
    <button className="movieslist-loadmore-button" type="button" onClick={this.loadMore}>afficher</button>
    </div>
  )
}
}
  export default MoviesList;