# THE INFORMATION SYNDICATE — site

A two-page static site. 90s terminal / BBS relic meets molten chrome.
No build step, no dependencies, no CMS. Just files.

## Files

- `index.html`      — landing page (title + the five links)
- `videos.html`     — "The Archive", renders a card per video
- `style.css`       — shared styles + the molten-chrome title
- `archive.css`     — styles specific to the video cards
- `archive.js`      — builds the cards from your data
- `fit-title.js`    — scales the chrome titles to fit any screen
- `videos-data.js`  — **the only file you edit each week**

## Adding a new video (the weekly task)

Open `videos-data.js`. Copy one `{ ... }` block, paste it at the TOP
of the list (newest first), and fill in four fields:

```js
{
  id:    "dQw4w9WgXcQ",                 // the YouTube video id only
  title: "My New Video Title",
  date:  "July 2026",
  blurb: "One to three sentences, however you want to write it."
}
```

The `id` is the part after `watch?v=` or `youtu.be/`. For
`https://youtu.be/KtJz0BwZe60` the id is `KtJz0BwZe60`.

The thumbnail is pulled from YouTube automatically — you never deal
with image files. The footer count and the card numbering update on
their own.

> Right now the two entries have PLACEHOLDER ids. Swap those for the
> real receipt-printer and NFT-machine ids when you have them.

## Putting it online (free)

Easiest path with the Cloudflare account you already have for the
domain:

1. Put these files in a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages →
   connect the repo. No build command, output dir = `/`.
3. In Pages → Custom domains, add `theinformationsyndicate.com`.
   Cloudflare wires the DNS for you since it's your registrar.

GitHub Pages or Netlify work the same way if you prefer.

## Tweaks you might want later

- Colors live at the top of `style.css` under `:root`.
- The "Personal Site" link is intentionally dead (`bootlink--dead`).
  When the real site exists, turn it into a normal `<a>` like the others.
