//controls for video.js HTML5 video player

var myVideo = document.getElementById("my_video_1"); 

    function playPause() { 
        if (myVideo.paused) 
            myVideo.play(); 
        else 
            myVideo.pause(); 
    } 

    function makeBig() { 
        myVideo.width = 560; 
    } 

    function makeSmall() { 
        myVideo.width = 320; 
    } 

    function makeNormal() { 
        myVideo.width = 420; 
    } 

     function skip(value) {
            var video = document.getElementById("my_video_1");
            video.currentTime += value;
     }    

     function restart() {
            var video = document.getElementById("my_video_1");
            video.currentTime = 0;
        }