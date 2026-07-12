/*
 * "Better in the app" banner with store badges and a QR card.
 * ⚠️ EYEBALL: QR is an emoji placeholder — Figma has an icon/qr component
 * that should be exported as SVG.
 */

export function AppBanner() {
  return (
    <section className="app-banner">
      <div className="app-banner__copy">
        <h2 className="app-banner__title">Better in the app</h2>
        <p className="app-banner__sub">
          Install the PWA or grab the iOS / Android app. Reorder your usual in
          two taps, pay with your wallet, and never wait in line again.
        </p>
        <div className="store-badges">
          <span className="store-badge">App Store</span>
          <span className="store-badge">Google Play</span>
          <span className="store-badge">Install PWA</span>
        </div>
      </div>

      <div className="qr-card">
        <span style={{ fontSize: 64, lineHeight: 1 }}>⌗</span>
        <span>Scan to download</span>
      </div>
    </section>
  )
}
