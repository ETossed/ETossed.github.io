if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    playerBoxes.forEach(element => {
        element.style.width = "80%";
    })
}