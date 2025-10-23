import { useMemo } from "react";

const ExpenseSummary = ({ expenses }) => {
  const total = useMemo(() => {
    console.log("Calculating total expenses...");
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  return (
    <div>
      <h2 className="font-semibold text-blue-800">Total Expenses:</h2>
      <p className="text-xl font-bold text-blue-900">₹{total}</p>
    </div>
  );
};

export default ExpenseSummary;