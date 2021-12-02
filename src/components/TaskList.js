import React from "react";
import Task from "./Task";


function TaskList({tasks, setTasks}) {

  function handleDelete(event) {
    const deleteVal = event.target.id
    const updatedTaskList = tasks.filter((task) => task.text !== deleteVal);
    setTasks(updatedTaskList);
  }
  
  const allTasks = tasks.map((task) => {

    return <Task key={task.text} text={task.text} category={task.category} handleDelete={(event) => handleDelete(event)}/>
  });

  return (
    <div className="tasks">
      {allTasks}
    </div>
  );
}

export default TaskList;
