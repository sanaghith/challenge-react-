import "./App.css";
import Navigation from "./Navigation";
import { data } from "./data";
import CardList from "./CardList";

function App() {
  console.log("data", data);

  return (
    <div className="App">
      <Navigation />
      <div className="my-5">
        <CardList data={data} />
      </div>
    </div>
  );
}

export default App;
