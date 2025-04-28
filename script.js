let boxes = document.querySelectorAll(".box");
        let message = document.querySelector(".message");
        let player = document.querySelector(".player");
        let winner = document.querySelector(".winner");
        let count = 0;
        boxes.forEach((box) => {
            box.innerHTML = "";
        })

        function checkWinner(box, boxIndex) {
            let i = 0;
            let win = true;

            //check row
            for (i = 0; i < 3; i++) {
                if (boxes[Math.floor(boxIndex / 3) * 3 + i].innerHTML != box.innerHTML) {
                    win = false;
                    break;
                }
            }
            if (win) {
                return true;
            }

            //check columns
            win = true;
            for (i = 0; i < 3; i++) {
                if (boxes[boxIndex % 3 + i * 3].innerHTML != box.innerHTML) {

                    win = false;
                    break;
                }
            }
            if (win) {
                return true;
            }


            //check diagnol 1

            if (boxIndex % 4 == 0) {
                win = true;
                if (boxes[0].innerHTML != box.innerHTML) {
                    win = false;
                }
                if (boxes[4].innerHTML != box.innerHTML) {
                    win = false;
                }
                if (boxes[8].innerHTML != box.innerHTML) {
                    win = false;
                }
                if (win) {
                    return true;
                }
            }

            //check diagnol 2
            if (boxIndex == 2 || boxIndex == 4 || boxIndex == 6) {
                win = true;
                if (boxes[2].innerHTML != box.innerHTML) {
                    win = false;
                }
                if (boxes[4].innerHTML != box.innerHTML) {
                    win = false;
                }
                if (boxes[6].innerHTML != box.innerHTML) {
                    win = false;
                }
                if (win) {
                    return true;
                }
            }


            return win;
        }

        function restart() {
            count = 0;
            boxes.forEach((box) => {
                box.innerHTML = "";
                winner.style.display = "None";
                player.innerHTML = "PLAYER " + (1 + count % 2);
            })
        }

        boxes.forEach((box, boxIndex) => {
            box.addEventListener("click", ticTacToe = () => {
                if (box.innerHTML != "") {
                    message.innerHTML = "Incorrect move";
                    message.style.display = "block";
                }
                else {
                    if (count % 2 == 0) {
                        box.innerHTML = "X";
                        message.innerHTML = "";
                        message.style.display = "none";
                    } else {
                        box.innerHTML = "O";
                        message.innerHTML = "";
                        message.style.display = "none";
                    }
                    if (count > 3) {
                        if (checkWinner(box, boxIndex)) {
                            count--;
                            winner.firstElementChild.innerHTML = player.innerHTML + " Wins";
                            winner.style = "display : flex; animation-name : popdown;"
                        }
                    }
                    count++;
                    player.innerHTML = "PLAYER " + (1 + count % 2);
                }
                if (count > 8) {
                    winner.firstElementChild.innerHTML = "Draw";
                    winner.style = "display : flex; animation-name : popdown;"
                }
            })
        });