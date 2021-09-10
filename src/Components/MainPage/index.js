import "./style.css";
function MainPage({ handleClick }) {
  return (
    <div className="divMain">
      <h3 className="title">Torneio TriBruxo</h3>
      <p className="describe">Clique no botao para Encontrar os Feiticeiros!</p>
      <button onClick={handleClick} className="buttonBegin">
        Comecar!
      </button>
    </div>
  );
}

export default MainPage;
