$( "#mozaic" ).children().click(function(){
    // $(this).css('width','300%');
    // $(this).css('z-index','999999');
    // $(this).effect('shake');
    $(this).toggle( "size", {
    to: { width: 200, height: 60 }
  }, 1000);


      });

      $( "#mozaic" ).children().click(function(){
        // $(this).css('width','100%');
        // $(this).css('z-index','0');
$(this).toggle('size');

          });
