# Design Audit — eyeballed build (v1) vs the Figma design system

This is the "answer key" for spotting where this implementation drifts from
the Figma file ([NoFilter Cafe — App-First Coffee Brand UI](https://www.figma.com/design/uHNKt3YrfrvMeHDn1BThJs)).
Every one of these values is visible in **Figma Dev Mode** by clicking the
layer — none of them required guessing.

Grep the codebase for `EYEBALL` to jump to each mistake in context.

## Typography (the most visible misses)

| Where | We shipped (guessed) | Figma actually says |
| --- | --- | --- |
| All headings | Georgia | **Fraunces SemiBold** |
| All UI text | Arial/Helvetica | **Inter** |
| Hero headline | 58px / 62px line | 64px / 68px line |
| Section headings | 33px | 36px |
| Beans band headline | 38px / 46px | 40px / 48px |
| Button label weight | 700 (bold) | 600 (Semi Bold) |

## Color (each one is a named variable in Figma)

| Token | We shipped | Figma variable | Real value |
| --- | --- | --- | --- |
| Page background | `#FAF6EF` | `color/bg/page` (cream/50) | `#FCFAF6` |
| Subtle background | `#F3EDE3` | `color/bg/subtle` (cream/100) | `#F6F0E7` |
| Brand brown | `#3A2A1E` | `color/bg/brand` (espresso/800) | `#31221A` |
| Darkest brown | `#1C1410` | `color/bg/inverse` (espresso/900) | `#211711` |
| Caramel accent | `#C98A3B` | `color/bg/accent` (caramel/500) | `#B96F2E` |
| Text primary | `#2B1D12` | `color/text/primary` (espresso/900) | `#211711` |
| Text secondary | `#8A7060` | `color/text/secondary` (espresso/500) | `#7A5C48` |
| Border | `#E0D5C5` | `color/border/default` (cream/300) | `#DFD0B9` |
| Star/progress amber | `#EDB25E` | `amber/400` | `#E3A551` |
| Hero blob | `#EADFCB` | `cream/200` | `#EDE3D3` |

## Shape

| Where | We shipped | Figma |
| --- | --- | --- |
| **Buttons** | 14px rounded rect | **full pill (radius 999)** — easiest miss to spot |
| Cards | 12px radius | 20px radius |
| Card image wells | 10px | 14px |
| Floating hero cards | 12px | 16px |
| Secondary button border | 1px | 1.5px |

## Size & spacing (Figma uses a strict 4px scale)

| Where | We shipped | Figma |
| --- | --- | --- |
| Section side padding | 60px | 80px |
| Card gaps | 18px (not even on the 4px scale!) | 24px |
| Button Lg height | 50px | 56px |
| Button Md height | 42px | 44px |
| Chip height | 34px | 38px |
| Hero copy/visual gap | 48px | 60px |
| Footer column gap | 56px | 64px |

## Effects

| Where | We shipped | Figma |
| --- | --- | --- |
| Card shadow | single gray `rgba(0,0,0,0.08)` | two layered **warm brown** shadows (`rgba(33,23,17,…)`) |
| Float shadow | single gray | two layered warm shadows (`shadow/float` style) |

## Assets

| Where | We shipped | Figma |
| --- | --- | --- |
| Value-prop icons | emoji ☕🚚🎁 | real 24px stroke icon components (`icon/cup`, `icon/truck`, `icon/gift`) |
| Rating stars | text `★★★★★` | `icon/star-filled` component tinted amber/400 |
| QR code | `⌗` character | `icon/qr` component |
| Cup/bag illustrations | redrawn by eye, off-brand colors | exact SVG exports of `visual/*` components |

## The takeaway

Not one of these mistakes came from lack of skill — they came from **guessing
instead of reading**. Every correct value exists in the Figma file as a
variable, text style, effect style, or exportable component. Dev Mode exposes
all of them, and Code Connect goes one step further by replacing "here are
the raw values" with "here is your actual React component and props."
