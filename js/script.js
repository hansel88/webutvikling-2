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
    
    setEvents();
    
    var updateMap = function(){
        updateAreas();
    }
    
    var updateAreas = function(){
        
        var fromAge = 16; //Get actual value
        var toAge = 30; //Get actual value
        var location = 'utoya'; //Get actualy value
        
        $( ".marker" ).each(function( index ) {
            var count = 0;
            var area = $( this ).attr('id');
            for(var i = 0; i < victims.list.length; i++ ){
                if(fromAge <= victims.list[i].age && toAge >= victims.list[i].age){
                    if(true)//Check utøya/regjeringskvaralter
                    {
                        count++;
                    }
                }
            }
            console.log(count);
            $( this ).css({"width" : (5 + (2 * count)) + "px", "height" : (5 + (2 * count)) + "px"});
        });
    }
    
    updateMap();

})();
