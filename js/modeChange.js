let etossed = document.getElementById("name");
let content = document.getElementById('content');
let modeSwitch = document.getElementById("modeswitch");

function modeChange() {
    if (etossed.style.color == "rgb(33, 33, 33)") {
        etossed.style.color = "#FAFAFA";
        content.style.color = "#FAFAFA";
        document.documentElement.style.setProperty("--mouseover-color", "#FAFAFA");
        document.body.style.backgroundColor = "#212121";
    }
    else {
        etossed.style.color = "#212121";
        content.style.color = "#212121";
        document.documentElement.style.setProperty("--mouseover-color", "#212121");
        document.body.style.backgroundColor = "#FAFAFA";
    }
}

modeSwitch.addEventListener('change', modeChange);