const ExpenseList = ({ expenses }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <h2 className="text-gray-700 mb-2">Expenses</h2>
      <ul className="space-y-2">
        {expenses.map((exp) => (
          <li 
            key={exp.id}
            className="flex justify-between border-b pb-1 text-gray-600"
          >
            <span>{exp.title}</span>
            <span>₹{exp.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;