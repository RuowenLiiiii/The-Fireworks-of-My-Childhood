var videoPlayer = document.getElementById('videoPlayer');
var button = document.getElementById('showVideo');

var videos = ['图片/vv1.mp4', '图片/vv2.mp4', '图片/vv3.mp4', '图片/vv4.mp4', '图片/vv5.mp4'];
var currentVideoIndex = 0;

button.addEventListener('click', function() {
    videoPlayer.style.display = 'block';
    button.style.display = 'none'; 
    videoPlayer.play(); 
});

videoPlayer.addEventListener('click', function() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoPlayer.setAttribute('src', videos[currentVideoIndex]);
    videoPlayer.play();
});