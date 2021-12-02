import React ,{ useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelelectedCategory] = useState('All')

  function handleSelect(event) {

    setSelelectedCategory(event.target.id);
    const newTasks = TASKS.filter((task) => {

      if (selectedCategory === 'All') {
        return tasks;
      } else {
        return task.category === selectedCategory;
      }
    }) 
    console.log(newTasks)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleSelect={handleSelect}/>
      <NewTaskForm />
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
