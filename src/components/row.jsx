import React from "react";

export default function Row({ transaction, months }) {
  return (
    <tr>
      <td>{transaction.name}</td>
      {months.map((month, i) => (
        <td key={i}>{transaction[month] || 0}</td>
      ))}
      <td>{transaction.points}</td>
    </tr>
  );
}
