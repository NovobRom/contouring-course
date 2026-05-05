export default function Slide10Conclusion() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 2 · Физика</p>
        <h1 className="slide-title mb-10" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          <em className="accent-italic">Вывод</em> и рекомендация
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3
              className="font-playfair mb-4"
              style={{ fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)' }}
            >
              Вывод
            </h3>
            <p className="font-inter" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Контуринг — это не рисование линий, а создание плавного перехода от тени к свету. Ваша задача — обмануть глаз зрителя так, чтобы он видел рельеф, а не краску.
            </p>
          </div>

          <div
            className="card"
            style={{ background: 'var(--bg-accent)', borderColor: 'var(--accent)' }}
          >
            <h3
              className="font-playfair mb-4"
              style={{ fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)' }}
            >
              Рекомендация
            </h3>
            <p className="font-inter" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Для первых работ выбирайте разницу в <strong>2% DHA</strong>. Это даст вам право на ошибку: если линия ляжет не идеально ровно, основной слой нивелирует погрешность. Когда рука станет уверенной, переходите на разницу в <strong>4%</strong> для более драматичного эффекта.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
