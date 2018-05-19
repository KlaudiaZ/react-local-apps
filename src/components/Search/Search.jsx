import React, {Component} from 'react';
import './Search.css';
import movies from './data';
import Table from './Table';
import SearchForm from './SearchForm';

class Search extends Component {
  state = {
    movies: movies,
    shownMovies: movies
  }

  handleSearchClick = (value) => {
    const filteredMovies = value ? 
      this.state.movies.filter((movie) => {
        return movie.title.match(new RegExp(value), "g")}) :
      movies;
    
    this.setState({
      shownMovies: filteredMovies  
    })
  }

  render () {
    return (<section className="section search project">
      <div className="container">
        <h1 className="title">Search React App</h1>
          <SearchForm onSearchClick={this.handleSearchClick} />
        <div className="table">
          <Table movies={this.state.shownMovies}/>
        </div>
        </div>
      </section>)
  }
}

export default Search;