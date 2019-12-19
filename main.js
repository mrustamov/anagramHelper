var inputword;
var infoword = "";
var match;
var InputWordCheck;

function getInputWord() {
  inputword = document.getElementById("inputWord").value;
  InputWordCheck = document.getElementById("inputWord").value;
  printtheword();
}

function printtheword() {
  document.getElementById("demo").innerHTML = inputword;
}

function printInfo() {
  document.getElementById("info").innerHTML = infoword;
}
/*
function letterDoesNotExist(i) {
  document.getElementById("inputText").style.borderColor = "red";
  infoword += inputText.charAt(i);
  printInfo();
}
*/

function getRestOfLetters(str) {
  var regex = new RegExp(/(\w)(?![^<]*>|[^<>]*<\/)/, "g");
  var inputword_regex = str.match(regex);
  if (inputword_regex) {
    return inputword_regex.join("");
  }
  return null;
}

function highlight() {
  infoword = "";
  getInputWord();
  //debugger;
  var lengthOfWord = document.getElementById("inputWord").value.length;
  console.log("Lengthofword " + lengthOfWord);
  match = 0;
  console.log("Match " + match);
  var inputText = document.getElementById("inputText").value;
  if (inputText == 0) {
    printInfo();
  }
  console.log(getRestOfLetters(inputword).length);

  for (i = 0; i < inputText.length; i++) {
    console.log("releat until " + inputText.length + 10);
    //  && (lengthOfWord-match+1!=getRestOfLetters(inputword).length  OR && InputWordCheck.includes(inputText.charAt(i)) == true
    // after matching all the letter not more checked
    if (getRestOfLetters(inputword) == null) {
      document.getElementById("inputText").style.borderColor = "red";
      infoword += inputText.charAt(i);
      printInfo();
    }

    if (getRestOfLetters(inputword)!=null) {
      if (getRestOfLetters(inputword).indexOf(inputText.charAt(i)) >= 0) {
        console.log(
          "5. Letter: " + inputText.charAt(i) + " exists in word: " + inputword
        );
        console.log(InputWordCheck.includes(inputText.charAt(i)));
        match = match + 1;
        console.log("sum " + (lengthOfWord - match));
        console.log("Match in" + match);
        console.log("Lengthofword in " + lengthOfWord);
        console.log(
          "rest of the letters: " +
            getRestOfLetters(inputword) +
            "  and length: " +
            getRestOfLetters(inputword).length
        );
        document.getElementById("inputText").style.borderColor = "green";
        // Replace untagged letter
        var re = new RegExp(
          "[" + inputText.charAt(i) + "]" + "(?![^<]*>|[^<>]*</)"
        );
        inputword = inputword.replace(
          re,
          "<span class='highlight'>" + inputText.charAt(i) + "</span>"
        );
        printtheword();
      } else {
        //getInputWord();
        console.log(
          "6. Letter: " +
            inputText.charAt(i) +
            " does not exists in word: " +
            inputword
        );
        document.getElementById("inputText").style.borderColor = "red";
        infoword += inputText.charAt(i);
        printInfo();
      }
    }
  }
}
/*
// Secpmd attampt to implement function

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
