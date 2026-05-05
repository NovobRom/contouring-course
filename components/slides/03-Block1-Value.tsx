export default function Slide03Value() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 1 · Введение</p>
        <h1 className="slide-title mb-8" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          Анализ <em className="accent-italic">ценности</em> услуги
        </h1>

        <p
          className="font-inter mb-10"
          style={{ fontSize: 'clamp(15px,1.4vw,18px)', color: 'var(--text-primary)', lineHeight: 1.7, maxWidth: '760px' }}
        >
          Контуринг в моментальном загаре — это техника «умного» распределения пигмента для создания оптической иллюзии. Без контуринга загар ложится ровным слоем, что иногда «площит» фигуру, лишая её естественных объемов. Скульптурирование возвращает телу 3D-эффект, акцентируя внимание на достоинствах.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card">
            <h3
              className="font-playfair mb-3"
              style={{ fontSize: '18px', fontWeight: 400, color: 'var(--text-primary)' }}
            >
              Уникальное торговое предложение (УТП)
            </h3>
            <p className="font-inter" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Мастеров, умеющих делать качественный контуринг, в 10 раз меньше, чем обычных мастеров загара. Это переводит вас из категории «исполнитель» в категорию «художник-эксперт».
            </p>
          </div>
          <div className="card">
            <h3
              className="font-playfair mb-3"
              style={{ fontSize: '18px', fontWeight: 400, color: 'var(--text-primary)' }}
            >
              Эстетическая коррекция
            </h3>
            <p className="font-inter" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Возможность скрыть то, что не убирается спортом.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
