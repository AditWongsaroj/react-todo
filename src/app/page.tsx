import { TodoItems } from "@/components/TodoList";
import MakeTodo from "@/components/makeNewTodo";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header>
        <h1 className="text-2x1">Todos</h1>
      </header>

      <div className="todo-age">
        <div>
          <MakeTodo />
        </div>
        <button>age</button>
        <button>since checked</button>
      </div>
      <ul>
        <li key="title">
          <span>Done</span>
          <span>Todo</span>
          <span>Time since created</span>
          <span>Time since checked</span>
        </li>
        {todos.map((todo) => {
          return (
            <>
              <TodoItems key={todo.id} {...todo} toggleTodo={toggleTodo} />
            </>
          );
        })}
      </ul>
    </>
  );
}
