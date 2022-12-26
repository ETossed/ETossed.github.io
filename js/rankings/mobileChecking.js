const gamertags = document.querySelectorAll(".gamertag");
const changes = document.querySelectorAll(".change");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.style.fontWeight = 500;
    playerBoxes.forEach(element => {
        element.style.width = "80%";
    });
    blurbs.forEach(element => {
        element.style.width = "80%";
        element.style.fontSize = ".6em";
    });
    gamertags.forEach(element => {
        element.style.fontWeight = "500";
    });
    changes.forEach(element => {
        element.style.left = "83%";
    });
}