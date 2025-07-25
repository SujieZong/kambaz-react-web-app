import { ListGroup, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center border-secondary border-opacity-25">
      <div className="d-flex gap-2 order-2">
        <Button
          onClick={() => dispatch(addTodo(todo))}
          id="wd-add-todo-click"
          className="btn-success  order-2"
        >
          Add
        </Button>
        <Button
          onClick={() => dispatch(updateTodo(todo))}
          id="wd-update-todo-click"
          className="btn-warning"
        >
          Update
        </Button>
      </div>
      <FormControl
        className="me-3 order-1 flex-grow-1"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </ListGroup.Item>
  );
}
