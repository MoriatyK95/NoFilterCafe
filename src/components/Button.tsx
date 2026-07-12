/*
 * Button — our React version of the Figma "Button" component.
 *
 * IMPORTANT FOR THE CODE CONNECT LESSON:
 * In Figma, "Button" is a component SET with these properties:
 *
 *   Style = Primary | Secondary | Ghost   (a VARIANT property)
 *   Size  = Lg | Md                       (a VARIANT property)
 *   Label = "Button"                      (a TEXT property)
 *
 * We deliberately shaped this React component's props to MIRROR those
 * Figma properties one-to-one. That is the #1 thing that makes Code
 * Connect mapping easy later:
 *
 *   Figma property          ->  React prop
 *   ----------------------------------------
 *   Style=Primary           ->  variant="primary"
 *   Size=Lg                 ->  size="lg"
 *   Label (text property)   ->  children
 *
 * The Code Connect mapping lives in src/figma/Button.figma.tsx and is a few
 * lines because the shapes already match. If our props were named something
 * unrelated (e.g. `kind="dark"` / `big={true}`), the mapping would still be
 * possible but confusing forever.
 *
 * MATCHED TO FIGMA (Dev Mode values, see global.css / tokens.css):
 *   - shape:  FULL PILL (radius/full = 999).
 *   - height: Lg = 56px, Md = 44px.
 *   - padding: Lg = 28px, Md = 20px side padding.
 *   - weight: Inter Semi Bold (600).
 *   - secondary: 1.5px stroke in color/border/strong (#31221A).
 */

import type { ReactNode } from 'react'

// These prop types intentionally read like the Figma variant values.
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'inverse'
export type ButtonSize = 'lg' | 'md'

export interface ButtonProps {
  /** Maps to the Figma variant property `Style` */
  variant?: ButtonVariant
  /** Maps to the Figma variant property `Size` */
  size?: ButtonSize
  /** Maps to the Figma TEXT property `Label` */
  children: ReactNode
}

export function Button({ variant = 'primary', size = 'lg', children }: ButtonProps) {
  return (
    <button className={`btn btn--${variant} btn--${size}`}>
      {children}
    </button>
  )
}
