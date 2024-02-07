"use client";
import "./todoList.css";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export function TodoItems({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <>
      <li key={id}>
        <input
          id={id}
          type="checkbox"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label htmlFor={id} className={"st"}>
          {title}
        </label>
      </li>
    </>
  );
}
