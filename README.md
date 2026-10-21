# Sunrise Bakery (Next.js)

## Run it on your computer
1. Install Node.js (version 18.17 or newer) from nodejs.org.
2. Open a terminal in this folder and run:
   npm install
   npm run dev
3. Open http://localhost:3000 in your browser.

## Build for the internet
   npm run build
   npm start

## Where things are
- data/bakery.js: all text, links, hours and menu items.
- components/shared/: Header, Card and Footer. These are shared, so the City Gym page can import them too.
- components/sections/: one file per section of the page.
- components/ui/: small pieces such as buttons, headings and the scroll animation.
- app/page.js: puts the sections together in order.
- public/images/: the photos.
