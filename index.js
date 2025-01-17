id = 0

function sleep(time) {
  const start = new Date()
  while (new Date() - start < time * 1000) {
      // do nothing & block the main thread 
  }
}

function create_li() {
  id ++
  const nextMoveLi = document.createElement('li')
  nextMoveLi.dataset.id = id
  return nextMoveLi
}

document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  const movesUl = document.querySelector('ul#moves-container')

  // store the commands
  document.addEventListener('keydown', event => {

    
    console.log(`${event.key} pressed`)
    
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key == 'ArrowLeft' || event.key == 'ArrowRight'){
      nextMoveLi = create_li()
      switch (event.key) {
        case 'ArrowDown':
          nextMoveLi.innerText = 'Down';
          nextMoveLi.classList.add("down");
          break;
        case 'ArrowRight':
          nextMoveLi.innerText = 'Right';
          nextMoveLi.classList.add("right");
          break;
        case 'ArrowLeft': 
          nextMoveLi.innerText = 'Left';
          nextMoveLi.classList.add("left");
          break;
        case 'ArrowUp': 
          nextMoveLi.innerText = 'Up';
          nextMoveLi.classList.add("up");
          break;
      
        default:
          break;
      }
    } 

    movesUl.appendChild(nextMoveLi)

  })

  // move the robot

  const moveButton = document.querySelector("button#move-button")

  moveButton.addEventListener('click', event => {
    // get moves
    movesList = movesUl.querySelectorAll("li")
    console.log("got moves")
    console.log(movesList)

    // make each move
    console.log("let's make moves")

    // to create illusion of synchronousity, create a duration variable
    let duration = 0
    let durationIncrementer = 500
    for (let moveLiIndex = 0; moveLiIndex < movesList.length; moveLiIndex++) {
      duration += durationIncrementer
      setTimeout(function(){
        //console.log(`current li: ${moveLiIndex}`)
        // find the first child of movesUl and get it's data id
        let nextLiId = movesUl.firstElementChild.dataset.id
        let moveLi = movesUl.querySelector(`li[data-id='${nextLiId}']`);
        //console.log(moveLi)
        let direction = moveLi.className
        move(direction)
        //console.log(`moved ${direction}`)
        moveLi.remove()
        //pause for a few seconds
      }, duration)
    }
    console.log(movesList.length)

  })

  // delete a move

  movesUl.addEventListener('click', event => {
    console.log(`${event.target.closest('li')} was clicked`)

    if(event.target.matches('li')){
      let move = event.target.closest('li')
      move.remove()
    }
  })

  
});




