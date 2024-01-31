function Card(props) {
  //console.log(props);
  const item = props.item;
  //console.log(item);

  return (
    <>
      <div className="cards">
        <div className="card">
          <h2>{item.name}</h2>
          <h5>Status: Vivo</h5>
          <h5>Espécie: Humana</h5>
          <h5>Origem: Terra C-137</h5>
          <img src={item.image} />
        </div>
      </div>
    </>
  );
}

export default Card;
