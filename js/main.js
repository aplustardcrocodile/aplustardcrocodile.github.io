var sounds = ["./assets/sounds/01.m4a",
        "./assets/sounds/02.m4a",
        "./assets/sounds/03.m4a",
        "./assets/sounds/04.m4a",
        "./assets/sounds/05.m4a",
        "./assets/sounds/06.m4a",
        "./assets/sounds/07.m4a",
        "./assets/sounds/08.m4a",
        "./assets/sounds/09.m4a",
        "./assets/sounds/10.m4a",
        "./assets/sounds/11.m4a",
        "./assets/sounds/12.m4a",
        "./assets/sounds/13.m4a",
        "./assets/sounds/14.m4a",
        "./assets/sounds/15.m4a",
        "./assets/sounds/16.m4a",
        "./assets/sounds/18.m4a",
        "./assets/sounds/19.m4a",
        "./assets/sounds/20.m4a"
    ],
    oldSounds = [];

var playSounds = function() {
    var index = Math.floor(Math.random() * (sounds.length)),
        thisSound = sounds[index];

    oldSounds.push(thisSound);
    sounds.splice(index, 1);

    if (sounds.length < 1) {
        sounds = oldSounds.splice(0, oldSounds.length);
    }

    $("#element").html("<embed src=\"" + thisSound + "\" hidden=\"true\" autostart=\"true\" />");
    // have just one image instead and replace it in jquery with gif using background-image source

    // $("#face").css("background-image", "url(assets/images/face-animated.gif)");
    //
    // $("#face").toggleClass("active", "still");

        $("#face").mouseover(function() {
      $("#face").addClass("active");
    });

    $("#face").mouseleave(function() {
      $("#face").removeClass("active");
    });



}
