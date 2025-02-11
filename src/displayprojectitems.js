import projects from "./projects";

const projectitems = document.querySelector(".projectitems");

export default function displaytodoitems(project = "Default"){
    const title = document.getElementById("projecttitle");
    title.textContent = project;
    const removeButton = document.getElementById("removeproject");

    if (project !== "Default"){
        removeButton.style.display = "block";
    } else {
        removeButton.style.display = "none";
    }

    projectitems.innerHTML = "";

    projects[project].forEach((todoitem,index) => {
        const item = document.createElement("div");
        item.classList.add("item");
        if (todoitem.isComplete){
            item.classList.add("completed");
        }

        item.id = `${project}${index}`;
        const todoheading = document.createElement("h3");
        const tododescription = document.createElement("p");
        const tododate = document.createElement("p");
        tododate.classList.add("date");
        const todopriority = document.createElement("p");

        todoheading.textContent = todoitem.heading;
        tododescription.textContent = todoitem.description;

        tododate.textContent = todoitem.dueDate
        ? `${new Date(todoitem.dueDate).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
            })}`
        : "N/A";

        todopriority.textContent = todoitem.priority;
    
        item.classList.add(todoitem.priority.toLowerCase());

        item.appendChild(todoheading);
        item.appendChild(tododescription);
        item.appendChild(tododate);
        projectitems.appendChild(item);
    })
};