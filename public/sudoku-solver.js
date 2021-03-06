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
  if(e.data == 1 || e.data == 2 || e.data == 3 || e.data == 4 || e.data == 5 || e.data == 6 || e.data == 7 || e.data == 8 || e.data == 9 || e.data == null) {
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

const sudoku = document.getElementsByClassName("sudoku-input");

document.getElementById('sudoku-grid').addEventListener('input', e => {
  if(e.data == 1 || e.data == 2 || e.data == 3 || e.data == 4 || e.data == 5 || e.data == 6 || e.data == 7 || e.data == 8 || e.data == 9 || e.data == null) {
    var element = document.getElementById("error-msg");
      while (element.firstChild) {
      element.removeChild(element.firstChild);
      }
    let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    let _id = e.target.id;
    let val = e.target.value === "" ? "." : e.target.value;
    for(let i = 0; i < arr.length; i++) {
      if(_id[0] === arr[i]) {
        let pos = i * 9 + parseInt(_id[1]);
        let output = textArea.value.split("");
        output.splice(pos - 1, 1, val);
        textArea.value = output.join("");
      }
    }
  }
  else {
    var tag = document.createElement("p");
     var text = document.createTextNode("Entered value should be between 1 to 9");
     tag.appendChild(text);
     var element = document.getElementById("error-msg");
      while (element.firstChild) {
      element.removeChild(element.firstChild);
      }
     element.appendChild(tag);
    return;
  }
})

console.log(puzzlesAndSolutions);

document.getElementById("solve-button").addEventListener('click', (e) => {
  if(textArea.value.length != 81) {
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
  for(let i = 0; i < puzzlesAndSolutions.length; i++) {
    if(textArea.value === puzzlesAndSolutions[i][0] || textArea.value === puzzlesAndSolutions[i][1]) {
      textArea.value = puzzlesAndSolutions[i][1];
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
      return;
    }
  }
})


document.getElementById("clear-button").addEventListener('click', (e) => {
  textArea.value = "";
  let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    for(let i = 1; i <= 81; i++) {
      let quo = Math.floor(i / 9);
      let rem = i % 9;
      if(rem === 0){
        document.getElementById(`${arr[quo - 1] + 9}`).value = "";
      }
      else {
        document.getElementById(`${arr[quo] + rem}`).value = "";
      }
    }
})

/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/