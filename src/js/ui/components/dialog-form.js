import { DialogFormType } from "../../enums/DialogFormType.js";
import { TodoPriority } from "../../enums/TodoPriority.js";

export function DialogForm(formType) {
    const dialog = document.createElement("dialog");
    dialog.className = "dialog";
    dialog.setAttribute("closedby", "any");

    const form = document.createElement("form");
    form.className = "form";

    dialog.appendChild(form);

    const formError = document.createElement("span");
    formError.className = "form-error";

    form.appendChild(formError);

    if (formType === DialogFormType.PROJECT) {
        dialog.setAttribute("form-type", DialogFormType.PROJECT);

        const todoTitleInputField = document.createElement("p");
        todoTitleInputField.className = "input-field";

        form.appendChild(todoTitleInputField);

        const projectTitleLabel = document.createElement("label");
        projectTitleLabel.setAttribute("for", "projectTitle");
        projectTitleLabel.textContent = "Project Title*";

        todoTitleInputField.appendChild(projectTitleLabel);

        const projectTitleInput = document.createElement("input");
        projectTitleInput.type = "text";
        projectTitleInput.name = "projectTitle";
        projectTitleInput.id = "projectTitle";

        todoTitleInputField.appendChild(projectTitleInput);

        const dialogFormActions = document.createElement("div");
        dialogFormActions.className = "dialog-form-actions";

        form.appendChild(dialogFormActions);

        const submitBtn = document.createElement("button");
        submitBtn.type = "submit";
        submitBtn.className = "action-btn";
        submitBtn.textContent = "Add Project";

        dialogFormActions.appendChild(submitBtn);

        const cancelBtn = document.createElement("button");
        cancelBtn.type = "button";
        cancelBtn.className = "action-btn";
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener("click", () => {
            dialog.close();
        });

        dialogFormActions.appendChild(cancelBtn);
    } else if (formType === DialogFormType.TODO) {
        dialog.setAttribute("form-type", DialogFormType.TODO);

        // Todo Title
        const todoTitleInputField = document.createElement("p");
        todoTitleInputField.className = "input-field";

        form.appendChild(todoTitleInputField);

        const todoTitleLabel = document.createElement("label");
        todoTitleLabel.setAttribute("for", "todoTitle");
        todoTitleLabel.textContent = "Todo Title*";

        todoTitleInputField.appendChild(todoTitleLabel);

        const todoTitleInput = document.createElement("input");
        todoTitleInput.type = "text";
        todoTitleInput.name = "todoTitle";
        todoTitleInput.id = "todoTitle";

        todoTitleInputField.appendChild(todoTitleInput);

        // Todo Description
        const todoDescriptionInputField = document.createElement("p");
        todoDescriptionInputField.className = "input-field";

        form.appendChild(todoDescriptionInputField);

        const todoDescriptionLabel = document.createElement("label");
        todoDescriptionLabel.setAttribute("for", "todoDescription");
        todoDescriptionLabel.textContent = "Todo Description";

        todoDescriptionInputField.appendChild(todoDescriptionLabel);

        const todoDescriptionInput = document.createElement("textarea");
        todoDescriptionInput.name = "todoDescription";
        todoDescriptionInput.id = "todoDescription";

        todoDescriptionInputField.appendChild(todoDescriptionInput);

        // Todo Notes
        const todoNotesInputField = document.createElement("p");
        todoNotesInputField.className = "input-field";

        form.appendChild(todoNotesInputField);

        const todoNotesLabel = document.createElement("label");
        todoNotesLabel.setAttribute("for", "todoNotes");
        todoNotesLabel.textContent = "Todo Notes";

        todoNotesInputField.appendChild(todoNotesLabel);

        const todoNotesInput = document.createElement("textarea");
        todoNotesInput.name = "todoNotes";
        todoNotesInput.id = "todoNotes";

        todoNotesInputField.appendChild(todoNotesInput);

        // Todo Priority
        const todoPriorityInputField = document.createElement("p");
        todoPriorityInputField.className = "input-field";

        form.appendChild(todoPriorityInputField);

        const todoPriorityLabel = document.createElement("label");
        todoPriorityLabel.setAttribute("for", "todoPriority");
        todoPriorityLabel.textContent = "Todo Priority";

        todoPriorityInputField.appendChild(todoPriorityLabel);

        const todoPrioritySelect = document.createElement("select");
        todoPrioritySelect.name = "todoPriority";
        todoPrioritySelect.id = "todoPriority";

        todoPriorityInputField.appendChild(todoPrioritySelect);

        for (const priority in TodoPriority) {
            const todoPriorityOption = document.createElement("option");
            todoPriorityOption.value = TodoPriority[priority];
            todoPriorityOption.textContent = TodoPriority[priority];

            todoPrioritySelect.appendChild(todoPriorityOption);
        }

        // Todo Due Datetime
        const todoDueDatetimeField = document.createElement("p");
        todoDueDatetimeField.className = "input-field";

        form.appendChild(todoDueDatetimeField);

        const todoDueDatetimeLabel = document.createElement("label");
        todoDueDatetimeLabel.setAttribute("for", "todoDueDatetime");
        todoDueDatetimeLabel.textContent = "Todo Due Datetime*";

        todoDueDatetimeField.appendChild(todoDueDatetimeLabel);

        const todoDueDatetimeInput = document.createElement("input");
        todoDueDatetimeInput.type = "datetime-local";
        todoDueDatetimeInput.name = "todoDueDatetime";
        todoDueDatetimeInput.id = "todoDueDatetime";

        todoDueDatetimeField.appendChild(todoDueDatetimeInput);

        const dialogFormActions = document.createElement("div");
        dialogFormActions.className = "dialog-form-actions";

        form.appendChild(dialogFormActions);

        const submitBtn = document.createElement("button");
        submitBtn.type = "submit";
        submitBtn.className = "action-btn";
        submitBtn.textContent = "Add Todo";

        dialogFormActions.appendChild(submitBtn);

        const cancelBtn = document.createElement("button");
        cancelBtn.className = "action-btn";
        cancelBtn.textContent = "Cancel";
        cancelBtn.type = "button";
        cancelBtn.addEventListener("click", () => {
            dialog.close();
        });

        dialogFormActions.appendChild(cancelBtn);
    } else {
        throw new Error("Must be a valid type of form");
    }

    return dialog;
}
