import "./style.css";
import createnewtodo from "./createnewlist";
import projects from "./projects";
import displaytodoitems from "./displayprojectitems";
import listallobjects from "./listallprojects";
import detaileddisplay from "./projectdetails";
import removedisplay from "./removeDisplay";
import saveProjectsToLocal from "./localstorage";
import updateSidebar from "./updatesidebar";

document.addEventListener("DOMContentLoaded", () => {
    displaytodoitems("Default");
    updateSidebar(projects);
});

const additembtn = document.querySelector(".additem button");
const modal = document.getElementById("customForm");
const overlay = document.getElementById("modalOverlay");
const cancelButton = document.getElementById("cancel");


additembtn.addEventListener("click", () => {
    modal.style.display = "block";
    overlay.style.display = "block";
  });

overlay.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
});

cancelButton.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
});

const form = document.getElementById("form");
const dropdown = document.getElementById("selectedproject");
selectmenu();


function selectmenu (){
    dropdown.innerHTML = "";
    Object.keys(projects).forEach(key=>{
        const option = document.createElement("option");
        option.value = key;
        option.textContent = key;
        dropdown.appendChild(option);
});
};

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent actual form submission
    const heading = document.getElementById("heading").value;
    const description = document.getElementById("description").value;
    const duedate = document.getElementById("duedate").value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const notes = document.getElementById("notes").value;
    const selectedproject = document.getElementById("selectedproject").value;
    
    const newtodo = createnewtodo(heading, description, duedate, priority, notes);

    projects[selectedproject].push(newtodo);
    saveProjectsToLocal(projects);

    displaytodoitems(selectedproject);

    modal.style.display = "none";
    overlay.style.display = "none";
    form.reset();

});

const newproject = document.getElementById("newproject");
const newprojectmodal = document.getElementById("customProjectForm");
const newprojectoverlay = document.getElementById("projectOverlay");
const cancelProjectButton = document.getElementById("cancelproject");
const saveProjectButton = document.getElementById("saveproject"); 


newproject.addEventListener("click", ()=>{
    newprojectmodal.style.display = "block";
    newprojectoverlay.style.display = "block";
});
 
newprojectoverlay.addEventListener("click", ()=>{
    newprojectmodal.style.display = "none";
    newprojectoverlay.style.display = "none";
});

cancelProjectButton.addEventListener("click", ()=>{
    newprojectmodal.style.display = "none";
    newprojectoverlay.style.display = "none";
});

saveProjectButton.addEventListener("click", (event)=>{
    event.preventDefault();
    const newprojectitem = document.getElementById("projectname").value;

    projects[newprojectitem] = [];
    saveProjectsToLocal(projects);
    updateSidebar(projects);

    selectmenu();

    newprojectmodal.style.display = "none";
    newprojectoverlay.style.display = "none";
});

const projectlist = document.getElementById("projectlist");

projectlist.addEventListener("click", (event)=>{
    const target = event.target;
    if (target.classList.contains("projecttype")){
        const selectedProject = target.id.replace(/-/g, " ");

        displaytodoitems(selectedProject);
    }
});

const listall = document.getElementById("listall");

listall.addEventListener("click",()=>{
    listallobjects();
});

const projectItems = document.querySelector(".projectitems");
const markascomplete = document.getElementById("complete");
const detailedclass = document.getElementById("detailed");
const detailedoverlay = document.getElementById("detailedOverlay");
const removeItem = document.getElementById("deletetodo");

projectItems.addEventListener("click",(event)=>{
    const target = event.target.closest(".item");
    detaileddisplay(target);
    detailedclass.style.display = "block";
    detailedoverlay.style.display = "block";

    markascomplete.addEventListener("click", () => {

        const target = event.target.closest(".item");
        const selectedProject = target.id.replace(/-/g, " ");
        const [projectName, index] = [target.id.replace(/\d+$/, ""), target.id.match(/\d+$/)[0]];

        projects[projectName][index].isComplete = true;
        displaytodoitems(projectName);

        saveProjectsToLocal(projects);

        detailedclass.style.display = "none";
        detailedoverlay.style.display = "none";
    });

    removeItem.addEventListener("click", () => {
        const target = event.target.closest(".item");
        removedisplay(target);
        saveProjectsToLocal(projects);
        target.remove();

        detailedclass.style.display = "none";
        detailedoverlay.style.display = "none";
    });
});

detailedoverlay.addEventListener("click", () => {
    detailedclass.style.display = "none";
    detailedoverlay.style.display = "none";
});

const removeProject = document.getElementById("removeproject");

removeProject.addEventListener("click", (event)=>{
    const headingid = event.target.closest("div").id;
    const heading = document.getElementById(headingid);
    const title = heading.firstElementChild;
    const projectKey = title.textContent;
    
    if (confirm("Do you want to delete the project and its contents?")) {
        projectItems.innerHTML = "";
        delete projects[projectKey];
        title.textContent = "";
        saveProjectsToLocal(projects);
        updateSidebar(projects);
        selectmenu();
      } else {
        //
      }

});

