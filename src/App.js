import React, { useState } from "react";

function LiftCalculator({ goToTemp }) {
  const [floors, setFloors] = useState("");
  const [price, setPrice] = useState(null);

  const calculate = () => {
    const f = parseInt(floors, 10);
    if (isNaN(f) || f < 1) {
      setPrice("Введите этаж (1 или больше)");
      return;
    }
    setPrice(f === 1 ? 0 : (f - 1) * 30);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h2>Калькулятор подъёма мебели</h2>
      <input
        type="number"
        placeholder="Введите этаж"
        value={floors}
        onChange={(e) => setFloors(e.target.value)}
        style={{ padding: 8, width: "100%", marginBottom: 10 }}
      />
      <br />
      <button onClick={calculate} style={{ padding: "8px 12px" }}>Рассчитать</button>
      {price !== null && <p style={{ marginTop: 15, fontWeight: "bold" }}>Стоимость: {price} сом</p>}

      <hr style={{ margin: "30px 0" }} />
      <button onClick={goToTemp} style={{ padding: "8px 12px", background: "#38bdf8", color: "#fff", border: "none", borderRadius: 5 }}>
        next
      </button>
    </div>
  );
}


function TemperatureConverter({ goToLift }) {
  const [value, setValue] = useState("");
  const [scale, setScale] = useState("C");

  const toCelsius = (val, s) => {
    if (isNaN(val)) return null;
    switch (s) {
      case "C": return val;
      case "F": return (val - 32) * 5 / 9;
      case "K": return val - 273.15;
      default: return val;
    }
  };

  const num = parseFloat(value);
  const celsius = toCelsius(num, scale);
  const fahrenheit = celsius !== null ? celsius * 9 / 5 + 32 : null;
  const kelvin = celsius !== null ? celsius + 273.15 : null;

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        display: "flex",
      }}
    >
      <div style={{ flex: 1, padding: 20, background: "#a8edea" }}>
        <h3>Введите температуру</h3>
        <input
          type="number"
          placeholder="Введите число"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ padding: 8, width: "100%", marginBottom: 10 }}
        />
        <select
          value={scale}
          onChange={(e) => setScale(e.target.value)}
          style={{ padding: 8, width: "100%" }}
        >
          <option value="C">Цельсий (°C)</option>
          <option value="F">Фаренгейт (°F)</option>
          <option value="K">Кельвин (K)</option>
        </select>

        <button
          onClick={goToLift}
          style={{ marginTop: 20, padding: "8px 12px", background: "#34d399", color: "#fff", border: "none", borderRadius: 5 }}
        >
          Назад
        </button>
      </div>
      <div style={{ flex: 1, padding: 20, background: "#90f7ec" }}>
        <h3>Результат</h3>
        {celsius !== null ? (
          <div>
            <p><strong>Цельсий:</strong> {celsius.toFixed(2)} °C</p>
            <p><strong>Фаренгейт:</strong> {fahrenheit.toFixed(2)} °F</p>
            <p><strong>Кельвин:</strong> {kelvin.toFixed(2)} K</p>
          </div>
        ) : (
          <p>Введите число для расчёта</p>
        )}
      </div>
    </div>
  );
}


export default function App() {
  const [page, setPage] = useState("lift");

  return (
    <>
      {page === "lift" && <LiftCalculator goToTemp={() => setPage("temp")} />}
      {page === "temp" && <TemperatureConverter goToLift={() => setPage("lift")} />}
    </>
  );
}
