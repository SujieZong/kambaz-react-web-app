import { ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({
  todo
}) {
  const dispatch = useDispatch();
  return (
    <ListGroup.Item
      key={todo.id}
      className="d-flex justify-content-between align-items-center border-secondary border-opacity-25"
    >
      <div className="d-flex gap-2 order-2">
        <Button
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
          className="btn-danger order-2"
        >
          Delete
        </Button>
        <Button
          onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click"
          className="btn-primary"
        >
          Edit
        </Button>
      </div>
      {todo.title}
    </ListGroup.Item>
  );
}
