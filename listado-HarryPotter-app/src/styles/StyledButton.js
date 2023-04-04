import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin 1rem;
  background-color: #ddd;
  border: none;
  border-radius: 4px;

  &.--primary {
    background-color: #007bff;
    color: white;
  }

  &.--secondary {
    background-color: #6c757d;
    color: white;
  }
`;

export default StyledButton;
