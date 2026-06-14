# The Information Syndicate

A single-page site. Minimal, light (linen), monospace headings.

## Files
- `index.html`     — the page
- `style.css`      — styles
- `render.js`      — builds the video list from the data
- `videos-data.js` — **the only file you edit to add a video**

## Adding the next video (tomorrow + every two weeks)

Open `videos-data.js`, copy the `{ ... }` block, paste it at the TOP
of the list (newest first), fill in:

```js
{
  id:    "BZCtGC7Azow",          // the part after youtu.be/ or watch?v=
  title: "Video Title",
  date:  "July 2026",
  desc:  "Your description here."
}
```

Commit the change on GitHub — the live site updates within a minute.
The thumbnail is pulled from YouTube automatically; you only supply the id.

## Updating the live site

Since this is already on Cloudflare Pages connected to your GitHub repo,
any change you commit to the repo deploys automatically. To edit
`videos-data.js`: open it on github.com, click the pencil icon, make the
change, commit. Done.
