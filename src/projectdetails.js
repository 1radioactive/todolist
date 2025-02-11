import projects from "./projects";

export default function detaileddisplay(item){
    const dheading = document.getElementById("detailedheading");
    const description = document.getElementById("detaileddescription");
    const date = document.getElementById("detaileddate");
    const priority = document.getElementById("detailedpriority");
    const notes = document.getElementById("detailednotes");


    const [projectName, index] = [item.id.replace(/\d+$/, ""), item.id.match(/\d+$/)[0]];
    const todoItem = projects[projectName][index];

    dheading.textContent = todoItem.heading;
    description.textContent = `Description: ${todoItem.description}`;
    date.textContent = todoItem.dueDate
        ? `Due Date: ${new Date(todoItem.dueDate).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
            })}`
        : "Due Date: N/A"
    priority.textContent = `Priority: ${todoItem.priority}`;
    notes.textContent = `Notes: ${todoItem.notes}`;

};