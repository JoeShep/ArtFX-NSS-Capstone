// $(document).ready(function () {
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
		
	// <audio id="multiaudio1" src="https://artfx-14my8.backliftapp.com/audio/rain-umbrella.mp3" preload="auto"></audio>
	// <audio id="multiaudio2" src="audio/footsteps-dress-shoes.aif" preload="auto"></audio>
	// <audio id="multiaudio3" src="audio/magic4.wav" preload="auto"></audio>


	// <a href="javascript:play_multi_sound('multiaudio1');">Breaking Plate</a><br />
	// <a href="javascript:play_multi_sound('multiaudio2');">Footsteps</a><br />
	// <a href="javascript:play_multi_sound('multiaudio3');">Magic!</a><br />
    

		// $(a).mouseover(function(){
		// 	play_multi_sound();
		// });
//}); //end document ready