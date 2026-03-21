export function renderProjects(
    projectArray = [],
    containerElement,
    activeProjectId,
    onProjectClick,
) {
    containerElement.innerHTML = "";

    projectArray.forEach((p) => {
        const project = document.createElement("div");
        project.className = "project";
        project.appendChild(document.createElement("h3")).textContent = p.title;

        if (p.id === activeProjectId) {
            project.classList.add("active");
        }

        project.addEventListener("click", () => {
            onProjectClick(p.id);
        });

        containerElement.appendChild(project);
    });
}

export function renderTodos(todoArray, containerElement) {
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
