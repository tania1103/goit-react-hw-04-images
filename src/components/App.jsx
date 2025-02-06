import { AppWrap } from './App.styled';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';
import Modal from './Modal';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Error from './Error';
import { useState } from 'react';

const App = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  return (
    <AppWrap>
      <Searchbar
        onSetSearch={setSearch}
        onSetCurrentPage={setCurrentPage}
        onSetTotalPage={setTotalPage}
        onSetImages={setImages}
        onSetError={setError}
      />
      {error && <Error message={error.message} />}
      <ImageGallery
        onSetLoading={setLoading}
        onSetTotalPage={setTotalPage}
        onSetImages={setImages}
        onSetError={setError}
        onSetSelectedImageIndex={setSelectedImageIndex}
        search={search}
        page={currentPage}
        images={images}
      />
      {loading && <Loader />}
      {totalPage > currentPage && (
        <Button onClick={setCurrentPage}>Load More</Button>
      )}
      {(selectedImageIndex || selectedImageIndex === 0) && (
        <Modal
          onClose={setSelectedImageIndex}
          imgInd={selectedImageIndex}
          images={images}
        />
      )}
      <ToastContainer autoClose={2000} />
    </AppWrap>
  );
};

export default App;
