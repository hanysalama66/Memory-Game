document.querySelector(".control-buttons span").onclick = function () {
  let yourName = prompt("whats your name ?");
  if (yourName == null || yourName == "") {
    document.querySelector(".name span").innerHTML = "unwone";
  } else {
    document.querySelector(".name span").innerHTML = yourName;
  }
  document.querySelector(".control-buttons").remove();
};
let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);
// console.log(blocks.length);
let orderRange = [...Array(blocks.length).keys()];
console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);

// console.log(orderRange[0]);
// console.log(orderRange[1]);
// console.log(orderRange[2]);
// console.log(orderRange[3]);
// console.log(orderRange[4]);
// add ordeer css property to game blocks

blocks.forEach((block, index) => {
  // console.log(index);
  block.style.order = orderRange[index];
});
function shuffle(Array) {
  // setting vars
  // -1
  let current = Array.length,
    temp,
    random;
  while (current > 0) {
    // Get randome Number
    random = Math.floor(Math.random() * current);
    // Decrease length by one
    current--;
    console.log(random);
    // [1]save  curremt element in stash
    temp = Array[current];
    // [2] current element= random element
    Array[current] = Array[random];
    // [3] Random Element =current Element in stash
    Array[random] = temp;
    return Array;
  }
}
// current Array[1,2,2,3,4,5,6,7,8,9,0]
// new  Array[1,2,2,3,4,5,6,7,8,9,0]
