import projects from "./projects";

export default function listallobjects(){
    const title = document.getElementById("projecttitle");
    const projectitems = document.querySelector(".projectitems");
    projectitems.innerHTML = "";
    const removeButton = document.getElementById("removeproject");
    removeButton.style.display = "none";


    title.textContent = "All Projects";

    Object.keys(projects).forEach(key=>{  
            
        projects[key].forEach((todoitem,index) => {
            const item = document.createElement("div");
            item.classList.add("item");
            if (todoitem.isComplete){
                item.classList.add("completed");
            };
            item.id = `${key}${index}`;
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
    });
};