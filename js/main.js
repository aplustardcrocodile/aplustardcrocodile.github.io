var audioFiles = ["./assets/sounds/01.m4a",
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

var face = $('#face'),
    audio = $('#audio')[0],
    isPlaying = false;

    face.on('click', function() {
        if ( !isPlaying ) {
            isPlaying = true;

            //toggle class to change image
            $(this).toggleClass('active');

            //get random files from library
            var currentAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];

            // set new random audio as source
            audio.src = currentAudio;

            // and then play it
            audio.currentTime = 0; //to make sure it is reset
            audio.play();
        }

    })

    // check when audio is complete
    audio.onended = function(){

        // reset isplaying
        isPlaying = false;
        //remove active class from face
        face.removeClass('active');
    };
