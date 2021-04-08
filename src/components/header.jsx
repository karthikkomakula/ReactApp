import React from "react";

export default function Header({ months }) {
  return (
    <tr>
      <th>Name</th>
      {months.map((m) => (
        <th key={m}>{m}</th>
      ))}
      <th>Points Earned</th>
    </tr>
  );
}
