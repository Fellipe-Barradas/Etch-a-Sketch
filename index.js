const submit  = document.querySelector('#submit')
const layout = document.querySelector('.canvas')
const grayTons= document.querySelector('#graytons')
const rainbow=document.querySelector('#rainbow')
const blackBtn = document.querySelector('#blackBtn')
const eraser = document.querySelector('#eraser')

submit.addEventListener('click', initializate)
function initializate(){
    grayTons.addEventListener('click',grayDraw)
    rainbow.addEventListener('click', randomDraw)
    blackBtn.addEventListener('click',draw)
    eraser.addEventListener('click', eraserExe)
    const widthCanvas = document.querySelector('#canvasX').value
    const heightCanvas = document.querySelector('#canvasY').value
    let boxSize = size(widthCanvas, heightCanvas)
    layout.innerHTML = ''
    layout.style.gridTemplateColumns = `repeat(${widthCanvas}, auto)`
    createTiles(boxSize)
}
const resizeTiles = (tile) =>{
    const size = document.querySelector('#canvasX').value
    if(size > 27){
        tile.style.width = '10px'
        tile.style.height = '10px'
    }
    if(size > 38){
        tile.style.width = '5px'
        tile.style.height = '5px' 
    }
    if(size > 64){
        tile.style.width = '3px'
        tile.style.height = '3px' 
    }
    if(size > 90){
        tile.style.width = '2px'
        tile.style.height = '2px' 
    }
}
const size = (a, b)=>{
    if(a <= 100 && b <=100 && a == b){
        return a * b 
    } 
    return window.alert('Adicione valores iguas e menores que 100')
}
const draw = ()=>{
    const tiles = document.querySelectorAll('.grid')
    tiles.forEach(tile=>tile.addEventListener('mouseover',()=>{
        tile.style.background = 'black'
        
    }))
}
function createTiles(size){
    for(let tile = 0; tile < size; tile++){
        const tiles = document.createElement('div')
        tiles.className = 'grid'
        tiles.style.display = 'block'
        resizeTiles(tiles, size)
        layout.appendChild(tiles)
    }
    draw()
}
const clear = document.querySelector('#clearBtn')
clear.addEventListener('click', clearCanvas)
function clearCanvas(){
    const tiles = document.querySelectorAll('.grid')
    tiles.forEach(tile=>{
        tile.style.background = 'white'
        
    })
}
const grayDraw= ()=>{
    let color = ['#ffffff','#f1f1f1',"#eeeeee","#d2d2d2","#a1a1a1", "#7c7c7c", "#5e5e5e","#3e3e3e", "#202020"]
    let i = 0
    const tiles = document.querySelectorAll('.grid')
    tiles.forEach(tile => {
        tile.addEventListener('mouseover', ()=>{
           const currentColor = color[i]
           tile.style.background = currentColor
           if(i==color.length){
            i=0
           }else{
           i++
        }
        })
    })
}
const randomDraw=()=>{
    const tiles = document.querySelectorAll('.grid')
    tiles.forEach(tile=>tile.addEventListener('mouseover',()=>{
        const currentColor = setColor()
        tile.style.background = currentColor
    }))
}
const setColor=()=>{
    let color = '#'
    let letters = '0123456789ABCDEF'
    for(let i = 0; i < 6; i++){
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color
}
const eraserExe =()=>{
    const tiles = document.querySelectorAll('.grid')
    tiles.forEach(tile=>tile.addEventListener('mouseover',()=>{
        tile.style.background = 'white'
        
    }))
    
}
initializate()
