import React from "react";
import { Route, Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  const { id, name, status, specie, type, url } = character;
  return (
    <Link to={`/movies/${id}`}>
      <span>todo: character</span>
      <div>
        <h2>{name}</h2>
        <div>
          Status: <em>thiss{status}</em>
        </div>
        <div>
          Specie: <strong>{specie}</strong>
        </div>
        <div>
          Type: <strong>{type}</strong>
        </div>
      </div>
    </Link>
  );
}
