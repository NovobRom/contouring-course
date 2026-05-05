export default function Slide07Light() {
  return (
    <div
      className="w-full h-full flex flex-col justify-center"
      style={{ background: 'var(--bg-base)', padding: 'clamp(40px,6vh,80px) clamp(24px,8vw,120px)' }}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="eyebrow mb-6">Блок 2 · Физика</p>
        <h1 className="slide-title mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
          Принципы <em className="accent-italic">светотени</em>
        </h1>

        <p
          className="font-inter mb-4"
          style={{ fontSize: 'clamp(14px,1.3vw,17px)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '760px' }}
        >
          Этот блок — фундамент вашего мастерства. Без понимания того, как человеческий глаз воспринимает объем, контуринг превратится в грязные пятна на коже.
        </p>

        <p
          className="font-inter mb-10"
          style={{ fontSize: 'clamp(14px,1.3vw,17px)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '760px' }}
        >
          В основе контуринга лежит работа с <strong>визуальной глубиной</strong>. Наш мозг интерпретирует освещенные участки как «выпуклые», а затемненные — как «удаленные» или «уходящие вглубь».
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card">
            <h3
              className="font-playfair mb-3"
              style={{ fontSize: '22px', fontWeight: 400, color: 'var(--accent)' }}
            >
              Тень (Contour)
            </h3>
            <p className="font-inter" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Используется для создания впадин. Визуально сужает и уменьшает объем. Мы наносим тень там, где анатомически должен быть провал (например, под скулой или во впадинах пресса).
            </p>
          </div>
          <div className="card">
            <h3
              className="font-playfair mb-3"
              style={{ fontSize: '22px', fontWeight: 400, color: 'var(--accent)' }}
            >
              Блик (Highlight)
            </h3>
            <p className="font-inter" style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              В моментальном загаре «бликом» выступает основной (более светлый) тон кожи. Он подчеркивает выступающие части: саму скуловую кость, гребень подвздошной кости, центральную часть мышц.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
