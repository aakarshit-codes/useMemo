import { useState, useMemo } from "react";
import { expensesData } from "../assets/expensesData";

import ExpenseFilter from "../components/ExpenseFilter";
import ExpenseSummary from "../components/ExpenseSummary";
import ExpenseList from "../components/ExpenseList";

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredExpenses = useMemo(() => {
    console.log("Filtering expenses...");
    return selectedCategory === "All"
      ? expensesData
      : expensesData.filter(exp => exp.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 space-y-6">
      <h1>Expense Analyzer</h1>
      < ExpenseFilter 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory}
      />
      < ExpenseSummary expenses={filteredExpenses} />
      < ExpenseList expenses={filteredExpenses} />
    </div>
  );
};

export default Dashboard;