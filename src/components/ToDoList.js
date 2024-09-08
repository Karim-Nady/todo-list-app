import React from 'react';
import ActionButtons from './ActionButtons';

const ToDoList = ({ tasks, handleComplete, handleDelete, handleModify }) => {
  return (
    <div className="task-table">
      {tasks.length === 0 ? (
        <p className="flex justify-center items-center h-24 text-gray-600">No tasks available.</p>
      ) : (
        <div className="grid grid-cols-6 gap-4 border-b-2 pb-2">
          <div className="font-bold">Task</div>
          <div className="font-bold">Description</div>
          <div className="font-bold">Category</div>
          <div className="font-bold">Due Date</div>
          <div className="font-bold">Priority</div>
          <div className="font-bold">Actions</div>
        </div>
      )}
      <div className='max-h-80 overflow-y-auto custom-scrollbar'> 
      {tasks.map((task, index) => (
        <div key={index} className="grid grid-cols-6 gap-4 py-2 border-b ">
          <div>{task.name || "-"}</div>
          <div>{task.description || "-"}</div>
          <div>{task.category || "-"}</div>
          <div>{task.dueDate || "-"}</div>
          <div>{task.priority || "-"}</div>
          <ActionButtons 
            onComplete={() => handleComplete(index)}
            onDelete={() => handleDelete(index)}
            onModify={() => handleModify(index)}
            isCompleted={task.isCompleted}
          />
        </div>
      ))}
      </div>
    </div>
  );
};

export default ToDoList;
