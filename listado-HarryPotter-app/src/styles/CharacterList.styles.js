import styled from "styled-components";

const CharacterList = styled.div`
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;

    &__image {
      width: 150px;
      height: 150px;
      margin-bottom: 0.5rem;
    }

    &__name {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`;

export default CharacterList;
