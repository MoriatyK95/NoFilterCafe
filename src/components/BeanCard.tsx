/*
 * BeanCard — our React version of the Figma "BeanCard" component.
 *
 * Figma properties on the component:
 *   Name  = "House Blend"                    (TEXT)
 *   Notes = "Cocoa · Hazelnut · Brown sugar" (TEXT)
 *   Price = "$18"                            (TEXT)
 *   Roast = "MEDIUM ROAST"                   (TEXT — shown as a small badge)
 *
 * Same mirroring idea as DrinkCard. Note the bean bag illustration is NOT
 * a prop here because in the Figma component it is a fixed child (every
 * BeanCard shows a bag) — so we hardcode it too. Matching not just the
 * names but the *structure* of the design component keeps the two in sync.
 *
 * WHAT'S WRONG IN THIS VERSION (eyeballed): same radius/gap/shadow drift
 * as DrinkCard, plus the roast badge letter-spacing is 0.4px vs Figma 0.5px.
 */

import { BeanBag } from './illustrations'

export interface BeanCardProps {
  /** Maps to Figma TEXT property `Name` */
  name: string
  /** Maps to Figma TEXT property `Notes` */
  notes: string
  /** Maps to Figma TEXT property `Price` */
  price: string
  /** Maps to Figma TEXT property `Roast` */
  roast: string
}

export function BeanCard({ name, notes, price, roast }: BeanCardProps) {
  return (
    <div className="drink-card">
      <div className="drink-card__visual">
        <BeanBag width={72} />
      </div>
      <span className="bean-card__roast">{roast}</span>
      <div>
        <div className="drink-card__name">{name}</div>
        <div className="drink-card__sub">{notes}</div>
      </div>
      <div className="drink-card__row">
        <span>
          <span className="drink-card__price">{price}</span>{' '}
          <span className="bean-card__unit">/ 12 oz</span>
        </span>
        <button className="drink-card__add" aria-label={`Add ${name} to cart`}>+</button>
      </div>
    </div>
  )
}
