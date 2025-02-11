import projects from "./projects";

export default function removedisplay(item){

    const [projectName, index] = [item.id.replace(/\d+$/, ""), item.id.match(/\d+$/)[0]];
    projects[projectName].splice(index,1);

};