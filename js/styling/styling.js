import { getJSON } from "../loadResources";

function colorit(){
    console.log("coloring...");
    const path = "/config.json";
    const config = getJSON(path);
    let mainHeader = document.getElementById("main-Header");
    mainHeader.style.color = config.colors.red;
}

export {colorit};