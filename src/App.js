import React from "react";
import axios from "axios";
import Movie from "./movie";

class App extends React.Component{
  state={
    isLoading: true,
    movies:[]
  }

  getMovies = async () =>{
    const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({movies:movies, isLoading:false})
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const{isLoading, movies} = this.state;
    return (<section className="container">
      {this.state.isLoading ? (
        <div className="loading">
          <span className="loader_text">Loading...</span>
        </div>
      ) : movies.map(movie => {
        return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
      })}
    </section>)
  }
}

export default App;
