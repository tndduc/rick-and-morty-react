import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className="App">
      <h1>Danh Sách Nhân Vật - Rick and Morty</h1>
      <CharacterList />
    </div>
  );
}

export default App;