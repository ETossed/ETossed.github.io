const gamertags = document.querySelectorAll(".gamertag");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.style.fontWeight = 500;
    playerBoxes.forEach(element => {
        element.style.width = "80%";
    });
    blurbs.forEach(element => {
        element.style.width = "80%";
        element.style.fontSize = ".75em";
    });
    gamertags.forEach(element => {
        element.style.fontWeight = "500";
    });
}