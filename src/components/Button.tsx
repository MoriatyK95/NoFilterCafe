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
 * When we eventually write Button.figma.tsx, the mapping will be a few
 * lines because the shapes already match. If our props were named
 * something unrelated (e.g. `kind="dark"` / `big={true}`), the mapping
 * would still be possible but confusing forever.
 *
 * WHAT'S WRONG IN THIS VERSION (eyeballed, see global.css for details):
 *   - shape:  rounded rectangle (14px). Figma buttons are FULL PILLS.
 *   - height: 50px / 42px. Figma is 56px / 44px.
 *   - weight: font-weight 700. Figma uses Inter Semi Bold (600).
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
