import { writeFile } from 'fs/promises';
import todos from '../../../../todos.json'
 
export async function GET(_, { params }) {
    const { id } = await params;
    const todo = todos.find((todo) => id === todo.id.toString());
    if (!todo) {
        return Response.json({ error: `${id} there is no Todo have.`, status: 404 })
    }
    return Response.json(todo)  // cheak git 
}    


export async function PUT(Request, { params }) {
    const { id } = await params;
    const updatedData = await Request.json();

    const todo = todos.find((todo) => id == todo.id.toString());
    if (!todo) {
        return Response.json({ error: `${id} there is no Todo have.`, status: 404 })
    }

    todo.work = updatedData.work;
    todo.completed = updatedData.completed;
    
    await writeFile('todos.json', JSON.stringify(todos, null, 2))
    return Response.json(todo)
}


export async function DELETE(Request, { params }) {
    const { id } = await params;

    const todo = todos.filter((todo) => id !== todo.id.toString());
    if (!todo) {
        return Response.json({ error: `${id} there is no Todo have.`, status: 404 })
    }

    await writeFile('todos.json', JSON.stringify(todo, null, 2))
    return Response.json(todo) 
}