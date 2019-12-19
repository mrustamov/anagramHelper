var inputword;
var infoword = "";

function getInputWord() {
  inputword = document.getElementById("inputWord").value;
  printtheword();
}

function printtheword() {
  document.getElementById("demo").innerHTML = inputword;
}

function printInfo() {
  document.getElementById("info").innerHTML = infoword;
}

function letterDoesNotExist(inputtext, i) {
  console.log(
    "Letter: " +
      inputtext.charAt(i) +
      " does not exists in word or rest of it: " +
      getRestOfLetters(inputword)
  );
  document.getElementById("inputText").style.borderColor = "red";
  infoword += inputtext.charAt(i);
  printInfo();
}

function getRestOfLetters(str) {
  var regex = new RegExp(/(\w)(?![^<]*>|[^<>]*<\/)/, "g");
  var inputword_regex = str.match(regex);
  if (inputword_regex) {
    return inputword_regex.join("");
  }
  return null;
}

function replace(inputtext, i) {
  console.log(
    "Letter: " +
      inputtext.charAt(i) +
      " exists in word or rest of it: " +
      getRestOfLetters(inputword)
  );
  document.getElementById("inputText").style.borderColor = "green";
  // Replace untagged letter
  var re = new RegExp("[" + inputtext.charAt(i) + "]" + "(?![^<]*>|[^<>]*</)");
  inputword = inputword.replace(
    re,
    "<span class='highlight'>" + inputtext.charAt(i) + "</span>"
  );
  printtheword();
}

function highlight() {
  console.clear();
  infoword = "";
  getInputWord();
  var inputText = document.getElementById("inputText").value;
  console.log("Length: " + inputText.length);
  if (inputText == 0) {
    printInfo();
  }
  for (i = 0; i < inputText.length; i++) {
    if (getRestOfLetters(inputword) == null) {
      letterDoesNotExist(inputText, i);
    }
    if (getRestOfLetters(inputword) != null) {
      if (getRestOfLetters(inputword).indexOf(inputText.charAt(i)) >= 0) {
        replace(inputText, i);
      } else {
        letterDoesNotExist(inputText, i);
      }
    }
  }
}
/*
var inputWord = document.getElementById("inputWord");
if (inputWord) {
  inputWord.addEventListener("input", onInputProcessor);
}

function onInputProcessor() {
  document.getElementById("effect").innerHTML = getInputWordForProcessor();
}

function getInputWordForProcessor() {
  var inputword = document.getElementById("inputWord").value;
  return inputword;
}
*/
