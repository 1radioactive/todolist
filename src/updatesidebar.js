

export default function updateSidebar(project){
    const projectlist = document.getElementById("projectlist");
    projectlist.innerHTML = "";

    Object.keys(project).forEach(projectitem => {
        const listitem = document.createElement("li");
        const anchorproject = document.createElement("a");
        anchorproject.href = "#";
        anchorproject.id = projectitem.replace(/\s+/g, "-");
        anchorproject.classList.add("projecttype");

        anchorproject.textContent = projectitem;
        listitem.appendChild(anchorproject);
        projectlist.appendChild(listitem);
    });
};