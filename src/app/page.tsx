import { TodoItems } from "@/components/TodoItems";
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
        <Link id="link" href="/new">
          New
        </Link>
      </header>
      <ul>
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
0;
