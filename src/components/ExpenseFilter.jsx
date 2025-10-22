const ExpenseFilter = ({ selectedCategory, onSelectCategory }) => {
  const categories = ["All", "Food", "Entertainment", "Transport", "Utilities"];
  
  return (
    <div className="flex justify-center">
      <select 
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-400"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>  
  );
};

export default ExpenseFilter; 