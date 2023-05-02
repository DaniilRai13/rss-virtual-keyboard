let keyboardLines = [
    [
        ['`', '`'],
        ["!", '1'],
        ["@", '2'],
        ['#', '3'],
        ["$", '4'],
        ["%", '5'],
        [':', '6'],
        ["?", '7'],
        ['*', '8'],
        ['(', '9'],
        [')', '0'],
        ['_', '-'],
        ['+', "="],
        ["", "Backspace"]
    ],
    [
        ['', 'Tab'],
        ['', 'Q'],
        ['', 'W'],
        ['', 'E'],
        ['', 'R'],
        ['', 'T'],
        ['', 'Y'],
        ['', 'U'],
        ['', 'I'],
        ['', 'O'],
        ['', 'P'],
        ['', '['],
        ['', "]"],
        ['/', '&#92;'],
        ['', 'DEL']
    ],
    [
        ['', 'Caps Lock'],
        ['', 'A'],
        ['', 'S'],
        ['', 'D'],
        ['', 'F'],
        ['', 'G'],
        ['', 'H'],
        ['', 'J'],
        ['', 'K'],
        ['', 'L'],
        ['', ';'],
        ['', "'"],
        ['', "Enter"]
    ],
    [
        ['', 'Shift'],
        ['', "&#92;"],
        ['', 'Z'],
        ['', 'X'],
        ['', 'C'],
        ['', 'V'],
        ['', 'B'],
        ['', 'N'],
        ['', 'M'],
        ['', '.'],
        ['', ','],
        ['', '/'],
        ['', "&#129045;"],
        ['', "SHIFT"]
    ],
    [
        ['', 'Ctrl'],
        ['', "Win"],
        ['', 'Alt'],
        ['', ' '],
        [' ', 'Alt'],
        [' ', 'Ctrl'],
        ['', '&#129044;'],
        ['', '&#129047;'],
        ['', '&#129046;']
    ]
]


function createMainArea() {
    let container = document.createElement("div")
    container.classList.add("container")
    container.insertAdjacentHTML('afterbegin', `
        <textarea class="textarea" name="" id="" ></textarea>
        <div class="keyboard"></div>
    `)
    document.body.prepend(container)
}
function generateKeyBoard() {
    let keyboard = document.querySelector(".keyboard")
    let out = ''
    keyboardLines.forEach(item => {
        let line = document.createElement("div")
        line.classList.add("line")
        for (let i = 0; i < item.length; i++) {
            out += `<div class="key">
                    <div class="small">${item[i][0]}</div>
                    <div class="main">${item[i][1]}</div>
                </div>`
        }
        line.innerHTML = out
        out = ""
        console.log(line)
        keyboard.append(line)
        keyboard.querySelectorAll(".key").forEach(item => {
            if (item.querySelector(".main").textContent == "Backspace") {
                item.classList.add("spacial_btn")
            }
            if (item.querySelector(".main").textContent == "Ctrl" && item.querySelector(".small").textContent=='') {
                
                item.classList.add("left_ctrl")
            }
            if (item.querySelector(".main").textContent == "Ctrl" && item.querySelector(".small").textContent==' ') {
                
                item.classList.add("right_ctrl")
            }
            if (item.querySelector(".main").textContent == "Alt" && item.querySelector(".small").textContent=='') {
                
                item.classList.add("left_alt")
            }
            if (item.querySelector(".main").textContent == "Alt" && item.querySelector(".small").textContent==' ') {
                
                item.classList.add("right_alt")
            }
            if (item.querySelector(".main").textContent == "Shift") {
                item.classList.add("spacial_btn")
            }
            if (item.querySelector(".main").textContent == "SHIFT") {
                item.style.paddingLeft = 0
                item.style.paddingRight = 0
            }
            if (item.querySelector(".main").textContent == "DEL") {
                item.classList.add("spacial_btn")
            }
            if (item.querySelector(".main").textContent == "Caps Lock") {
                item.classList.add("spacial_btn")
            }
            if (item.querySelector(".main").textContent == "ENTER") {
                item.classList.add("spacial_btn")
            }
            if (item.querySelector(".main").textContent == " ") {
                item.classList.add("spacial_btn")
            }
            if (item.querySelector(".main").textContent == ("&#129044;" || "&#129045;" || "&#129046;" || "&#129047;")) {
                item.classList.add("spacial_btn")
            }
        })
    })
}
createMainArea()
generateKeyBoard()

let keys = document.querySelectorAll(".key")
let keys_main = document.querySelectorAll(".main")

for (let i = 0; i < keys.length; i++) {
    keys_main[i].setAttribute('keyName', keys_main[i].textContent)
    keys_main[i].setAttribute('lowerKey', keys_main[i].textContent.toLowerCase())
}

document.addEventListener("keydown", (e) => {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys_main[i].getAttribute('keyName') || e.key == keys_main[i].getAttribute('lowerKey')) {
            keys[i].classList.add("active")
        }
        if(e.code == "ControlLeft"){
            document.querySelector(".right_ctrl").classList.remove("active")
            document.querySelector(".left_ctrl").classList.add("active")
        }
        if(e.code == "ControlRight"){
            document.querySelector(".left_ctrl").classList.remove("active")
            document.querySelector(".right_ctrl").classList.add("active")
        }
        if(e.code == "AltLeft"){
            document.querySelector(".right_alt").classList.remove("active")
            document.querySelector(".left_alt").classList.add("active")
        }
        if(e.code == "AltRight"){
            document.querySelector(".left_alt").classList.remove("active")
            document.querySelector(".right_alt").classList.add("active")
        }
    }
    console.log(e)
})
document.addEventListener("keyup", (e) => {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys_main[i].getAttribute('keyName') || e.key == keys_main[i].getAttribute('lowerKey')) {
            keys[i].classList.remove("active")
        }
        if(e.code == "ControlLeft"){
            document.querySelector(".left_ctrl").classList.remove("active")
        }
        if(e.code == "ControlRight"){
            document.querySelector(".right_ctrl").classList.remove("active")
        }
        if(e.code == "AltLeft"){
            e.preventDefault()
            document.querySelector(".left_alt").classList.remove("active")
        }
        if(e.code == "AltRight"){
            e.preventDefault()
            document.querySelector(".right_alt").classList.remove("active")
        }
    }
    console.log(e)
})
// class KeyBoard{
//     constructor(){

//     }

// }