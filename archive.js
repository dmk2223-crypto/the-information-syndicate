/* ============================================================
   ARCHIVE RENDERER
   Reads window.SYNDICATE_VIDEOS and paints a card per video.
   Thumbnails are pulled straight from YouTube by video id, so
   you never have to handle image files — just the id.
   ============================================================ */
(function(){
  "use strict";

  var data = window.SYNDICATE_VIDEOS;
  var mount = document.getElementById("archive");
  var emptyNote = document.getElementById("empty-note");

  if(!data || !Array.isArray(data) || data.length === 0){
    if(emptyNote) emptyNote.hidden = false;
    return;
  }

  var total = data.length;

  function esc(s){
    return String(s == null ? "" : s)
      .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }

  function pad(n){ return String(n).padStart(3,"0"); }

  var html = data.map(function(v, i){
    var id = (v.id || "").trim();
    var url = "https://www.youtube.com/watch?v=" + encodeURIComponent(id);
    // hqdefault is the most reliably-present thumbnail size
    var thumb = "https://img.youtube.com/vi/" + encodeURIComponent(id) + "/hqdefault.jpg";
    var no = pad(total - i); // newest gets the highest number

    return ''
      + '<a class="tx-card" href="' + url + '" target="_blank" rel="noopener">'
      +   '<div class="tx-thumb">'
      +     '<img loading="lazy" src="' + thumb + '" alt="thumbnail for ' + esc(v.title) + '" '
      +          'onerror="this.style.display=\'none\'">'
      +     '<span class="tx-play" aria-hidden="true"></span>'
      +   '</div>'
      +   '<div class="tx-body">'
      +     '<div class="tx-meta">'
      +       '<span class="tx-no">' + no + '</span>'
      +       '<span class="tx-date">' + esc(v.date) + '</span>'
      +     '</div>'
      +     '<h2 class="tx-title">' + esc(v.title) + '</h2>'
      +     '<p class="tx-blurb">' + esc(v.blurb) + '</p>'
      +     '<span class="tx-cue">Watch transmission <span class="arr">&rsaquo;</span></span>'
      +   '</div>'
      + '</a>';
  }).join("");

  mount.innerHTML = html;
})();
