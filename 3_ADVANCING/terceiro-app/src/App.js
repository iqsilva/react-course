import './App.css';
import Lightning from './assets/lightning.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UsersDetails from './components/UsersDetails';

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", km: 0, color: "Vermelho", newCar: true},
    {id: 2, brand: "Porsche", km: 1000, color: "Preto", newCar: false},
    {id: 3, brand: "Lamborghini", km: 0, color: "Amarelo", newCar: true},
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  };

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    {id: 9, nome: "Igor", idade: 26, profissao: "Software Engineer"},
    {id: 10, nome: "Caio", idade: 25, profissao: "Engenheiro Civil"},
    {id: 11, nome: "Fernando", idade: 26, profissao: "Logística"},
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*imagem em public*/}
      <div>
        <img src="/fang.jpg" alt="fang of ffxiii" />
      </div>
      {/*imagem em assets*/}
      <div>
        <img src={Lightning} alt="lightning of ffxiii" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*props*/}
      <ShowUserName name="Matheus"/>
      {/*destructuring*/}
      <CarDetails brand="Volkswagen" km={10000} color="Azul" newCar={false}/>
      {/*reaproveitando*/}
      <CarDetails brand="Chevrolet" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Fiat" km={20000} color="Preto" newCar={false}/>
      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails
        key={car.id}
        brand={car.brand}
        km={car.km}
        color={car.color}
        newCar={car.newCar}
        />
      ))}
      {/*fragments*/}
      <Fragments propFragment="teste"/>
      {/*children*/}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      {/*executar função*/}
      <ExecuteFunction myFunction={showMessage}/>
      {/*state lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/*desafio*/}
      {users.map((user) => (
        <UsersDetails
        key={user.id}
        nome={user.nome}
        idade={user.idade}
        profissao={user.profissao}
        />
      ))}
    </div>
  );
}

export default App;
