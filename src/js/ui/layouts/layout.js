import { DialogForm } from "../components/dialog-form.js";
import { FormType } from "../components/dialog-form.js";

export function initializeLayout() {
    const content = document.querySelector("#content");
    const projectDialogForm = DialogForm(FormType.PROJECT);
    const todoDialogForm = DialogForm(FormType.TODO);

    const mainGrid = document.createElement("div");
    mainGrid.className = "main-grid";

    content.appendChild(mainGrid);

    const projectsWrapper = document.createElement("div");
    projectsWrapper.className = "projects-wrapper";

    mainGrid.appendChild(projectsWrapper);

    const projectsHeader = document.createElement("div");
    projectsHeader.className = "projects-header";
    projectsHeader.appendChild(document.createElement("h2")).textContent =
        "Project List";

    projectsWrapper.appendChild(projectsHeader);

    const projectList = document.createElement("div");
    projectList.className = "project-list";

    const project = document.createElement("div");
    project.className = "project";
    project.appendChild(document.createElement("h3")).textContent =
        "The Odin Project";

    projectList.appendChild(project);

    const project2 = document.createElement("div");
    project2.className = "project";
    project2.appendChild(document.createElement("h3")).textContent =
        "The Odin ";

    projectList.appendChild(project2);

    projectsWrapper.appendChild(projectList);

    const todosWrapper = document.createElement("div");
    todosWrapper.className = "todos-wrapper";

    mainGrid.appendChild(todosWrapper);

    const todosHeader = document.createElement("div");
    todosHeader.className = "todos-header";
    todosHeader.appendChild(document.createElement("h2")).textContent =
        "Todo List";

    todosWrapper.appendChild(todosHeader);

    const actionsWrapper = document.createElement("div");
    actionsWrapper.className = "actions-wrapper";

    todosHeader.appendChild(actionsWrapper);

    const addProjectBtn = document.createElement("button");
    addProjectBtn.className = "action-btn";
    addProjectBtn.textContent = "Add Project +";
    addProjectBtn.addEventListener("click", () => {
        projectDialogForm.showModal();
    });

    actionsWrapper.appendChild(addProjectBtn);

    const addTodoBtn = document.createElement("button");
    addTodoBtn.className = "action-btn";
    addTodoBtn.textContent = "Add Todo +";

    actionsWrapper.appendChild(addTodoBtn);

    const todoList = document.createElement("div");
    todoList.className = "todo-list";

    const todo = document.createElement("div");
    todo.className = "todo";
    todo.appendChild(document.createElement("h3")).textContent =
        "The Odin Project";

    todoList.appendChild(todo);

    const todo2 = document.createElement("div");
    todo2.className = "todo";
    todo2.appendChild(document.createElement("h3")).textContent = "The Odin ";

    todoList.appendChild(todo2);

    todosWrapper.appendChild(todoList);
    mainGrid.appendChild(projectDialogForm);
    mainGrid.appendChild(todoDialogForm);
}
