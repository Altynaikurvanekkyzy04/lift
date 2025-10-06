import React, { useState } from "react";

export default function LiftCalculator({ goToTemp }) {
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
      <button onClick={calculate} style={{ padding: "8px 12px" }}>
        Рассчитать
      </button>

      {price !== null && (
        <p style={{ marginTop: 15, fontWeight: "bold" }}>
          Стоимость: {price} сом
        </p>
      )}

      <hr style={{ margin: "30px 0" }} />
      <button
        onClick={goToTemp}
        style={{
          padding: "8px 12px",
          background: "#38bdf8",
          color: "#fff",
          border: "none",
          borderRadius: 5,
        }}
      >
        next
      </button>
    </div>
  );
}
