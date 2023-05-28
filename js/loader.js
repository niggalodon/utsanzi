document.onreadystatechange = function() {
  var state = document.readyState
  if (state == 'interactive') {
    document.getElementById('thecontents').style.visibility = "hidden";
  } else if (state == 'complete') {
    setTimeout(function() {
      document.getElementById('interactive');
      document.getElementById('theloader').style.visibility = "hidden";
      document.getElementById('thecontents').style.visibility = "visible";
    }, 1500);
  }
}