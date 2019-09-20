import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

const characterApi = "https://rickandmortyapi.com/api/character/";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);

  const fetchCharacters = () => {
    axios
      .get(characterApi)
      .then(res => {
        setCharacterList(res.data.results);
        console.log("this", res.data.results);
      })
      .catch(err => {
        return err.message;
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <section className="character-list">
      <Header />
      {characterList.map(character => (
        <h5 key={character.name}> {character.name}</h5>
      ))}
    </section>
  );
}
