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
        ['.', "&#129045;"],
        ['', "SHIFT"]
    ],
    [
        ['', 'Ctrl'],
        ['', "Win"],
        ['', 'Alt'],
        ['', ' '],
        [' ', 'Alt'],
        [' ', 'Ctrl'],
        ['.', '&#129044;'],
        ['.', '&#129047;'],
        ['.', '&#129046;']
    ]
]

class Keyboard{
    constructor(){
        
    }
}

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
                item.classList.add("backspace")
            }
            if (item.querySelector(".main").textContent == "Tab") {
                item.classList.add("spacial_btn")
                item.classList.add("tab")
            }
            if (item.querySelector(".main").textContent == "Ctrl" && item.querySelector(".small").textContent == '') {
                item.classList.add("left_ctrl")
            }
            if (item.querySelector(".main").textContent == "Ctrl" && item.querySelector(".small").textContent == ' ') {
                item.classList.add("right_ctrl")
            }
            if (item.querySelector(".main").textContent == "Alt" && item.querySelector(".small").textContent == '') {
                item.classList.add("left_alt")
            }
            if (item.querySelector(".main").textContent == "Alt" && item.querySelector(".small").textContent == ' ') {
                item.classList.add("right_alt")
            }
            if (item.querySelector(".main").textContent == "Shift") {
                item.classList.add("spacial_btn")
                item.classList.add("shift_left")
            }
            if (item.querySelector(".main").textContent == "SHIFT") {
                item.style.paddingLeft = 0
                item.style.paddingRight = 0
                item.classList.add("shift_right")
            }
            if (item.querySelector(".main").textContent == "DEL") {
                item.classList.add("spacial_btn")
                item.classList.add("del")
            }
            if (item.querySelector(".main").textContent == "Caps Lock") {
                item.classList.add("spacial_btn")
                item.classList.add("caps_lock")
            }
            if (item.querySelector(".main").textContent == "Enter") {
                item.classList.add("spacial_btn")
                item.classList.add("enter")
            }
            if (item.querySelector(".main").textContent == " ") {
                item.classList.add("spacial_btn")
                item.classList.add("space_btn")
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
let caps_lock = document.querySelector(".caps_lock")
let caps_state = false

for (let i = 0; i < keys.length; i++) {
    keys_main[i].setAttribute('keyName', keys_main[i].textContent)
    keys_main[i].setAttribute('lowerKey', keys_main[i].textContent.toLowerCase())
}

document.addEventListener("keydown", (e) => {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys_main[i].getAttribute('keyName') || e.key == keys_main[i].getAttribute('lowerKey')) {
            keys[i].classList.add("active")
        }
    }
    if (e.code == "ControlLeft") {
        document.querySelector(".right_ctrl").classList.remove("active")
        document.querySelector(".left_ctrl").classList.add("active")
    }
    if (e.code == "ControlRight") {
        document.querySelector(".left_ctrl").classList.remove("active")
        document.querySelector(".right_ctrl").classList.add("active")
    }
    if (e.code == "AltLeft") {
        document.querySelector(".right_alt").classList.remove("active")
        document.querySelector(".left_alt").classList.add("active")
    }
    if (e.code == "AltRight") {
        document.querySelector(".left_alt").classList.remove("active")
        document.querySelector(".right_alt").classList.add("active")
    }
    if (e.code == "NumpadDecimal") {
        document.querySelector(".del").classList.add("active")
    }

    if (e.code == "Tab") {
        e.preventDefault()
        document.querySelector(".tab").classList.add("active")
    }
    if (e.code == "ShiftRight") {
        document.querySelector(".shift_left").classList.remove("active")
        document.querySelector(".shift_right").classList.add("active")
    }
    if (e.code == "ShiftLeft") {
        e.preventDefault()
        document.querySelector(".shift_right").classList.remove("active")
        document.querySelector(".shift_left").classList.add("active")
    }
    if (e.code == "ArrowLeft") {
        e.preventDefault()
        document.querySelector(".left_arrow").classList.add("active")
    }
    console.log(e)
})

document.addEventListener("keyup", (e) => {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys_main[i].getAttribute('keyName') || e.key == keys_main[i].getAttribute('lowerKey')) {
            keys[i].classList.remove("active")
        }
    }
    if (e.getModifierState("CapsLock")) {
        caps_lock.classList.add("active")
        caps_state = true
    } else {
        caps_lock.classList.remove("active")
        caps_state = false
    }
    if (e.code == "ControlLeft") {
        document.querySelector(".left_ctrl").classList.remove("active")
    }
    if (e.code == "ControlRight") {
        document.querySelector(".right_ctrl").classList.remove("active")
    }
    if (e.code == "AltLeft") {
        e.preventDefault()
        document.querySelector(".left_alt").classList.remove("active")
    }
    if (e.code == "AltRight") {
        e.preventDefault()
        document.querySelector(".right_alt").classList.remove("active")
    }
    if (e.code == "Tab") {
        e.preventDefault()
        document.querySelector(".tab").classList.remove("active")
    }
    if (e.code == "NumpadDecimal") {
        document.querySelector(".del").classList.remove("active")
    }
    if (e.code == "ShiftRight") {
        document.querySelector(".shift_right").classList.remove("active")
    }

    if (e.code == "ShiftLeft") {
        document.querySelector(".shift_left").classList.remove("active")
    }

    console.log(e)
})

let textarea = document.querySelector(".textarea")
let backspace = document.querySelector(".backspace")
let space = document.querySelector(".space_btn")
let enter = document.querySelector(".enter")
let del = document.querySelector(".del")
let spellArr = []

enter.addEventListener("click",(e)=>{
    textarea.value += "\n"
    spellArr.push("\n")
})

let btnAnimation = (item) => {
    return new Promise((resolve, reject) => {
        item.classList.add("animation_press")
        setTimeout(() => {
            item.classList.add("animation_press_remove")
            resolve(item)
        }, 300)
    })
    .then((item) => {
        item.classList.remove("animation_press")
        item.classList.remove("animation_press_remove")
    })
}

keys.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.length == 1 && caps_state == true) {
            textarea.value += item.querySelector(".main").getAttribute('keyName')
            spellArr.push(item.querySelector(".main").getAttribute('keyName'))
            btnAnimation(item)
        }
        else if (item.classList.length == 1) {
            textarea.value += item.querySelector(".main").getAttribute('lowerkey')
            spellArr.push(item.querySelector(".main").getAttribute('lowerkey'))
            btnAnimation(item)
        }
        console.log(spellArr)
    })
})

caps_lock.addEventListener("click", () => {
    if (caps_state == true) {
        caps_lock.classList.remove("active")
        caps_state = false
    } else {
        caps_lock.classList.add("active")
        caps_state = true
    }
})

backspace.addEventListener("click", () => {
    spellArr.pop()
    textarea.value = spellArr.join('')
})

space.addEventListener("click", () => {
    spellArr.push(" ")
    textarea.value += `</br>`
})

del.addEventListener("click", () => {
    spellArr = []
    textarea.value = ''
})
