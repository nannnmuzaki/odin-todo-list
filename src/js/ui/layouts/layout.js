import { DialogForm } from "../components/dialog-form.js";
import { DialogFormType } from "../../enums/DialogFormType.js";
import folderPlusSvg from "../../../assets/icons/folder-plus.svg";
import calendarPlus2Svg from "../../../assets/icons/calendar-plus-2.svg";

export function initializeLayout(onProjectSubmit, onTodoSubmit) {
    const content = document.querySelector("#content");
    const projectDialogForm = DialogForm(
        DialogFormType.PROJECT,
        null,
        onProjectSubmit,
    );
    const todoDialogForm = DialogForm(DialogFormType.TODO, null, onTodoSubmit);

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
    addProjectBtn.addEventListener("click", () => {
        projectDialogForm.showModal();
    });

    const addProjectBtnIcon = document.createElement("div");
    addProjectBtnIcon.className = "btn-icon";
    addProjectBtnIcon.innerHTML = folderPlusSvg;

    addProjectBtn.appendChild(addProjectBtnIcon);

    addProjectBtn.appendChild(document.createElement("span")).textContent =
        "Add Project";

    actionsWrapper.appendChild(addProjectBtn);

    const addTodoBtn = document.createElement("button");
    addTodoBtn.className = "action-btn";
    addTodoBtn.addEventListener("click", () => {
        todoDialogForm.showModal();
    });

    const addTodoBtnIcon = document.createElement("div");
    addTodoBtnIcon.className = "btn-icon";
    addTodoBtnIcon.innerHTML = calendarPlus2Svg;

    addTodoBtn.appendChild(addTodoBtnIcon);

    addTodoBtn.appendChild(document.createElement("span")).textContent =
        "Add Todo";

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
    content.appendChild(projectDialogForm);
    content.appendChild(todoDialogForm);
}
