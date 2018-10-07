import React from "react";

const Todo = props => {
  //2. Add DELETE button and onClick
  //6. update delete to have id as payload
  return (
    <div>
      <span>
        <li>{props.todo.text}</li>
      </span>
      <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  );
};

export default Todo;
