let r = document.getElementById("Red");
let g = document.getElementById("Green");
let cells = document.querySelectorAll('.cell');
let winner = document.getElementById("Winner");
let currentPlayer = 'red'; // Start with red player
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let text1 = "";
let text2 = "";

btn1.addEventListener('click', function() {
    text1 = document.getElementById("text1").value;
    r.textContent = `Red is ${text1}`;
});

btn2.addEventListener('click', function() {
    text2 = document.getElementById("text2").value;
    g.textContent = `Green is ${text2}`;
});

let Win = [
    ["321"],
    ["123"],
    ["654"],
    ["456"],
    ["987"],
    ["789"],
    ["741"],
    ["147"],
    ["174"],
    ["852"],
    ["258"],
    ["963"],
    ["369"],
    ["951"],
    ["159"],
    ["753"],
    ["357"],
]

let arr = "";
let brr = "";

cells.forEach((cell) => {
    cell.addEventListener('click', function() {
        cell.style.backgroundColor = currentPlayer;

        if(currentPlayer == 'red') {
            arr += cell.dataset.value;

            if (arr.length >= 3) {
                for (let i = 0; i < Win.length; i++) {
                    if (Win[i][0] === arr.slice(-3)) {
                        winner.textContent = `${text1} won`;
                        setTimeout(() => {
                            location.reload();
                        }, 5000);
                        return;
                    }
                }
            }
        }

        if(currentPlayer == 'greenyellow') {
            brr += cell.dataset.value;

            if (brr.length >= 3) {
                for (let i = 0; i < Win.length; i++) {
                    if (Win[i][0] === brr.slice(-3)) {
                        winner.textContent = `${text2} won`;
                        setTimeout(() => {
                            location.reload();
                        }, 5000);
                        return;
                    }
                }
            }            
        }

        currentPlayer = (currentPlayer === 'red') ? 'greenyellow' : 'red';
    });
});

btn.addEventListener('click',function() {
    location.reload();
});