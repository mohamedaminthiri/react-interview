import React from 'react';
import MoviesList from "./components/MoviesList"
import './App.css'
import Pagination from "./components/Pagination"
import { movies } from './movies';

class App extends React.Component {

  state = {
    category: '',
    categories:[],
    listemovies:[],
    arr:[]
  }
  componentWillMount() {
  
      this.state.listemovies= movies
//remplir array de catégories distinct pour remplir une liste dynamique
  console.log(this.state.listemovies)
    for(var i=0;i<this.state.listemovies.length;i++){
   if(this.state.arr.indexOf(this.state.listemovies[i].category)<0){
     this.state.arr.push(this.state.listemovies[i].category)
   }
    }
     this.state.categories=this.state.arr
      
      console.log(this.state.categories)

  }
  handleChange = (e) => {
    this.setState({category: e.target.value})
  }
  render() {
  return (
    <div className="App">
       <select className="app-select" onChange={this.handleChange}>
             <option id="Default"></option>
            {/* remplir la liste dynamique à partir d'array des differentes catégories */}
            {this.state.categories.map(e=>(
              <option >{e}</option>
            ))}
          </select>
   <MoviesList category={this.state.category}/>
    </div>
  );
}
}
export default App;
