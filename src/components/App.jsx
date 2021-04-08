import React, { useEffect, useState } from "react";
import { transactionData, months } from "../mockData";
import RewardsTable from "./table";
import "../styles.css";
import formatData from "./util";

export default function App() {
  const [transactions, setTransactions] = useState({});
  const [month, setMonth] = useState([]);

  useEffect(() => {
    async function getTransactionData() {
      const data = await Promise.resolve(transactionData);
      const oldDate = new Date();
      oldDate.setMonth(oldDate.getMonth() - 3);
      const [formattedData, month] = formatData(oldDate, new Date(), data);
      setTransactions(formattedData);
      const monthsArray = Array.from(month);
      setMonth(months.filter((m) => monthsArray.includes(m)));
    }
    getTransactionData();
  }, []);

  console.log(month);
  return (
    <div className="App">
      <RewardsTable transactions={transactions} months={month} />
    </div>
  );
}
