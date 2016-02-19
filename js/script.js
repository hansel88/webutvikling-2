(function () {
    
    var fromAge = 14;
    var toAge = 70;
    var detailsDivOpen = false;

    //This is only needed if infoText should not take filtering into account 
    /*var areas = [
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
        {"area": "Oslo", "tag": "oslo", "deadCount": 14},
        {"area": "Nordland", "tag": "nordland", "deadCount": 5}
    ]*/
    var areas = dataModule.areas;
    var victims = dataModule.victims;
    console.log(areas);
    
    //Setting up age slider
    $("#ageSlider").rangeSlider({
      bounds: {min: 14, max: 70},
      step: 1,
      defaultValues:{min: 14, max: 70},
      arrows: false
    });

    //set victim details in view
    showVictimDetails = function(victim){
        victimDetails = {};
        for(var i = 0; i < victims.length; i++){
            if(victims[i].name == victim){
                 $( '#victimImg' ).attr('src', victims[i].image);
                 $( '#victimHeader' ).text(victims[i].name);
                 $( '#victimMeta' ).text(victims[i].city + ', ' + victims[i].age + ' år gammel');
                 $( '#victimText' ).text(victims[i].description);
            }
        }
    };

    //animate area markers and cities to their respecitive locations
    animateCitiesAndAreas = function(){
        $( '#akershusMarker' ).animate({"top" : "620px", "left" : "376px"}, 2000);
        $( '#aust-agderMarker' ).animate({"top" : "690px", "left" : "290px"}, 1500);
        $( '#buskerudMarker' ).animate({"top" : "590px", "left" : "307px"}, 2000);
        $( '#finnmarkMarker' ).animate({"top" : "110px", "left" : "650px"}, 2000);
        $( '#hedmarkMarker' ).animate({"top" : "550px", "left" : "390px"}, 2000);
        $( '#hordalandMarker' ).animate({"top" : "600px", "left" : "260px"}, 1500);
        $( '#more-og-romsdalMarker' ).animate({"top" : "490px", "left" : "280px"}, 3000);
        $( '#nord-trondelagMarker' ).animate({"top" : "400px", "left" : "410px"}, 2000);

        $( '#nordlandMarker' ).animate({"top" : "270px", "left" : "468px"}, 2000);
        $( '#opplandMarker' ).animate({"top" : "540px", "left" : "330px"}, 2500);
        $( '#osloMarker' ).animate({"top" : "622px", "left" : "362px"}, 2000);
        $( '#ostfoldMarker' ).animate({"top" : "654px", "left" : "373px"}, 2000);
        $( '#rogalandMarker' ).animate({"top" : "680px", "left" : "232px"}, 2000);
        $( '#sogn-og-fjordaneMarker' ).animate({"top" : "530px", "left" : "260px"}, 1000);
        $( '#sor-trondelagMarker' ).animate({"top" : "465px", "left" : "370px"}, 2500);
        $( '#telemarkMarker' ).animate({"top" : "640px", "left" : "300px"}, 2000);
        $( '#tromsMarker' ).animate({"top" : "150px", "left" : "550px"}, 2000);
        $( '#vest-agderMarker' ).animate({"top" : "690px", "left" : "257px"}, 2000);
        $( '#vestfoldMarker' ).animate({"top" : "657px", "left" : "343px"}, 1500);

        $( '#osloCity' ).animate({"top" : "626px", "left" : "367px"}, 1500);
        $( '#kirkenesCity' ).animate({"top" : "75px", "left" : "745px"}, 3000);
        $( '#altaCity' ).animate({"top" : "95px", "left" : "640px"}, 2000);

        $( '#hammerfestCity' ).animate({"top" : "55px", "left" : "642px"}, 1500);
        $( '#tromsoCity' ).animate({"top" : "113px", "left" : "565px"}, 3000);
        $( '#harstadCity' ).animate({"top" : "160px", "left" : "510px"}, 2000);

        $( '#narvikCity' ).animate({"top" : "190px", "left" : "520px"}, 1500);
        $( '#bodoCity' ).animate({"top" : "240px", "left" : "476px"}, 3000);
        $( '#moIranaCity' ).animate({"top" : "300px", "left" : "460px"}, 2000);

        $( '#namsosCity' ).animate({"top" : "400px", "left" : "400px"}, 1500);
        $( '#trondheimCity' ).animate({"top" : "450px", "left" : "380px"}, 3000);
        $( '#kristiansundCity' ).animate({"top" : "450px", "left" : "340px"}, 2000);

        $( '#rorosCity' ).animate({"top" : "482px", "left" : "396px"}, 1500);
        $( '#moldeCity' ).animate({"top" : "470px", "left" : "294px"}, 3000);
        $( '#aalesundCity' ).animate({"top" : "482px", "left" : "270px"}, 2000);

        $( '#stavangerCity' ).animate({"top" : "670px", "left" : "230px"}, 1500);
        $( '#bergenCity' ).animate({"top" : "594px", "left" : "232px"}, 3000);
        $( '#haugesundCity' ).animate({"top" : "634px", "left" : "226px"}, 2000);

        $( '#kristiansandCity' ).animate({"top" : "716px", "left" : "282px"}, 1500);
        $( '#tonsbergCity' ).animate({"top" : "663px", "left" : "355px"}, 3000);
        $( '#arendalCity' ).animate({"top" : "700px", "left" : "310px"}, 2000);

        $( '#mossCity' ).animate({"top" : "658px", "left" : "366px"}, 1500);
        $( '#drammenCity' ).animate({"top" : "640px", "left" : "356px"}, 3000);
        $( '#lillehammerCity' ).animate({"top" : "570px", "left" : "360px"}, 2000);

        $( '#hamarCity' ).animate({"top" : "590px", "left" : "380px"}, 1500);
        $( '#fredrikstadCity' ).animate({"top" : "668px", "left" : "370px"}, 3000);
        $( '#bronnoysundCity' ).animate({"top" : "344px", "left" : "420px"}, 2000);

        $( '#askoyCity' ).animate({"top" : "585px", "left" : "225px"}, 1500);
        $( '#kautokeinoCity' ).animate({"top" : "140px", "left" : "640px"}, 3000);
        $( '#karasjokCity' ).animate({"top" : "100px", "left" : "680px"}, 2000);

        $( '#mehamnCity' ).animate({"top" : "24px", "left" : "710px"}, 1500);
        $( '#bardufossCity' ).animate({"top" : "160px", "left" : "570px"}, 3000);
        $( '#reineCity' ).animate({"top" : "210px", "left" : "440px"}, 2000);

        $( '#hattfjelldalCity' ).animate({"top" : "336px", "left" : "464px"}, 1500);
        $( '#sorliCity' ).animate({"top" : "406px", "left" : "450px"}, 3000);
        $( '#engerdalCity' ).animate({"top" : "540px", "left" : "406px"}, 2000);

        $( '#lutnesCity' ).animate({"top" : "570px", "left" : "420px"}, 1500);
        $( '#skotterudCity' ).animate({"top" : "620px", "left" : "410px"}, 3000);
        $( '#maloyCity' ).animate({"top" : "510px", "left" : "236px"}, 2000);

        $( '#hardbakkeCity' ).animate({"top" : "554px", "left" : "224px"}, 3000);
        $( '#egersundCity' ).animate({"top" : "702px", "left" : "244px"}, 2000);
    }
    
    var setEvents = function(){

        //When user has scrolled to bottom, fire the animate function after a .5 second delay
        $(window).scroll(function() {
           if($(window).scrollTop() + $(window).height() == $(document).height()) {
            setTimeout(
              function() 
              {
                 animateCitiesAndAreas();
              }, 500);
           }
        });

        //Scoll to bottom of page when arrow is clicked
        $('#scrollButton').on('click', function (e,data) {
              $("html, body").animate({ scrollTop: $(document).height() }, "slow");
              return false;
        });
        
        //Close detail view from button
       /* $('#closeVictimDiv').on('click', function (e,data) {
            $( '#victimsDiv' ).animate({"height" : "0px"}, 400).hide(0);
            detailsDivOpen = false;
        });*/

        //Close detail view when clicking outside div (with a few exceptions, like area markers etc)
        $('#mapContainer').on('click', function (e,data) {
            if(!$(e.target).hasClass('marker') && !$(e.target).hasClass('victim') && !$(e.target).is('#clickPreventionOverlay') && !$(e.target).is('#victimsList'))
           {
               if(detailsDivOpen){
                $( '#victimsDiv' ).animate({"height" : "0px"}, 400).hide(0);
                detailsDivOpen = false;
            }               
           }
        });
        
        //Adding all events for the area markers
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
                if (!detailsDivOpen)
                    $('#infoText').html('<h3>Norge</h3><p>77 omkomne</p>');
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
                for(var i = 0; i < victims.length; i++){
                    if(area.indexOf(victims[i].area) > -1){
                        victimsInArea.push(victims[i]);
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

                $( '#victimsDiv' ).animate({"height" : "400px"}, 400);
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
    
    //Set size of area markers depending on how many victims they have in comparison to current filter
    var updateAreas = function(){
        var includeUtoya = $('#utoyaCheckbox').is(':checked');
        var includeOslo = $('#osloCheckbox').is(':checked'); 
        
        $( ".marker" ).each(function( index ) {
            var count = 0;
            var area = $( this ).attr('id');
            for(var i = 0; i < victims.length; i++ ){
                if(area.toLowerCase().indexOf(victims[i].area) > -1){
                    if(fromAge <= victims[i].age && toAge >= victims[i].age){ //Checking age
                        if((includeOslo && ('oslo' == victims[i].found)) || (includeUtoya && ('utoya' == victims[i].found))) //Check utøya/regjeringskvartalet
                        {
                                count++;
                        }
                    }
                }
            }
            var scaling = 0.5 + count / 11;
           $(this).css('transform', 'scale(' + scaling + ')');
        });
    }

    setEvents();
    updateAreas();

})();
