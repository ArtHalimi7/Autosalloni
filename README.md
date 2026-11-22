# Autosalloni

A dark, WebGL-driven landing page prototype in React, started as a concept for a car dealership ("autosallon") website.

## Overview

Autosalloni is a front-end prototype for testing real-time graphics on a marketing site. Its hero is a field of GPU-rendered particles, and further down a curved WebGL gallery scrolls endlessly. The page also includes animated typography and small interaction details. It was designed and built by Art Halimi.

> **Status: work in progress.** Only the home page has content so far. The About, Services and Contact routes are placeholders, and the gallery and project cards still show placeholder images and copy.

## Features

- Particle field in the hero: 400 points drawn on the GPU with custom GLSL shaders. They drift, rotate slowly and shift away from the mouse.
- Headline letters animate in one by one, starting the first time the text scrolls into view.
- Magnetic call-to-action button that pulls toward the cursor once it comes close.
- "Featured Projects" section with a sticky title column on the left and cards on the right that animate in as you scroll.
- Curved WebGL image gallery that you scroll with the mouse wheel, by dragging or by touch. It eases between positions, snaps to the nearest image and wraps around endlessly.
- Client-side routing for Home, About, Services and Contact, with an Apache rewrite rule for deep links.

## Tech stack

- React 18 and React Router 6
- Vite 5
- OGL (lightweight WebGL library) with hand-written GLSL shaders
- Framer Motion and React Spring
- Tailwind CSS 3

## Technical highlights

- **Shader-driven particles.** [`Particles.jsx`](src/components/ui/Particles.jsx) spreads points evenly through a sphere: it picks random points and keeps only those inside, then uses a cube-root radius so they don't bunch at the centre. Each point gets random values that the vertex shader uses to compute its drift, so on each frame the CPU only updates the time value and the mouse offset. Point size shrinks with distance from the camera. The animation loop, event listeners and canvas are all removed on unmount.
- **Gallery laid out on an arc.** [`Gallery.jsx`](src/components/CircularGallery/Gallery.jsx) treats the viewport's half-width and a `bend` value as a chord and its height, and from those works out a circle radius. Each image is lowered by the arc's height at its x position and tilted with `asin(x / R)`. When an image leaves one side of the screen it moves to the other by the gallery's total width, which keeps the loop endless. Scroll speed feeds the vertex shader, so the images ripple more when you scroll fast. The fragment shader crops each image to fill its panel and rounds the corners with a signed-distance function.
- **Integration and cleanup.** These effects use imperative WebGL classes, so they are wrapped in React components that create the renderer in `useEffect` and remove it completely when the component unmounts. That lets them sit alongside normal React and Framer Motion sections. The Particles, CircularGallery, MetaBalls, Magnet and SplitText components are adapted from the open-source [React Bits](https://reactbits.dev) collection.

## Getting started

**Prerequisites:** Node.js 18 or newer, npm, and a browser with WebGL enabled.

```bash
npm install
npm run dev
```

| Script            | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot reload |
| `npm run build`   | Build the production bundle into `dist/`  |
| `npm run preview` | Serve the production build locally        |
| `npm run lint`    | Run ESLint over the project               |

No environment variables are required.

`package.json` still lists `three` and the React Three Fiber packages from an earlier 3D lanyard experiment that has since been removed. The current source does not import them.

## Project structure

```
Autosalloni/
├── public/                    # .htaccess (SPA rewrite)
├── src/
│   ├── assets/images/         # logos and hero imagery
│   ├── components/
│   │   ├── CircularGallery/   # curved WebGL image gallery
│   │   ├── ui/                # Particles, SplitText, Magnet
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── MetaBalls.jsx      # metaball shader effect, not yet on a page
│   ├── pages/                 # Home, About, Services, Contact
│   ├── App.jsx                # routes
│   └── main.jsx
├── tailwind.config.js
└── vite.config.js
```

## Author

Designed and built by [Art Halimi](https://arthalimi.com) · [GitHub](https://github.com/ArtHalimi7)
