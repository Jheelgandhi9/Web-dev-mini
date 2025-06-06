//Selecting all boxes
let boxes = document.querySelectorAll(".box");
let playerNo = 1;

//Event handler function
let boxClick = (id) => {
    let el = document.getElementById(id);
    let h2 = document.querySelector("h2");
    if (el.innerText=="" && playerNo==1) {
        el.innerText="O";
        playerNo = 2;  
        h2.innerText = "Player 2's Turn";
    } else if (el.innerText=="" && playerNo==2) {
        el.innerText="X";
        playerNo =1;
        h2.innerText = "Player 1's Turn";
    } else {
        alert("That is already filled");
    }
    checkWin();
}

//No winner initially
let winner = 0;
// Function to check winner
// didnt get 
let checkWin = () => {
    let board = [];
    for (let i=0;i<9;i++) {
        board.push(document.getElementById(`i${i}`).innerText);
    }

    let winPatterns = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            setTimeout(() => alert(`Player ${playerNo === 1 ? 2 : 1} Won!`), 10);
            return;
        }
    }

    if (!board.includes("")) {
        setTimeout(() => alert("Game Tied"), 10);
    }
}

for (let i=0;i<boxes.length;i++) {
    boxes[i].addEventListener("click",function () {
         //onclick wont work as it wont wait or respond for 
         //multiple clicks
        boxClick(boxes[i].id);
    });
}

let reset = document.querySelector("#reset");
reset.addEventListener("click",function () {
    location.reload();  
});

//mistakes:
// ids cannot start with numbers (same as identifier's rules)
// manully selecting elements by ids that is too repetitive
// also selecting them outside the function will eventually 
// lead to the variables becoming useless as whenever we 
// change any property of an element its reference which is 
// returned by getElementByID is changed 
//DRY- Dont repeat yourself
//while loop does not allow any action untill it is running
// mistakes in checkWin() need to be analysed

