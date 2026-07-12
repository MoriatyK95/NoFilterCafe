/*
 * Site footer on the darkest espresso background.
 * ⚠️ EYEBALL: column gap is 56px (Figma: 64px), brand text 21px (Figma: 22px).
 */

const COLUMNS = [
  { head: 'Shop', links: ['Menu', 'Beans', 'Gift cards'] },
  { head: 'Company', links: ['About', 'Careers', 'Stores'] },
  { head: 'Support', links: ['Help center', 'Contact', 'Privacy'] },
]

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer__brand">NoFilter</div>
        <div className="footer__tag">Specialty coffee, no gatekeeping.</div>
      </div>

      <div className="footer__cols">
        {COLUMNS.map((col) => (
          <div className="footer__col" key={col.head}>
            <span className="footer__col-head">{col.head}</span>
            {col.links.map((l) => (
              <a href="#" key={l}>{l}</a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}
