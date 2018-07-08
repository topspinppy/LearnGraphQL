import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPhotos } from '../Action/action'
import PhotoList from '../components/Photos/PhotoList'

class Photo extends Component {
  componentDidMount() {
    this.props.dispatch(loadPhotos(this.props.match.params.albumID))
  }

  render() {
    const { photos } = this.props
    if(photos.isRejected) {
      return <div> Not Load Photos </div>
    }
    return (
      <div>
        <h1> Photos by {this.props.match.params.title}</h1>
        <PhotoList data = {photos.data} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps)(Photo)