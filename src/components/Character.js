import React, { useState, useEffect } from "react";
import axios from "axios";

const Character = props => {
  const [oneCharcter, setOneCharcter] = useState({});

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setOneCharcter(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params.id]);

  if (!oneCharcter) {
    return <div>Loading character Info...</div>;
  }

  const { name, status, specie, type, url } = oneCharcter;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{name}</h2>
        <div className="movie-director">
          Status: <em>{status}</em>
        </div>
        <div className="movie-metascore">
          Specie: <strong>{specie}</strong>
        </div>
        {/* {stars &&
          stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div> */}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
};

export default Character;
