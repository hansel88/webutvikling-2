(function () {
    
    'use strict';

    console.log(victims);
    
    var setEvents = function(){
        
        $( ".marker" ).each(function( index ) {
            $( this ).mouseenter(function() {
               $(this).next().css({"opacity" : 1});
            });
          

            $( this ).mouseleave(function() {
               $(this).next().css({"opacity" : 0});
            });
        });
        
    }
    
    var updateMap = function(){
        
        $( ".marker" ).each(function( index ) {
            var area = $( this ).attr('id');
            for(var i = 0; i < victims.list.length; i++ ){
                if()
            }
        });
    }
    
    

})();
