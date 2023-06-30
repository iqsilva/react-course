import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {id: 1, brand: "Ferrari", km: 0, color: "Vermelho", newCar: true},
    {id: 2, brand: "Porsche", km: 1000, color: "Preto", newCar: false},
    {id: 3, brand: "Lamborghini", km: 0, color: "Amarelo", newCar: true},
  ];

  return (
    <div>
      <h1>Desafio CSS</h1>
      {cars.map((car) => (
        <CarDetails
        key={car.id}
        brand={car.brand}
        km={car.km}
        color={car.color}
        newCar={car.newCar}
        />
      ))}
    </div>
  );
}

export default App;
