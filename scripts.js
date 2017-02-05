

function init(){
  haveNancySay('Hellow sweetie , what can I call you?', 35);
}

function textEntered(){
  var input = document.getElementById('textbox').value;

  if (input.toUpperCase() == "DYLAN")
    haveNancySay('Wow, what a cool name, '+input+', can I have your autograph?', 35);
  else {
    haveNancySay('Oh, hi '+input+'... that\'s a strange name.', 35);
  }
}

function haveNancySay(text, speed){
  var index = 0;
  var typingIndex = 0;
  var nancyDialog = document.getElementById('nancyDialog');

  // make nancy's mouth closed after dialog finishes
  if (text.length % 2 == 0) index += 1;

  // set interval function for animating nancy and typing dialog
  var typeDialogFunc = setInterval(function(){
    nancyDialog.innerHTML = text.substring(0, typingIndex++);

    // slow down animation relative to speed
    if (typingIndex % 2 == 0){
      document.getElementById('nancy'+(++index % 2)).style.width = '0%';
      document.getElementById('nancy'+((index+1) % 2)).style.width = '50%';
    }

    // exit this interval function when the dialog is finished
    // also provide textbox for user input
    if (text.length <= typingIndex-1) {
      clearInterval(typeDialogFunc);
      nancyDialog.innerHTML += document.getElementById('textboxForm').innerHTML;
    }
  }, speed);
}
