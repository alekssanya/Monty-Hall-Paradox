let doorsImg = document.getElementsByClassName("door-img")
let winDoor = getRandomNum(3)
let wrongDoors = getWrongDoors()
let selectedWrongDoor
let isRoundOne = true
let wins = 0
document.getElementById("doors-wr").onclick = clickHandler

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

function restart() {
    console.log(doorsImg)
    for (let i = 0; i < 3; i++) {
        doorsImg[i].style.backgroundColor = "green"     
    }
    isRoundOne = true
    winDoor = getRandomNum(3)
    wrongDoors = getWrongDoors()
}

function getWrongDoors() {
    let wrongDoorsArr = []
    for (let i = 0; i < 3; i++) {
        if (i != winDoor) {
            wrongDoorsArr.push(i)
        }
    }
    return wrongDoorsArr
}

function clickHandler(e) {
    if (isRoundOne) {
        selectedWrongDoor = getRandomNum(2)
        if (e.target.id == wrongDoors[selectedWrongDoor]) {
            selectedWrongDoor = selectedWrongDoor > 0 ? selectedWrongDoor - 1 : selectedWrongDoor + 1
        }
        isRoundOne = false
        document.getElementById(wrongDoors[selectedWrongDoor]).style.backgroundColor = "red"
    } else {
        document.getElementById("iteration").textContent = Number(document.getElementById("iteration").textContent) + 1
        if (e.target.id == winDoor) {
            wins++
        }
        document.getElementById("chance").textContent = wins / Number(document.getElementById("iteration").textContent) * 100
        console.log("победная дверь: " + (winDoor + 1))
        restart()
    }
}