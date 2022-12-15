// Expanding of player boxes

let currentlyActive = "r1";

playerBoxes.forEach(element => {
    element.addEventListener('click', function () {
        let rName = 'r' + element.id;

        resetBox(currentlyActive);
        currentlyActive = rName;

        document.getElementById(rName).innerHTML = insanelyLongArray[element.id];
    });
});

function resetBox (id) {
    document.getElementById(id).innerHTML = "";
    return;
}

let insanelyLongArray = ["", "this array is long as fuck", "this array is long as fuck", "this array is long as fuck", "this array is long as fuck", "this array is long as fuck", "this array is long as fuck", "this array is long as fuck", "this array is long as fuck", "this array is long as fuck", "this array is long as fuck"];
