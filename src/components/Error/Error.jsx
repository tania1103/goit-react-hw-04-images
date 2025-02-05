import { ErrorText } from './Error.styled';
import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return <ErrorText>{message}</ErrorText>;
};
export default Error;

Error.propTypes = {
  message: PropTypes.string,
};