// WORK IN PROGRESS

const modeSwitch = document.getElementById("modeswitch");

const playerBoxes = document.querySelectorAll(".u-player");
const rankingBoxes = document.querySelectorAll(".ranking-box");

function modeChange() {
    if (document.body.style.backgroundColor == "rgb(250, 250, 250)") {
        content.style.color = "#FAFAFA";
        document.documentElement.style.setProperty("--mouseover-color", "#FAFAFA");
        document.body.style.backgroundColor = "#424242";

        playerBoxes.forEach(element => {
            element.style.backgroundColor = "#212121";
            element.style.color = "#FFFFFF";
            element.style.outlineWidth = "0px";
        });

        rankingBoxes.forEach(element => {
            element.style.backgroundColor = "#323232";
            element.style.outlineWidth = "0px";
        });

    }
    else {
        content.style.color = "#424242";
        document.documentElement.style.setProperty("--mouseover-color", "#424242");
        document.body.style.backgroundColor = "#FAFAFA";

        playerBoxes.forEach(element => {
            element.style.backgroundColor = "#FAFAFA";
            element.style.color = "#212121";
            element.style.outlineWidth = "2px";
        });

        rankingBoxes.forEach(element => {
            element.style.backgroundColor = "#FAFAFA";
            element.style.outlineWidth = "2px";
        });

    }
}

modeSwitch.addEventListener('change', modeChange);