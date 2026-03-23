import "../css/style.css";
import { initializeLayout } from "./ui/layouts/layout.js";
import { renderProjects, renderTodos } from "./ui/dom-renderers.js";
import { DialogFormType } from "./enums/DialogFormType.js";
import { DialogForm } from "./ui/components/dialog-form.js";
import { DialogTodoDetails } from "./ui/components/dialog-todo-details.js";
import { getProjects } from "./services/local-storage-service.js";
import {
    createProject,
    updateProject,
    deleteProject,
    addTodoToProject,
    updateTodoFromProject,
    deleteTodoFromProject,
    checklistTodo,
} from "./services/project-service.js";

initializeLayout(
    (data) => {
        createProject(data.title);
        updateScreen();
    },
    (data) => {
        if (!activeProjectId) {
            throw new Error("Please select a project first!");
            return;
        }

        addTodoToProject(activeProjectId, data);
        updateScreen();
    },
);

const mainContainer = document.querySelector("#content");
const projectListContainer = document.querySelector(".project-list");
const todoListContainer = document.querySelector(".todo-list");

let myProjects = getProjects();
let activeProjectId = myProjects.length > 0 ? myProjects[0].id : null;

function updateScreen() {
    myProjects = getProjects();

    renderProjects(
        myProjects,
        projectListContainer,
        activeProjectId,
        (clickedId) => {
            activeProjectId = clickedId;
            updateScreen();
        },
        (clickedId) => {
            const project = myProjects.find((p) => p.id === clickedId);

            const editDialogForm = DialogForm(
                DialogFormType.PROJECT,
                project,
                (data) => {
                    updateProject(project.id, data);
                    updateScreen();
                },
            );

            mainContainer.appendChild(editDialogForm);

            editDialogForm.showModal();
        },
        (clickedId) => {
            const project = myProjects.find((p) => p.id === clickedId);

            const deleteDialogForm = DialogForm(
                DialogFormType.DELETE_PROJECT_CONFIRM,
                project,
                () => {
                    deleteProject(project.id);
                    updateScreen();
                },
            );

            mainContainer.appendChild(deleteDialogForm);

            deleteDialogForm.showModal();
        },
    );

    const activeProject = myProjects.find((p) => p.id === activeProjectId);
    if (activeProject) {
        renderTodos(
            activeProject.getTodos(),
            todoListContainer,
            (clickedId) => {
                const todo = activeProject
                    .getTodos()
                    .find((t) => t.id === clickedId);
                const detailsDialog = DialogTodoDetails(todo);
                mainContainer.appendChild(detailsDialog);

                detailsDialog.showModal();
            },
            (clickedId) => {
                const todo = activeProject
                    .getTodos()
                    .find((t) => t.id === clickedId);
                const editDialogForm = DialogForm(
                    DialogFormType.TODO,
                    todo,
                    (data) => {
                        updateTodoFromProject(activeProjectId, todo.id, data);
                        updateScreen();
                    },
                );
                mainContainer.appendChild(editDialogForm);

                editDialogForm.showModal();
            },
            (clickedId) => {
                const todo = activeProject
                    .getTodos()
                    .find((t) => t.id === clickedId);
                const deleteDialogForm = DialogForm(
                    DialogFormType.DELETE_TODO_CONFIRM,
                    todo,
                    () => {
                        deleteTodoFromProject(activeProjectId, todo.id);
                        updateScreen();
                    },
                );
                mainContainer.appendChild(deleteDialogForm);

                deleteDialogForm.showModal();
            },
            (clickedId) => {
                const todo = activeProject
                    .getTodos()
                    .find((t) => t.id === clickedId);

                checklistTodo(activeProjectId, todo.id);

                updateScreen();
            },
        );
    } else {
        todoListContainer.innerHTML = "<p>Select or create a project.</p>";
    }
}

updateScreen();
