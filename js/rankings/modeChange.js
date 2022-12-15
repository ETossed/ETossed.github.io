// WORK IN PROGRESS

let content = document.getElementById('content');
let modeSwitch = document.getElementById("modeswitch");

function modeChange() {
    if (document.body.style.backgroundColor == "rgb(250, 250, 250)") {
        content.style.color = "#FAFAFA";
        document.documentElement.style.setProperty("--mouseover-color", "#FAFAFA");
        document.body.style.backgroundColor = "#424242";
    }
    else {
        content.style.color = "#424242";
        document.documentElement.style.setProperty("--mouseover-color", "#424242");
        document.body.style.backgroundColor = "#FAFAFA";
    }
}

modeSwitch.addEventListener('change', modeChange);