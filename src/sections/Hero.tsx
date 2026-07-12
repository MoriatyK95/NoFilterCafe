/*
 * Hero section — headline, CTAs, and the big cup illustration with two
 * floating "app UI" cards.
 *
 * EYEBALL MISTAKES IN THIS SECTION (see tokens.css + global.css):
 *   - headline is Georgia 58px (Figma: Fraunces SemiBold 64px)
 *   - the blob circle color and position were nudged by eye
 *   - the floating cards use 12px radius and gray shadows
 *     (Figma: 16px radius, layered warm shadows)
 */

import { Button } from '../components/Button'
import { CupToGo } from '../components/illustrations'

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__copy">
        <span className="hero__eyebrow">App-first specialty coffee</span>

        {/* Figma text style: Display/Hero (Fraunces SemiBold 64/68) */}
        <h1 className="hero__title">
          Skip the line.
          <br />
          Sip sooner.
        </h1>

        <p className="hero__sub">
          Order ahead for pickup, get freshly roasted beans delivered to your
          door, and earn rewards on every sip — all from one beautifully
          simple app.
        </p>

        <div className="hero__ctas">
          {/* Figma: Button Style=Primary, Size=Lg, Label="Order for pickup" */}
          <Button variant="primary" size="lg">Order for pickup</Button>
          {/* Figma: Button Style=Secondary, Size=Lg, Label="Shop beans" */}
          <Button variant="secondary" size="lg">Shop beans</Button>
        </div>

        <div className="hero__proof">
          {/* ⚠️ EYEBALL: text stars — the Figma design uses its own star icon
              component filled with amber/400, exportable as SVG */}
          <span style={{ color: 'var(--color-amber)', letterSpacing: 2 }}>★★★★★</span>
          <span>4.9 · 32k reviews on the App Store</span>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__blob" />
        <div className="hero__cup">
          <CupToGo width={210} />
        </div>

        {/* Floating card 1: pickup status */}
        <div className="float-card" style={{ left: 8, top: 78 }}>
          <span>🕐</span>
          <span>
            <span className="float-card__title">Ready in 5 min</span>
            <br />
            <span className="float-card__sub">Order #A-217 · 5th Ave</span>
          </span>
        </div>

        {/* Floating card 2: loyalty points */}
        <div className="float-card float-card--dark" style={{ right: 30, bottom: 20 }}>
          <span style={{ color: 'var(--color-amber)' }}>★</span>
          <span className="float-card__title">+12 points earned</span>
        </div>
      </div>
    </header>
  )
}
