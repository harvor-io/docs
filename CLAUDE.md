# Claude instructions

## Local dev server / running the app

Do **not** start a dev server (`npm run dev`), preview server, or any long-running
app process yourself, and do not spin up headless browsers to drive the app.

For verification, rely on:

- `npm run lint` (or `npx eslint <files>`) for linting
- `npm run build` (`tsc -b && vite build`) for type checking and a production build check

If a change needs to be seen running in the browser, describe what to check and
let the user run the app and report back feedback in a follow-up prompt.
