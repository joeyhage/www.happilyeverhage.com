import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import images from '../../resources/photos-page/images';

class Photos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  render() {
    return (
      <div className='container'>
        <Helmet>
          <title>Photos - Abby Hanson & Joey Hage&apos;s Wedding</title>
        </Helmet>
        <Gallery photos={images} columns={Photos.columns} direction='column' onClick={this.openLightbox} />
        <Lightbox images={images}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious() {
    this.setState({ currentImage: this.state.currentImage - 1 });
  }

  gotoNext() {
    this.setState({ currentImage: this.state.currentImage + 1 });
  }

  static columns(containerWidth) {
    if (containerWidth >= 1500) {
      return 4;
    } else if (containerWidth >= 900) {
      return 3;
    } else if (containerWidth >= 500) {
      return 2;
    }
    return 1;
  }
}

export default Photos;