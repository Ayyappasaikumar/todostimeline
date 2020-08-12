import React from "react";


const TodosApp = ({ todos1, settodos1 }) => {
 
   
  const [inputvalue1, setinputvalue1] = React.useState("");
 
 

  const hello = () => {
    settodos1((data) => data.concat([inputvalue1]));
    setinputvalue1("");
  
  };

  
  

  return (
    <div>
      <div className="container">
        <input
          type="text"
          value={inputvalue1}
          onChange={(event) => setinputvalue1(event.target.value)}
        />

        <button onClick={hello} class="btn btn-primary btn-sm">
          Add
        </button>
        <ul>
          {todos1.map((todos1, index1) => (
            <li key={index1}>
              {todos1}
             
            
         
            </li>
          ))}
         
        </ul>
         
      </div>
    </div>
  );
};


export default TodosApp;