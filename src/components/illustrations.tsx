/*
 * Product illustrations, redrawn BY EYE from the Figma file.
 *
 * The Figma file has vector components `visual/cup-togo`, `visual/cup-iced`,
 * `visual/beanbag` that a developer can export as SVG in one click from
 * Dev Mode (select the layer -> Export -> SVG). Instead, this first attempt
 * re-drew them from a screenshot, so proportions and colors are a little off:
 *   - our sleeve color is #C98A3B, Figma's is caramel/500 #B96F2E
 *   - our lid brown is #3A2A1E, Figma's is espresso/800 #31221A
 *
 * LESSON: never redraw assets. Export them from the design file so they are
 * pixel-identical, then keep them as components in one place (like here).
 */

// A to-go coffee cup with a sleeve. Eyeballed copy of Figma's `visual/cup-togo`.
export function CupToGo({ width = 96 }: { width?: number }) {
  return (
    <svg width={width} viewBox="0 0 96 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="4" width="36" height="10" rx="4" fill="#3A2A1E" />
      <rect x="16" y="12" width="64" height="12" rx="5" fill="#3A2A1E" />
      <path
        d="M21 24h54l-6.2 86a6 6 0 0 1-6 5.5H33.2a6 6 0 0 1-6-5.5L21 24Z"
        fill="#F3EDE3"
        stroke="#3A2A1E"
        strokeWidth="3"
      />
      <path d="M24.5 48h47l-2.1 30h-42.8l-2.1-30Z" fill="#C98A3B" />
      <path
        d="M38 58c3 0 3 4 6 4s3-4 6-4 3 4 6 4"
        stroke="#F3EDE3"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Iced coffee cup with straw. Eyeballed copy of Figma's `visual/cup-iced`.
export function CupIced({ width = 96 }: { width?: number }) {
  return (
    <svg width={width} viewBox="0 0 96 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M58 4 47 34" stroke="#3A2A1E" strokeWidth="5" strokeLinecap="round" />
      <rect x="18" y="22" width="60" height="8" rx="4" fill="#3A2A1E" />
      <path
        d="M22 30h52l-5.6 80a6 6 0 0 1-6 5.5H33.6a6 6 0 0 1-6-5.5L22 30Z"
        fill="#EDB25E"
        fillOpacity="0.45"
        stroke="#3A2A1E"
        strokeWidth="3"
      />
      <path
        d="M25.5 64h45l-3.2 46.2a6 6 0 0 1-6 5.3H34.7a6 6 0 0 1-6-5.3L25.5 64Z"
        fill="#C98A3B"
        fillOpacity="0.85"
      />
      <rect x="31" y="38" width="14" height="14" rx="3" fill="#fff" fillOpacity="0.85" transform="rotate(8 38 45)" />
      <rect x="52" y="44" width="13" height="13" rx="3" fill="#fff" fillOpacity="0.85" transform="rotate(-12 58 50)" />
    </svg>
  )
}

// Ceramic mug with steam. Eyeballed copy of Figma's `visual/mug`.
export function Mug({ width = 110 }: { width?: number }) {
  return (
    <svg width={width} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 14c0 6 6 6 6 12M50 10c0 6 6 6 6 12M68 14c0 6 6 6 6 12"
        stroke="#3A2A1E"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M20 40h66v28a34 34 0 0 1-34 34h2a34 34 0 0 1-34-34V40Z"
        fill="#F3EDE3"
        stroke="#3A2A1E"
        strokeWidth="3"
      />
      <path d="M86 46h8a12 12 0 0 1 0 24h-9" stroke="#3A2A1E" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="53" cy="44" rx="27" ry="6" fill="#C98A3B" />
    </svg>
  )
}

// Coffee bean bag. Eyeballed copy of Figma's `visual/beanbag`.
export function BeanBag({ width = 90 }: { width?: number }) {
  return (
    <svg width={width} viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26 22h58l4 8v84a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V30l4-8Z"
        fill="#1C1410"
        stroke="#3A2A1E"
        strokeWidth="3"
      />
      <path d="M22 30h66" stroke="#3A2A1E" strokeWidth="3" />
      <rect x="26" y="14" width="58" height="12" rx="5" fill="#C98A3B" />
      <rect x="32" y="52" width="46" height="46" rx="8" fill="#F3EDE3" />
      <path
        d="M62.5 65.5c3.5 3.5 3 9.6-1.2 13.8s-10.3 4.7-13.8 1.2-3-9.6 1.2-13.8 10.3-4.7 13.8-1.2Z"
        stroke="#1C1410"
        strokeWidth="2.4"
      />
      <path
        d="M61.2 66.8c-3 1.2-4.8 3-5.4 5.4s-2.4 4.2-5.4 5.4"
        stroke="#1C1410"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}
