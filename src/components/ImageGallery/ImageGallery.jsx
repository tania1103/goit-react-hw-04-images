import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { perPage, imagesApi } from '../api';

class ImageGallery extends Component {
  state = {
    search: this.props.search,
    page: this.props.page,
  };

  static propTypes = {
    changeStateCallback: PropTypes.func.isRequired,
    search: PropTypes.string,
    page: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.search !== this.props.search ||
      prevProps.page !== this.props.page
    ) {
      this.props.changeStateCallback(prevState => ({ loading: true }));

      imagesApi(this.props.search, this.props.page)
        .then(images => {
          const total = Math.ceil(images.totalHits / perPage);

          if (images.total === 0) {
            return Promise.reject(
              new Error(
                `There are no pictures for the request of '${this.props.search}'`
              )
            );
          } else {
            this.props.changeStateCallback(prevState => ({ totalPage: total }));
            this.props.page === 1
              ? this.props.changeStateCallback(prevState => ({
                  images: [...images.hits],
                }))
              : this.props.changeStateCallback(prevState => ({
                  images: [...prevState.images, ...images.hits],
                }));
          }
        })
        .catch(error => {
          this.props.changeStateCallback(prevState => ({ error: error }));
          console.error(error);
        })
        .finally(() =>
          this.props.changeStateCallback(prevState => ({ loading: false }))
        );
    }
  }

  render() {
    return (
      <>
        <ImageGalleryList>
          {this.props.images.map((image, index) => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              onClick={() =>
                this.props.changeStateCallback(prevState => ({
                  selectedImageIndex: index,
                }))
              }
            />
          ))}
        </ImageGalleryList>
      </>
    );
  }
}
export default ImageGallery;