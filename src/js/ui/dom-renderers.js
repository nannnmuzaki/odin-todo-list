import pencilSvg from "../../assets/icons/pencil.svg";
import trashSvg from "../../assets/icons/trash-2.svg";

export function renderProjects(
    projectArray = [],
    containerElement,
    activeProjectId,
    onClickProject,
    onEditProject,
    onDeleteProject,
) {
    containerElement.innerHTML = "";

    projectArray.forEach((p) => {
        const project = document.createElement("div");
        project.className = "project";
        project.appendChild(document.createElement("h3")).textContent = p.title;

        const editProjectBtn = document.createElement("button");
        editProjectBtn.className = "action-btn";
        editProjectBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            onEditProject(p.id);
        });

        const editProjectBtnIcon = document.createElement("div");
        editProjectBtnIcon.className = "btn-icon";
        editProjectBtnIcon.innerHTML = pencilSvg;

        editProjectBtn.appendChild(editProjectBtnIcon);
        project.appendChild(editProjectBtn);

        const deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.className = "action-btn";
        deleteProjectBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            onDeleteProject(p.id);
        });

        const deleteProjectBtnIcon = document.createElement("div");
        deleteProjectBtnIcon.className = "btn-icon";
        deleteProjectBtnIcon.innerHTML = trashSvg;

        deleteProjectBtn.appendChild(deleteProjectBtnIcon);
        project.appendChild(deleteProjectBtn);

        if (p.id === activeProjectId) {
            project.classList.add("active");
        }

        project.addEventListener("click", () => {
            onClickProject(p.id);
        });

        containerElement.appendChild(project);
    });
}

export function renderTodos(
    todoArray,
    containerElement,
    onClickTodo,
    onEditTodo,
    onDeleteTodo,
) {
    containerElement.innerHTML = "";

    if (!todoArray || todoArray.length === 0) {
        containerElement.innerHTML = "<p>No todos yet. Add one!</p>";
        return;
    }

    todoArray.forEach((todo) => {
        const todoDiv = document.createElement("div");
        todoDiv.className = "todo";

        const titleHeader = document.createElement("h3");
        titleHeader.textContent = todo.title;

        todoDiv.appendChild(titleHeader);
        containerElement.appendChild(todoDiv);
    });
}
