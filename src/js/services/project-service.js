import { storeProjects, getProjects } from "./local-storage-service.js";
import { Project } from "../models/Project.js";
import { Todo } from "../models/Todo.js";

let myProjects = getProjects();

export function createProject(title) {
  const newProject = new Project(title);
  myProjects.push(newProject);

  storeProjects(myProjects);
}

export function updateProject(projectId, { title } = {}) {
  if (typeof projectId !== "string" || !projectId.trim()) {
    throw new Error("projectId must be a non-empty string");
  }

  const project = myProjects.find((p) => p.id === projectId);

  if (!project) {
    throw new Error("Project not found");
  }

  project.title = title;

  storeProjects(myProjects);
}

export function deleteProject(projectId) {
  if (typeof projectId !== "string" || !projectId.trim()) {
    throw new Error("projectId must be a non-empty string");
  }

  const projectIndex = myProjects.findIndex((p) => p.id === projectId);

  if (projectIndex !== -1) {
    myProjects.splice(projectIndex, 1);
    storeProjects(myProjects);
  }
}

export function addTodoToProject(
  projectId,
  { title, description, dueDateTime, priority, notes } = {},
) {
  if (typeof projectId !== "string" || !projectId.trim()) {
    throw new Error("projectId must be a non-empty string");
  }

  const project = myProjects.find((p) => p.id === projectId);

  if (!project) {
    throw new Error("Project not found");
  }

  const newTodo = new Todo(title, description, dueDateTime, priority, notes);

  project.addTodo(newTodo);
  storeProjects(myProjects);
}

export function updateTodoFromProject(
  projectId,
  todoId,
  { title, description, dueDateTime, priority, notes } = {},
) {
  if (typeof projectId !== "string" || !projectId.trim()) {
    throw new Error("projectId must be a non-empty string");
  }

  if (typeof todoId !== "string" || !todoId.trim()) {
    throw new Error("todoId must be a non-empty string");
  }

  const project = myProjects.find((p) => p.id === projectId);

  if (!project) {
    throw new Error("Project not found");
  }

  const todo = project.getTodos().find((t) => t.id === todoId);

  if (!todo) {
    throw new Error("Todo not found");
  }

  todo.title = title;
  todo.description = description;
  todo.dueDateTime = dueDateTime;
  todo.priority = priority;
  todo.notes = notes;

  storeProjects(myProjects);
}

export function checklistTodo(projectId, todoId) {
  if (typeof projectId !== "string" || !projectId.trim()) {
    throw new Error("projectId must be a non-empty string");
  }

  const project = myProjects.find((p) => p.id === projectId);

  if (!project) {
    throw new Error("Project not found");
  }

  const todo = project.getTodos((t) => t.id === todoId);

  if (!todo) {
    throw new Error("Todo not found");
  }

  project.toggleTodoChecklist(todoId);
  storeProjects(myProjects);
}

export function deleteTodoFromProject(projectId, todoId) {
  if (typeof projectId !== "string" || !projectId.trim()) {
    throw new Error("projectId must be a non-empty string");
  }

  const project = myProjects.find((p) => p.id === projectId);

  if (!project) return;

  project.removeTodo(todoId);
  storeProjects(myProjects);
}
