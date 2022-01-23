import NewFeed from "./components/NewFeed";
import CurrencyConvertor from "./components/CurrencyConvertor";
import "./index.css";

const App = () => {
  return (
    <>
    <h1 className="Crypto-h">Crypto Dashboard</h1>
      <div className="app">
        <NewFeed />
        <CurrencyConvertor />
      </div>
    </>
  );
};

export default App;
