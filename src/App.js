import "./App.css";
import Container from "./components/container";

const defaultValues = [
  {
    id: Math.floor(Math.random() * 100),
    value: "Item 1",
  },
  {
    id: Math.floor(Math.random() * 100),
    value: "Item 2",
  },
  {
    id: Math.floor(Math.random() * 100),
    value: "Item 3",
  },
  {
    id: Math.floor(Math.random() * 100),
    value: "Item 4",
  },
];

function App() {
  return (
    <div className="App">
      <Container defaultValues={defaultValues} />
    </div>
  );
}

export default App;
