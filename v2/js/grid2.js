(function (win){
  var doc = win.document;
  var html = doc.documentElement;
  var option = html.getAttribute('data-use-rem');
  if( option === null ) return;
  // defaut 640px；
  var baseWidth = option == 'default' || option == '' || parseInt(option) <= 0 ? 750 : parseInt(option);
  var grids = baseWidth/100,
  resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
  recalc = function() {
    var clientWidth = html.clientWidth || 375; // default to 320 if can't get device-width
    html.style.fontSize = clientWidth / grids + 'px';
  };
  // Abort if browser does not support addEventListener
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  recalc();
})(window);