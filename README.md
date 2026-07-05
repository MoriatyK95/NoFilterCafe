# NoFilter Cafe — Web (learning project: Figma Code Connect)

A React (Vite + TypeScript) desktop build of the NoFilter Cafe landing page,
recreating the Figma design:
[NoFilter Cafe — App-First Coffee Brand UI](https://www.figma.com/design/uHNKt3YrfrvMeHDn1BThJs).

## The exercise

This is **v1: the "eyeballed" build** — intentionally written the way an
engineer might when guessing from a screenshot instead of using Figma Dev
Mode or Code Connect. It looks *roughly* right and is *systematically* wrong:

- wrong fonts (Georgia/Arial instead of Fraunces/Inter)
- slightly-off colors everywhere (warm brown drift)
- buttons are rounded rectangles instead of pills
- off-scale spacing (18px gaps in a 4px-scale system)
- gray shadows instead of the design's warm-tinted shadows
- emoji standing in for real icon components

Every intentional mistake is marked with a `⚠️ EYEBALL` comment in the code.
The full guessed-vs-actual comparison lives in **[DESIGN_AUDIT.md](DESIGN_AUDIT.md)**.

## Run it

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build
```

## Project structure

```
src/
  styles/
    tokens.css        <- the guessed design tokens (the heart of the lesson)
    global.css        <- all component/section styles
  components/         <- reusable pieces that MIRROR Figma components
    Button.tsx        <- mirrors Figma "Button"  (Style/Size/Label)
    Chip.tsx          <- mirrors Figma "Chip"    (State/Label)
    DrinkCard.tsx     <- mirrors Figma "DrinkCard"
    BeanCard.tsx      <- mirrors Figma "BeanCard"
    illustrations.tsx <- SVG cup/bag art (redrawn by eye — also a mistake!)
  sections/           <- page sections (Nav, Hero, ...) — NOT design-system
                         components, so they never get Code Connect mappings
  figma/              <- future Code Connect mapping files (NOT active yet)
    README.md         <- how the connection will work, step by step
    Button.figma.tsx.example  <- a complete example mapping, inert
figma.config.json     <- Code Connect CLI config, ready for later
DESIGN_AUDIT.md       <- the "answer key": every guess vs the real value
```

## What v2 will look like

1. Fix `tokens.css` by copying exact variable values from Figma Dev Mode.
2. Load the real fonts (Fraunces + Inter).
3. Export icons/illustrations as SVG from the Figma file.
4. Install `@figma/code-connect`, activate the mapping files in `src/figma/`,
   and publish with `npx figma connect publish` — after publishing the Figma
   components to a team library (requires an Org/Enterprise plan).
