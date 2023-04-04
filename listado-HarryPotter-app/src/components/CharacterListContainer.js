import React, { useState } from "react";
import { getCharacters } from "../utils/getCharacters";
import CharacterList from "./CharacterList";
import SeriesButtons from "./SeriesButtons";

function CharacterListContainer() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchCharacters = async (serieSelected) => {
    const characters = await getCharacters(serieSelected);
    setCharacters(characters);
    setLoading(false);
  };

  const handleSerieSelected = (serieSelected) => {
    setLoading(true);
    fetchCharacters(serieSelected);
  };

  return (
    <>
      <CharacterList characters={characters} loading={loading}/>
      <SeriesButtons onSerieSelected={handleSerieSelected} />
    </>
  );
}

export default CharacterListContainer;
