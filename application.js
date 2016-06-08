
    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'audio.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('.play').click(function() {
            audioElement.Play();
        });

        $('.pause').click(function() {
            audioElement.Pause();
        });
    });
