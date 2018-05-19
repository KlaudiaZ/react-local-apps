import React, {Component} from 'react';
import './Gallery.css';
import images from './data';
import Pictures from './Pictures';
import DisplayedPicture from './DisplayedPicture';


class Gallery extends Component {
  state = {
    pictures: images,
    chosen: 5
  }

  handleImageChoice = (index) => {
    this.setState({
      chosen: index
    })
  }

  render () {
    return (<section className="section Gallery project">
        <h1 className="title">Gallery React App</h1>
        <div className="container">
          <Pictures pictures={this.state.pictures} chosen={this.state.chosen} onImageClick={this.handleImageChoice} />
          <DisplayedPicture chosen={this.state.pictures[this.state.chosen]} />
        </div> 
      </section>)
  }
}

export default Gallery;