# Vedanta — Portfolio (React)

React + Vite + React Router port of the original static multi-page HTML/CSS site.
Same visual design, same CSS (`src/index.css` is your original `style.css`, untouched),
same page structure — now as client-side routed components instead of separate .html files.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build -> dist/
```

## Structure

```
src/
  index.css              your original style.css, copied verbatim
  main.jsx                React entry, wraps app in BrowserRouter
  App.jsx                 routes + body class toggle (mirrors <body class="projects-page">)
  components/
    HudChrome.jsx          the 4 corner crosshairs + vignette background
    NavBar.jsx              BACK / SHUTDOWN nav, shutdown flicker animation
    PageShell.jsx           HudChrome + NavBar + <main> wrapper used by every sub-page
    PageHeader.jsx           the <h1 class="split-me"> sub-page header
    SplitText.jsx            reusable character-reveal animation (see below)
  pages/
    Home.jsx                "/" — the pinned scroll hero (IMAGINE. / EXECUTE.)
    Operations.jsx           "/operations" — main menu grid
    Profile.jsx, Experience.jsx, Skillsets.jsx, Projects.jsx, Network.jsx, Uplink.jsx
public/assets/              put avatar.png, resume.pdf, Ago_guard.pdf, paper.pdf here
```

## Routes (replacing the old .html files)

| Old file           | New route      |
|---------------------|---------------|
| index.html           | /             |
| operations.html      | /operations   |
| profile.html          | /profile      |
| experience.html        | /experience   |
| skillsets.html          | /skillsets    |
| projects.html            | /projects     |
| network.html              | /network      |
| uplink.html                | /uplink       |

## About the animations

Your original `js/main.js` wasn't in the uploaded files, so it wasn't included — only the
HTML/CSS were. What's rebuilt here is inferred from the CSS/markup contract your original
site was clearly built around:

- **`.split-me` / `.char` reveal** — every heading/label with `class="split-me"` gets each
  character wrapped in a `.char` span. Your CSS already sets `.char { opacity: 0; background: var(--black) }`
  as the resting state; `SplitText.jsx` uses GSAP to stagger-reveal them (opacity + background wipe)
  on mount, so it re-fires every time you navigate to a page.
- **Home hero** — `.hero-pin-wrapper` (180vh) + sticky `.hero` (100vh) is a GSAP ScrollTrigger
  pin: the hero pins in place while you scroll through the extra 80vh, and a scrubbed timeline
  reveals the deco-lines, then IMAGINE./EXECUTE., then the button — matching the CSS's
  `opacity:0` / `transform: scaleX(0)` starting states already in `index.css`.
- **SHUTDOWN button** — flickers `.shutdown-mode` (red, already defined in your CSS) before
  routing home, since that class existed in the CSS but had no visible JS trigger in the files
  provided.

If your real `main.js` did something different, send it over and I'll match it exactly instead.

## Missing assets

`avatar.png`, `resume.pdf`, `Ago_guard.pdf`, and `paper.pdf` were referenced in the HTML but
not in your upload. Drop them into `public/assets/` (see `public/assets/README.txt`).
