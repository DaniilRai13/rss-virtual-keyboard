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
        
})
}
createMainArea()
generateKeyBoard()
// class KeyBoard{
//     constructor(){

//     }

// }