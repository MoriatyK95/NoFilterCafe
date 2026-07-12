/*
 * Top navigation bar. This is a page SECTION, not a design-system component —
 * in the Figma file it's a plain frame called "Nav", so it will never get a
 * Code Connect mapping of its own. Only the reusable pieces inside it
 * (the Buttons) map to Figma components.
 */

import { Button } from '../components/Button'

export function Navbar() {
  return (
    <nav className="nav">
      <span className="nav__logo">NoFilter</span>

      <div className="nav__links">
        <a href="#menu">Menu</a>
        <a href="#beans">Beans</a>
        <a href="#rewards">Rewards</a>
        <a href="#stores">Stores</a>
      </div>

      <div className="nav__actions">
        {/* Figma: Button Style=Secondary, Size=Md, Label="Sign in" */}
        <Button variant="secondary" size="md">Sign in</Button>
        {/* Figma: Button Style=Primary, Size=Md, Label="Get the app" */}
        <Button variant="primary" size="md">Get the app</Button>
      </div>
    </nav>
  )
}
