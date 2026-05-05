export default function Slide19Final() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center text-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <h1
        className="font-playfair"
        style={{
          fontSize: 'clamp(48px, 7vw, 80px)',
          fontWeight: 400,
          color: 'var(--text-primary)',
          letterSpacing: '0.06em',
          marginBottom: '16px',
        }}
      >
        li_zagar_tan
      </h1>

      <p
        className="font-inter"
        style={{
          fontSize: '14px',
          color: 'var(--text-muted)',
          letterSpacing: '0.05em',
          marginBottom: '32px',
        }}
      >
        Авторский курс · Елизавета
      </p>

      <div
        style={{
          width: '80px',
          height: '1px',
          background: 'var(--accent)',
          marginBottom: '32px',
        }}
      />

      <a
        href="https://instagram.com/li_zagar_tan"
        target="_blank"
        rel="noopener noreferrer"
        className="font-inter transition-colors duration-200"
        style={{
          fontSize: '18px',
          color: 'var(--accent)',
          letterSpacing: '0.03em',
          textDecoration: 'none',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-dark)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--accent)')}
      >
        @li_zagar_tan
      </a>
    </div>
  )
}
