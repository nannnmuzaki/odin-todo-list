import { parseISO, isValid, isBefore } from "date-fns";
import { TodoPriority } from "../enums/TodoPriority.js";

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
    static PRIORITY_NONE = TodoPriority.NONE;
    static PRIORITY_LOW = TodoPriority.LOW;
    static PRIORITY_MEDIUM = TodoPriority.MEDIUM;
    static PRIORITY_HIGH = TodoPriority.HIGH;

    constructor(title, description, dueDateTime, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDateTime = dueDateTime;
        this.priority = priority;
        this.notes = notes;
        Todo.#todoCount++;
    }

    static fromJSON({
        id,
        title,
        description,
        dueDateTime,
        priority,
        notes,
        checklist,
    } = {}) {
        const todo = new Todo(title, description, dueDateTime, priority, notes);

        todo.#id = id;
        todo.#checklist = checklist;

        return todo;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            dueDateTime: this.dueDateTime,
            priority: this.priority,
            notes: this.notes,
            checklist: this.checklist,
        };
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
        if (typeof newTitle !== "string" || !newTitle.trim()) {
            throw new Error("Title must be a valid, non-empty string.");
        }

        this.#title = newTitle;
    }

    get description() {
        return this.#description;
    }

    set description(newDescription) {
        if (typeof newDescription !== "string") {
            throw new Error("Description must be a string.");
        }

        if (!newDescription.trim()) {
            this.#description = "";
            return;
        }

        this.#description = newDescription;
    }

    get dueDateTime() {
        return this.#dueDateTime;
    }

    set dueDateTime(newDueDateTimeString) {
        if (typeof newDueDateTimeString !== "string") {
            throw new Error("Due Datetime Must be a valid string");
        }

        if (!newDueDateTimeString.trim()) {
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
        if (typeof newPriority !== "string") {
            throw new Error("Priority must be a valid string");
        }

        const validPriorities = [
            Todo.PRIORITY_NONE,
            Todo.PRIORITY_LOW,
            Todo.PRIORITY_MEDIUM,
            Todo.PRIORITY_HIGH,
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
        if (typeof newNotes !== "string") {
            throw new Error("Notes must be a string");
        }

        if (!newNotes.trim()) {
            this.#notes = "";
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
