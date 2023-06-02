// Get the DODGER element
const dodger = document.getElementById('dodger');

// Function to move the DODGER to the left
function moveDodgerLeft() {
  const currentPosition = parseInt(dodger.style.left);
  const newPosition = currentPosition - 10;
  
  if (newPosition >= 0) {
    dodger.style.left = newPosition + 'px';
  }
}

//Function to move the DODGER to the right
function moveDodgerRight() {
    const currentPosition = parseInt(dodger.style.left);
    const newPosition = currentPosition + 10;
    
    const maxWidth = document.getElementById('game').offsetWidth - dodger.offsetWidth;
    if (newPosition <=360) {
      dodger.style.left = newPosition + 'px';
    }
  }

  
