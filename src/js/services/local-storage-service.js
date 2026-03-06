import { Project } from "../models/Project.js";

export function storeProjects(projects = []) {
    if (!projects.every((project) => project instanceof Project)) {
        throw new Error("Must be an array of Project");
    }

    localStorage.setItem("projects", JSON.stringify(projects));
}

export function getProjects() {
    const data = JSON.parse(localStorage.getItem("projects")) || [];
    return data.map((projectData) => Project.fromJSON(projectData));
}
