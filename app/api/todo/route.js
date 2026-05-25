import { writeFile } from 'fs/promises';
import todos from '../../../todos.json'

export function GET() {
    return Response.json(todos)
}

export async function POST(Request) {
    const newTodo = await Request.json();
    const todo = {
        id: todos.length + 1,
        work: newTodo.work,
        completed: newTodo.completed
    }
    todos.push(todo);
    await writeFile('todos.json', JSON.stringify(todos, null, 2))
    return Response.json(todos) 
}



// // Direct export
// export async function POST(request) { }

// // Named function + export
// async function createUser(request) { }
// export { createUser as POST }

// // Arrow function
// const POST = async (request) => { }
// export { POST }

// // Yeh kaam NAHI karega
// export async function createUser(request) { }