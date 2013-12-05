/* --------------------------------------------
element-slider

Version: 	0.1
Author:		Jeiel Libert
URL: 		http://jeiellibert.com/
Copyright: 	(c)2013 by Jeiel Libert
License: 	GNU License (see LICENSE file)
----------------------------------------------- */

function elementSlider(
	slideGroup, //id of container holding slides
	slideType, //type defined for slides (div, article, section)
	slideClass, //class attribute for slides
	paginator, //show paginator true/false
	speed //speed of slide transitions
){
	var slideLock = false; //used to control sliding click/animation rate
	try{ //check and define params
		if(typeof slideGroup=='undefined'||(!slideGroup))
			throw new Error('Param \'slideGroup\' has not been defined or is invalid.');
		if(!slideType)
			throw new Error('Param \'slideType\' has not been defined or is invalid.');
		slideClass=(slideClass===''||slideClass==null)? 'slide':slideClass; //default value of slide class='slide'
		paginator=(paginator===''||paginator==null)?true:false; //default value of paginator is true
		var exp=/^[0-9]+$/;
		speed=(speed&&exp.test(speed))?speed:1000; //default speed of transition is 1000
	}catch(e){
		window.console.error(e.message);
	}
	var arr=$("#"+slideGroup).children(slideType+'[class='+slideClass+']'); //get all the slideTypes within the slideGroup with defined slideClass
	
	if (arr.length - 1 <= 0) //if there is only one slide remove the arrows and paginator and end the script
	{
        $("#paginator").remove();
        $(".switch-wrapper").remove();
		return;
    }
	
	if(paginator==false) //if the paginator is set to false remove it and hide the slides
	{
		$("#paginator").remove();
		$(arr).each(function (key, value) {
			if(key!=0)$("#" + $(value).attr("id")).hide(); //hide all but the first slide
		});
	}
	else{
        $("#paginator ul").css("width", (25 * arr.length) + "px"); //set the unordered list width based on the number of paginator list items
        $(arr).each(function (key, value) { //loop through arr and set the paginator
            if (key == 0) {
                $("#paginator ul").append("<li id='paginator_" + $(value).attr("id") + "' class='checked'></li>"); //default first paginator as checked
            } else {
                $("#paginator ul").append("<li id='paginator_" + $(value).attr("id") + "' class='unchecked'></li>"); //default all other paginators as unchecked
                $("#" + $(value).attr("id")).hide(); //hide all but the first slide
            }
        });
    }
	
	
	//Right Switch
    $("#right-switch").click(function () {
		if (slideLock != true) {
            slideLock = true; //lock slide animation
			//loop through arr for the visible div
            $(arr).each(function (key, value) {
				if ($("#" + $(value).attr("id")).is(":visible")) {
					if (key == (arr.length-2)) //check if current slide matches the second to last key of arr 
                        $("#right-switch").fadeOut(speed); //hide right arrow switch when navigating to last slide
					var next=++key; //set next slide value
					if(next>arr.length-1) //if next slide is out of range exit script
						return;
					if(next==1)
                        $("#left-switch").fadeIn(speed); //show left arrow switch when navigating from start
					if(paginator==true)
						$("#paginator_" + $(value).attr("id")).attr("class", "unchecked"); //set current paginator as unchecked
					
					$("#" + $(value).attr("id")).hide("slide", { direction: "left" }, speed, function () { //hide the current div
						$(arr).each(function(key, value){
							if(next==key){
								if(paginator==true)
									$("#paginator_" + $(value).attr("id")).attr("class", "checked");
								$("#" + $(value).attr("id")).show("slide", { direction: "right" }, speed)
								.effect("bounce", { direction: "right", distance: 13, times: 2 }, 200, function(){slideLock=false;});
								return;
							}
						});
					});
					return;
				}
			});
		}
	});
	
	//Left Switch
    $("#left-switch").click(function () {
		if (slideLock != true) {
            slideLock = true; //lock slide animation
            //loop through div_array for the visible div
            $(arr).each(function (key, value) {
                if ($("#" + $(value).attr("id")).is(":visible")){
					if(key==(arr.length - 1))
						$("#right-switch").fadeIn(speed);
					var prev=--key; //set previous slide value
					if(prev<0)
						return;
                    if (prev == 0)
						$("#left-switch").fadeOut(speed); //hide left arrow switch when navigating to first slide
					if(paginator==true)
						$("#paginator_" + $(value).attr("id")).attr("class", "unchecked");//set current paginator as unchecked
						
					$("#" + $(value).attr("id")).hide("slide", { direction: "right" }, speed, function () { //hide the current div
						$(arr).each(function(key, value){
							if(prev==key){
								if(paginator==true)
									$("#paginator_" + $(value).attr("id")).attr("class", "checked");
								$("#" + $(value).attr("id")).show("slide", { direction: "left" }, speed)
								.effect("bounce", { direction: "left", distance: 13, times: 2 }, 200, function(){slideLock=false;});
								return;
							}
						});
					});
					return;
				}
			});
		}
	});
	
	//Navigation
	$('.slide-nav').click(navigateSlides);
	$('#paginator li').click(navigateSlides);
	
	//Nav function
	function navigateSlides() {
	    if (slideLock != true) {
	        slideLock = true;
			
			if($(this).attr("class")=='checked'||$(this).attr("class")=='unchecked'){
				var target="#"+$(this).attr("id").substring(10);
			}else{
				var target = $(this).attr("href"); //get the slideType id defined in the href attribute
			}

	        if ($(target).is(":hidden")) {
	            var target_element = document.getElementById($(target).attr("id"));
	            var target_pos = $.inArray(target_element, arr);

	            $(arr).each(function (key, value) {
	                if ($("#" + $(value).attr("id")).is(":visible")) {
	                    if (target_pos == 0) {
	                        $("#left-switch").fadeOut(speed);
	                    } else if (target_pos > 0) {
	                        $("#left-switch").fadeIn(speed);
	                    }
	                    if (target_pos < arr.length - 1) {
	                        $("#right-switch").fadeIn(speed);
	                    } else if (target_pos == arr.length - 1) {
	                        $("#right-switch").fadeOut(speed);
	                    }

	                    if (key < target_pos) {
	                        var shuffle = setInterval(function () {

	                            $("#" + $(arr[key]).attr("id")).hide("slide", { direction: "left" }, speed, function () {
	                                $("#" + $(arr[++key]).attr("id")).show("slide", { direction: "right" }, speed)
									.effect("bounce", { direction: "right", distance: 13, times: 2 }, 200);
	                            });

	                            if (key >= target_pos - 1)
	                                clear();
	                        }, speed * 2);
	                    } else if (key > target_pos) {
	                        var shuffle = setInterval(function () {

	                            $("#" + $(arr[key]).attr("id")).hide("slide", { direction: "right" }, speed, function () {
	                                $("#" + $(arr[--key]).attr("id")).show("slide", { direction: "left" }, speed)
									.effect("bounce", { direction: "left", distance: 13, times: 2 }, 200);
                                });

	                            if (key <= target_pos+1)
	                                clear();
	                        }, speed*2);
	                    }
	                    function clear() {
	                        clearInterval(shuffle);

	                        setTimeout(function () {
	                            if (paginator == true) {
	                                $("#paginator_" + $(target).attr("id")).attr("class", "checked");
	                                $("#paginator_" + $(value).attr("id")).attr("class", "unchecked");
	                            }
	                            slideLock = false; return;
	                        }, speed);
	                    }
	                }
	            });
	        }
	        else {
	            slideLock = false; return;
	        }
	    }
	}
	
	
};