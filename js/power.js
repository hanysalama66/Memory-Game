document.querySelector(".control-buttons span").onclick = function () {
  let yourName = prompt("whats your name ?");
  if (yourName == null || yourName == "") {
    document.querySelector(".name span").innerHTML = 'unwone';
  } else {
    document.querySelector(".name span").innerHTML = yourName;
  }

  // Remove Splash Screen
  document.querySelector(".control-buttons").remove();
};

// Effect Duration
let duration = 1000;

// Select Blocks Container
let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);
// console.log(blocks.length);
let orderRange = Array.from(Array(blocks.length).keys());


shuffle(orderRange);

blocks.forEach((block, index) => {
  // Add CSS Order Property
  block.style.order = orderRange[index];
  // add click event
  //  add click event \
  block.addEventListener('click', function () {
    // Trigger The Flip Block Function
    flipBlock(block);
  });
});
function flipBlock(selectedBlock) {
  // Add Class is-flipped
  selectedBlock.classList.add('is-flipped');
  // collect All Flipped cards
  // selectedBlock.classList.add('is-flipped');
  let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));


  //  if theres Two selected blocks
  if (allFlippedBlocks.length === 2) {
    // console.log('Tow flippedBlock ');
    // stop clicking function
    stopClicking();
    // check Matched block
    checkMatchedBlock(allFlippedBlocks[0], allFlippedBlocks[1]);;
    // check matched Block function
  }
}
function stopClicking() {
  blocksContainer.classList.add('no-clicking');
 
  setTimeout(() => {
    blocksContainer.classList.remove('no-clicking');
  }, duration);
}
// function check matched block

function checkMatchedBlock(firstBlock, secondBlock) {
  // console.log(triesElement)
    let triesElement = document.querySelector('.tries span');

  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');
    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');
    // document.getElementById('success').play();
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        setTimeout(() => {
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');
    }, duration)

  }
}

function shuffle(array) {
  // setting vars
  // -1
  let current = array.length,
    temp,
    random;
  while (current > 0) {
    // Get randome Number
    random = Math.floor(Math.random() * current);
    // Decrease length by one
    current--;
    // console.log(random);
    // current Array[1,2,3,4,5,6,7,4,8,9,10]
    // new Array[1,2,3,4,5,6,7,4,8,9,10]
    // [1]save  curremt element in stash
    temp = array[current];
    // [2] current element= random element
    array[current] = array[random];
    // [3] Random Element =current Element in stash
    array[random] = temp;
  }
  return array;
}
// current Array[1,2,2,3,4,5,6,7,8,9,0]
// new  Array[1,2,2,3,4,5,6,7,8,9,0]
// Flip Block Function


