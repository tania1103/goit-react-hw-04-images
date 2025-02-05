import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  handleClick = () => {
    this.props.onClick(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    return (
      <ButtonLoadMore type="button" onClick={this.handleClick}>
        Load More
      </ButtonLoadMore>
    );
  }
}

export default Button;