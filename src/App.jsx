import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  //Carregamento de dados via código
  // const item1 = {
  //   name: "Rick Sanchez",
  //   image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  // };
  // const item2 = {
  //   name: "Morty Smith",
  //   image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  // };
  // const item3 = {
  //   name: "Summer Smith",
  //   image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  // };
  // const item4 = {
  //   name: "Beth Smith",
  //   image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  // };

  // const itens = [item1, item2, item3, item4];

  const [itens, setItens] = useState([]);

  //Carregamento de dados via API(backend)
  async function carregarDadosApi() {
    const apiURL = "https://rickandmortyapi.com/api/character/";

    //Preparação da requisição
    const response = await fetch(apiURL);

    //console.log(response);
    const body = await response.json();

    //console.log(body);

    //Extrair a propriedade results do body
    //Essa propriedade contém a lista de itens
    const results = body.results;

    console.log(results);

    //Atualiza o estado "itens" com o resultado da API
    setItens(results);
  }

  useEffect(function () {
    //Chamando a função que carrega os dados da API
    carregarDadosApi();
  }, []);

  return (
    <>
      <div className="cards">
        {/* <Card item={item1} />
        <Card item={item2} />
        <Card item={item3} />
        <Card item={item4} /> */}
        {itens.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
