const boxArray = document.getElementById("container-wrapper");
const startGame = document.getElementById("start-game");

const numCard = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
var indexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
indexArray = indexArray.sort(function () { return Math.random() - 0.5 });

const showBoard = () => {

    for (let i = 0; i < indexArray.length; i++) {
        const element = document.createElement("button");
        element.className = "cards"
        element.disabled = true;
        element.innerHTML = numCard[indexArray[i]];
        boxArray.appendChild(element);
    }
}

const enableCards = () => {
    const cards = document.querySelectorAll(".cards");

    cards.forEach(card => {
        card.disabled = false;
    });

}

const chronometer = () => {
    enableCards();
    let time = 5;
    startGame.disabled = true;

    const stopChr = setInterval(() => {
        time--;
        console.log(time)
        if (time === 0) {
            clearInterval(stopChr);

            Swal.fire({
                position: "center",
                icon: "error",
                title: "Perdiste se te acabó el tiempo",
                showConfirmButton: true,
            })
            .then((result) => {
                if(result.isConfirmed)
                location.reload();
            })

        }

    }, 1000);
}

showBoard();

startGame.onclick = chronometer;





