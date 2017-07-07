/*anim*/
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
/*youtube*/
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;

      function onYouTubeIframeAPIReady() {
          player = new YT.Player('ytplayer', {
              events: {
                  'onReady': onPlayerReady
              }
          });
      }

      function onPlayerReady() {
          player.playVideo();
          // Mute!
          player.mute();
      }
/*text first screen*/
      sectionText = ['танцуй', 'учись', 'развивайся', 'слушай', 'будь лучшим', 'смотри'];
      var sectionId = 0;

      setInterval(function () {
          $('.head span').fadeOut(300, function () {
              if (sectionId == sectionText.length-1) {
                  sectionId = 0;
              } else {
                  sectionId++;
              }
              $('.head span').text(sectionText[sectionId]);
              $('.head span').fadeIn(300);
          });


      }, 3000);
