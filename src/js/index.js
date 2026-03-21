import "../css/style.css";
import { initializeLayout } from "./ui/layouts/layout.js";
import { renderProjects, renderTodos } from "./ui/dom-renderers.js";
import { getProjects } from "./services/local-storage-service.js";
import { createProject, addTodoToProject } from "./services/project-service.js";

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
    );

    const activeProject = myProjects.find((p) => p.id === activeProjectId);
    if (activeProject) {
        renderTodos(activeProject.getTodos(), todoListContainer);
    } else {
        todoListContainer.innerHTML = "<p>Select or create a project.</p>";
    }
}

updateScreen();
