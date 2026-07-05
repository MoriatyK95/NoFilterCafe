# `src/figma/` — Code Connect mappings live here (NOT ACTIVE YET)

This folder is the placeholder for **Figma Code Connect** mapping files.
Nothing in here runs yet — it exists so the project is already structured
for the upgrade.

## What goes in this folder

One mapping file per design-system component, named after the component:

```
src/figma/
  Button.figma.tsx      <- maps src/components/Button.tsx  to the Figma "Button" component
  Chip.figma.tsx        <- maps src/components/Chip.tsx    to the Figma "Chip" component
  DrinkCard.figma.tsx   <- maps src/components/DrinkCard.tsx to "DrinkCard"
  BeanCard.figma.tsx    <- maps src/components/BeanCard.tsx  to "BeanCard"
```

Right now there is only `Button.figma.tsx.example` — a fully written mapping
with a `.example` suffix so the tooling ignores it. When we do the real
setup, we rename it to `Button.figma.tsx` and publish it.

## What a mapping file does (in one sentence)

It tells Figma: *"when a developer selects this Figma component in Dev Mode,
show them THIS React component with THESE props instead of generic CSS."*

## The steps we have NOT done yet (the actual connection)

1. `npm install @figma/code-connect` — the Code Connect library + CLI.
2. Get a Figma **personal access token** with Code Connect scope
   (Figma → Settings → Security → Personal access tokens) and export it as
   `FIGMA_ACCESS_TOKEN`.
3. **Publish the Figma components to a team library.** Code Connect only
   works with *published* library components. Our components currently live
   on the "Components" page of the design file, unpublished.
4. Rename `Button.figma.tsx.example` → `Button.figma.tsx`.
5. Run `npx figma connect publish` — this parses the mapping files and
   uploads the mappings to Figma's servers.
6. Open any frame in **Dev Mode**, click a Button instance, and see
   `<Button variant="primary" size="lg">…</Button>` with the correct import,
   instead of auto-generated `<div>` + CSS.

Note: Code Connect requires a Figma **Organization or Enterprise** plan.

## Why the mapping will be easy for us

Our React props were deliberately written to mirror the Figma component
properties (see comments in `src/components/Button.tsx`):

| Figma property (design)     | React prop (code)      |
| --------------------------- | ---------------------- |
| `Style` = Primary/Secondary/Ghost | `variant` = 'primary'/'secondary'/'ghost' |
| `Size` = Lg/Md              | `size` = 'lg'/'md'     |
| `Label` (text)              | `children`             |

When design and code share a vocabulary, the mapping file is ~10 lines.
When they don't, every handoff becomes a translation exercise.
