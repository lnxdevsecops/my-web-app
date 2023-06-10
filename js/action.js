$(document).ready(function(){
	$(".data h1").delay("100").slideDown(1000);
	$("#cont").addClass("datamove1");
	$("#btn1").addClass("datamove2");
	$("#name").click(function(){
		var scroll = 0;
		 $("body, html").animate({scrollTop: scroll }, 1000);
	});
	$("#ab").click(function(){
		 $("body, html").animate({scrollTop: $("#section1").offset().top - 30}, 1000);
	});
	$("#ed").click(function(){
		 $("body, html").animate({scrollTop: $("#section2").offset().top - 30}, 1000);
	});
	$("#sk").click(function(){
		 $("body, html").animate({scrollTop: $("#section3").offset().top - 30}, 1000);
	});
	$("#pt").click(function(){
		 $("body, html").animate({scrollTop: $("#pf").offset().top - 30}, 1000);
	});
	$("#cnt").click(function(){
		 $("body, html").animate({scrollTop: $("#section5").offset().top + 170}, 1000);
	});
	
	/*$("#all").click(function(){
		$("img").filter("img").toggle(1000);
	});
	$("#flw").click(function(){
		$("img").filter("#img2, #img3").toggle(1000);
	});
	$("#pln").click(function(){
		$("img").filter("#img2, #img1").toggle(1000);
	});
	$("#bdr").click(function(){
		$("img").filter("#img1, #img3").toggle(1000);
	});*/
	 $(".clc").click(function(){
        var value = $(this).attr('data-filter');
       
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('3000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('5000');
            $('.filter').filter('.'+value).show('5000');
            
        }
    });
    
    /*if ($(".clc").removeClass("active")) {
	$(this).removeClass("active");
	}
	$(this).addClass("active");*/


	$(window).scroll(function(){
		//if($(window).scrollTop + $(window).height() > $("#ga").position().top + 200){
        if($(window).scrollTop() >= $("#ga").position().top - 300) {
           	//$("#section3 h2").animate({left:"45%", opacity:"1"});
        	$("#inbar1").delay(0).animate({width:"80%"}, 500);
        	$("#inbar2").animate({width:"85%"}, 500);
        	$("#inbar3").animate({width:"75%"}, 500);
        	$("#inbar4").animate({width:"65%"}, 500);
        	$("#inbar5").animate({width:"70%"}, 500);
        	$("#inbar6").animate({width:"60%"}, 500);
        }
        if($(window).scrollTop() > 300){
     	$("#totop").fadeIn();
     }
     else{
     	$("#totop").fadeOut();
     }
     $("#totop").click(function(){
		 $("body, html").animate({scrollTop: 0}, 1000);
		});
    });

    $("#lin, #twin, #git, #fb, #ins").mouseenter(function(){
        $(this).css("color", "white");
        	$("#lin, #twin, #git, #fb, #ins").mouseleave(function(){
        		$(this).css("color", "#c733e2");
    	});
    });

     $(":input").keydown(function(){
    	$(this).css("background-color", "lightpink");
   	 });
     $(":input").keyup(function(){
    		$(this).css("background-color", "white");
     });
});