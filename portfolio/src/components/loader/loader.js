const asciiAlphabet = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = asciiAlphabet.map((x) => String.fromCharCode(x));
const asciiNumbers = Array.from(Array(10)).map((e, i) => i + 48);
const numbers = asciiNumbers.map((x) => String.fromCharCode(x));
const fullAlphabet = alphabet.concat(numbers);

var letter_count = 0;
var loader = document.getElementById("loading");
var word = loader.innerHTML.trim();
var finished = false;
var incrementer = setTimeout(increment, 700);
var letters = document.getElementById("loading").childNodes;

loader.innerHTML = "";

for (var i = 0; i < word.length; i++) {
  loader.innerHTML += "<span>" + word.charAt(i) + "</span>";
}

setTimeout(write, 75);

function write() {
  for (var i = letter_count; i < word.length; i++) {
    var c = Math.floor(Math.random() * 36);
    letters[i].innerHTML = fullAlphabet[c];
  }
  if (!finished) {
    setTimeout(write, 75);
  }
}

function increment() {
  letters[letter_count].innerHTML = word[letter_count];
  letter_count++;
  if (letter_count >= word.length) {
    finished = true;
    setTimeout(reset, 1500);
  } else {
    setTimeout(increment, 700);
  }
}

function reset() {
  letter_count = 0;
  finished = false;
  setTimeout(increment, 700);
  setTimeout(write, 75);
}
