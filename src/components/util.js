import { months } from "../mockData";

function getPoints(amount) {
  let points = 0;
  if (amount > 50 && amount < 100) {
    points = amount - 50;
  } else if (amount >= 100) {
    points = 50 + (amount - 100) * 2;
  }

  return points;
}

export default function formatData(startDate, endDate, data) {
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  let month = new Set();
  return [
    data.reduce((acc, d) => {
      const customer = acc[d.id] || {};

      customer.name = d.name;
      const tDate = new Date(d.date);
      const tTime = tDate.getTime();
      if (tTime >= startTime && tTime <= endTime) {
        const tMonth = months[tDate.getMonth()];
        const points = getPoints(d.amount);
        customer[tMonth] = (customer[tMonth] || 0) + points;
        month.add(tMonth);
        customer.points = (customer.points || 0) + points;
      }
      acc[d.id] = customer;
      return acc;
    }, {}),
    month,
  ];
}
