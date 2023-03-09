import React, { useState } from "react";
import Input from "../../atoms/Input/Input";

interface CurrencyConverterProps {
  exchangeRate: number; // exchange rate between USD and EUR
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  exchangeRate,
}) => {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("EUR");
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");

  const convert = (value: number, exchangeRate: number) => {
    return currencyFrom === "USD"
      ? (value * exchangeRate).toFixed(2)
      : (value / exchangeRate).toFixed(2);
  };

  const handleValueFromChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setValueFrom(event.target.value);
      setValueTo(convert(value, exchangeRate));
    }
  };

  const handleValueToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setValueTo(event.target.value);
      setValueFrom(convert(value, 1 / exchangeRate));
    }
  };

  const handleCurrencyFromChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrencyFrom(event.target.value);
    setValueTo(convert(parseFloat(valueFrom), exchangeRate));
  };

  const handleCurrencyToChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrencyTo(event.target.value);
    setValueTo(convert(parseFloat(valueFrom), exchangeRate));
  };

  return (
    <div className="flex justify-center space-x-4">
      <Input
        label="From"
        placeholder="Enter value"
        value={valueFrom}
        onChange={handleValueFromChange}
      />
      <select
        value={currencyFrom}
        onChange={handleCurrencyFromChange}
        className="p-2 rounded-md border-gray-300 border focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <Input
        label="To"
        placeholder="Converted value"
        value={valueTo}
        onChange={handleValueToChange}
      />
      <select
        value={currencyTo}
        onChange={handleCurrencyToChange}
        className="p-2 rounded-md border-gray-300 border focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default CurrencyConverter;
