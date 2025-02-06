import { Header, SearchForm, Button, BtnLabel, Input } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = ({
  onSetSearch,
  onSetCurrentPage,
  onSetTotalPage,
  onSetImages,
  onSetError,
}) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = e => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      toast('Please enter a search query');
      return;
    }
    setSearch('');
    onSetSearch(search);
    onSetCurrentPage(1);
    onSetTotalPage(null);
    onSetImages([]);
    onSetError(null);
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <Button type="submit">
          <BsSearch />
          <BtnLabel>Search</BtnLabel>
        </Button>

        <Input
          type="text"
          value={search}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleSearchChange}
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSetCurrentPage: PropTypes.func.isRequired,
  onSetSearch: PropTypes.func.isRequired,
  onSetTotalPage: PropTypes.func.isRequired,
  onSetError: PropTypes.func.isRequired,
  onSetImages: PropTypes.func.isRequired,
};

export default Searchbar;
