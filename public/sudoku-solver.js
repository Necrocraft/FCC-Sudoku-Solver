const textArea = document.getElementById('text-input');
import { puzzlesAndSolutions } from './puzzle-strings.js';

document.addEventListener('DOMContentLoaded', () => {
  // Load a simple puzzle into the text area
  textArea.value = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
});

textArea.value = "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";

/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/

console.log(textArea.value.length);

let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]

for(let i = 1; i <= textArea.value.length; i++) {
  let quo = Math.floor(i / 9);
  let rem = i % 9;
  if(rem === 0){
    if(textArea.value[i - 1] == ".") {
      document.getElementById(`${arr[quo - 1] + 9}`).value = "";
    } else {
      document.getElementById(`${arr[quo - 1] + 9}`).value = textArea.value[i - 1];
    }
  }
  else {
    if(textArea.value[i - 1] == ".") {
      document.getElementById(`${arr[quo - 1] + 9}`).value = "";
    } else {
      document.getElementById(`${arr[quo - 1] + 9}`).value = textArea.value[i - 1];
    }
  }
  console.log(i);
}