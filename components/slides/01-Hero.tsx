export default function Slide01Hero() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: '80px 120px' }}
    >
      <div className="max-w-[1200px] mx-auto w-full h-full flex flex-col justify-between">
        <div />

        <div>
          <p className="eyebrow mb-8">Курс повышения квалификации</p>
          <h1 className="slide-title mb-8" style={{ fontSize: 'clamp(48px, 7vw, 80px)', lineHeight: 1.1 }}>
            Контуринг <em className="accent-italic">тела</em>
          </h1>
          <p
            className="font-inter"
            style={{
              fontSize: 'clamp(18px, 2vw, 24px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              maxWidth: '560px',
            }}
          >
            Для практикующих мастеров по моментальному загару
          </p>
        </div>

        <div className="flex items-end justify-between">
          <span
            className="font-playfair"
            style={{ fontSize: '16px', letterSpacing: '0.1em', color: 'var(--text-muted)' }}
          >
            li_zagar_tan
          </span>
          <span
            className="font-inter"
            style={{ fontSize: '13px', color: 'var(--text-muted)' }}
          >
            Авторский курс · Елизавета
          </span>
        </div>
      </div>
    </div>
  )
}
