import React from "react";
import CharacterListContainer from "./CharacterListContainer";
import LanguageSwitcher from "./LanguageSwitcher";

const RickAndMorty = () => {
  return (
    <>
      <LanguageSwitcher />
      <CharacterListContainer />
    </>
  );
};

export default RickAndMorty;
