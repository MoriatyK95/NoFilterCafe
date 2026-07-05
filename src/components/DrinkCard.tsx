/*
 * DrinkCard — our React version of the Figma "DrinkCard" component.
 *
 * The Figma component exposes these properties:
 *   Name     = "Oat Latte"              (TEXT property)
 *   Subtitle = "Double shot · 12 oz"    (TEXT property)
 *   Price    = "$5.25"                  (TEXT property)
 *   Visual   = instance swap            (INSTANCE_SWAP property — which
 *                                        cup illustration shows in the well)
 *
 * Prop mirroring for future Code Connect:
 *   Name -> name, Subtitle -> subtitle, Price -> price, Visual -> visual
 *
 * The INSTANCE_SWAP one is worth understanding: in Figma the designer can
 * swap which illustration sits in the card. In React we model the same idea
 * as a `visual` prop that takes any React node. When we write the Code
 * Connect template later, Figma's `getInstanceSwap('Visual')` will resolve
 * to the mapped illustration component automatically.
 *
 * WHAT'S WRONG IN THIS VERSION (eyeballed):
 *   - card corner radius 12px (Figma: 20px)
 *   - internal gaps 10px (Figma: 12px)
 *   - price set in Georgia 16px (Figma: Fraunces SemiBold 17px)
 *   - the "+" button is 30px (Figma: 32px)
 *   - gray shadow (Figma: warm brown-tinted shadow)
 */

import type { ReactNode } from 'react'

export interface DrinkCardProps {
  /** Maps to Figma TEXT property `Name` */
  name: string
  /** Maps to Figma TEXT property `Subtitle` */
  subtitle: string
  /** Maps to Figma TEXT property `Price` */
  price: string
  /** Maps to Figma INSTANCE_SWAP property `Visual` */
  visual: ReactNode
}

export function DrinkCard({ name, subtitle, price, visual }: DrinkCardProps) {
  return (
    <div className="drink-card">
      <div className="drink-card__visual">{visual}</div>
      <div>
        <div className="drink-card__name">{name}</div>
        <div className="drink-card__sub">{subtitle}</div>
      </div>
      <div className="drink-card__row">
        <span className="drink-card__price">{price}</span>
        {/* aria-label so the icon-only button is still accessible */}
        <button className="drink-card__add" aria-label={`Add ${name} to order`}>+</button>
      </div>
    </div>
  )
}
