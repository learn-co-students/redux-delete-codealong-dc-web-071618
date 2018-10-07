import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodosContainer extends Component {
  renderTodos = () => {
    //5. update key to have id that was created randomly in reducer
    return;
    this.props.todos.map(todo => (
      <Todo key={todo.id} text={todo} delete={this.props.delete} />
    ));
  };

  render() {
    return <div>{this.renderTodos()}</div>;
  }
}

mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

//1. TodosContainer is where connected to Redux, write function to include DELETE action + pass delete props to <Todo />
//3. when the delete button is clicked, the value of props.text is passed into our dispatched action as the payload.
const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({ type: "DELETE_TODO", payload: todoText })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);
