import { Todo } from "./Todo.js";

export class Project {
  #id = crypto.randomUUID();
  #title;
  #todoList = [];
  #todoCount = 0;
  #completedTodo = 0;
  static #projectCount = 0;

  constructor(title) {
    this.title = title;
    Project.#projectCount++;
  }

  static fromJSON({ id, title, todoList = [], todoCount, todoCompleted } = {}) {
    const project = new Project(title);
    project.#id = id;

    todoList.forEach((plainTodo) => {
      project.addTodo(Todo.fromJSON(plainTodo));
    });

    project.#todoCount = todoCount;
    project.todoCompleted = todoCompleted;

    return project;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      todoList: this.#todoList,
      todoCount: this.#todoCount,
      completedTodo: this.#completedTodo,
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
    if (typeof newTitle !== "string" || !newTitle.trim()) {
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

    this.#todoCount++;

    if (todo.checklist) {
      this.#completedTodo++;
    }

    this.#todoList.push(todo);
  }

  toggleTodoChecklist(todoId) {
    if (typeof todoId !== "string" || !todoId.trim()) {
      throw new Error("todoId must be a non-empty string");
    }

    const todo = this.#todoList.find((item) => item.id === todoId);

    if (!todo) {
      throw new Error("Todo not found");
    }

    todo.toggleChecklist();

    if (todo.checklist) {
      this.#completedTodo++;
    } else {
      this.#completedTodo--;
    }
  }

  removeTodo(todoId) {
    if (typeof todoId !== "string" || !todoId.trim()) {
      throw new Error("todoId must be a non-empty string");
    }

    const todoIndex = this.#todoList.findIndex((item) => item.id === todoId);

    if (todoIndex !== -1) {
      const removedTodo = this.#todoList[todoIndex];

      if (removedTodo.checklist) {
        this.#completedTodo--;
      }

      this.#todoList.splice(todoIndex, 1);
      this.#todoCount--;
    }
  }

  getCompletedTodoCount() {
    return this.#completedTodo;
  }

  getCompletionPercentage() {
    if (this.#todoList.length === 0) {
      return 0;
    }

    return ((this.#completedTodo / this.#todoCount) * 100).toFixed(2);
  }
}
