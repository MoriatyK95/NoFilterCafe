/*
 * NoFilter Cafe — desktop landing page, "eyeballed" v1.
 *
 * This page recreates the Figma frame "Web / Landing Page" from:
 * https://www.figma.com/design/uHNKt3YrfrvMeHDn1BThJs
 *
 * It was intentionally built the way an engineer might when guessing from
 * a screenshot instead of reading Dev Mode. Search the codebase for
 * "EYEBALL" to find every intentional mismatch, and read DESIGN_AUDIT.md
 * for the full guessed-vs-actual comparison table.
 */

import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { ValueProps } from './sections/ValueProps'
import { MenuPreview } from './sections/MenuPreview'
import { BeansSection } from './sections/BeansSection'
import { AppBanner } from './sections/AppBanner'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <ValueProps />
      <MenuPreview />
      <BeansSection />
      <AppBanner />
      <Footer />
    </div>
  )
}
