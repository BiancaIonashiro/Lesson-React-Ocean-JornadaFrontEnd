function Card() {
  return (
    <>
      <div className="card">
        <div className="container">
          <h2>Rick Sanchez</h2>
          <h5>Status: Vivo</h5>
          <h5>Espécie: Humana</h5>
          <h5>Origem: Terra C-137</h5>
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
        </div>
      </div>
      <div className="card">
        <h2>Morty Smith</h2>
        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" />
      </div>
      <div className="card">
        <h2>Summer Smith</h2>
        <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" />
      </div>
      <div className="card">
        <h2>Beth Smith</h2>
        <img src="https://rickandmortyapi.com/api/character/avatar/4.jpeg" />
      </div>
    </>
  );
}

export default Card;
