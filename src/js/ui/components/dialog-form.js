import { DialogFormType } from "../../enums/DialogFormType.js";
import { TodoPriority } from "../../enums/TodoPriority.js";

export function DialogForm(formType, initialData, onSubmitCallback) {
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
        projectTitleLabel.setAttribute("for", "title");
        projectTitleLabel.textContent = "Project Title*";

        todoTitleInputField.appendChild(projectTitleLabel);

        const projectTitleInput = document.createElement("input");
        projectTitleInput.type = "text";
        projectTitleInput.name = "title";
        projectTitleInput.id = "title";

        todoTitleInputField.appendChild(projectTitleInput);

        const dialogFormActions = document.createElement("div");
        dialogFormActions.className = "dialog-form-actions";

        form.appendChild(dialogFormActions);

        const submitBtn = document.createElement("button");
        submitBtn.type = "submit";
        submitBtn.className = "action-btn";

        if (initialData && typeof initialData.title === "string") {
            projectTitleInput.value = initialData.title;
        }

        submitBtn.textContent = initialData ? "Update Project" : "Add Project";

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            if (onSubmitCallback) {
                try {
                    onSubmitCallback(data);
                    dialog.close();
                } catch (error) {
                    formError.textContent = error.message;
                    formError.style.display = "block";
                }
            } else {
                dialog.close();
            }
        });

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
        todoTitleLabel.setAttribute("for", "title");
        todoTitleLabel.textContent = "Todo Title*";

        todoTitleInputField.appendChild(todoTitleLabel);

        const todoTitleInput = document.createElement("input");
        todoTitleInput.type = "text";
        todoTitleInput.name = "title";
        todoTitleInput.id = "title";

        todoTitleInputField.appendChild(todoTitleInput);

        // Todo Description
        const todoDescriptionInputField = document.createElement("p");
        todoDescriptionInputField.className = "input-field";

        form.appendChild(todoDescriptionInputField);

        const todoDescriptionLabel = document.createElement("label");
        todoDescriptionLabel.setAttribute("for", "description");
        todoDescriptionLabel.textContent = "Todo Description";

        todoDescriptionInputField.appendChild(todoDescriptionLabel);

        const todoDescriptionInput = document.createElement("textarea");
        todoDescriptionInput.name = "description";
        todoDescriptionInput.id = "description";

        todoDescriptionInputField.appendChild(todoDescriptionInput);

        // Todo Notes
        const todoNotesInputField = document.createElement("p");
        todoNotesInputField.className = "input-field";

        form.appendChild(todoNotesInputField);

        const todoNotesLabel = document.createElement("label");
        todoNotesLabel.setAttribute("for", "notes");
        todoNotesLabel.textContent = "Todo Notes";

        todoNotesInputField.appendChild(todoNotesLabel);

        const todoNotesInput = document.createElement("textarea");
        todoNotesInput.name = "notes";
        todoNotesInput.id = "notes";

        todoNotesInputField.appendChild(todoNotesInput);

        // Todo Priority
        const todoPriorityInputField = document.createElement("p");
        todoPriorityInputField.className = "input-field";

        form.appendChild(todoPriorityInputField);

        const todoPriorityLabel = document.createElement("label");
        todoPriorityLabel.setAttribute("for", "priority");
        todoPriorityLabel.textContent = "Todo Priority";

        todoPriorityInputField.appendChild(todoPriorityLabel);

        const todoPrioritySelect = document.createElement("select");
        todoPrioritySelect.name = "priority";
        todoPrioritySelect.id = "priority";

        todoPriorityInputField.appendChild(todoPrioritySelect);

        for (const priority in TodoPriority) {
            const todoPriorityOption = document.createElement("option");
            todoPriorityOption.value = TodoPriority[priority];
            todoPriorityOption.textContent = TodoPriority[priority];

            todoPrioritySelect.appendChild(todoPriorityOption);
        }

        // Todo Due Datetime
        const todoDueDateTimeField = document.createElement("p");
        todoDueDateTimeField.className = "input-field";

        form.appendChild(todoDueDateTimeField);

        const todoDueDateTimeLabel = document.createElement("label");
        todoDueDateTimeLabel.setAttribute("for", "dueDateTime");
        todoDueDateTimeLabel.textContent = "Todo Due DateTime";

        todoDueDateTimeField.appendChild(todoDueDateTimeLabel);

        const todoDueDateTimeInput = document.createElement("input");
        todoDueDateTimeInput.type = "datetime-local";
        todoDueDateTimeInput.name = "dueDateTime";
        todoDueDateTimeInput.id = "dueDateTime";

        todoDueDateTimeField.appendChild(todoDueDateTimeInput);

        const dialogFormActions = document.createElement("div");
        dialogFormActions.className = "dialog-form-actions";

        form.appendChild(dialogFormActions);

        if (initialData && typeof initialData.title === "string") {
            todoTitleInput.value = initialData.title;
            todoDescriptionInput.value = initialData.description || "";
            todoNotesInput.value = initialData.notes || "";
            todoPrioritySelect.value = initialData.priority;
            todoDueDatetimeInput.value = initialData.dueDatetime || "";
        }

        const submitBtn = document.createElement("button");
        submitBtn.type = "submit";
        submitBtn.className = "action-btn";
        submitBtn.textContent = initialData ? "Update Todo" : "Add Todo";

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            if (onSubmitCallback) {
                try {
                    onSubmitCallback(data);
                    dialog.close();
                } catch (error) {
                    formError.textContent = error.message;
                    formError.style.display = "block";
                }
            } else {
                dialog.close();
            }
        });

        dialogFormActions.appendChild(submitBtn);

        const cancelBtn = document.createElement("button");
        cancelBtn.className = "action-btn";
        cancelBtn.textContent = "Cancel";
        cancelBtn.type = "button";
        cancelBtn.addEventListener("click", () => {
            dialog.close();
        });

        dialogFormActions.appendChild(cancelBtn);
    } else if (formType === DialogFormType.DELETE_PROJECT_CONFIRM) {
        dialog.setAttribute("form-type", DialogFormType.DELETE_PROJECT_CONFIRM);

        if (initialData && typeof initialData.title === "string") {
            const warningText = document.createElement("p");
            warningText.textContent = `Are you sure you want to delete the "${initialData.title}" project and its todos? This cannot be undone.`;
            form.appendChild(warningText);

            const dialogFormActions = document.createElement("div");
            dialogFormActions.className = "dialog-form-actions";
            form.appendChild(dialogFormActions);

            const submitBtn = document.createElement("button");
            submitBtn.type = "submit";
            submitBtn.className = "action-btn delete-btn";
            submitBtn.textContent = "Delete Project";

            form.addEventListener("submit", (e) => {
                e.preventDefault();
                if (onSubmitCallback) {
                    try {
                        onSubmitCallback();
                        dialog.close();
                    } catch (error) {
                        formError.textContent = error.message;
                        formError.style.display = "block";
                    }
                } else {
                    dialog.close();
                }
            });

            dialogFormActions.appendChild(submitBtn);

            const cancelBtn = document.createElement("button");
            cancelBtn.type = "button";
            cancelBtn.className = "action-btn";
            cancelBtn.textContent = "Cancel";
            cancelBtn.addEventListener("click", () => dialog.close());
            dialogFormActions.appendChild(cancelBtn);
        } else {
            throw new Error("No Project is selected");
        }
    } else if (formType === DialogFormType.DELETE_TODO_CONFIRM) {
        dialog.setAttribute("form-type", DialogFormType.DELETE_PROJECT_CONFIRM);

        if (initialData && typeof initialData.title === "string") {
            const warningText = document.createElement("p");
            warningText.textContent = `Are you sure you want to delete the "${initialData.title}" todo? This cannot be undone.`;
            form.appendChild(warningText);

            const dialogFormActions = document.createElement("div");
            dialogFormActions.className = "dialog-form-actions";
            form.appendChild(dialogFormActions);

            const submitBtn = document.createElement("button");
            submitBtn.type = "submit";
            submitBtn.className = "action-btn delete-btn";
            submitBtn.textContent = "Delete Todo";

            form.addEventListener("submit", (e) => {
                e.preventDefault();
                if (onSubmitCallback) {
                    try {
                        onSubmitCallback();
                        dialog.close();
                    } catch (error) {
                        formError.textContent = error.message;
                        formError.style.display = "block";
                    }
                } else {
                    dialog.close();
                }
            });

            dialogFormActions.appendChild(submitBtn);

            const cancelBtn = document.createElement("button");
            cancelBtn.type = "button";
            cancelBtn.className = "action-btn";
            cancelBtn.textContent = "Cancel";
            cancelBtn.addEventListener("click", () => dialog.close());
            dialogFormActions.appendChild(cancelBtn);
        } else {
            throw new Error("No Todo is selected");
        }
    } else {
        throw new Error("Must be a valid type of Dialog Form");
    }

    dialog.addEventListener("close", () => {
        form.reset();
        formError.style.display = "none";
        formError.textContent = "";
    });

    return dialog;
}
