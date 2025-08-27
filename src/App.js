// src/App.js
import React, { useState, useEffect } from "react";
import TopsList from "./components/TopsList";
import TopsAdd from "./components/TopsAdd";

function App() {
  const [tops, setTops] = useState([]);

  // 一覧を取得する関数
  const fetchTops = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/tops");
      if (!response.ok) throw new Error("一覧の取得に失敗しました");
      const data = await response.json();

      // Oracleの結果は二次元配列なのでオブジェクトに変換
      const formatted = data.map((row) => ({
        id: row[0],
        name: row[1],
        brand: row[2],
        size_value: row[3],
        length: row[4],
        chest: row[5],
        sleeve: row[6],
      }));

      setTops(formatted);
    } catch (err) {
      console.error(err);
    }
  };

  // マウント時に一覧を取得
  useEffect(() => {
    fetchTops();
  }, []);

  return (
    <div>
      <h1>トップス管理</h1>
      {/* 追加フォーム */}
      <TopsAdd onAdd={fetchTops} />

      {/* 一覧表示 */}
      <TopsList tops={tops} />
    </div>
  );
}

export default App;
