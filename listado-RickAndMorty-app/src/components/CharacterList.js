import React from "react";
import PropTypes from "prop-types";
import CharacterListContainer from "../styles/CharacterListContainer";
import CharacterListItem from "../styles/CharacterListItem";
import { useTranslation } from "react-i18next";

function CharacterList({ characters, loading }) {
  const { t } = useTranslation();

  return (
    <CharacterListContainer>
      {!loading ? (
        characters.map((character) => (
          <CharacterListItem key={character?.id}>
            <img src={character?.download_url} alt={character?.author} />
            <div className="name">{character?.author}</div>
            <div className="image">{character?.download_url}</div>
          </CharacterListItem>
        ))
      ) : (
        <p>{t("loading")}</p>
      )}
    </CharacterListContainer>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      download_url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
