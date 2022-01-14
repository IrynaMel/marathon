const board = document.querySelector("#board")
const colors= ["#3C6E71", "#70AE6E", "#BEEE62", "#7DB57B", "#89BC87", "#549DA0"]
const SQUARS_NUMBER = 805

for (let i = 0; i < SQUARS_NUMBER; i++ ){
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mousemove', setColor)
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}
function setColor(e){
  const element = e.target
    const color = getRendomColor()
    element.style.backgroundColor = color
    element.style.boxShadow =`0 0 2px ${color}, 0 0 10px  ${color}`
}
function removeColor(e){
  const element = e.target
    element.style.backgroundColor ='#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}
function getRendomColor(){
   return colors[Math.floor(Math.random() * colors.length)]
}