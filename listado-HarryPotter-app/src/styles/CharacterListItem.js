import styled from "styled-components";
import { bemClassNames } from "../utils/bemClassNames";

const CharacterListItem = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;

  img {
    max-width: 100%;
    height: 100px;
  }

  ${bemClassNames("CharacterListItem", ["name", "image"])}
`;

export default CharacterListItem;
