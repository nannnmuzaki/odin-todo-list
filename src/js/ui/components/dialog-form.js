// <dialog id="addBookDialog" closedby="any">
//         <form id="addBookForm">
//             <span class="form-error">Please Fill out the Form!</span>
//             <p>
//                 <label for="bookTitle">Title</label>
//                 <input type="text" name="bookTitle" id="bookTitle">
//             </p>
//             <p>
//                 <label for="bookAuthor">Author</label>
//                 <input type="text" name="bookAuthor" id="bookAuthor">
//             </p>
//             <p>
//                 <label for="bookPages">Total Pages</label>
//                 <input type="text" name="bookPages" id="bookPages">
//             </p>
//             <button type="submit">Add Book</button>
//         </form>
// </dialog>
//

export const FormType = Object.freeze({
    PROJECT: "PROJECT",
    TODO: "TODO",
});

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

    if (formType === FormType.PROJECT) {
        const inputField = document.createElement("p");
        inputField.className = "input-field";

        form.appendChild(inputField);

        const projectNameLabel = document.createElement("label");
        projectNameLabel.setAttribute("for", "projectName");
        projectNameLabel.textContent = "Project Name";

        inputField.appendChild(projectNameLabel);

        const projectNameInput = document.createElement("input");
        projectNameInput.type = "text";
        projectNameInput.name = "projectName";
        projectNameInput.id = "projectName";

        inputField.appendChild(projectNameInput);

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
        cancelBtn.addEventListener("click", () => {
            dialog.close();
        });
        cancelBtn.className = "action-btn";
        cancelBtn.textContent = "Cancel";

        dialogFormActions.appendChild(cancelBtn);
    } else if (formType === FormType.TODO) {
        console.log("todo form");
    } else {
        throw new Error("Must be a valid type of form");
    }

    return dialog;
}
