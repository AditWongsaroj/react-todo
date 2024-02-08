"use client";
import "./todoList.css";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
  toggleTodo: (id: string, complete: boolean) => void;
};

export function TodoItems({
  id,
  title,
  complete,
  createdAt,
  updatedAt,
  toggleTodo,
}: TodoItemProps) {
  let now = Date.now();
  let age = msToTime(now - createdAt.getTime());
  let lastClick = msToTime(now - updatedAt.getTime());

  return (
    <>
      <li key={id}>
        <input
          id={id}
          type="checkbox"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span>{title}</span>
        <span suppressHydrationWarning>{age}</span>
        <span suppressHydrationWarning>{lastClick}</span>
      </li>
    </>
  );
}

function msToTime(duration: number) {
  let milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  let time = "";
  if (hours >= 24) {
    let days = hours / 24;
    if (days >= 365) {
      // leap years not accounted for
      time += Math.floor(days / 365);
      days %= 365;
    }
    time += Math.floor(days) + "d:";
    hours %= 24;
  }
  if (hours) {
    time += hours < 10 ? "0" + hours : "" + hours;
    time += "h:";
  }
  if (minutes) {
    time += minutes < 10 ? "0" + minutes : "" + minutes;
    time += "m:";
  }
  time += seconds < 10 ? "0" + seconds : "" + seconds;

  return time + "." + milliseconds + "s";
}
