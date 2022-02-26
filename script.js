const grid = document.querySelector(".grid")

//makes colmun for user input by appending divs into class: grid
//a placeholder
let makeColumn = () => {
    for (let i = 0; i <= 5 ; i++) {
        let newBlock = document.createElement('div')
        newBlock.className = "holder"
        grid.appendChild(newBlock)        
    }
}


makeColumn()

// rmbr qeuryselectorall returns an array like node
const block = document.querySelectorAll('.holder')


//first for loop: user inputs how many rows needed
//second for loop: cycles through each colmun block and appends a div
let makeRow = () => {
    for (let i = 0; i <= 5 ; i++) {
        for (let n = 0; n < block.length; n++) {
            
            let newBlock = document.createElement('div')
            newBlock.textContent = ('test')
            newBlock.className = "block"  
            
            block[n].appendChild(newBlock)
        }
        
        
    }
}

makeRow()

const blocks = document.querySelectorAll('.block')
console.log(blocks)
for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', function(e) {
    console.log(e)
})
}

