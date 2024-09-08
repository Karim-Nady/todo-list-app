import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import ModelForm from './components/ModelForm';
import FilterButtons from './components/FilterButtons';
import './styles/index.css';

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const openModel = () => {
    setSelectedTask(null); 
    setIsModelOpen(true);
  };
  
  const closeModel = () => setIsModelOpen(false);

  const updateTasks = (updatedTask, index) => {
    if (index !== null) {
      // Modify task
      const newTasks = [...tasks];
      newTasks[index] = updatedTask;
      setTasks(newTasks);
    } else {
      // Add new task
      setTasks([...tasks, updatedTask]);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    closeModel();
  };

  const handleModify = (index) => {
    setSelectedTask({ ...tasks[index], index });
    setIsModelOpen(true);
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  const filterTasks = (filter) => {
    if (filter === 'all') {
      setFilteredTasks(tasks);
    } else if (filter === 'todo') {
      setFilteredTasks(tasks.filter((task) => !task.isCompleted));
    } else if (filter === 'completed') {
      setFilteredTasks(tasks.filter((task) => task.isCompleted));
    }
  }
  return (
    <div className="App min-h-screen bg-blue-100">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex justify-center w-full h-full">
        <div className="container max-w-6xl mx-auto p-4 mb-28 mt-20 bg-white rounded-lg shadow-lg bg-opacity-50">
          <h1 className="text-center text-3xl font-extrabold mb-6">To-Do List</h1>

          <div className="flex justify-between items-center">
            <button
              className="w-2/5 mb-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
              onClick={openModel}
            >
              + Add a new to-do
            </button>
            <FilterButtons filterTasks={filterTasks} />
          </div>

          <div className='bg-gray-100 p-4 shadow-md rounded-lg'>
            <ToDoList
              tasks={filteredTasks}
              handleModify={handleModify}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          </div>

          {isModelOpen && (
            <ModelForm
              closeModel={closeModel}
              updateTasks={updateTasks}
              selectedTask={selectedTask}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
