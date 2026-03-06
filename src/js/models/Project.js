import { Todo } from "./Todo.js";

export class Project {
    #id = crypto.randomUUID();
    #title;
    #todoList = [];
    static #projectCount = 0;

    constructor(title) {
        this.title = title;
        Project.#projectCount++;
    }

    static fromJSON({ id, title, todoList = [] } = {}) {
        const project = new Project(title);
        project.#id = id;

        todoList.forEach((plainTodo) => {
            project.addTodo(Todo.fromJSON(plainTodo));
        });

        return project;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            todoList: this.#todoList,
        };
    }

    static get projectCount() {
        return Project.#projectCount;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    set title(newTitle) {
        if (
            (newTitle === null || newTitle == undefined) &&
            this.#title !== undefined
        ) {
            return;
        }

        if (
            !newTitle ||
            typeof newTitle !== "string" ||
            newTitle.trim().length <= 0
        ) {
            throw new Error("Project title must be a non-empty string");
        }

        this.#title = newTitle;
    }

    getTodos() {
        return this.#todoList;
    }

    addTodo(todo) {
        if (!(todo instanceof Todo)) {
            throw new Error("Must be an instance of Todo");
        }

        this.#todoList.push(todo);
    }

    removeTodo(todoId) {
        if (!todoId || typeof todoId !== "string") {
            throw new Error("todoId must be a string");
        }

        const todoIndex = this.#todoList.findIndex(
            (item) => item.id === todoId,
        );

        if (todoIndex !== -1) {
            this.#todoList.splice(todoIndex, 1);
        }
    }

    getCompletedTodoCount() {
        return this.#todoList.filter((item) => {
            return item.checklist;
        }).length;
    }

    getCompletionPercentage() {
        if (this.#todoList.length === 0) {
            return 0;
        }

        return (this.getCompletedTodoCount() / this.#todoList.length) * 100;
    }
}
