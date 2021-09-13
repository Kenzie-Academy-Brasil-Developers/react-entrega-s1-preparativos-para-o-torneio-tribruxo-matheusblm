import "./App.css";
import { useState, useEffect } from "react";
import MainPage from "./Components/MainPage";
import Cards from "./Components/Cards";
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [initialPage, setInitialPage] = useState(true);
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [player3, setPlayer3] = useState(0);
  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setCharacterList(response))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    getRandomPlayer();
    setInitialPage(false);
  };
  const getRandomPlayer = () => {
    let jogador1 = characterList[Math.floor(Math.random() * 11)];
    let jogador2 = characterList[Math.floor(Math.random() * 11)];
    let jogador3 = characterList[Math.floor(Math.random() * 11)];

    while (jogador1.house === jogador2.house) {
      jogador2 = characterList[Math.floor(Math.random() * 11)];
    }

    while (
      jogador3.house === jogador1.house ||
      jogador2.house === jogador3.house
    ) {
      jogador3 = characterList[Math.floor(Math.random() * 11)];
    }
    setPlayer1(jogador1);
    setPlayer2(jogador2);
    setPlayer3(jogador3);
  };
  return (
    <div className="App-header">
      {initialPage && (
        <MainPage handleClick={handleClick} initialPage={initialPage} />
      )}
      {!initialPage && (
        <Cards
          characterList={characterList}
          player1={player1}
          player2={player2}
          player3={player3}
          getRandomPlayer={getRandomPlayer}
        />
      )}
    </div>
  );
}

export default App;
