const gamertags = document.querySelectorAll(".gamertag");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    playerBoxes.forEach(element => {
        element.style.width = "80%";
    })
    gamertags.forEach(element => {
        element.style.fontWeight = "500";
    })
}