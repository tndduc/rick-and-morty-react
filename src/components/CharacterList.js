import React, { useState, useEffect } from 'react';
import CharacterItem from './CharacterItem';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error("Lỗi khi tải dữ liệu:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Có lỗi xảy ra khi tải dữ liệu.</div>;
  }

  return (
    <div className="character-list">
      {characters.map(character => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
