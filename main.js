const boxArray = document.getElementById("container-wrapper");
const numCard = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];


const randomNumber = () => {

    var indexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    indexArray = indexArray.sort(function () { return Math.random() - 0.5 });
    console.log(indexArray)   

    for (let i = 0; i < indexArray.length; i++) {
        const element = document.createElement("button");
        element.className = "card"
        element.innerHTML = numCard[indexArray[i]];
        boxArray.appendChild(element);
    }
}


randomNumber();