export function DialogTodoDetails(todo) {
  const dialog = document.createElement("dialog");
  dialog.className = "dialog";
  dialog.setAttribute("closedby", "any");
  dialog.setAttribute("form-type", "TODO_DETAILS");

  const container = document.createElement("div");
  container.className = "todo-details-container";

  const title = document.createElement("h2");
  title.className = "todo-details-title";
  title.textContent = todo.title.toUpperCase();

  if (todo.checklist) {
    title.classList.add("done");
  }

  container.appendChild(title);

  const metaGrid = document.createElement("div");
  metaGrid.className = "todo-details-meta-grid";

  const statusItem = document.createElement("div");
  statusItem.className = "todo-details-meta-item";
  statusItem.textContent = `STATUS: ${todo.checklist ? "DONE" : "PENDING"}`;
  metaGrid.appendChild(statusItem);

  const priorityItem = document.createElement("div");
  priorityItem.className = "todo-details-meta-item";
  priorityItem.textContent = `PRIORITY: ${todo.priority ? todo.priority.toUpperCase() : "NONE"}`;
  metaGrid.appendChild(priorityItem);

  const dueItem = document.createElement("div");
  dueItem.className = "todo-details-meta-item span-2";
  dueItem.textContent = `DUE: ${todo.dueDateTime ? new Date(todo.dueDateTime).toLocaleString().toUpperCase() : "NO DEADLINE"}`;
  metaGrid.appendChild(dueItem);

  container.appendChild(metaGrid);

  const descWrapper = document.createElement("div");
  descWrapper.className = "todo-details-section";

  const descLabel = document.createElement("div");
  descLabel.className = "todo-details-label";
  descLabel.textContent = "DESCRIPTION:";

  const descContent = document.createElement("p");
  descContent.className = "todo-details-content";
  descContent.textContent = todo.description || "NO DESCRIPTION PROVIDED.";

  descWrapper.appendChild(descLabel);
  descWrapper.appendChild(descContent);
  container.appendChild(descWrapper);

  const notesWrapper = document.createElement("div");
  notesWrapper.className = "todo-details-section";

  const notesLabel = document.createElement("div");
  notesLabel.className = "todo-details-label";
  notesLabel.textContent = "NOTES:";

  const notesContent = document.createElement("p");
  notesContent.className = "todo-details-content";
  notesContent.textContent = todo.notes || "NO NOTES PROVIDED.";

  notesWrapper.appendChild(notesLabel);
  notesWrapper.appendChild(notesContent);
  container.appendChild(notesWrapper);

  const closeBtn = document.createElement("button");
  closeBtn.className = "action-btn todo-details-close-btn";
  closeBtn.textContent = "CLOSE DETAILS";

  closeBtn.addEventListener("click", () => {
    dialog.close();
  });

  container.appendChild(closeBtn);
  dialog.appendChild(container);

  dialog.addEventListener("close", () => {
    dialog.remove();
  });

  return dialog;
}
