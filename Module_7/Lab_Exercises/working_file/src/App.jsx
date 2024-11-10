import BitcoinRatesCombined from "./components/BitcoinRatesCombined";
import BitcoinRatesHooked from "./components/BitcoinRatesHooked";
import BitcoinRatesHookedReduced from "./components/BitcoinRatesHookedReduced";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <hr />
      <BitcoinRatesCombined />
      <hr />
      <BitcoinRatesHooked />
      <hr />
      <BitcoinRatesHookedReduced />
    </>
  );
}

export default App;
