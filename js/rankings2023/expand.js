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

let cody = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Tristate/Michigan</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">16</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">85-19</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let zain = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">MDVA</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">12</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">63-18</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let jmook = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Upstate New York</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">16</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">53-21</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">2</span></td>
    </tr>
</table>`

let moky = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern Ontario</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">13</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">48-23</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let plup = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Portland</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">6</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">23-7</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let hbox = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Central Florida</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">47-23</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let amsa = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">British Columbia/Japan</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">20</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">64-27</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let mango = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern California</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">9</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">23-16</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let wizzy = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Central Florida</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">5</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">16-7</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let aklo = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Tristate</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">18</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">58-32</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">3</span></td>
    </tr>
</table>`

let kodorin = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern California</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">18</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">54-26</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let llod = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Pittsburgh</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">6</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">26-12</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let salt = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Dallas Fort-Worth/Houston</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">23</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">53-29</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let zuppy = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern Ontario</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">16</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">30-24</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">4</span></td>
    </tr>
</table>`

let trif = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Spain</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">10</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">15-13</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let s2j = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">NorCal</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">13</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">36-21</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">4</span></td>
    </tr>
</table>`

let magi = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Louisiana</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">19</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">57-32</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let morsecode = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Michigan</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">7</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">11-14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let polish = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Pittsburgh</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">27-26</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let joshman = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Australia/Southern California</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">13</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">21-20</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">4</span></td>
    </tr>
</table>`

let zamu = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Champaign</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">22</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">42-31</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">2</span></td>
    </tr>
</table>`

let axe = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Arizona</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">17</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">38-31</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let soonsay = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Alberta</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">13-14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let chem = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Tristate</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">19</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">31-20</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">5</span></td>
    </tr>
</table>`

let spark = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Arizona/Pakistan</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">too fucking many</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">55-43</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">3</span></td>
    </tr>
</table>`

let ginger = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Michigan</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">32-14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let sfop = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Dallas-Fort Worth</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">7</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">15-11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let sdj = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Dallas-Fort Worth</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">13</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">20-20</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">6</span></td>
    </tr>
</table>`

let fiction = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern California</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">13</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">42-22</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">2</span></td>
    </tr>
</table>`

let ben = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Minnesota</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">22</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">35-42</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">2</span></td>
    </tr>
</table>`

let Panda = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Central Florida</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">21-19</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let Krudo = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Central Florida</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">12</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">24-22</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let BBatts = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Tristate</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">22</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">24-30</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">4</span></td>
    </tr>
</table>`

let KJH = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Michigan</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">16</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">29-31</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let n0ne = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern Ontario</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">12</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">13-21</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let Ossify = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Michigan</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">10</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">22-14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let Junebug = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">MDVA</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">24-16</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let Khalid = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern California</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">16</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">18-25</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">6</span></td>
    </tr>
</table>`

let Faust = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern Ontario</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">10</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">7-17</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">12</span></td>
    </tr>
</table>`

let Flash = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Northeast Ohio</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">6</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">7-16</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let Shroomed = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">NorCal</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">5</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">7-6</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">2</span></td>
    </tr>
</table>`

let Skerzo = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Chicago</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">19</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">23-29</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">an absurd amount</span></td>
    </tr>
</table>`

let Sirmeris = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">West Virginia</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">16-11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let Azel = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Arizona</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">6</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">8-9</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">4</span></td>
    </tr>
</table>`

let MOF = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern Florida</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">10-21</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">4</span></td>
    </tr>
</table>`

let Matteo = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern Ontario</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">8-14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let Mekk = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Chicago</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">16</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">25-29</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">5</span></td>
    </tr>
</table>`

let Khryke = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">MDVA</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">17</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">16-22</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">7</span></td>
    </tr>
</table>`

let CPU0 = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Arizona</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">13</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">13-16</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">11</span></td>
    </tr>
</table>`

let Gahtzu = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Central Florida</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">11-14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">3</span></td>
    </tr>
</table>`

let Smash_Papi = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Chicago</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">9</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">9-13</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let TheRealThing = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Northeast Ohio</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">7</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">12-14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">2</span></td>
    </tr>
</table>`

let billybopeep = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Dallas-Fort Worth</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">8-11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let Jflex = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Tristate</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">7</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">7-9</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let Colbol = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Georgia</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">14-8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">9</span></td>
    </tr>
</table>`

let Frenzy = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">England</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">12</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">17-10</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">9</span></td>
    </tr>
</table>`

let Free_Palestine = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Columbus</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">11-18</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">5</span></td>
    </tr>
</table>`

let Drephen = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Columbus</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">9-17</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let Eddy_Mexico = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Tijuana</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">10-11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">9</span></td>
    </tr>
</table>`

let shabo = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">MDVA</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">12-13</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let Lucky = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern California</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">15-19</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">5</span></td>
    </tr>
</table>`

let Lunar_Dusk = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Montreal</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">14-8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">4</span></td>
    </tr>
</table>`

let Kevin_Maples = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">MDVA</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">17</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">23-10</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">7</span></td>
    </tr>
</table>`

let Palpa = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Austin</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">6-14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">5</span></td>
    </tr>
</table>`

let MilkMan = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">MDVA</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">13</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">12-11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">3</span></td>
    </tr>
</table>`

let KoopaTroopa895 = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern California</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">9</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">18-16</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">5</span></td>
    </tr>
</table>`

let Pipsqueak = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Stockholm</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">9-8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let Grab = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Tennessee</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">17</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">12-22</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">6</span></td>
    </tr>
</table>`

let Kurv = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern California</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">10</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">14-24</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">3</span></td>
    </tr>
</table>`

let TheSWOOPER = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Tristate</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">10</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">5-14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">4</span></td>
    </tr>
</table>`

let Voo = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern Florida</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">6</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">11-10</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">2</span></td>
    </tr>
</table>`

let Mvlvchi = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">MDVA</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">12</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">12-23</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">2</span></td>
    </tr>
</table>`

let Professor_Pro = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">London</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">10</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">9-16</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">3</span></td>
    </tr>
</table>`

let null_gio = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern California</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">7</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">12-12</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let Kalvar = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">New Hampshire</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">15</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">16-23</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">7</span></td>
    </tr>
</table>`

let essy = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Cincinnati</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">17</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">23-33</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">9</span></td>
    </tr>
</table>`

let Quang = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Michigan</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">7-11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">5</span></td>
    </tr>
</table>`

let Asashi = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern California</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">7</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">13-19</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let Mot$ = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Tristate</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">15</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">17-21</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">7</span></td>
    </tr>
</table>`

let Panko = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Georgia</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">12</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">6-18</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place"></span></td>
    </tr>
</table>`

let Stiv = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Portland</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">7</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">10-14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">17</span></td>
    </tr>
</table>`

let Dawson = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Philadelphia</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">23</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">24-35</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">9</span></td>
    </tr>
</table>`

let prof = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">South Florida</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">9-24</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let Slowking = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Iowa</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">15</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">15-24</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">11</span></td>
    </tr>
</table>`

let Preeminent = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Minnesota</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">31</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">23-42</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">13</span></td>
    </tr>
</table>`

let Franz = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern California</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">7-16</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">2</span></td>
    </tr>
</table>`

let Fishbait = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Colorado</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">7</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">5-8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">4</span></td>
    </tr>
</table>`

let Ralph = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">NorCal</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">6</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">9-11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">1</span></td>
    </tr>
</table>`

let Akir = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">West Florida</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">7</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">6-10</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">4</span></td>
    </tr>
</table>`

let Egg$ = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Alberta</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">5</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">6-8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">5</span></td>
    </tr>
</table>`

let Lowercase_Hero = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Wisconsin</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">25</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">11-21</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">10</span></td>
    </tr>
</table>`

let Wevans = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Jacksonville</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">13</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">8-17</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">8</span></td>
    </tr>
</table>`

let Squid = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Montreal</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">18</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">10-26</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">10</span></td>
    </tr>
</table>`

let JoJo = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Tristate</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">4</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">3-8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let Justus = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Dallas-Fort Worth</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">4</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">4-8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let K8A = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Tristate</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">6</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">3-8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">4</span></td>
    </tr>
</table>`

let Chango = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Washington</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">14</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">9-17</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">14</span></td>
    </tr>
</table>`

let Jah_Ridin = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Switzerland</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">10-10</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">7</span></td>
    </tr>
</table>`

let four_oh_four_Cray = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Tristate</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">13</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">6-10</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">12</span></td>
    </tr>
</table>`

let Zeo = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Southern California</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">9</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">8-17</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">4</span></td>
    </tr>
</table>`

let leffen = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Stockholm</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">4</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">14-6</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let twosaint = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">Tristate</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">5</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">11-8</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">0</span></td>
    </tr>
</table>`

let swift = `
<table class="result-table">
    <tr>
        <td>&#9724;</td>
        <td>Region: <span class="place">MDVA</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Events Attended: <span class="place">5</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Record vs. ballot players: <span class="place">12-11</span></td>
    </tr>
    <tr>
        <td>&#9724;</td>
        <td>Losses to non-ballot players: <span class="place">4</span></td>
    </tr>
</table>`

let insanelyLongArray = ["", cody, zain, jmook, moky, plup, hbox, amsa, mango, wizzy, aklo, kodorin, llod,
salt, zuppy, trif, s2j, magi, morsecode, polish, joshman, zamu, axe, soonsay, chem, spark, ginger, sfop, sdj,
fiction, ben, Panda, Krudo, BBatts, KJH, n0ne, Ossify, Junebug, Khalid, Faust, Flash, Shroomed, Skerzo, Sirmeris,
Azel, MOF, Matteo, Mekk, Khryke, CPU0, Gahtzu, Smash_Papi, TheRealThing, billybopeep, Jflex, Colbol, Frenzy, Free_Palestine,  
Drephen, Eddy_Mexico, shabo, Lucky, Lunar_Dusk, Kevin_Maples, Palpa, MilkMan, KoopaTroopa895, Pipsqueak, Grab, 
Kurv, TheSWOOPER, Voo, Mvlvchi, Professor_Pro, null_gio, Kalvar, essy, Quang, Asashi, Mot$, Panko, Stiv, Dawson, prof, 
Slowking, Preeminent, Franz, Fishbait, Ralph, Akir, Egg$, Lowercase_Hero, Wevans, Squid, JoJo, Justus, K8A, Chango, 
Jah_Ridin, four_oh_four_Cray, Zeo, leffen, twosaint, swift]
