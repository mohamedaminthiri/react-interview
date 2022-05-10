import React from 'react';
import MoviesList from "./components/MoviesList"
import './App.css'

class App extends React.Component {

  state = {
    category: ''
  }
  render() {
  return (
    <div className="App">
   <MoviesList category={this.state.category}/>
    </div>
  );
}
}
export default App;