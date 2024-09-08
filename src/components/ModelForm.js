import React, { useState, useEffect } from 'react';

const ModelForm = ({ closeModel, updateTasks, selectedTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');
  const [isCompleted, setCompleted] = useState(false); // New state for task completion

  useEffect(() => {
    if (selectedTask) {
      setName(selectedTask.name || '');
      setDescription(selectedTask.description || '');
      setCategory(selectedTask.category || '');
      setDueDate(selectedTask.dueDate || '');
      setPriority(selectedTask.priority || 'low');
      setCompleted(selectedTask.isCompleted || false); 
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { name, description, category, dueDate, priority, isCompleted }; 
    updateTasks(newTask, selectedTask ? selectedTask.index : null);
    closeModel(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-1/2">
        <h2 className="text-xl font-semibold mb-4">
          {selectedTask ? 'Modify To-Do' : 'Add a new To-Do'}
        </h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="name for the task you're going to do"
          />

          <label className="block mb-2">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="a short description of the task"
          ></textarea>

          <label className="block mb-2">Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="e.g., household, work"
          />

          <label className="block mb-2">Due date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <label className="block mb-2">Priority:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
            >
              Save
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 font-semibold rounded-md"
              onClick={closeModel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModelForm;
