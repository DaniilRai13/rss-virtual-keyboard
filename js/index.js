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
        ['','DEL']
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
        ['', "ENTER"]
    ],
    [
        ['', 'Shift'],
        ['',"&#92;"],
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
        ['',"Win"],
        ['', 'Alt'],
        ['', ' '],
        ['', 'Alt'],
        ['', 'Ctr'],
        ['', '&#129044;'],
        ['', '&#129047;'],
        ['', '&#129046;']
    ]
]


function createMainArea() {
    let container = document.createElement("div")
    container.classList.add("container")
    container.insertAdjacentHTML('afterbegin', `
        <textarea class="textarea" name="" id="" cols="50" rows="10"></textarea>
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
        keyboard.querySelectorAll(".key").forEach(item=>{
            if(item.querySelector(".main").textContent == "Backspace"){
                item.classList.add("spacial_btn")
            }
            if(item.querySelector(".main").textContent == "Shift"){
                item.classList.add("spacial_btn")
            }
            if(item.querySelector(".main").textContent == "SHIFT"){
                item.style.paddingLeft = 0
                item.style.paddingRight = 0
            }
            if(item.querySelector(".main").textContent == "DEL"){
                item.classList.add("spacial_btn")
            }
            if(item.querySelector(".main").textContent == "Caps Lock"){
                item.classList.add("spacial_btn")
            }
            if(item.querySelector(".main").textContent == "ENTER"){
                item.classList.add("spacial_btn")
            }
            if(item.querySelector(".main").textContent == " "){
                item.classList.add("spacial_btn")
            }
            if(item.querySelector(".main").textContent == ("&#129044;" ||"&#129045;"||"&#129046;"||"&#129047;")){
                item.classList.add("spacial_btn")
            }
        })
})
}
createMainArea()
generateKeyBoard()
// class KeyBoard{
//     constructor(){

//     }

// }