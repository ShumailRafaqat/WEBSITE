CAREFLARE — ANIMATED REALITY CHECK

RUN ON WINDOWS / VS CODE
1. Extract this ZIP.
2. Open the Careflare-website folder in VS Code.
3. Open Terminal and run:
   npm ci
   npm run dev
4. Open the local address printed in the terminal.

PRODUCTION
   npm run build
Upload the contents of dist to your existing static website host.
A ready-built dist folder is also included. Serve it using a web server;
do not open dist/index.html using file://.

EXACT SOURCE CHANGES
- src/App.tsx: imports and shows RealityCheck before the existing homepage.
- src/components/RealityCheck.tsx: new animated interactive story.
- src/components/RealityCheck.css: new scoped responsive styling.
All original homepage components, global CSS, package.json and lockfile
are unchanged. No new runtime dependencies were added.

IF YOU PREFER TO PATCH YOUR EXISTING PROJECT
Copy the two new RealityCheck files into src/components, and replace
src/App.tsx with this package's App.tsx. No other source changes required.

BEHAVIOR
The intro appears on a fresh load without a hash, or with #top.
Other hash links such as #cta bypass it so existing deep links work.
Enter website opens the original homepage. Reloading shows the intro again.
The story takes 35 seconds and remains on its final scene until continued.
Pause/play, replay, chapter selection and Next scene are available.
Click a result for a fictional cafe detail view; this pauses the story.
Before / Possible after switches the final scenario.
Reduced-motion preference starts playback paused and disables CSS animation.
Background tabs pause the story clock.

LIVE GOOGLE VS ANIMATION
This is a Google-style animated recreation with fictional businesses.
It does not embed or scrape Google, and it does not claim to show live data.
The 'Try a real Google search' link opens an actual Google search in a new tab.
Actual results depend on the visitor's location and Google settings.
Live results inside this experience would require a separate approved data
integration/backend; no API keys or third-party search service are included.
Google branding belongs to Google. The demo is not affiliated with Google.

ACCURATE STORYTELLING
The nearby cafe example illustrates an opportunity, not proof that SEO is
solely responsible for any business's ranking. Local ranking depends on
relevance, distance and popularity/prominence. The possible-after state is
not a guaranteed position, timeline or review count.
Google guidance: https://support.google.com/business/answer/7091?hl=en

VALIDATION
TypeScript compilation: passed.
Vite production build: passed.
Original source comparison: only App.tsx changed, plus two new intro files.
Browser visual and interaction checks: not completed because the available
browser download failed. Please preview desktop and mobile before publishing.

PACKAGING
node_modules and compiler cache files are omitted. npm ci restores the
original locked dependencies. Original source and configuration are included.
