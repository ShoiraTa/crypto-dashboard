import React, {useState} from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios"

function CurrencyConvertor() {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setchosenPrimaryCurrency] = useState("BTC")
  const [chosenSecondaryCurrency, setchosenSecondaryCurrency] = useState("USD")
  const [amount, setAmount] = useState()
  const [exchangeRate, setexchangeRate ] = useState(0)
  const [result, setResult ] = useState(0)
  const [primaryCurrencyExchange, setprimaryCurrencyExchange ] = useState("BTC")
  const [secondaryCurrencyExchange, setsecondaryCurrencyExchange ] = useState("USD")

  const convert = () => {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
      setexchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
      setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
      setprimaryCurrencyExchange(chosenPrimaryCurrency)
      setsecondaryCurrencyExchange(chosenSecondaryCurrency)
    }).catch(function (error) {
      console.error(error);
    });
  }

  console.log(exchangeRate)

console.log(amount)
  return (
    <div className="currency-convertor">
      <h2> Currency Convertor</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary currency:</td>
              <td>
                <input 
                type="number" 
                name="currency-amount-1" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select 
                value={chosenPrimaryCurrency} 
                name="currency-option-1" 
                className="currency-options"
                onChange={(e) => setchosenPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary currency:</td>
              <td>
                <input type="number" name="currency-amount-2" value={result} disabled = 'true'/>
              </td>
              <td>
                <select 
                value={chosenSecondaryCurrency} 
                name="currency-option-2" 
                className="currency-options"
                onChange={(e) => setchosenSecondaryCurrency(e.target.value)
                }>
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button id="convert-btn" onClick={convert}>Convert</button>
      </div>

      <ExchangeRate className="exchange-rate" exchangeRate={exchangeRate} chosenSecondaryCurrency ={secondaryCurrencyExchange} chosenPrimaryCurrency = {primaryCurrencyExchange}/>
    </div>
  );
}

export default CurrencyConvertor;
