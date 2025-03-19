import React from 'react';

const CharacterItem = ({ character }) => {
  return (
    <div className="character-item">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.status} - {character.species}</p>
    </div>
  );
};

export default CharacterItem;