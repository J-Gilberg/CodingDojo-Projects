import { useState } from 'react';
import './App.css';
import Task from './components.js/task';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (event) =>{
    event.preventDefault();

    setTaskList([...taskList,
      {key: taskList.length
        , [event.target[0].name]: event.target[0].value
        , complete: false}
    ]);
    console.log("added a task");
  }
  
  const deleteTask = (key) =>{
    console.log("app delete task")
    console.log(key);
    setTaskList(taskList.slice(0,key).concat(taskList.slice(key+1, taskList.length)));
  }

  const completedTask = (key) => {
    console.log("app completed task called");
    console.log(taskList[key].complete);
    const temp = {
      ...taskList[key],
      complete: !taskList[key].complete
    }

    setTaskList([
      ...taskList.slice(0,key)
      ,temp
      ,...taskList.slice(key+1)
    ])
    
  }

  return (
    <div className="App">
      <div className="addTasks">
        <form onSubmit={addTask}>
          <input type="text" name="taskDesc"/>
          <input type="submit" value="Add"/>
        </form>
      </div>
      <div className="tasks">
        {console.log(taskList)}
        {taskList.length > 0 
          ? taskList.map((task,i) =>{
              return <Task task = {task} deleteTask = {deleteTask} completedTask = {completedTask}/>
            })
          : ""
        }
      </div>
    </div>
  );
}

export default App;

/* {taskList.length > 0 ? taskList[0].taskDesc : ""
        } */
