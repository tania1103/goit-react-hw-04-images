import styled from '@emotion/styled';
export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 9999; /* Crește z-index */
  background: linear-gradient(to top, rgb(230, 110, 18), rgb(212, 202, 10));
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color:rgb(255, 255, 255);
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  color: rgb(255, 255, 255);
  background-color: rgb(170, 79, 129);
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const BtnLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  min-height: 40px; /* Asigură vizibilitate bună */
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 8px 12px; /* Mai mult spațiu */
  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: gray; /* Oferă o culoare subtilă */
  }
`;
