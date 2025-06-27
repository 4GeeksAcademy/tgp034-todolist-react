import React, { useState,useEffect,useCallback } from "react";
import ReactDOM from "react-dom";
import "../../styles/index.css"
//create your first component
const Home = () => {
	const [inputValue, setInputValue ] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const tasksEmpty = tasks.length === 0;
  
  const validateInput = (event) => {
    if (event.key === 'Enter') {
      if(inputValue.trim() === ""){
        alert("Input can't be empty");
      }else{
        setTasks(prev => [...prev, inputValue.trim()]);
        setInputValue("");
      }
    } 
  };

  const removeTask = (index) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

    return <div id="body" className="pt-5 container-fluid">
        <div id="content" className="w-75 container d-flex flex-column align-items-center"> 
          <p id="title" className="m-0">todos</p>
          <div id="container" className="w-100 container d-flex flex-column align-items-start">
            <input type="text" className="ps-5 w-75 form-control-plaintext justify-content-end fs-3 fw-light "
            onChange={e => setInputValue(e.target.value)} value={inputValue} onKeyDown={validateInput}
            placeholder="What needs to be done?"/>
            {tasksEmpty && (<p className="ps-5 pt-2 m-0 w-75 fs-4 fw-light text-body-secondary">No tasks, add a task</p>)}
    
            <ul id="todoList" className="w-100 p-1">
              {tasks.map((task, i) => (
              <li className="task w-100 d-flex p-0 ps-5 justify-content-between fs-4 fw-lighter" key={i}
               onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>{task}
              {isHovered && (<button className="btn delete-btn py-0" onClick={()=>removeTask(i)}>✕</button>)}
              </li>
            ))}
            </ul>
          <p id="tasksCount" className="w-100 fw-light">{tasks.length} {tasks.length == 1 ? "item" : "items"} left</p>
          </div>
          <div id="extra1"></div>
          <div id="extra2"></div>
        </div>
        
    </div>;
};

export default Home;