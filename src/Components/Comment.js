import React, { useState } from "react";

const HelloComment = ({addcomment,setaddcomment}) => {
  const [comment, setcomment] = useState("");
 
  const [count, setcount] = React.useState(0);
  const increment = () => {
    setcount(count + 1);
    console.log(count);
  };

  const addcomment1 = () => {
    setaddcomment((data) => data.concat([comment]));
    setcomment(" ");

    console.log(addcomment);
  };
  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(event) => setcomment(event.target.value)}
      />
      <button onClick={addcomment1} class="btn btn-primary btn-sm">
        Add
      </button>
      <div>
        <button onClick={increment}>likes</button>
        <span>{count}</span>
      </div>

      <ul>
        {addcomment.map((addcomment, idx) => (
          <li key={idx}>{addcomment}</li>
        ))}
      </ul>
    </div>
  );
};

export default HelloComment;
