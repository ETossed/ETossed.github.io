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
            element.style.backgroundColor = "#BDBDBD";
        }
    });

    element.addEventListener('mouseout', function () {
        if (currentMode) {
            element.style.backgroundColor = "#212121";
        }
        else {
            element.style.backgroundColor = "#E0E0E0";
        }
    });

    element.addEventListener('click', function () {
        if (currentlyActive != rName) {
            resetBox(currentlyActive);
            currentlyActive = rName;
            document.getElementById(rName).innerHTML = insanelyLongArray[element.id];
            if (!currentMode) {
                element.style.backgroundColor = "#E0E0E0";
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
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitaional <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Phantom 2022 <span class="place">2nd</span></td>
    </tr>
</table>`

let mango = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 14 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Scuffed World Tour <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Phantom 2022 <span class="place">3rd</span></td>
    </tr>
</table>`

let iBDW = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 13 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 14 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Phantom 2022 <span class="place">1st</span></td>
    </tr>
</table>`

let aMSa = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Scuffed World Tour <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Off-Season <span class="place">1st</span></td>
    </tr>
</table>`

let hungrybox = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Scuffed World Tour <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Wavedash 2022 <span class="place">1st</span></td>
    </tr>
</table>`

let jmook = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 13 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Off-Season <span class="place">2nd</span></td>
    </tr>
</table>`

let leffen = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Scuffed World Tour <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 14 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Rotterdam <span class="place">1st</span></td>
    </tr>
</table>`

let plup = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 13 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 14 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Scuffed World Tour <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>CEO 2022 <span class="place">1st</span></td>
    </tr>
</table>`

let slug = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Function 2 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>THe Trail Invitational 2 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Nightclub VIP <span class="place">9th</span></td>
    </tr>
</table>`

let axe = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Scuffed World Tour <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 14 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Off-Season <span class="place">3rd</span></td>
    </tr>
</table>`

let llod = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 13 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Scuffed World Tour <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>`

let kodorin = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 13 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Saving Mr. Lombardi 3 <span class="place">1st</span></td>
    </tr>
</table>`

let moky = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Function 2 <span class="place">2nd</span></td>
    </tr>
</table>`

let fiction = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Scuffed World Tour <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>We Need Some Space 3 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Saving Mr. Lombardi 3 <span class="place">3rd</span></td>
    </tr>
</table>`

let s2j = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The New Mang <span class="place">1st</span></td>
    </tr>
</table>`

let n0ne = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 13 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Off-Season <span class="place">13th</span></td>
    </tr>
</table>`

let aklo = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Nightclub VIP <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Function 2 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td></td>
        <td>The Nightclub S2E15 <span class="place">1st</span></td>
    </tr>
</table>`

let wizzrobe = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 14 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash Factor 9 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Off-Season <span class="place">5th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let joshman = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 13 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Scuffed World Tour <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The New Mang <span class="place">2nd </span></td>
    </tr>
</table>`

let pipsqueak = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 14 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Low Tide City <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>FESTA 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Midgard 2022<span class="place">1st</span></td>
    </tr>
</table>`

let ginger = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">23rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Function 2 <span class="place">1st</span></td>
    </tr>
</table>`

let soonsay = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 14 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Emerald City X <span class="place">5th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let krudo = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">23rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Tipped Off: Reunion <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Function 2 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Atlanta <span class="place">5th</span></td>
    </tr>
</table>`

let magi = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>CEO 2022 <span class="place">2nd</span></td>
    </tr>
</table>`

let sfop = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Atlanta 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let polish = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Nightclub VIP <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Phantom 2022 <span class="place">5th</span></td>
    </tr>
</table>`

let sfat = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Town Throwdown: Episode 2 <span class="place">1st</span></td>
    </tr>
</table>`

let nullgs = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">23rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Phantom 2022 <span class="place">5th</span></td>
    </tr>
</table>`

let lucky = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Phantom 2022 <span class="place">49th</span></td>
    </tr>
</table>`

let spark = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">23rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Emerald City X <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Durham Dojo #3 <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Minnesota Monthly #8 <span class="place">2nd</span></td>
    </tr>
</table>`

let salt = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">23rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 13 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>We Need Some Space 3 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>4M: Mega Minnesota Melee Monthly <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Sunshined <span class="place">2nd</span></td>
    </tr>
</table>`

let swift = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Function 2 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let swooper = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Failsafe 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Nightclub VIP <span class="place">3rd</span></td>
    </tr>
</table>`

let zamu = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Show Me Your Moves '22 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Run, Don't Walk 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Minnesota Monthly #5 <span class="place">1st</span></td>
    </tr>
</table>`

let bobby = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Dallas 2022 <span class="place">1st</span></td>
    </tr>
</table>`

let jflex = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 13 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Hold That L #7 <span class="place">2nd</span></td>
    </tr>
</table>`

let mekk = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">57th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">129th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 13 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Can't Fox with my Falco <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Low Tide City 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Tipped Off: Reunion <span class="place">2nd</span></td>
    </tr>
</table>`

let zuppy = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>4M: Mega Minnesota Melee Monthly <span class="place">1st</span></td>
    </tr>
</table>`

let trif = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">41st</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>HFLAN Melee Edition 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Rotterdam 2022 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Fête 2 <span class="place">13th (with Falco)</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let rishi = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">41st</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place">1st</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let smashdaddy = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Midlane Invitational <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Hold That L #7 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash Factor 9 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>CEO 2022 <span class="place">9th</span></td>
    </tr>
</table>`

let aura = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Domino Effect 22 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Domino Effect 21 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Emerald City X <span class="place">4th</span></td>
    </tr>
</table>`

let toussaint = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Trail Invitational 2 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Mass Madness 37 <span class="place">1st</span></td>
    </tr>
</table>`

let skerzo = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>CT Gamercon 5 <span class="place">1st</span></td>
    </tr>
</table>`

let medz = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">45th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash Factor 9 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Domino Effect 22 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Wavedash 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let franz = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">29th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Steelcraft Summer 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Saving Mr. Lombardi 3 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The New Mang <span class="place">7th</span></td>
    </tr>
</table>`

let lunardusk = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">29th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Tidal Waves #2 <span class="place">2nd</span></td>
    </tr>
</table>`

let chudat = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Trail Invitational 2 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Can't Fox with my Falco <span class="place">5th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let frenzy = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">41st</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>MYTH 2 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>MYTH 3 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Nang: Upon Reflection <span class="place">3rd</span></td>
    </tr>
</table>`

let panda = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Fall GatorLAN 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Atlanta <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>CEO 2022 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Tipped Off: Reunion <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Function 2 <span class="place">13th</span></td>
    </tr>
</table>`

let kurv = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">57th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Saving Mr. Lombardi 3 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Wavedash 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let azel = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">57th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Town Throwdown Episode 2 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Town Throwdown Episode 1 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Wavedash 2022 <span class="place">9th</span></td>
    </tr>
</table>`

let colbol = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Warehouse War 2 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Atlanta 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Tipped Off: Reunion <span class="place">7th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let fatgoku = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash Camp: New Lands <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Domino Effect 20 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>SUPERRAD! <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Emerald City X <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Domino Effect 22 <span class="place">4th</span></td>
    </tr>
</table>`

let drlobster = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Giga HoG: Redemption <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Mass Madness 36 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>MMOM 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let profpro = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 14 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Scuffed World Tour <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>MYTH 2 <span class="place">1st</span></td>
    </tr>
</table>`

let logan = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Warehouse War 2 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Tipped Off: Reunion <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash Camp 2022 <span class="place">9th</span></td>
    </tr>
</table>`

let spud = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">29th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Off-Season <span class="place">9th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let sdj = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Dallas 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Can't Fox with my Falco <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Off-Season <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>CEO 2022 <span class="place">13th</span></td>
    </tr>
</table>`

let grab = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>THREEVO <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>We Need Some Space 3 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Atlanta 2022 <span class="place">5th</span></td>
    </tr>
</table>`

let ralph = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Smash Summit 13 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Nightlife <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Town Throwdown: Episode 2 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Town Throwdown: Episode 1 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let chem = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>CEO 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Trail Invitational 2 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Creed <span class="place">5th</span></td>
    </tr>
</table>`

let ben = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Hold That L #7 <span class="place">1st</span></td>
    </tr>
</table>`

let motmoney = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">45th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">97th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Starstruck <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Flying Knee 3 <span class="place">1st</span></td>
    </tr>
</table>`

let wally = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">97th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Mass Madness 35 <span class="place">1st</span></td>
    </tr>
</table>`

let bbatts = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Creed <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Mass Madness 38 <span class="place">1st</span></td>
    </tr>
</table>`

let palpa = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Low Tide City 2022 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>The Capitol <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Dreamhack Dallas 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>The Off-Season <span class="place">13th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let dawson = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>No Jawns 2 <span class="place">2nd</span></td>
    </tr>
</table>`

let kalamazhu = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Domino Effect 22 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Nightlife <span class="place">5th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let kjh = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>CEO 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Wavedash 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Function 2 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let eddymexico = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">41st</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash Factor 9 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>4M: Mega Minnesota Monthly <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Saving Mr. Lombardi 3 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Wavedash 2022 <span class="place">17th</span></td>
    </tr>
</table>`

let kalvar = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">129th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Mass Madness 36 <span class="place">2nd</span></td>
    </tr>
</table>`

let drephen = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Homie Round <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Show Me Your Moves '22 <span class="place">2nd</span></td>
    </tr>
</table>`

let khryke = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Creed <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Phantom 2022 <span class="place">7th</span></td>
    </tr>
</table>`

let faceroll = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">57th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Saving Mr. Lombardi 3 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash Camp 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Town Throwdown: Episode 1 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Function 2 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let panko = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Warehouse War 2 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Atlanta 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Tipped Off: Reunion <span class="place">9th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let chape = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Zenkoku Takai <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Invincible VI <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>4M: Mega Minnesota Melee Monthly <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash Factor 9 <span class="place">7th</span></td>
    </tr>
</table>`

let gahtzu = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">57th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Can't Fox with my Falco <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Atlanta 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let sirmeris = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Homie Round 2 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Homie Round <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Show Me Your Moves '22 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let voo = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Low Tide City <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Tipped Off: Reunion <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>CEO 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Atlanta 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let suf = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The New Mang <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Saving Mr. Lombardi 3 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Wavedash 2022 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let madtyro = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Lift-Off <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>THREEVO <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Warehouse War 2 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let wevans = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Fall GatorLAN <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>CEO 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Atlanta 2022 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Off-Season <span class="place">17th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let trt = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Hold That L #7 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>SUPERRAD! <span class="place">5th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let rocket = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>SPC: Rehab 2.0 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Wavedash 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let nickemwit = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">129th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash Camp: New Lands <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Domino Effect 22 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Emerald City X <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Sunshined 2 <span class="place">9th</span></td>
    </tr>
</table>`

let khalid = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Saving Mr. Lombardi 3 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Wavedash 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let essy = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Honeypot 4 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>THREEVO <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Homie Round <span class="place">3rd</span></td>
    </tr>
</table>`

let logos = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Edgeguard: Fight II Fright <span class="place">1st</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let jjm = `
<table class="result-table">
    
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Suer Smash Con 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>No Jawns 2 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Flying Knee 3 <span class="place">3rd</span></td>
    </tr>
</table>`

let justjoe = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">97th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Show Me Your Moves '22 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>We Need Some Space 3 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Midlane Invitational <span class="place">5th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let umarth = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash Camp: New Lands <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Nightlife <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Wavedash 2022 <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let slowking = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">97th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash @ Pat's 50: The Patio <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Minnesota Monthly #2 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Run, Don't Walk <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Sunshined 2 <span class="place">3rd</span></td>
    </tr>
</table>`

let kevinmaples = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Nightclub VIP <span class="place">7th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let eggy = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">129th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Invincible IV <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Hold That L #7 <span class="place">17th</span></td>
    </tr>
</table>`

let freepalestine = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Homie Round 2 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Hold That L #7 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash Camp 2022 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let nut = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">97th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Lost Tech City <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Battle of BC 4 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Steelcraft Summer 2022 <span class="place">4th</span></td>
    </tr>
</table>`

let ringler = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">97th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">129th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash Camp: New Lands <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Wavedash 2022 <span class="place">17th</span></td>
    </tr>
</table>`

let shabo = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>BOPME 22 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Midlane Invitational <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Show Me Your Moves '22 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Hold That L #7 <span class="place">7th</span></td>
    </tr>
</table>`

let matteo = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Get On My Level 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Quit Your Friendlies 4 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Tidal Waves #2 <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Function 2 <span class="place">49th</span></td>
    </tr>
</table>`

let cray = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Flying Knee 3 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Scarlet Knightmare 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Creed <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>No Jawns 2 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Starstruck <span class="place">13th</span></td>
    </tr>
</table>`

let abbe = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>MYTH 3 <span class="place">1st</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>MYTH 2 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Fête 2 <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>HFLAN Melee Edition 2022 <span class="place">13th</span></td>
    </tr>
</table>`

let fizzwiggle = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let gooms = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">57th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">97th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The New Mang <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The New Mang 2 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Saving Mr. Lombardi 3 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Wavedash 2022 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let jojo = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Apex 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Pound 2022 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Nightclub VIP <span class="place">13th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>The Function 2 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let jwick = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td></td>
        <td> <span class="place"></span></td>
    </tr>
</table>`

let ober = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">57th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Mainstage 2022 <span class="place">49th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>We Need Some Space 3 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Invincible IV <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Midlane Invitational <span class="place">9th</span></td>
    </tr>
</table>`

let reesch = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">65th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">129th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Double Down 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Smash @ Pat's 50: The Patio <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Run, Don't Walk <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Minnesota Monthly #8 <span class="place">9th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>4M: Mega Minnesota Melee Monthly <span class="place">13th</span></td>
    </tr>
</table>`

let reeve = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">97th</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">25th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Super Smash Con 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>THREEVO <span class="place">4th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>We Need Some Space 3 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Lift-Off <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Show Me Your Moves '22 <span class="place">17th</span></td>
    </tr>
</table>`

let sharp = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place">N/A</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Riptide 2022 <span class="place">17th</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Shine 2022 <span class="place">33rd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>FESTA 2022 <span class="place">2nd</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>Dreamhack Rotterdam 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>HFLAN Melee Edition <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td>MYTH 3 <span class="place">9th</span></td>
    </tr>
</table>`

let insanelyLongArray = ["", zain, mango, aMSa, iBDW, hungrybox, jmook, leffen, plup, 
slug, axe, llod, kodorin, moky, fiction, s2j, n0ne, aklo, wizzrobe, joshman, pipsqueak, 
ginger, soonsay, krudo, magi, sfop, polish, sfat, nullgs, lucky, spark, salt, swift, swooper, 
zamu, bobby, jflex, mekk, zuppy, trif, rishi, smashdaddy, aura, toussaint, skerzo, medz, franz, 
lunardusk, chudat, frenzy, panda, kurv, azel, colbol, profpro, fatgoku, drlobster, logan, spud, 
sdj, grab, ralph, chem, ben, motmoney, wally, bbatts, palpa, dawson, kalamazhu, kjh, eddymexico,
kalvar, drephen, faceroll, suf, khryke, panko, chape, gahtzu, sirmeris, voo, madtyro, wevans, trt,
rocket, nickemwit, khalid, essy, logos, jjm, justjoe, umarth, slowking, kevinmaples, eggy, freepalestine, 
nut, ringler, shabo, matteo, cray, abbe, fizzwiggle, gooms, jojo, jwick, ober, reesch, reeve, sharp];

`
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Genesis 8 <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>The Big House 10 <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Ludwig Smash Invitational <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td> <span class="place"></span></td>
    </tr>
    <tr>
        <td>&#9650;</td>
        <td> <span class="place"></span></td>
    </tr>
</table>`