import React, { useState } from "react";
import "./KanbanBoard.css";

const initialTasks = {
  todo: [
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
  ],
  inProgress: [
    { id: 3, text: "Task 3" },
  ],
  done: [
    { id: 4, text: "Task 4" },
  ],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggingTask, setDraggingTask] = useState(null);

  const handleDragStart = (task, column) => {
    setDraggingTask({ task, column });
  };

  const handleDrop = (targetColumn) => {
    if (!draggingTask) return;

    const { task, column } = draggingTask;

    // Remove the task from the original column
    const updatedSourceColumn = tasks[column].filter((t) => t.id !== task.id);

    // Add the task to the target column
    const updatedTargetColumn = [...tasks[targetColumn], task];

    setTasks((prevTasks) => ({
      ...prevTasks,
      [column]: updatedSourceColumn,
      [targetColumn]: updatedTargetColumn,
    }));

    setDraggingTask(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="kanban-board">
      {Object.keys(tasks).map((column) => (
        <div
          key={column}
          className="kanban-column"
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(column)}
        >
          <h3 className="column-title">{column.toUpperCase()}</h3>
          <div className="task-list">
            {tasks[column].map((task) => (
              <div
                key={task.id}
                className="task"
                draggable
                onDragStart={() => handleDragStart(task, column)}
              >
                {task.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
