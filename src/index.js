import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import TodosApp from "./Components/TodosApp";
import About from "./Components/About";
// import { Usercontext } from "./Components/Usercontext"
// import PageContextProvider from './Components/Pagecontext';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { createContext } from "react";
//  const UserContext = createContext(null);
//  const [todos, settodos] = React.useState([]);

export const Usercontext=React.createContext(null);


const Wrapper = () => {
  const [user,setuser]=React.useState("Ayyappa");
  const [todos, settodos] = React.useState([]);
  const [addcomment, setaddcomment] = React.useState([]);

  const [todos1, settodos1] = React.useState([]);

  return (
    <Router>
      <div className="container">
        <button>
          <Link to="/about">About</Link>
        </button>
        <button>
          <Link to="/timeline">Fbtimeline</Link>
        </button>
        <button>
          <Link to="/todos">todos</Link>
        </button>
      </div>
      <Switch>
        <Route path="/timeline">
        <Usercontext.Provider  value={{user,setuser}}>
          <App todos={todos} settodos={settodos} addcomment={addcomment} setaddcomment={setaddcomment}/>
          </Usercontext.Provider>
        </Route>
        <Route path="/todos">
          <TodosApp todos1={todos1} settodos1={settodos1} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
