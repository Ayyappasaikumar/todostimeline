   

import React, { useContext } from 'react';
import { Usercontext } from "../index"
 import HelloComment from "./Comment";
const App = ({ todos, settodos,addcomment,setaddcomment}   ) => {
  const [inputvalue, setinputvalue] = React.useState("");

  const addTodo = () => {
    settodos((data) => data.concat([inputvalue]));
    setinputvalue("");
  };
  const {user,setuser } = useContext(Usercontext);
  setuser("Ayyappasaikumar")
  console.log(user);
   
    
  return (
    <div>
      <div className="container">
        <div className="container">
          <input
            type="text"
            value={inputvalue}
            onChange={(event) => setinputvalue(event.target.value)}
          />
          <p>
            <button onClick={addTodo} class="btn btn-primary btn-sm">
              Post
            </button>
          </p>
          {user}
        </div>

        <ul>
          {todos.map((todos, index) => (
            <li key={index}>
              {todos}
              <HelloComment addcomment={addcomment}
                setaddcomment={setaddcomment}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
