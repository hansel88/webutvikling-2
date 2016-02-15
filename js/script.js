(function () {
    
    'use strict';
    
    var fromAge = 14;
    var toAge = 70;

    //This is only needed if infoText should not take filtering into account 
    var areas = [
        {"area": "Finnmark", "tag": "finnmark", "dead-count": 1},
        {"area": "Troms", "tag": "troms", "dead-count": 1},
        {"area": "Nord-trøndelag", "tag": "nord-trondelag", "dead-count": 1},
        {"area": "Sør-trøndelag", "tag": "sor-trondelag", "dead-count": 1},
        {"area": "Møre og Romsdal", "tag": "more-og-romsdal", "dead-count": 1},
        {"area": "Hedmark", "tag": "hedmark", "dead-count": 1},
        {"area": "Oppland", "tag": "oppland", "dead-count": 1},
        {"area": "Sogn og fjordane", "tag": "sogn-og-fjordane", "dead-count": 1},
        {"area": "Hordaland", "tag": "hordaland", "dead-count": 1},
        {"area": "Akershus", "tag": "akershus", "dead-count": 1},
        {"area": "Østfold", "tag": "ostfold", "dead-count": 1},
        {"area": "Buskerud", "tag": "finnmark", "dead-count": 1},
        {"area": "Finnmark", "tag": "finnmark", "dead-count": 1},
        {"area": "Finnmark", "tag": "finnmark", "dead-count": 1},
        {"area": "Finnmark", "tag": "finnmark", "dead-count": 1},
        {"area": "Finnmark", "tag": "finnmark", "dead-count": 1},
        {"area": "Finnmark", "tag": "finnmark", "dead-count": 1},
        {"area": "Finnmark", "tag": "finnmark", "dead-count": 1},
        {"area": "Finnmark", "tag": "finnmark", "dead-count": 1}
    ]

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
                $('#ageSliderText').html(fromAge + ' - ' + toAge + ' år');
            });
            
            $('#osloCheckbox').off().on('change', function (e) {
                updateAreas();
            });

            $('#utoyaCheckbox').off().on('change', function (e) {
                updateAreas();
            });

        });
        
    }
    
    setEvents();
    
    var updateAreas = function(){
        var includeUtoya = $('#utoyaCheckbox').is(':checked');
        var includeOslo = $('#osloCheckbox').is(':checked'); 
        
        $( ".marker" ).each(function( index ) {
            var count = 0;
            var area = $( this ).attr('id');
            for(var i = 0; i < victims.list.length; i++ ){
                if(area.toLowerCase().indexOf(victims.list[i].area) > -1){
                    if(fromAge <= victims.list[i].age && toAge >= victims.list[i].age){ //Checking age
                        if((includeOslo && ('oslo' == victims.list[i].found)) || (includeUtoya && ('utoya' == victims.list[i].found))) //Check utøya/regjeringskvartalet
                        {
                                count++;
                        }
                    }
                }
            }
            $( this ).animate({"width" : (6 + (2 * count)) + "px", "height" : (6 + (2 * count)) + "px"}, 500);
        });
    }
    
    updateAreas();

})();
