const grid = document.querySelector(".grid")
const input = document.querySelector('.input')
const button = document.querySelector('.button')
const RESETBUTTON = document.querySelector('.resetBoard')
let value = 5
let clicked = false





//makes colmun for user input by appending divs into class: grid
//a placeholder
let makeColumn = () => {
    for (i = 0; i < value ; i++) {
        let newBlock = document.createElement('div')
        newBlock.className = "holder"
        grid.appendChild(newBlock)
                
    }
}


makeColumn()



//first for loop: user inputs how many rows needed
//second for loop: cycles through each colmun block and appends a div
let makeRow = () => {
    const block = document.querySelectorAll('.holder')
    for (let i = 0; i < value ; i++) {
        for (let n = 0; n < block.length; n++) {
            let newBlock = document.createElement('div')
            newBlock.className = "block"  
            newBlock.style.height = `${400/value}`
            newBlock.style.border = '0.1px solid black'
            
            block[n].appendChild(newBlock)
        }
        
        
    }
}

makeRow()

let blocks = document.querySelectorAll('.block')



let backgroundBlock = (i) => {
    blocks[i].style.background = 'grey'
    blocks[i].style.border = '0.1px solid black'   
}

//highlights the block by adding event listener mouseover
// let hoverBlock = () => {
//     for (let i = 0; i < blocks.length; i++) {
//         blocks[i].addEventListener('mouseenter', function(e) {
//             backgroundBlock(i)
//         }) 
//     }
//     clicked = false
    
// }

// //returns block to original colour after hoverMouse

// let leaveBlock = () => {
//     for (let i=0; i < blocks.length; i++) {
//         blocks[i].addEventListener('mouseleave', function(e) {
//             blocks[i].style.background = 'white'
//             blocks[i].style.border = '0px'
//             console.log(clicked)
//         })
//     }
    
// }

let fillBlock = () => {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener('click', function(e) {
            blocks[i].style.background = 'black'
        })
    }
}

// hoverBlock()
// leaveBlock()
fillBlock()



//html scripts

let buttonClick = function () {
    button.addEventListener('click', () => {
        //need to include way where input is a number regex?
        value = input.value
        if (value >= 25) {
            value = 25
        }
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild)
        }
        makeColumn()
        makeRow()
        blocks = document.querySelectorAll('.block')
        fillBlock()
        // hoverBlock()
        // leaveBlock() 
    })
}
buttonClick()


//calls all block elements, need to cycle through them because its a node like arary
//changes the background to white
let resetBoard = () => {
    const block = document.querySelectorAll('.block')
    for (let i = 0; i < block.length; i++) {
        console.log(blocks[i])
        blocks[i].style.background = 'white'
        blocks[i].style.border = '0.1px solid black' 
    }
}

let resetBoardButton = () => {
    RESETBUTTON.addEventListener('click', resetBoard)
}
resetBoardButton()