import React, { useEffect, useState } from "react";
import axios from "axios";
import Styled from "styled-components";
import Header from "./Header";
import ButtonComponent from "./Button";

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
    padding-top:20px;
`;

const StyledInput = Styled.input`
    width:300px;
    height:40px;
    padding-top:10px
`;

const characterApi = "https://rickandmortyapi.com/api/character/";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [info, setInfo] = useState([]);
  const [characterList, setCharacterList] = useState([]);
  const [display, setDisplay] = useState([]);

  const [searchList, setsearchList] = useState("");

  const fetchCharacters = URL => {
    axios
      .get(URL)
      .then(res => {
        setCharacterList(res.data.results);
        setInfo(res.data.info);
      })
      .catch(err => {
        return err.message;
      });
  };

  useEffect(() => {
    fetchCharacters(characterApi);
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
    <div>
      <Header />
      <br />

      <StyledInput
        type="search"
        placeholder="serach monsters"
        value={searchList}
        onChange={e => setsearchList(e.target.value)}
      />
      <ButtonComponent
        prev={() => fetchCharacters(info.prev)}
        next={() => fetchCharacters(info.next)}
        prevDisabled={info.prev === ""}
        nextDisabled={info.next === ""}
      />
      <br />
      <StyledSection className="character-list">
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
    </div>
  );
}
