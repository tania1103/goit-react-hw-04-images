import {
  Header,
  SearchForm,
  Button,
  BtnLabel,
  Input,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    search: '',
  };

  handleSearchChange = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      toast('Please enter a search query');
      return;
    }
    this.setState({ search: '' });
    this.props.onSubmit(prevState => ({
      search: this.state.search,
      currentPage: 1,
      totalPage: null,
      images: [],
      error: null,
    }));
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <Button type="submit">
            <BsSearch />
            <BtnLabel>Search</BtnLabel>
          </Button>

          <Input
            type="text"
            value={this.state.search}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchChange}
          />
        </SearchForm>
      </Header>
    );
  }
}