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
    onViewTodoDetails,
    onEditTodo,
    onDeleteTodo,
    onToggleChecklist,
) {
    containerElement.innerHTML = "";

    if (!todoArray || todoArray.length === 0) {
        containerElement.innerHTML = "<p>NO TODOS YET. ADD ONE.</p>";
        return;
    }

    todoArray.forEach((todo) => {
        const todoDiv = document.createElement("div");
        todoDiv.className = "todo";

        if (todo.checklist) {
            todoDiv.classList.add("done");
        }

        const titleHeader = document.createElement("h3");
        titleHeader.className = "todo-header";
        titleHeader.textContent = todo.title.toUpperCase();

        if (todo.checklist) {
            titleHeader.classList.add("done");
        }

        todoDiv.appendChild(titleHeader);

        const metaDiv = document.createElement("div");
        metaDiv.className = "todo-meta";

        if (todo.priority && todo.priority !== "None") {
            const priorityText = document.createElement("span");
            priorityText.textContent = `PRIORITY: ${todo.priority.toUpperCase()}`;
            metaDiv.appendChild(priorityText);
        }

        if (todo.dueDateTime) {
            const dateText = document.createElement("span");
            dateText.textContent = `DUE: ${new Date(todo.dueDateTime).toLocaleString().toUpperCase()}`;
            metaDiv.appendChild(dateText);
        }

        todoDiv.appendChild(metaDiv);

        const actionsDiv = document.createElement("div");
        actionsDiv.className = "todo-actions";

        const statusBtn = document.createElement("button");
        statusBtn.className = "action-btn status-btn";
        statusBtn.textContent = todo.checklist
            ? "STATUS: DONE"
            : "STATUS: PENDING";

        statusBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            onToggleChecklist(todo.id);
        });

        const editBtn = document.createElement("button");
        editBtn.className = "action-btn";
        const editIcon = document.createElement("div");
        editIcon.className = "btn-icon no-margin";
        editIcon.innerHTML = pencilSvg;
        editBtn.appendChild(editIcon);

        editBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            onEditTodo(todo.id);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "action-btn";
        const deleteIcon = document.createElement("div");
        deleteIcon.className = "btn-icon no-margin";
        deleteIcon.innerHTML = trashSvg;
        deleteBtn.appendChild(deleteIcon);

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            onDeleteTodo(todo.id);
        });

        actionsDiv.appendChild(statusBtn);
        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        todoDiv.appendChild(actionsDiv);

        todoDiv.addEventListener("click", () => {
            onViewTodoDetails(todo.id);
        });

        containerElement.appendChild(todoDiv);
    });
}
