window.onload = function(){

// declaring the function
function playSounds() {
  // first array
  var sounds = ["http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3",
              "http://www.stephaniequinn.com/Music/Canon.mp3",
              "http://www.stephaniequinn.com/Music/Handel%20Royal%20Fireworks%20-%2007.mp3",
              "http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2009.mp3"];
  // second array
  var oldSounds = [];



  var playSounds = function () {
    var index = Math.floor(Math.random() * (sounds.length)),
        thisSound = sounds[index];

        oldSounds.push(thisSound);
        sounds.splice(index, 1);

        if (sounds.length < 1) {
            sounds = oldSounds.splice(0, oldSounds.length);
        }

        $("#element").html("<audio autoplay><source src=\"" + thisSound + "\" type=\"audio/mpeg\"><embed src=\"" + thisSound + "\" hidden=\"true\" autostart=\"true\" /></audio>");

      }

    }

  }
