import "./style.css";
function Cards({ characterList, player1, player2, player3, getRandomPlayer }) {
  return (
    <div>
      <ul>
        <li>
          <h3>{player1.name}</h3>
          <img src={player1.image}></img>
          <p>{player1.house}</p>
        </li>
        <li>
          <h3>{player2.name}</h3>
          <img src={player2.image}></img>
          <p>{player2.house}</p>
        </li>
        <li>
          <h3>{player3.name}</h3>
          <img src={player3.image}></img>
          <p>{player3.house}</p>
        </li>
        <button onClick={getRandomPlayer}>Tentar Novamente!</button>
      </ul>
    </div>
  );
}

export default Cards;
