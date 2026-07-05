/*
 * Three value-proposition cards under the hero.
 *
 * ⚠️ EYEBALL SHORTCUT: the Figma design uses real icon components
 * (icon/cup, icon/truck, icon/gift — 24px stroke icons that can be exported
 * as SVG from Dev Mode). This first attempt lazily dropped in emoji instead.
 * Looks "fine" from a distance, clearly not the design up close.
 */

const PROPS = [
  {
    icon: '☕',
    title: 'Order ahead, skip the line',
    body: 'Your drink starts the second you tap. Track it live and grab it from the pickup shelf.',
  },
  {
    icon: '🚚',
    title: 'Beans at your door',
    body: 'Single origins and blends roasted this week, shipped free over $30 — or on subscription.',
  },
  {
    icon: '🎁',
    title: 'Rewards that stack',
    body: 'Earn points on every order, unlock free drinks, and get double-point days.',
  },
]

export function ValueProps() {
  return (
    <section className="value-props">
      {PROPS.map((p) => (
        <div className="prop-card" key={p.title}>
          <div className="prop-card__icon">{p.icon}</div>
          <h3 className="prop-card__title">{p.title}</h3>
          <p className="prop-card__body">{p.body}</p>
        </div>
      ))}
    </section>
  )
}
