(function () {
    
    'use strict';
    
    var fromAge = 14;
    var toAge = 70;

    //This is only needed if infoText should not take filtering into account 
    var areas = [
        {"area": "Finnmark", "tag": "finnmark", "deadCount": 3},
        {"area": "Troms", "tag": "troms", "deadCount": 3},
        {"area": "Nord-trøndelag", "tag": "nord-trondelag", "deadCount": 3},
        {"area": "Sør-trøndelag", "tag": "sor-trondelag", "deadCount": 5},
        {"area": "Møre og Romsdal", "tag": "more-og-romsdal", "deadCount": 3},
        {"area": "Hedmark", "tag": "hedmark", "deadCount": 3},
        {"area": "Oppland", "tag": "oppland", "deadCount": 3},
        {"area": "Sogn og fjordane", "tag": "sogn-og-fjordane", "deadCount": 1},
        {"area": "Hordaland", "tag": "hordaland", "deadCount": 5},
        {"area": "Akershus", "tag": "akershus", "deadCount": 7},
        {"area": "Østfold", "tag": "ostfold", "deadCount": 8},
        {"area": "Buskerud", "tag": "buskerud", "deadCount": 5},
        {"area": "Rogaland", "tag": "rogaland", "deadCount": 3},
        {"area": "Vest-Agder", "tag": "vest-agder", "deadCount": 3},
        {"area": "Aust-Agder", "tag": "aust-agder", "deadCount": 1},
        {"area": "Telemark", "tag": "telemark", "deadCount": 2},
        {"area": "Vestfold", "tag": "vestfold", "deadCount": 3},
        {"area": "Oslo", "tag": "oslo", "deadCount": 11},
        {"area": "Nordland", "tag": "nordland", "deadCount": 5}
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
        

             $('#closeVictimDiv').on('click', function (e,data) {
                //TODO get area
                $( '#victimsDiv' ).animate({"height" : "0px"}, 400).hide(0);
                //$('#victimsDiv').show().delay(400).hide();
            });
        
        $( ".marker" ).each(function( index ) {
            $( this ).mouseenter(function() {
                
               $(this).next().css({"opacity" : 1});
                
                var area = $( this ).attr('id');
                console.log('area: ', area);
                for(var i = 0; i < areas.length; i++){
                    console.log(areas[i].tag)
                    if(area.indexOf(areas[i].tag) > -1){
                        console.log('yay')
                        $('#infoText').html('<h3>'+  areas[i].area +'</h3><p>' + areas[i].deadCount + ' omkomne</p>');
                    }
                }
                
            });
          

            $( this ).mouseleave(function() {
               $(this).next().css({"opacity" : 0});
                //$('#infoText').html('<h3>Norge</h3><p>77 omkomne</p>');
            });
            
            $(this).on('click', function (e,data) {
                //TODO get area
                $( '#victimsDiv' ).animate({"height" : "300px"}, 400);
                $('#victimsDiv').show();
            });
        
            
            $('#ageSlider').off().on('valuesChanged', function (e,data) {
                fromAge = data.values.min;
                toAge = data.values.max;
                updateAreas();
                $('#ageSliderText').html(fromAge + ' - ' + toAge + ' år');
            });
            
            $("#ageSlider").bind("valuesChanging", function(e, data){
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
