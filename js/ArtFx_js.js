
$(document).ready(function () {
     var channel_max = 20;                                       // number of channels
        audiochannels = new Array();
        for (a=0;a<channel_max;a++) {                                   // prepare the channels
        audiochannels[a] = new Array();
        audiochannels[a]['channel'] = new Audio();                      // create a new audio object
        audiochannels[a]['finished'] = -1;                          // expected end time for this channel
    }

    //mapster plugin commands to highlight mapped/clickable areas in images
    $('img').mapster(
    {
        fillOpacity: 0.1,
        fillColor: "FFFFFF",
        stroke: true,
        strokeColor: "805239",
        strokeOpacity: 0.8,
        strokeWidth: 4,
        singleSelect: false,
        clickNavigate: true
    });

    // $('#paris').mapster(
    // {
    //     fillOpacity: 0.1,
    //     fillColor: "ffffff",
    //     stroke: true,
    //     strokeColor: "805239",
    //     strokeOpacity: 0.8,
    //     strokeWidth: 4,
    //     singleSelect: false,
    // });

 $(".main").click(function(){
    $(".maps").hide();
    $('#myModal').modal();
    var sliderpic = $(this).attr('id');
    switch(sliderpic) {
        case "parisSlider":
            $("#parisMap").show();
            $("#tab1").html("Rain on an umbrella");
            $("#tab2").html("Rain on the street");
            $("#tab3").html("A clattering carriage");
            $("#tab4").html("Footsteps on the cobblestones");
            $("#tab5").html("A horse that doesn't like the rain");
            break;
        case "starrySlider":
            $("#starryMap").show();
            $("#tab1").html("The swirling wind");
            $("#tab2").html("Crickets chirping in the hills");
            $("#tab3").html("A nightingale hidden in a tree");
            $("#tab4").html("Church bells chiming");
            $("#tab5").html("A home filled with music");
            break;
        case "tigerSlider":
            $("#tigerMap").show();
            $("#tab1").html("Rain pouring down");
            $("#tab2").html("Thunder and lightning");
            $("#tab3").html("Wind whistling in the grass");
            $("#tab4").html("Jungle creatures in the trees");
            $("#tab5").html("The growls of the frightened tiger");
            break;
        case "sundaySlider":
            $("#sundayMap").show();
            $("#tab1").html("The happy crowd");
            $("#tab2").html("Kids playing in the park");
            $("#tab3").html("Water lapping the shore");
            $("#tab4").html("A man playing his horn");
            $("#tab5").html("A yappy little dog");
    }
 }); //end modal launch click

    $(".close").click(function() {
    resetAnimation();
    for (i=0; i<audiochannels.length; i++) {
    audiochannels[i]['channel'].pause();
    $("ul").css("z-index", "9999");
    }
}); //end close modal click

//launch sound effect playback
    $("area").click(function(){
    play_multi_sound($(this).data("audio"));
}); //end click

$("#myModal").on("shown", function() {
    animateClues(); 
}); //end shown function

function resetAnimation(){
 $(".tabs").stop().css({"left":"", "font-size": "", "text-transform":"", "padding":""}).html("");
 $("#tab6").append("<button class='btn btn-primary' type='button'>" +'Ready!'+"</button>");
};
 
 function animateClues(){
 $("#tab1").stop().animate( {"left":"0px"}, 300);
 $("#tab2").stop().delay(1300).animate( {"left":"0px"}, 300);
 $("#tab3").stop().delay(2600).animate( {"left":"0px"}, 300);
 $("#tab4").stop().delay(3900).animate( {"left":"0px"}, 300);
 $("#tab5").stop().delay(5200).animate( {"left":"0px"}, 300);
 $("#tab6").stop().delay(6500).animate( {"left":"0px"}, 300);
  };

$("#tab6").click(function(){
    $("#tab1").stop().animate( {"left": "-400px"}).delay(500).animate({"left": "-320px"}).html("umbrella");  
    $("#tab2").stop().animate( {"left": "-450px"});  
    $("#tab3").stop().animate( {"left": "-500px"});  
    $("#tab4").stop().animate( {"left": "-550px"});
    $("#tab5").stop().animate( {"left": "-600px"});
    $("#tab6").stop().animate( {"left": "-150px"}, function() {
    $("ul").css("z-index", "0");
    $("li p").css({
        "font-size":"60%", 
        "text-transform":"uppercase",
        "padding": "15px 8px"
    });
  });
}); //end "Ready!"" button click

}); //end document ready





function play_multi_sound(s) {
        for (a=0;a<audiochannels.length;a++) {
            thistime = new Date();
            if (audiochannels[a]['finished'] < thistime.getTime()) {            // is this channel finished?
                audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
                audiochannels[a]['channel'].src = document.getElementById(s).src;
                audiochannels[a]['channel'].load();
                audiochannels[a]['channel'].play();
                break;
            }
        }
    };






