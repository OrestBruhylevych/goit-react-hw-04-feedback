import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;

  > li:not(:last-child) {
    margin-right: 10px;
  }

  button {
    padding: 10px;
    border-radius: 5px;
  }
`;
