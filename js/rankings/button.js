button.addEventListener('mouseover', function () {
    if (currentMode) {
        button.style.backgroundColor = "#323232";
    }
    else {
        button.style.backgroundColor = "#BDBDBD";
    }
});

button.addEventListener('mouseout', function () {
    if (currentMode) {
        button.style.backgroundColor = "#212121";
    }
    else {
        button.style.backgroundColor = "#E0E0E0";
    }
});

button.addEventListener('click', function () {
    blurbs.forEach(element => {
        console.log(element.hidden)
        if (element.hidden == false) {
            
            element.hidden = true;
            button.innerHTML = "Show Blurbs"
        }
        else {
            element.hidden = false;
            button.innerHTML = "Hide Blurbs"
        }
    });

    
});