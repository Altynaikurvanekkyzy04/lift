import React, { useState } from "react";

export default function TemperatureConverter({ goToLogin }) {
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
          onClick={goToLogin}
          style={{
            marginTop: 20,
            padding: "8px 12px",
            background: "#34d399",
            color: "#fff",
            border: "none",
            borderRadius: 5,
          }}
        >
         next
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
