import React, { useEffect, useState } from "react";
import axios from "axios";
import Styled from "styled-components";
import Header from "./Header";

const StyledSection = Styled.section`

width: 80vw;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 20px;



`;

const StyledDiv = Styled.div`
background:palevioletred;
padding-left:10px;
transition: transform 0.25s ease-out;
transform: translateZ(0);
&:hover {
  transform: scale(1.05);
  color: white;
}
`;

const StyledImg = Styled.img`
    width:150px
    padding-top:10px;
    transform: scale(1.05);
`;

const StyledInput = Styled.input`
    width:300px;
    height:40px;
    padding-top:10px
`;

const characterApi = "https://rickandmortyapi.com/api/character/";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characterList, setCharacterList] = useState([]);
  const [display, setDisplay] = useState([]);

  const [searchList, setsearchList] = useState("");

  const fetchCharacters = () => {
    axios
      .get(characterApi)
      .then(res => {
        setCharacterList(res.data.results);
      })
      .catch(err => {
        return err.message;
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    setDisplay(characterList);
  }, [characterList]);

  useEffect(() => {
    searchBox();
  }, [searchList]);

  const searchBox = () => {
    setDisplay(
      characterList.filter(monsterChar =>
        monsterChar.name.toLowerCase().includes(searchList.toLowerCase())
      )
    );
  };

  return (
    <StyledSection className="character-list">
      <Header />
      <br />

      <StyledInput
        type="search"
        placeholder="serach monsters"
        value={searchList}
        onChange={e => setsearchList(e.target.value)}
      />
      <br />
      {display.map(character => (
        <StyledDiv>
          <StyledImg src={character.image} alt="a chracter image" />
          <h5 key={character.name}> {character.name}</h5>
          <p>
            <strong>Status</strong>: {character.status}
          </p>
          <p>
            <strong>Gender</strong>: {character.gender}
          </p>
        </StyledDiv>
      ))}
    </StyledSection>
  );
}
