import { getSiteSettings } from '@/sanity/lib/settings';

export default async function Footer() {
  const settings = await getSiteSettings();
  const items = [
    settings?.contactAddress,
    settings?.contactPhone
      ? { text: settings.contactPhone, href: `tel:${settings.contactPhone.replace(/\s/g, '')}` }
      : null,
    settings?.contactEmail
      ? { text: settings.contactEmail, href: `mailto:${settings.contactEmail}` }
      : null,
    settings?.workingHours,
  ].filter(Boolean);

  return (
    <footer>
      <div>© نیکو پلیمر اروند — تمامی حقوق محفوظ است</div>
      <div>
        {items.length > 0 && (
          <div
            className="mono"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              fontSize: '12px',
              color: 'var(--text-lo)',
              marginBottom: '6px',
            }}
          >
            {items.map((item, i) =>
              typeof item === 'object' ? (
                <a key={i} href={item.href} style={{ color: 'inherit' }}>
                  {item.text}
                </a>
              ) : (
                <span key={i}>{item}</span>
              )
            )}
          </div>
        )}
        <div className="mono">{settings?.footerCredit || 'طراحی و توسعه: [نام برند شما]'}</div>
      </div>
    </footer>
  );
}
