(function () {
    
    var fromAge = 14;
    var toAge = 70;
    var detailsDivOpen = false;

    //This is only needed if infoText should not take filtering into account 
    var areas = [
        {"area": "Finnmark", "tag": "finnmark", "deadCount": 3},
        {"area": "Troms", "tag": "troms", "deadCount": 3},
        {"area": "Nord-trøndelag", "tag": "nord-trondelag", "deadCount": 3},
        {"area": "Sør-trøndelag", "tag": "sor-trondelag", "deadCount": 5},
        {"area": "Møre og Romsdal", "tag": "more-og-romsdal", "deadCount": 2},
        {"area": "Hedmark", "tag": "hedmark", "deadCount": 2},
        {"area": "Oppland", "tag": "oppland", "deadCount": 3},
        {"area": "Sogn og fjordane", "tag": "sogn-og-fjordane", "deadCount": 1},
        {"area": "Hordaland", "tag": "hordaland", "deadCount": 5},
        {"area": "Akershus", "tag": "akershus", "deadCount": 7},
        {"area": "Østfold", "tag": "ostfold", "deadCount": 7},
        {"area": "Buskerud", "tag": "buskerud", "deadCount": 5},
        {"area": "Rogaland", "tag": "rogaland", "deadCount": 3},
        {"area": "Vest-Agder", "tag": "vest-agder", "deadCount": 2},
        {"area": "Aust-Agder", "tag": "aust-agder", "deadCount": 0},
        {"area": "Telemark", "tag": "telemark", "deadCount": 2},
        {"area": "Vestfold", "tag": "vestfold", "deadCount": 3},
        {"area": "Oslo", "tag": "oslo", "deadCount": 11},
        {"area": "Nordland", "tag": "nordland", "deadCount": 5}
    ]
    
    //Setting up age slider
    $("#ageSlider").rangeSlider({
      bounds: {min: 14, max: 70},
      step: 1,
      defaultValues:{min: 14, max: 70},
      arrows: false
    });

    showVictimDetails = function(victim){
        victimDetails = {};
        for(var i = 0; i < victims.list.length; i++){
            if(victims.list[i].name == victim){
                 $( '#victimImg' ).attr('src', victims.list[i].image);
                 $( '#victimHeader' ).text(victims.list[i].name);
                 $( '#victimMeta' ).text(victims.list[i].city + ', ' + victims.list[i].age + ' år gammel');
                 $( '#victimText' ).text(victims.list[i].description);
            }
        }
    };
    
    var setEvents = function(){
        

        $('#closeVictimDiv').on('click', function (e,data) {
            $( '#victimsDiv' ).animate({"height" : "0px"}, 400).hide(0);
            detailsDivOpen = false;
        });

        $('#mapContainer').on('click', function (e,data) {
            if(!$(e.target).hasClass('marker') && !$(e.target).hasClass('victim') && !$(e.target).is('#clickPreventionOverlay') && !$(e.target).is('#victimsList'))
           {
               if(detailsDivOpen){
                $( '#victimsDiv' ).animate({"height" : "0px"}, 400).hide(0);
                detailsDivOpen = false;
            }               
           }
        });
        
        $( ".marker" ).each(function( index ) {
            $( this ).mouseenter(function() {
                
               $(this).next().css({"opacity" : 1});
                
                var area = $( this ).attr('id');
                for(var i = 0; i < areas.length; i++){
                    if(area.indexOf(areas[i].tag) > -1){
                        $('#infoText').html('<h3>'+  areas[i].area +'</h3><p>' + areas[i].deadCount + ' omkomne</p>');
                    }
                }
            });

            $( this ).mouseleave(function() {
               $(this).next().css({"opacity" : 0});
                //$('#infoText').html('<h3>Norge</h3><p>77 omkomne</p>');
            });
            
            $(this).on('click', function (e,data) {
                var area = $( this ).attr('id');
                var areaName = '';

                //Clear in case Aust-Agder (0 victims)
                 $( '#victimImg' ).attr('src','');
                 $( '#victimHeader' ).text('');
                 $( '#victimMeta' ).text('');
                 $( '#victimText' ).text('');

                for(var j = 0; j < areas.length; j++){
                    if(area.indexOf(areas[j].tag) > -1){
                         areaName = areas[j].area;
                    }
                }

                var victimsInArea = [];
                for(var i = 0; i < victims.list.length; i++){
                    if(area.indexOf(victims.list[i].area) > -1){
                        victimsInArea.push(victims.list[i]);
                    }
                }

               var listHtml = '<ul>'
                for(var k = 0; k < victimsInArea.length; k++){
                     listHtml += '<li class="victim" onclick="showVictimDetails(' + "'" + victimsInArea[k].name + "'" + ' );">' + victimsInArea[k].name + '</li>'; 
                     if(k == 0){
                        $( '#victimImg' ).attr('src', victimsInArea[k].image);
                         $( '#victimHeader' ).text(victimsInArea[k].name);
                         $( '#victimMeta' ).text(victimsInArea[k].city + ', ' + victimsInArea[k].age + ' år gammel');
                         $( '#victimText' ).text(victimsInArea[k].description);
                     }
                } 

                listHtml += '</ul>'

                $('#victimsList').html(
                    '<h3 id="areaHeader">' + areaName + '</h3>' + listHtml
                );

                $( '#victimsDiv' ).animate({"height" : "380px"}, 400);
                $('#victimsDiv').show().delay(500);
                detailsDivOpen = true;
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
