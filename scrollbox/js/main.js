$(document).ready(function(){
  $textLength = $('#textBox').height();
  $scrollTop = $(window).scrollTop();
  $sideBar_length = $('#sideBar').height();
  $fix_position = $('#fixAd').offset().top;
  $fix_height = $('#fixAd').height();
  $textPosition = $('#textBox').offset().top;
  
   
   $(".ad").after('<div class="sticky-content-spacer"></div>');
   $(".ad").stick_in_parent({
   	  parent: '.row',
   	  spacer: '.sticky-content-spacer',
   	  offset_top: 10
   
   });
  
   $('.ad')
  .on('sticky_kit:bottom', function(e) {
    $(this).parent().css('position', 'static');
  })
  .on('sticky_kit:unbottom', function(e) {
    $(this).parent().css('position', 'relative');
  })


  // if($textLength > $sideBar_length) {
  //     $(window).scroll(function(){
      	
		// $scroll = $(window).scrollTop();
        
        

		// // console.log($textLength);
		
		// if($scroll >= $fix_position) {
		// 	$('#fixAd ').addClass("fixed");
            
  //           console.log($scroll+$fix_height-$textPosition-$textLength+55)
  //           if( $scroll+$fix_height+40 >= $textPosition+$textLength ){
		// 	    $('#fixAd ').removeClass("fixed");
		// 	    // $('#fixAd ').css({position:'absolute',top:$textPosition+($textLength-$fix_height)-100});
    
  //           }
  //      //      else{
		// 	    // $('#fixAd ').addClass("fixed");
		// 	    // $('#fixAd ').css('top',20);

  //      //      }


		// }else{
		// 	$('#fixAd ').removeClass("fixed");

		// }
      
  //     });

  // }
});