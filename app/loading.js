export default function Loading() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="mono" style={{ color: 'var(--text-lo)', fontSize: '13px', letterSpacing: '2px' }}>
        در حال بارگذاری…
      </div>
    </div>
  );
}
