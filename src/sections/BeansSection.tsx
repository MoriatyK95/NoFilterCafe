/*
 * Dark "roastery" band promoting bean delivery + subscriptions.
 *
 * ⚠️ EYEBALL MISTAKES here:
 *   - background is our guessed brand brown #3A2A1E (Figma: espresso/800 #31221A)
 *   - headline 38px Georgia (Figma: Fraunces SemiBold 40px)
 *   - body text opacity 0.7 (Figma: 0.75)
 */

import { Button } from '../components/Button'
import { BeanBag } from '../components/illustrations'

export function BeansSection() {
  return (
    <section className="beans" id="beans">
      <div style={{ flex: 1 }}>
        <span className="beans__eyebrow">Fresh from the roastery</span>
        <h2 className="beans__title">
          The beans you love,
          <br />
          delivered on your schedule
        </h2>
        <p className="beans__sub">
          Every bag is roasted the same week it ships. Subscribe and save 15% —
          pause, skip, or swap anytime.
        </p>
        {/* Figma shows a white (inverse) Lg button on the dark band */}
        <Button variant="inverse" size="lg">Shop all beans</Button>
      </div>

      <div className="beans__bags">
        <div className="beans__bag"><BeanBag width={86} /><span>Ethiopia</span></div>
        <div className="beans__bag"><BeanBag width={108} /><span>House Blend</span></div>
        <div className="beans__bag"><BeanBag width={86} /><span>Colombia</span></div>
      </div>
    </section>
  )
}
