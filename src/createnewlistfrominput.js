    import todolist from "./createnewlist";
    
    export default function createnewtodo(){
    
        const heading = document.getElementById("heading").value;
        const description = document.getElementById("description").value;
        const duedate = document.getElementById("duedate").value;
        const priority = document.getElementById("priority").value;
        const notes = document.getElementById("notes").value;

        const newlist = new todolist(heading, description, duedate, priority, notes);
    };