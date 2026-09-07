# Tiffany Yam — React Resume Website

## Run locally

1. Open a terminal in this folder.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local URL shown by Vite (usually http://localhost:5173).

## Build

Run `npm run build` to create the production build.

## Structure

- `src/App.jsx` — controls which resume section is displayed.
- `src/components/Header.jsx` — site header.
- `src/components/Sidebar.jsx` — left navigation.
- `src/components/PageControls.jsx` — previous/next controls.
- `src/components/Home.jsx` — Home section and its own page state.
- `src/components/Education.jsx` — Education section and its own page state.
- `src/components/Experience.jsx` — Experience section and its own page state.
- `src/components/Projects.jsx` — Projects section and its own page state.
- `src/components/Skills.jsx` — Skills section and its own page state.
- `src/components/Certifications.jsx` — Certifications section and its own page state.

There is intentionally no `resumeData.js`; each resume section is a separate React component.
