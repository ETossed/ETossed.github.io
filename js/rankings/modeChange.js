// WORK IN PROGRESS

let currentMode = 1; // Black = 1, White = 0
const modeSwitch = document.getElementById("modeswitch");
const playerBoxes = document.querySelectorAll(".player-container");
const rankingBoxes = document.querySelectorAll(".ranking-box");
const blurbs = document.querySelectorAll(".blurb-container");
const headings = document.querySelectorAll(".heading");

function modeChange() {
    if (document.body.style.backgroundColor == "rgb(238, 238, 238)") {
        currentMode = 1;
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

        let resultTables = document.querySelectorAll(".result-table tr");
        resultTables.forEach(element => {
            element.style.backgroundColor = "#323232";
            element.style.outlineWidth = "0px";
        });

        headings.forEach(element => {
            element.style.color = "#FFFFFF"
        });

        blurbs.forEach(element => {
            element.style.color = "#FFFFFF";
        });
    }
    else {
        currentMode = 0;
        document.documentElement.style.setProperty("--mouseover-color", "#424242");
        document.body.style.backgroundColor = "#EEEEEE";

        playerBoxes.forEach(element => {
            element.style.backgroundColor = "#E0E0E0";
            element.style.color = "#212121";
            element.style.outlineWidth = "2px";
        });

        rankingBoxes.forEach(element => {
            element.style.backgroundColor = "#F5F5F5";
            element.style.outlineWidth = "2px";
        });

        let resultTables = document.querySelectorAll(".result-table tr");
        resultTables.forEach(element => {
            element.style.backgroundColor = "#F5F5F5";
            element.style.outlineWidth = "2px";
        });

        headings.forEach(element => {
            element.style.color = "#212121"
        });

        blurbs.forEach(element => {
            element.style.color = "#212121";
        });

    }
}

modeSwitch.addEventListener('change', modeChange);