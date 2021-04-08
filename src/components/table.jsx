import React from "react";
import Header from "./header";
import Row from "./row";

export default function RewardsTable({ transactions = {}, months = [] }) {
  return (
    <table>
      <thead>
        <Header months={months} />
      </thead>
      <tbody>
        {Object.values(transactions).map((transaction, index) => (
          <Row key={index} transaction={transaction} months={months} />
        ))}
      </tbody>
    </table>
  );
}
