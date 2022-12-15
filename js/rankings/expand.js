// Expanding of player boxes

let currentlyActive = "r0";
const uBoxes = document.querySelectorAll(".u-player");

playerBoxes.forEach(element => {
    element.addEventListener('click', function () {
        let rName = 'r' + element.id;
        
        if (currentlyActive != rName) {
            resetBox(currentlyActive);
            currentlyActive = rName;
            document.getElementById(rName).innerHTML = insanelyLongArray[element.id];
            if (!currentMode) {
                let resultTables = document.querySelectorAll(".result-table tr");
                resultTables.forEach(element => {
                    element.style.backgroundColor = "#F5F5F5";
                    element.style.outlineWidth = "2px";
                })
            }
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
        <td>Ludwig Smash Invitaional <span class="place">7th</span></td>
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
        <td>Get On My Level 2022 <span class="place">5th</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Shine 2022 <span class="place">5th</span></td>
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
        <td>m</td>
        <td>Smash Summit 14 <span class="place">3rd</span></td>
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
        <td>Shine 2022 <span class="place">3rd</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Apex 2022 <span class="place">3rd</span></td>
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
        <td>Battle of BC 4<span class="place">1st</span></td>
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
        <td>Smash Summit 14 <span class="place">7th</span></td>
    </tr>
    <tr>
        <td>m</td>
        <td>Smash Summit 13 <span class="place">9th</span></td>
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
        <td>Riptide 2022<span class="place">2nd</span></td>
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
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>`

let insanelyLongArray = ["", zain, mango, iBDW, aMSa, hungrybox, jmook, leffen, plup, "this array is long as fuck", "this array is long as fuck"];

