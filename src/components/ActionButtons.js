import React from 'react';
import { FaCheckCircle, FaTrashAlt, FaEdit } from 'react-icons/fa';

const ActionButtons = ({ onComplete, onDelete, onModify, isCompleted }) => {
  return (
    <div className="flex space-x-2">
      <button
        className={`flex items-center justify-center w-8 h-8 rounded-full shadow-lg transition-all duration-300 
          ${isCompleted ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}
        onClick={onComplete}
      >
        <FaCheckCircle className="w-4 h-4" />
      </button>

      <button
        className="flex items-center justify-center w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all duration-300"
        onClick={onDelete}
      >
        <FaTrashAlt className="w-4 h-4" />
      </button>

      <button
        className="flex items-center justify-center w-8 h-8 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg transition-all duration-300"
        onClick={onModify}
      >
        <FaEdit className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ActionButtons;
