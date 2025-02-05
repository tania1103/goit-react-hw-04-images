import { Component } from 'react';
import { AppWrap } from './App.styled';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';
import Modal from './Modal';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Error from './Error';

export class App extends Component {
  state = {
    search: '',
    loading: false,
    currentPage: 1,
    totalPage: null,
    error: null,
    images: [],
    selectedImageIndex: null,
  };

  changeStateCallback = stateCallback => {
    this.setState(prevState => stateCallback(prevState));
  };

  render() {
    const {
      images,
      loading,
      selectedImageIndex,
      search,
      currentPage,
      totalPage,
      error,
    } = this.state;
    const { changeStateCallback } = this;
    return (
      <AppWrap>
        <Searchbar onSubmit={changeStateCallback} />
        {error && <Error message={error.message} />}
        <ImageGallery
          changeStateCallback={changeStateCallback}
          search={search}
          page={currentPage}
          images={images}
          loading={loading}
        />
        {loading && <Loader />}
        {totalPage > currentPage && (
          <Button onClick={changeStateCallback}>Load More</Button>
        )}
        {(selectedImageIndex || selectedImageIndex === 0) && (
          <Modal
            onClose={changeStateCallback}
            imgInd={selectedImageIndex}
            images={images}
          />
        )}
        <ToastContainer autoClose={2000} />
      </AppWrap>
    );
  }
}