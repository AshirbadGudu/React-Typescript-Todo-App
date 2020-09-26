import * as React from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = React.useState<any>();
  const [todos, setTodos] = React.useState<any>([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { todo, id: new Date().getTime() }]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    let arr = [];
    todos.forEach((ele) => {
      if (ele.id !== id) {
        arr.push(ele);
      }
    });
    setTodos(arr);
  };

  return (
    <>
      <form onSubmit={(e) => addTodo(e)} className="App">
        <h1>ToDo App</h1>
        <input
          className="todoInput"
          required
          type="text"
          value={todo}
          placeholder="Enter Somthing"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="addTodoBtn">
          Add +
        </button>
      </form>
      <table className="container">
        <tbody>
          {todos.map((item, key) => (
            <tr key={key}>
              <td>{key + 1 + ":- " + item.todo}</td>
              <td>
                <button
                  className="deleteTodoBtn"
                  onClick={() => {
                    deleteTodo(item.id);
                  }}
                >
                  Delete &times;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
