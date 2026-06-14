/* ============================================================
   RENDER — paints one entry per video from the data file.
   Thumbnails come straight from YouTube by id; no image files.
   ============================================================ */
(function(){
  "use strict";

  var data = window.SYNDICATE_VIDEOS;
  var mount = document.getElementById("list");
  if(!mount) return;

  if(!data || !Array.isArray(data) || data.length === 0){
    mount.innerHTML = '<p class="vid-desc" style="color:var(--muted)">Nothing here yet.</p>';
    return;
  }

  function esc(s){
    return String(s == null ? "" : s)
      .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  mount.innerHTML = data.map(function(v){
    var id = (v.id || "").trim();
    var url = "https://www.youtube.com/watch?v=" + encodeURIComponent(id);
    var thumb = "https://img.youtube.com/vi/" + encodeURIComponent(id) + "/hqdefault.jpg";

    return ''
      + '<a class="vid" href="' + url + '" target="_blank" rel="noopener">'
      +   '<span class="vid-thumb">'
      +     '<img loading="lazy" src="' + thumb + '" alt="' + esc(v.title) + '" '
      +          'onerror="this.style.display=\'none\'">'
      +     '<span class="vid-play" aria-hidden="true"></span>'
      +   '</span>'
      +   '<span class="vid-body">'
      +     '<span class="vid-date">' + esc(v.date) + '</span>'
      +     '<span class="vid-title">' + esc(v.title) + '</span>'
      +     '<span class="vid-desc">' + esc(v.desc) + '</span>'
      +   '</span>'
      + '</a>';
  }).join("");
})();
