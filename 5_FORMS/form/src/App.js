import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Igor",
          email: "igor.queiros@outlook.com",
          bio: "Sou um engenheiro de sistemas",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
