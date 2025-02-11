export default function saveProjectsToLocal(projects){
    localStorage.setItem("projects", JSON.stringify(projects));
};