export default function Slide06Risks() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 1 · Введение</p>
        <h1 className="slide-title mb-10" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          Риски и <em className="accent-italic">рекомендация</em>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3
              className="font-playfair mb-4"
              style={{ fontSize: '20px', fontWeight: 400, color: 'var(--text-primary)' }}
            >
              Риски и слабые стороны
            </h3>
            <p className="font-inter mb-4" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <strong>Завышенные ожидания:</strong> Контуринг — это тень, а не пластическая хирургия. Он не создаст кубики пресса на животе с высоким процентом висцерального жира.
            </p>
            <p className="font-inter" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <strong>Слабая сторона:</strong> Попытка нарисовать мышцы там, где их нет, выглядит как «грязный рисунок».
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
              Начинайте внедрять услугу через «Бесплатный тест-драйв одной зоны» (например, только ключицы). Клиент увидит разницу и в следующий раз запишется на полный контуринг.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
