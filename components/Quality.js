import Reveal from './Reveal';

export default function Quality() {
  const steps = [
    { ic: '01', title: 'کنترل مواد اولیه', desc: 'بازرسی مواد پیش از ورود به خط تولید' },
    { ic: '02', title: 'پایش حین تولید', desc: 'کنترل مداوم پارامترهای تزریق' },
    { ic: '03', title: 'بازرسی نهایی', desc: 'تست قطعات پیش از بسته‌بندی و تحویل' },
  ];

  return (
    <section id="quality">
      <div className="eyebrow">کیفیت</div>
      <h2 className="sec-title">فرآیند کنترل کیفیت</h2>
      <p className="sec-desc">هر قطعه پیش از تحویل، مراحل مشخصی از بازرسی را طی می‌کند.</p>
      <div className="certs-row">
        {steps.map((s, i) => (
          <Reveal key={s.ic} delay={i * 100}>
            <div className="cert-card">
              <div className="ic">{s.ic}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
