const textArea = document.getElementById('text-input');
import { puzzlesAndSolutions } from './puzzle-strings.js';

document.addEventListener('DOMContentLoaded', () => {
  // Load a simple puzzle into the text area
  textArea.value = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]

  for(let i = 1; i <= textArea.value.length; i++) {
    let quo = Math.floor(i / 9);
    let rem = i % 9;
    if(rem === 0){
      document.getElementById(`${arr[quo - 1] + 9}`).value = textArea.value[i - 1] === "." ? "" : textArea.value[i - 1];
    }
    else {
      document.getElementById(`${arr[quo] + rem}`).value = textArea.value[i - 1] === "." ? "" : textArea.value[i - 1];
    }
  }
});

textArea.addEventListener('input', (e)=> {
  console.log(e);
  if(e.target.value.length === 81 && e.data != 0) {
    var element = document.getElementById("error-msg");
      while (element.firstChild) {
      element.removeChild(element.firstChild);
      }
    textArea.value = e.target.value;
    let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    for(let i = 1; i <= textArea.value.length; i++) {
      let quo = Math.floor(i / 9);
      let rem = i % 9;
      if(rem === 0){
        document.getElementById(`${arr[quo - 1] + 9}`).value = textArea.value[i - 1] === "." ? "" : textArea.value[i - 1];
      }
      else {
        document.getElementById(`${arr[quo] + rem}`).value = textArea.value[i - 1] === "." ? "" : textArea.value[i - 1];
      }
    }
  }
  else {
    var tag = document.createElement("p");
     var text = document.createTextNode("Entered value should be between 1 to 9 and length of text area should be 81");
     tag.appendChild(text);
     var element = document.getElementById("error-msg");
      while (element.firstChild) {
      element.removeChild(element.firstChild);
      }
     element.appendChild(tag);
    return;
  }
})

/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/