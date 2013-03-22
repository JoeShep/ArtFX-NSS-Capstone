
	var channel_max = 20;										// number of channels
	audiochannels = new Array();
	for (a=0;a<channel_max;a++) {									// prepare the channels
		audiochannels[a] = new Array();
		audiochannels[a]['channel'] = new Audio();						// create a new audio object
		audiochannels[a]['finished'] = -1;							// expected end time for this channel
	}
	function play_multi_sound(s) {
		for (a=0;a<audiochannels.length;a++) {
			thistime = new Date();
			if (audiochannels[a]['finished'] < thistime.getTime()) {			// is this channel finished?
				audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
				audiochannels[a]['channel'].src = document.getElementById(s).src;
				audiochannels[a]['channel'].load();
				audiochannels[a]['channel'].play();
				break;
			}
		}
	};
$(document).ready(function () {
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
            break;
        case "starrySlider":
            $("#starryMap").show();
            break;
        case "tigerSlider":
            $("#tigerMap").show();
            break;
        case "sundaySlider":
            $("#sundayMap").show();
    }
 }); //end modal launch click


}); //end document ready




