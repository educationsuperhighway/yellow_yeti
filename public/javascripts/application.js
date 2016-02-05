$(document).ready(function() {
  var videoLoader = window.videoLoader;
  var playVideoFromFilter = $('#filter-play-button');
  var videoRow = $('#video-row');
  var video = $('#video-player');
  var experienceOtherSpeedsDropdown = $('.experience-other-dropdown')
  var experienceOtherSpeeds = $('.experience-other-speeds')
  var playVideoFromOverlay = $('#video-play-button')
  var selectStateAndDistrict = $('select.state, select.district')
  var learnMoreRow = $('.learn-more-row')

  playVideoFromFilter.on('click', function(){
    videoLoader.reload();
    videoRow.css('display', 'block');
    learnMoreRow.show();
    video.get(0).load();
    video.get(0).play();
  });

  experienceOtherSpeedsDropdown.on('click', function(){
    toggleVideoAndExperienceOtherSpeeds();
  });

  playVideoFromOverlay.on('click', function(){
    toggleVideoAndExperienceOtherSpeeds();
    // Reload the video
    // throttle the bandwidth to the one selected in the bar chart
  });

  // Activate play button when state and district are selected
  selectStateAndDistrict.on('change', function(){
    if ($("select option:selected:disabled").length == 0){
      playVideoFromFilter.removeClass('inactive-play-button');
      playVideoFromFilter.addClass('active-play-button');
    }
    else {
      playVideoFromFilter.addClass('inactive-play-button');
    }
  });

  // Toggle video and overlay on click of 'experience other speeds'
  var toggleVideoAndExperienceOtherSpeeds = function() {
    if (video.is(':visible')) {
      video.get(0).pause();
      video.css('display', 'none');
      experienceOtherSpeeds.css('display', 'block');
    }
    else {
      videoRow.css('display', 'block');
      video.css('display', 'block');
      video.get(0).play();
      experienceOtherSpeeds.css('display', 'none');
    }

  }

});
