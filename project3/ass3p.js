var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'e85utz6tflA',
        playerVars: {
            autoplay: 0,
            controls: 0,
            showinfo: 0,
            rel: 0
        }
    });
}

playButton.addEventListener("click", function() {
    player.playVideo();
    document.querySelector(".video-view").style.backgroundColor = "#ffff00";
});

pauseButton.addEventListener("click", function() {
    player.pauseVideo(); 
    document.querySelector(".video-view").style.backgroundColor = "#cccccc";
});