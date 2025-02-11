class todolist{
    constructor(heading, description, duedate, priority, notes = ""){
        this.heading = heading;
        this.description = description;
        this.dueDate = duedate;
        this.priority = priority;
        this.notes = notes;
        this.isComplete = false;
    }
};

export default function createnewtodo(h,d,dd,p,n){
    const newtodo = new todolist(h,d,dd,p,n);
    return newtodo;
}