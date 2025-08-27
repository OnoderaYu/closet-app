// TopsAdd.js
import React, { useState } from "react";

function TopsAdd({ onAdd }) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [length, setLength] = useState("");
  const [chest, setChest] = useState("");
  const [sleeve, setSleeve] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/tops", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          brand,
          size_value: sizeValue,
          length: length ? Number(length) : null,
          chest: chest ? Number(chest) : null,
          sleeve: sleeve ? Number(sleeve) : null
        })
      });

      if (!response.ok) {
        throw new Error("追加に失敗しました");
      }

      // 成功したらフォームをクリアして親に通知
      setName("");
      setBrand("");
      setSizeValue("");
      setLength("");
      setChest("");
      setSleeve("");
      setError("");
      onAdd(); // 親コンポーネントに一覧再取得を通知
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>トップスを追加</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="ブランド"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="サイズ"
          value={sizeValue}
          onChange={(e) => setSizeValue(e.target.value)}
        />
        <input
          type="number"
          placeholder="着丈"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <input
          type="number"
          placeholder="胸囲"
          value={chest}
          onChange={(e) => setChest(e.target.value)}
        />
        <input
          type="number"
          placeholder="袖丈"
          value={sleeve}
          onChange={(e) => setSleeve(e.target.value)}
        />
        <button type="submit">追加</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default TopsAdd;
