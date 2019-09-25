import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

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
  }

  render() {
    return (
      <div className='container'>
        <Helmet>
          <title>Photos - Abby Hanson and Joey Hage&apos;s Wedding</title>
          <meta name='description'
                content='Engagement photos of Abby Hanson and Joey Hage. They are getting married on November 9th, 2019 in West Des Moines, IA. #ToHageAndToHold' />
        </Helmet>
        <Gallery photos={images} columns={Photos.columns} direction='column' onClick={this.openLightbox} />
        <ModalGateway>
          {this.state.lightboxIsOpen ? (
            <Modal onClose={this.closeLightbox}>
              <Carousel
                currentIndex={this.state.currentImage}
                views={images.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
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