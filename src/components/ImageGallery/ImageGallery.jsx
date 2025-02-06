import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { perPage, imagesApi } from '../api';

const ImageGallery = ({
  onSetLoading,
  onSetTotalPage,
  onSetImages,
  onSetError,
  onSetSelectedImageIndex,
  search,
  page,
  images,
}) => {
  useEffect(() => {
    if (search) {
      onSetLoading(true);
      imagesApi(search, page)
        .then(images => {
          const total = Math.ceil(images.totalHits / perPage);
          if (images.total === 0) {
            return Promise.reject(
              new Error(`There are no pictures for the request of '${search}'`)
            );
          } else {
            onSetTotalPage(total);
            page === 1
              ? onSetImages([...images.hits])
              : onSetImages(prevState => [...prevState, ...images.hits]);
          }
        })
        .catch(error => {
          onSetError(error);
          console.error(error);
        })
        .finally(() => onSetLoading(false));
    }
  }, [search, page, onSetLoading, onSetTotalPage, onSetImages, onSetError]);

  return (
    <>
      <ImageGalleryList>
        {images.map((image, index) => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => onSetSelectedImageIndex(index)}
          />
        ))}
      </ImageGalleryList>
    </>
  );
};

ImageGallery.propTypes = {
  onSetLoading: PropTypes.func.isRequired,
  onSetTotalPage: PropTypes.func.isRequired,
  onSetImages: PropTypes.func.isRequired,
  onSetError: PropTypes.func.isRequired,
  onSetSelectedImageIndex: PropTypes.func.isRequired,
  search: PropTypes.string,
  page: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
