(function() {

  var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper'),
    overlay = document.getElementById('cn-overlay');

  var open = false;
  button.addEventListener('click', handler, false);
  wrapper.addEventListener('click', cnhandle, false);

  function cnhandle(e) {
    e.stopPropagation();
  }

  function handler(e) {
    if (!e) var e = window.event;
    e.stopPropagation();

    if (!open) {
      openNav();
    } else {
      closeNav();
    }
  }

  function openNav() {
    open = true;

    classie.add(overlay, 'on-overlay');
    classie.add(wrapper, 'opened-nav');
  }

  function closeNav() {
    open = false;

    classie.remove(overlay, 'on-overlay');
    classie.remove(wrapper, 'opened-nav');

    resetClick()
  }
  document.addEventListener('click', closeNav);

  var showing = false;
  var clicked = false;


  $("#web").mouseenter(function() {
    if (showing == false && clicked == false) {
      $("#webpreview").show();
    }
  });

  $("#soft").mouseenter(function() {
    if (showing == false && clicked == false) {
      $("#softpreview").show();
    }
  });

  $("#net").mouseenter(function() {
    if (showing == false && clicked == false) {
      $("#netpreview").show();
    }
  });

  $("#qa").mouseenter(function() {
    if (showing == false && clicked == false) {
      $("#qapreview").show();
    }
  });

  $("#teach").mouseenter(function() {
    if (showing == false && clicked == false) {
      $("#teachpreview").show();
    }
  });



  $("#web").mouseleave(function() {
    $("#webpreview").hide();
  });

  $("#soft").mouseleave(function() {
    $("#softpreview").hide();
  });

  $("#net").mouseleave(function() {
    $("#netpreview").hide();
  });

  $("#qa").mouseleave(function() {
    $("#qapreview").hide();
  });

  $("#teach").mouseleave(function() {
    $("#teachpreview").hide();
  });



  $("#web").click(function() {
    $("#webhead").toggle();
    $("#softhead").hide();
    $("#nethead").hide();
    $("#qahead").hide();
    $("#teachhead").hide();

    $("#webpreview").hide();

    if (showing == false) {
      showing = true;
    } else if (showing == true) {
      showing = false;
    }

    checkClick()
  });

  $("#soft").click(function() {
    $("#softhead").toggle();
    $("#webhead").hide();
    $("#nethead").hide();
    $("#qahead").hide();
    $("#teachhead").hide();

    $("#softpreview").hide();

    if (showing == false) {
      showing = true;
    } else if (showing == true) {
      showing = false;
    }

    checkClick()
  });

  $("#net").click(function() {
    $("#nethead").toggle();
    $("#webhead").hide();
    $("#softhead").hide();
    $("#qahead").hide();
    $("#teachhead").hide();

    $("#netpreview").hide();

    if (showing == false) {
      showing = true;
    } else if (showing == true) {
      showing = false;
    }

    checkClick()
  });

  $("#qa").click(function() {
    $("#qahead").toggle();
    $("#webhead").hide();
    $("#softhead").hide();
    $("#nethead").hide();
    $("#teachhead").hide();

    $("#qapreview").hide();

    if (showing == false) {
      showing = true;
    } else if (showing == true) {
      showing = false;
    }

    checkClick()
  });

  $("#teach").click(function() {
    $("#teachhead").toggle();
    $("#webhead").hide();
    $("#softhead").hide();
    $("#nethead").hide();
    $("#qahead").hide();

    $("#teachpreview").hide();

    if (showing == false) {
      showing = true;
    } else if (showing == true) {
      showing = false;
    }

    checkClick()
  });

  function resetClick() {
    $("#webhead").hide();
    $("#softhead").hide();
    $("#nethead").hide();
    $("#qahead").hide();
    $("#teachhead").hide();

    clicked = false;
    showing = false;
  }

  function checkClick() {
    if($('#webhead').is(':visible') || $('#softhead').is(':visible') || $('#nethead').is(':visible') || $('#qahead').is(':visible') || $('#teachhead').is(':visible')) {
      clicked = true;
    } else {
      clicked = false;
    }
  }
})();