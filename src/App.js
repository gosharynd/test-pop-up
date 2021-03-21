import logo from "./logo.svg";
import "./App.css";
import { PopUp } from "./containers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <PopUp />
      </main>
    </div>
  );
}

export default App;
