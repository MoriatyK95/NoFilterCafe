/*
 * "Crafted to order" — a row of four DrinkCard components.
 * The card data (names, prices) matches the design; the card STYLING drifts
 * (see DrinkCard.tsx comments).
 */

import { Button } from '../components/Button'
import { DrinkCard } from '../components/DrinkCard'
import { CupToGo, CupIced, Mug } from '../components/illustrations'

export function MenuPreview() {
  return (
    <section id="menu">
      <div className="section-head">
        <div>
          <h2 className="section-head__title">Crafted to order</h2>
          <p className="section-head__sub">
            Espresso, brews, and seasonal drinks — customized exactly how you like them.
          </p>
        </div>
        {/* Figma: Button Style=Secondary, Size=Md, Label="Explore the menu" */}
        <Button variant="secondary" size="md">Explore the menu</Button>
      </div>

      <div className="card-row">
        <DrinkCard name="Oat Latte" subtitle="Double shot · 12 oz" price="$5.25" visual={<CupToGo width={64} />} />
        <DrinkCard name="Cold Brew" subtitle="Slow steeped · 16 oz" price="$4.50" visual={<CupIced width={64} />} />
        <DrinkCard name="Cappuccino" subtitle="Velvety foam · 8 oz" price="$4.75" visual={<Mug width={74} />} />
        <DrinkCard name="Maple Oat Espresso" subtitle="Seasonal · 12 oz" price="$5.95" visual={<CupIced width={64} />} />
      </div>
    </section>
  )
}
