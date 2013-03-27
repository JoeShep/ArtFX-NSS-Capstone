$(document).ready(function () {
  var channel_max = 20; // number of channels
  audiochannels = new Array();
  for (a = 0; a < channel_max; a++) { // prepare the channels
    audiochannels[a] = new Array();
    audiochannels[a]['channel'] = new Audio(); // create a new audio object
    audiochannels[a]['finished'] = -1; // expected end time for this channel
  }

  //mapster plugin commands to highlight mapped/clickable areas in images

  $(".main").click(function () {
    $(".maps").hide();
    $('#myModal').modal();
    var sliderpic = $(this).attr('id');
    switch (sliderpic) {
      case "parisSlider":
        $("#parisMap").show();
        $("#tab1").html(
          "Rain on an umbrella");
        $("#tab2").html(
          "Rain on the street");
        $("#tab3").html(
          "A clattering carriage");
        $("#tab4").html(
          "Footsteps on the cobblestones");
        $("#tab5").html(
          "A horse that doesn't like the rain");
        $(".tabBTN").attr("id",
          "parisBTN");
        break;
      case "starrySlider":
        $("#starryMap").show();
        $("#tab1").html(
          "The swirling wind");
        $("#tab2").html(
          "Crickets chirping in the hills");
        $("#tab3").html(
          "A nightingale hidden in a tree");
        $("#tab4").html(
          "Church bells chiming");
        $("#tab5").html(
          "A home filled with music");
        $(".tabBTN").attr("id",
          "starryBTN");
        break;
      case "tigerSlider":
        $("#tigerMap").show();
        $("#tab1").html(
          "Rain pouring down");
        $("#tab2").html(
          "Thunder and lightning");
        $("#tab3").html(
          "Wind whistling in the grass");
        $("#tab4").html(
          "Jungle creatures in the trees");
        $("#tab5").html(
          "The growls of the frightened tiger");
        $(".tabBTN").attr("id",
          "tigerBTN");
        break;
      case "sundaySlider":
        $("#sundayMap").show();
        $("#tab1").html(
          "The happy crowd");
        $("#tab2").html(
          "Kids playing in the park");
        $("#tab3").html(
          "Water lapping the shore");
        $("#tab4").html(
          "A man playing his horn");
        $("#tab5").html(
          "A yappy little dog");
        $(".tabBTN").attr("id",
          "sundayBTN");
    }
  }); //end modal launch click

$("#myModal").on("shown", function () {
    animateCluesRight();
  }); //end shown function

  $('img').mapster({
    fillOpacity: 0.2,
    fillColor: "FFFFFF",
    stroke: false,
    singleSelect: false,
    clickNavigate: true
  });

  $(".tabBTN").click(function () {
    switch ($(this).attr('id')) {
      case "parisBTN":
        animateCluesLeft("umbrella","street", "carriage", "shoes","horse");
        break;
      case "starryBTN":
        animateCluesLeft("wind","crickets", "nightingale","bells", "music");
        break;
      case "tigerBTN":
        animateCluesLeft("rain","thunder", "wind", "jungle","tiger");
        break;
      case "sundayBTN":
        animateCluesLeft("crowd","kids", "water", "horn","dog");
        break;
    }
  });

  //launch sound effect playback
  $("area").click(function () {
    play_multi_sound($(this).data(
      "audio"));
    addCheckbox($(this).data('class'));
  }); //end click

    $(".close").click(function () {
    resetAnimation();
    for (i = 0; i < audiochannels.length; i++) {
      audiochannels[i]['channel'].pause();
      $("#clues").css("z-index", "9999");
    }
  }); //end close modal click

 function addCheckbox(X) {
    $("#" + X).append(
      "<img id='checkbox' src='img/icon_checkbox.gif'>")
  }

  function resetAnimation() {
    $(".tabs").stop().css({
      "left": "",
      "font-size": "",
      "text-transform": "",
      "padding": ""
    }).html("");
    $("#tab6").css("left", "");
  };

  function animateCluesRight() {
    $("#tab1").stop().delay(1000).animate({
      "left": "0px"
    }, 300);
    $("#tab2").stop().delay(2000).animate({
      "left": "0px"
    }, 300);
    $("#tab3").stop().delay(3000).animate({
      "left": "0px"
    }, 300);
    $("#tab4").stop().delay(4000).animate({
      "left": "0px"
    }, 300);
    $("#tab5").stop().delay(5000).animate({
      "left": "0px"
    }, 300);
    $("#tab6").stop().delay(6000).animate({
      "left": "0px"
    }, 300);
  };

  function animateCluesLeft(clue1,clue2, clue3, clue4, clue5) {
    $("#tab1").stop().animate({"left": "-420px"}).delay(500).animate({"left": "-300px"}).html(clue1 + "  ");
    $("#tab2").stop().animate({"left": "-470px"}).delay(500).animate({"left": "-350px"}).html(clue2 + "  ");
    $("#tab3").stop().animate({"left": "-520px"}).delay(500).animate({"left": "-400px"}).html(clue3 + "  ");
    $("#tab4").stop().animate({"left": "-570px"}).delay(500).animate({"left": "-450px"}).html(clue4 + "  ");
    $("#tab5").stop().animate({"left": "-620px"}).delay(500).animate({"left": "-500px"}).html(clue5 + "  ");
    $("#tab6").stop().animate({"left": "-170px"}, function () {
      $("ul").css("z-index", "0");
      $("li p").css({
        "font-size": "50%",
        "text-transform": "uppercase",
        "padding": "15px 10px"
      });
    });
  };

}); //end document ready

function play_multi_sound(s) {
  for (a = 0; a < audiochannels.length; a++) {
    thistime = new Date();
    if (audiochannels[a]['finished'] <
      thistime.getTime()) { // is this channel finished?
      audiochannels[a]['finished'] =
        thistime.getTime() + document.getElementById(
        s).duration * 1000;
      audiochannels[a]['channel'].src =
        document.getElementById(s).src;
      audiochannels[a]['channel'].load();
      audiochannels[a]['channel'].play();
      break;
    }
  }
};