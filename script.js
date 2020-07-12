(function () {
  var names = ["Yaakov", "john", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i< names.length; i++) {
      var firstLetter = names[i].charAt(0);
    if (firstLetter == "j" || firstLetter == "J" ) {
       byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }


})();

