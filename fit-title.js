/* ============================================================
   FIT-TITLE — scales each molten-chrome title so its longest
   line exactly fits the container, on any screen. Pure measure-
   and-set; respects a max cap so it never gets absurdly large.
   ============================================================ */
(function(){
  "use strict";
  var MAX_PX = 120;   // hard ceiling
  var MIN_PX = 30;    // floor for tiny phones

  function fit(title){
    var parent = title.parentElement;
    if(!parent) return;
    var spans = title.querySelectorAll("span");
    if(!spans.length) return;

    // available width = parent content box
    var cs = getComputedStyle(parent);
    var avail = parent.clientWidth
      - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);

    // measure at a known reference size, then scale linearly
    var ref = 100;
    title.style.fontSize = ref + "px";

    var widest = 0;
    spans.forEach(function(s){
      // include any left-margin offset so drifted lines still fit
      var m = parseFloat(getComputedStyle(s).marginLeft) || 0;
      widest = Math.max(widest, s.scrollWidth + m);
    });
    if(widest === 0) return;

    var target = Math.floor(ref * (avail / widest));
    target = Math.max(MIN_PX, Math.min(MAX_PX, target));
    title.style.fontSize = target + "px";
  }

  function fitAll(){
    document.querySelectorAll(".chrome-title").forEach(fit);
  }

  // run after fonts load (VT323 metrics matter), and on resize
  if(document.fonts && document.fonts.ready){
    document.fonts.ready.then(fitAll);
  }
  window.addEventListener("load", fitAll);
  var t;
  window.addEventListener("resize", function(){
    clearTimeout(t); t = setTimeout(fitAll, 120);
  });
  fitAll();
})();
