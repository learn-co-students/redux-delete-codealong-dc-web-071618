export default function manageTodo(
  state = {
    todos: []
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      // return { todos: state.todos.concat(action.payload.text) };

      //create an ID for each todo
      const todo = {
        id: Math.random() * 10000000000000000,
        text: action.payload.text
      };
      return { todos: state.todos.concat(todo) };

    //4. Add DELETE_TODO --> filter that returns every todo that doesn't match what is contained in action.payload

    //7. update reducer to have id since it's being passed as props from todo.js
    case "DELETE_TODO":
      return { todos: state.todos.filter(todo => todo.id !== action.payload) };

    default:
      return state;
  }
}
