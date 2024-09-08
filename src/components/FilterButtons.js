import React, { useState } from 'react';

function FilterButtons({ filterTasks }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    filterTasks(filter);
  };

  return (
    <div className="flex gap-3 mb-4 justify-between">
      <button
        className={`px-12 py-2 rounded-full shadow-lg font-semibold transition-all duration-300 ${
          activeFilter === 'todo'
            ? 'bg-gradient-to-r from-green-500 to-teal-400 text-white'
            : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
        }`}
        onClick={() => handleFilterChange('todo')}
      >
        To-do
      </button>

      <button
        className={`px-12 py-2 rounded-full shadow-lg font-semibold transition-all duration-300 ${
          activeFilter === 'completed'
            ? 'bg-gradient-to-r from-green-500 to-teal-400 text-white'
            : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
        }`}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </button>
      
      <button
        className={`px-12 py-2 rounded-full shadow-lg font-semibold transition-all duration-300 ${
          activeFilter === 'all'
            ? 'bg-gradient-to-r from-green-500 to-teal-400 text-white'
            : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
        }`}
        onClick={() => handleFilterChange('all')}
      >
        All
      </button>
    </div>
  );
}

export default FilterButtons;
