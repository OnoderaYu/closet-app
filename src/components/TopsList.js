// TopsList.js
import React, { useEffect, useState } from "react";

function TopsList() {
  const [tops, setTops] = useState([]);

  const fetchTops = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/tops");
      if (!response.ok) throw new Error("一覧の取得に失敗しました");
      const data = await response.json();

      console.log(data); // 取得データ確認用

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

  useEffect(() => {
    fetchTops();
  }, []);

  return (
    <div>
      <h2>トップス一覧</h2>
      {tops.length === 0 ? (
        <p>データがありません</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>ID</th>
              <th>名前</th>
              <th>ブランド</th>
              <th>サイズ</th>
              <th>着丈</th>
              <th>胸囲</th>
              <th>袖丈</th>
            </tr>
          </thead>
          <tbody>
            {tops.map((top) => (
              <tr key={top.id}>
                <td>{top.id}</td>
                <td>{top.name}</td>
                <td>{top.brand}</td>
                <td>{top.size_value}</td>
                <td>{top.length}</td>
                <td>{top.chest}</td>
                <td>{top.sleeve}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TopsList;
