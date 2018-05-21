$( "#mozaic" ).children().mouseenter(function(){
    // $(this).css('width','300%');
    // $(this).css('z-index','999999');
    // $(this).effect('shake');
    $(this).toggle('puff','10%');


      });

      $( "#mozaic" ).children().mouseleave(function(){
        // $(this).css('width','100%');
        // $(this).css('z-index','0');
$(this).toggle('puff','10%');

          });
