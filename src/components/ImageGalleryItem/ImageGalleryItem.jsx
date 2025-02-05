import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <GalleryItem onClick={onClick}>
      <GalleryImage src={src} alt={alt} />
    </GalleryItem>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};