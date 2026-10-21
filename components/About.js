export default function About({ title, text, statNumber, statLabel }) {
  const displayTitle = title || 'مهندسی دقیق، تولید پیوسته';
  const displayText =
    text ||
    'نیکو پلیمر اروند با تکیه بر تجهیزات تزریق پلاستیک مدرن و تیم فنی مجرب، قطعات ایمنی خودرو را با بالاترین سطح دقت و تکرارپذیری تولید می‌کند. کنترل کیفیت در تمام مراحل — از ورود مواد اولیه تا بسته‌بندی نهایی — انجام می‌شود.';

  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div>
          <div className="eyebrow">درباره ما</div>
          <h2 className="sec-title">{displayTitle}</h2>
          <p className="sec-desc" style={{ marginBottom: '28px' }}>
            {displayText}
          </p>
          <a href="/licenses" className="btn-ghost">مشاهده گواهینامه‌ها</a>
        </div>
        <div className="about-stats" style={{ gridTemplateColumns: '1fr' }}>
          <div className="stat">
            <div className="n">{statNumber || '۱۴۰۲'}</div>
            <div className="l">{statLabel || 'سال آغاز فعالیت'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
