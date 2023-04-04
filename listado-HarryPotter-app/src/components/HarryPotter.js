import React from "react";
import CharacterListContainer from "./CharacterListContainer";
import LanguageSwitcher from "./LanguageSwitcher";

const HarryPotter = () => {
  return (
    <>
      <LanguageSwitcher />
      <CharacterListContainer />
    </>
  );
};

export default HarryPotter;
