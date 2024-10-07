/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [exchangeRate, setExchangeRate] = useState('');
  
  // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
  useEffect(() => {
    console.log('running useEffect');
    let ignore = false; // flag to allow ignoring of the fetch result

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) setExchangeRate(json.bitcoin[currency.toLowerCase()]);
      }); 

      return () => {
        ignore = true;
        console.log('cleanup')
      };
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
      <p>Exchange rate is 1 bitcoin = {exchangeRate} {currency} </p>
      </div>
    </div>
  );
}

export default BitcoinRates;
