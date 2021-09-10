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

  const player1Number = () => {
    setPlayer1(characterList[Math.floor(Math.random() * 11)]);
  };
  const player2Number = () => {
    const filter = characterList.filter((elem) => elem.house !== player1.house);
    setPlayer2(filter[Math.floor(Math.random() * filter.length)]);
  };
  const player3Number = () => {
    const filter1 = characterList.filter(
      (elem) => elem.house !== player1.house
    );
    const filter2 = filter1.filter((elem) => elem.house !== player2.house);
    setPlayer3(filter2[Math.floor(Math.random() * filter2.length)]);
  };

  const handleClick = () => {
    getRandomPlayer();
    setInitialPage(false);
  };
  const getRandomPlayer = () => {
    player1Number();
    player2Number();
    player3Number();
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
