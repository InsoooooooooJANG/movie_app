import React from 'react';
import Axios from "axios";
import Movie from "./Movie";
import PropTypes from "prop-types";

class App extends React.Component{
  state={
    isLoading:true,
    movies:[]
  };

  getMovies= async () => {
    const {data:{data:{movies}}} = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading:false});
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies}  = this.state;
    return (
      <div>{isLoading? "Loading": movies.map(movie=>{
        return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.midium_cover_image}></Movie>
      })}</div>
    )
  }
  
}

export default App;
