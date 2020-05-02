
var path = localStorage.getItem("datafolderpath");
$(document).on("click", ".help-img img", function () {
  var theModal = $(this).data("target"),
  videoSRC = $(this).attr("data-video"),
  videoSRCauto =videoSRC;
   if ($(this).hasClass('static')) {
    $(theModal + ' source').attr('src', path + videoSRCauto);
    $(theModal + ' video').load();
    $('#close_fav_pop_btn').click(function (e) {
      $(theModal + ' source').attr('src', '');
      $('#video_player_pop')[0].pause();
    
  	
    });
   }else{
    $(theModal + ' source').attr('src', videoSRCauto);
    $(theModal + ' video').load();
    $('#close_fav_pop_btn').click(function (e) {
      $(theModal + ' source').attr('src', '');
      $('#video_player_pop')[0].pause();
    
  	
    });
   }
   
   
  });