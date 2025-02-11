    
let projects = JSON.parse(localStorage.getItem("projects")) || {
    Default:[
        {
            heading: "make a todo project",
            description: "Finish OdinProject for javascript",
            dueDate: "2025-02-12",
            priority: "High",
            notes: "",
            isComplete: false,
        },
    ],
};

Object.keys(projects).forEach((project)=>{
    projects[project] = projects[project].map((todo)=>({
        ...todo,
        dueDate: todo.dueDate ? new Date(todo.dueDate) : "",
    }));
});

export default projects;