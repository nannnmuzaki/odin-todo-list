import { storeProjects, getProjects } from "./local-storage-service.js";
import { Project } from "./models/Project.js";
import { Todo } from "./models/Todo.js";

let myProjects = getProjects();

export function createProject(title) {
    const newProject = new Project(title);
    myProjects.push(newProject);

    storeProjects(myProjects);
}

export function addTodoToProject(
    projectId,
    { title, description, dueDateTime, priority, notes } = {},
) {
    if (typeof projectId !== "string") {
        throw new Error("projectId must be a string");
    }

    const project = myProjects.find((p) => p.id === projectId);
    const newTodo = new Todo(title, description, dueDateTime, priority, notes);

    project.addTodo(newTodo);
    storeProjects(myProjects);
}

export function updateTodoFromProject(
    projectId,
    todoId,
    { title, description, dueDateTime, priority, notes } = {},
) {
    if (typeof projectId !== "string") {
        throw new Error("projectId must be a string");
    }

    if (typeof todoId !== "string") {
        throw new Error("todoId must be a string");
    }

    const project = myProjects.find((p) => p.id === projectId);
    const todo = project.getTodos().find((t) => t.id === todoId);

    todo.title = title;
    todo.description = description;
    todo.dueDateTime = dueDateTime;
    todo.priority = priority;
    todo.notes = notes;

    storeProjects(myProjects);
}

export function deleteTodoFromProject(projectId, todoId) {
    if (typeof projectId !== "string") {
        throw new Error("projectId must be a string");
    }

    const project = myProjects.find((p) => p.id === projectId);
    project.removeTodo(todoId);
    storeProjects(myProjects);
}
