id = 0
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

    for (let moveLiIndex = 0; moveLiIndex < movesList.length; moveLiIndex++) {
      
      console.log(`current li: ${moveLiIndex}`)
      
      // find the first child of movesUl and get it's data id
      let nextLiId = movesUl.firstElementChild.dataset.id
      console.log(nextLiId)
      let moveLi = movesUl.querySelector(`li[data-id='${nextLiId}']`);

      console.log(moveLi)

      let direction = moveLi.className
    

      move(direction)
      console.log(`moved ${direction}`)


      moveLi.remove()
      


      
    }

    console.log(movesList.length)


    // do {
    //   console.log("before move")
    //   console.log(movesList)
    //   console.log(movesUl)


    //   moveLi = movesList[0]

    //   direction = moveLi.className.toString()

    //   move(direction)

    //   moveLi.remove()
  

    //   console.log("after move")
    //   console.log(movesList)
    //   console.log(movesUl)
      

      
      
    // } while (movesList.length != 0); 
      

      
      
    
    // movesList.forEach(
    //   moveLi => {
    //     direction = moveLi.className.toString()
        

    //     move(direction)
        
       

    //     // movesList.shift

    //     // movesUl.removeChild(moveLi)

          
    // });


  })
  


    
  
});




