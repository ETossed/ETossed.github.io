// Expanding of player boxes

let currentlyActive = "r0";
const uBoxes = document.querySelectorAll(".u-player");

playerBoxes.forEach(element => {
    let rName = 'r' + element.id;
    element.addEventListener('mouseover', function () {
        if (currentMode) {
            element.style.backgroundColor = "#323232";
        }
        else {
            element.style.backgroundColor = "#BDBDBD"
        }
    });

    element.addEventListener('mouseout', function () {
        if (currentMode) {
            element.style.backgroundColor = "#212121";
        }
        else {
            element.style.backgroundColor = "#E0E0E0";
        }
    })

    element.addEventListener('click', function () {
        if (currentlyActive != rName) {
            resetBox(currentlyActive);
            currentlyActive = rName;
            document.getElementById(rName).innerHTML = insanelyLongArray[element.id];
            if (!currentMode) {
                element.style.backgroundColor = "#E0E0E0"
                let resultTables = document.querySelectorAll(".result-table tr");
                resultTables.forEach(element => {
                    element.style.backgroundColor = "#F5F5F5";
                    element.style.outlineWidth = "2px";
                })
            }
            else {
                element.style.backgroundColor = "#212121";
            }
        }
        else {
            resetBox(rName);
            currentlyActive = "r0";
        }
    });
});

function resetBox (id) {
    document.getElementById(id).innerHTML = "";
    return;
}

// DO NOT LOOK BELOW HERE IT'S A MESS

// IM SERIOUS WHAT ARE YOU DOING

// THIS IS ONLY HERE BECAUSE I DON'T HAVE A BACKEND LOL 

// GITHUB PAGES MAKES IT SO I DON'T HAVE TO PAY ANYTHING THO SOOOOOOOOOOOOOOOOOOOOO









// I WARNED YOU

let zain = `
<table class="result-table">
    <tr>
        <td>s</td>
        <td>Genesis 8 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>Ludwig Smash Invitaional <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>The Big House 10 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Shine 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Pound 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Apex 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Battle of BC 4 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Get On My Level 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>Phantom 2022 <span class="place">2nd</span></td>
    </tr>
</table>`

let mango = `
<table class="result-table">
    <tr>
        <td>s</td>
        <td>The Big House 10 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>Ludwig Smash Invitational <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>Genesis 8 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Super Smash Con 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Mainstage 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Smash Summit 14 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Scuffed World Tour <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Get On My Level 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>Phantom 2022 <span class="place">3rd</span></td>
    </tr>
</table>`

let iBDW = `
<table class="result-table">
    <tr>
        <td>s</td>
        <td>Genesis 8 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>The Big House 10 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>Ludwig Smash Invitational <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Double Down 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Smash Summit 13 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Mainstage 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Smash Summit 14 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Apex 2022 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>Phantom 2022 <span class="place">1st</span></td>
    </tr>
</table>`

let aMSa = `
<table class="result-table">
    <tr>
        <td>s</td>
        <td>The Big House 10 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>Genesis 8 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>Ludwig Smash Invitational <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Apex 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Scuffed World Tour <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Double Down 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Mainstage 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Pound 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>The Off-Season <span class="place">1st</span></td>
    </tr>
</table>`

let hungrybox = `
<table class="result-table">
    <tr>
        <td>s</td>
        <td>Ludwig Smash Invitational <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>Genesis 8 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>The Big House 10 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Get On My Level 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Riptide 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Super Smash Con 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Scuffed World Tour <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Shine 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>Wavedash 2022 <span class="place">1st</span></td>
    </tr>
</table>`

let jmook = `
<table class="result-table">
    <tr>
        <td>s</td>
        <td>Genesis 8 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>Ludwig Smash Invitational <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>The Big House 10 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Get On My Level 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Shine 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Riptide 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Smash Summit 13 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Battle of BC 4 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>The Off-Season <span class="place">2nd</span></td>
    </tr>
</table>`

let leffen = `
<table class="result-table">
    <tr>
        <td>s</td>
        <td>Ludwig Smash Invitational <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>The Big House 10 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Battle of BC 4 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Mainstage 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Pound 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Scuffed World Tour <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Smash Summit 14 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>Dreamhack Rotterdam <span class="place">1st</span></td>
    </tr>
</table>`

let plup = `
<table class="result-table">
    <tr>
        <td>s</td>
        <td>Genesis 8 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>s</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Riptide 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Lost Tech City 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Smash Summit 13 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Smash Summit 14 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Scuffed World Tour <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>CEO 2022 <span class="place">1st</span></td>
    </tr>
</table>`

let nicki = `
<table class="result-table">
    <tbody>
    <tr>
        <td>r</td>
        <td>Pixelpokal x DreamHack <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>RCADIA SMASH 3 <span class="place">1st</span></td>
    </tr>
    </tbody>
</table>`

let inngenn = `
<table class="result-table">
    <tr>
        <td>m</td>
        <td>Scuffed World Tour <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>Battle GateWay 37 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>Battle GateWay 34 <span class="place">2nd</span></td>
    </tr>
</table>`

let akir = `
<table class="result-table">
    <tr>
        <td>r</td>
        <td>Fall GatorLAN <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>CEO 2022 <span class="place">7th</span></td>
    </tr>
</table>`

let alex = `
<table class="result-table">
    <tr>
        <td>m</td>
        <td>Double Down 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>Comomo: Outta Thin Nair <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>Sunshined 2 <span class="place">4th</span></td>
    </tr>
</table>`

let hundredgrand = `
<table class="result-table">
    <tr>
        <td>rr</td>
        <td>Invincible VI <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>4M: Mega Minnesota Melee Monthly <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>r</td>
        <td>Minnesota Monthly #5 <span class="place">7th</span></td>
    </tr>
</table>`

let insanelyLongArray = ["", zain, mango, aMSa, iBDW, hungrybox, jmook, leffen, plup, 
9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 
53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 
75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 
97, 98, 99, 100, 101, 102, 103, 104, 105, nicki, inngenn, akir, alex, hundredgrand];

