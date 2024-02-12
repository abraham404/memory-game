let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let uncoverCards = 0;
let card1 = null, card2 = null, firstResult = null, secondResult = null;
let move = 0, successes = 0;

numbers = numbers.sort(() => { return Math.random() - 0.5 });

console.log(numbers)

const uncover = (id) => {
    uncoverCards++;
    if (uncoverCards === 1) {
        card1 = document.getElementById(id)
        firstResult = numbers[id];
        card1.innerHTML = firstResult;
        card1.style.cssText = `background-color: rgba(255, 255, 255, 0.2);` 
        card1.disabled = true;
    } else if (uncoverCards === 2) {
        card2 = document.getElementById(id);
        secondResult = numbers[id];
        card2.innerHTML = secondResult
        card2.style.cssText = `background-color: rgba(255, 255, 255, 0.2);` 
        card2.disabled = true;

        move++;
        movements.innerHTML = `Movimientos: ${move}`;

        if (firstResult === secondResult) {
            uncoverCards = 0;
            card2.style.cssText = `background-color: rgba(0, 255, 0, 0.6);`; 
            card1.style.cssText = `background-color: rgba(0, 255, 0, 0.6);` ;
            successes++;

            successes.innerHTML = `Asiertos: ${successes}`
            if (successes === 8) {
                Swal.fire({
                    position: "center",
                    icon: "successes",
                    title: "¡¡¡Felicidades Ganastes!!!",
                    showConfirmButton: true,
                }).then((result) => {
                    if (result.isConfirmed)
                        location.reload();

                })

            }
        } else {
            setTimeout(() => {
                card1.innerHTML = ' ';
                card2.innerHTML = ' ';
                card1.style.cssText = `background-color: rgba(255, 255, 255, 0.5);` 
                card2.style.cssText = `background-color: rgba(255, 255, 255, 0.5);` 
                card1.disabled = false;
                card2.disabled = false;
                uncoverCards = 0;
            }, 2000)
            
        }
    }
}   