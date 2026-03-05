import { parseISO, isValid, isBefore } from "date-fns";

export class Todo {
    #id = crypto.randomUUID();
    #title;
    #description;
    #dueDateTime;
    #priority;
    #notes;
    #checklist = false;

    static #todoCount = 0;
    static #checkedCount = 0;
    static PRIORITY_HIGH = "High";
    static PRIORITY_MEDIUM = "Medium";
    static PRIORITY_LOW = "Low";

    constructor(title, description, dueDateTime, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDateTime = dueDateTime;
        this.priority = priority;
        this.notes = notes;
        Todo.#todoCount++;
    }

    static get todoCount() {
        return Todo.#todoCount;
    }

    static get checkedCount() {
        return Todo.#checkedCount;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    set title(newTitle) {
        if (
            (newTitle === null || newTitle === undefined) &&
            this.#title !== undefined
        ) {
            return;
        }
        if (typeof newTitle !== "string" || newTitle.trim().length <= 0) {
            throw new Error("Title must be a valid, non-empty string.");
        }
        this.#title = newTitle;
    }

    get description() {
        return this.#description;
    }

    set description(newDescription) {
        if (
            (newDescription === null || newDescription === undefined) &&
            this.#description !== undefined
        ) {
            return;
        }

        if (
            !newDescription ||
            (typeof newDescription === "string" &&
                newDescription.trim().length <= 0)
        ) {
            this.#description = "";
            return;
        }

        if (typeof newDescription !== "string") {
            throw new Error("Description must be a string.");
        }
        this.#description = newDescription;
    }

    get dueDateTime() {
        return this.#dueDateTime;
    }

    set dueDateTime(newDueDateTimeString) {
        if (
            (newDueDateTimeString === null ||
                newDueDateTimeString === undefined) &&
            this.#dueDateTime !== undefined
        ) {
            return;
        }

        if (!newDueDateTimeString) {
            this.#dueDateTime = "";
            return;
        }

        const parsedNewDueDateTimeString = parseISO(newDueDateTimeString);

        if (
            !isValid(parsedNewDueDateTimeString) ||
            isBefore(parsedNewDueDateTimeString, new Date())
        ) {
            throw new Error("Due DateTime must be valid and in the future");
        }

        this.#dueDateTime = newDueDateTimeString;
    }

    get priority() {
        return this.#priority;
    }

    set priority(newPriority) {
        if (
            (newPriority === null || newPriority === undefined) &&
            this.#priority !== undefined
        ) {
            return;
        }

        if (
            !newPriority ||
            (typeof newPriority === "string" && newPriority.trim().length <= 0)
        ) {
            this.#priority = "";
            return;
        }

        const validPriorities = [
            Todo.PRIORITY_HIGH,
            Todo.PRIORITY_MEDIUM,
            Todo.PRIORITY_LOW,
        ];

        if (
            typeof newPriority !== "string" ||
            !validPriorities.includes(newPriority)
        ) {
            throw new Error("Selected priority is not a valid option");
        }

        this.#priority = newPriority;
    }

    get notes() {
        return this.#notes;
    }

    set notes(newNotes) {
        if (
            (newNotes === null || newNotes === undefined) &&
            this.#notes !== undefined
        ) {
            return;
        }

        if (
            !newNotes ||
            (typeof newNotes === "string" && newNotes.trim().length <= 0)
        ) {
            this.#notes = "";
            return;
        }

        if (typeof newNotes !== "string") {
            throw new Error("Notes must be a string");
        }
        this.#notes = newNotes;
    }

    get checklist() {
        return this.#checklist;
    }

    toggleChecklist() {
        if (!this.#checklist) {
            this.#checklist = !this.#checklist;
            Todo.#checkedCount++;
        } else {
            this.#checklist = !this.#checklist;
            Todo.#checkedCount--;
        }
    }
}
