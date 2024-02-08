import { prisma } from "@/db";
import { redirect } from "next/navigation";
import "./makeNewTodo.css";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("invalid title");
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

export default function MakeTodo() {
  return (
    <>
      <div>
        <button>New</button>
        <form action={createTodo}>
          <input type="text" name="title" />
          <div>
            <button type="submit">Create</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
}
