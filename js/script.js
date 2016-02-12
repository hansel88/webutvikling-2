(function () {
    
    'use strict';
    
    var fromAge = 14;
    var toAge = 70;

    console.log(victims);
    
    //Setting up age slider
    $("#ageSlider").rangeSlider({
      bounds: {min: 14, max: 70},
      step: 1,
      defaultValues:{min: 14, max: 70},
      arrows: false
    });
    
    var setEvents = function(){
        
        $( ".marker" ).each(function( index ) {
            $( this ).mouseenter(function() {
                
               $(this).next().css({"opacity" : 1});
            });
          

            $( this ).mouseleave(function() {
               $(this).next().css({"opacity" : 0});
            });
        
            
            $('#ageSlider').off().on('valuesChanged', function (e,data) {
                fromAge = data.values.min;
                toAge = data.values.max;
                updateAreas();
            });
            
            $('#locationFilter').off().on('change', function (e) {
                updateAreas();
            });

        });
        
    }
    
    setEvents();
    
    var updateAreas = function(){
        var location = $('#locationFilter').val();
        
        $( ".marker" ).each(function( index ) {
            var count = 0;
            var area = $( this ).attr('id');
            console.log(area);
            for(var i = 0; i < victims.list.length; i++ ){
                if(area.toLowerCase().indexOf(victims.list[i].area) > -1){
                    if(fromAge <= victims.list[i].age && toAge >= victims.list[i].age){ //Checking age
                        console.log(fromAge <= victims.list[i].age );
                        console.log(toAge >= victims.list[i].age);
                        if(location == 'all' || (location == victims.list[i].found)) //Check utøya/regjeringskvartalet
                        {
                                count++;
                        }
                    }
                }
            }
            console.log(count);
            $( this ).animate({"width" : (6 + (2 * count)) + "px", "height" : (6 + (2 * count)) + "px"}, 300);
        });
    }
    
    updateAreas();

})();
