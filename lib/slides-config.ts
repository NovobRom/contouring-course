export interface SlideConfig {
  id: number
  component: string
  title: string
  block: number
  blockName: string
}

export const SLIDES: SlideConfig[] = [
  { id: 1,  component: '01-Hero',               title: 'Контуринг тела',                    block: 0, blockName: 'Главная' },
  { id: 2,  component: '02-Program',            title: 'Программа курса',                   block: 0, blockName: 'Главная' },
  { id: 3,  component: '03-Block1-Value',       title: 'Анализ ценности услуги',            block: 1, blockName: 'Введение' },
  { id: 4,  component: '04-Block1-Effects',     title: 'Что даёт контуринг',                block: 1, blockName: 'Введение' },
  { id: 5,  component: '05-Block1-Commerce',    title: 'Как продать услугу',                block: 1, blockName: 'Введение' },
  { id: 6,  component: '06-Block1-Risks',       title: 'Риски и рекомендация',              block: 1, blockName: 'Введение' },
  { id: 7,  component: '07-Block2-Light',       title: 'Принципы светотени',                block: 2, blockName: 'Физика' },
  { id: 8,  component: '08-Block2-DHA',         title: 'Работа с DHA',                      block: 2, blockName: 'Физика' },
  { id: 9,  component: '09-Block2-Errors',      title: 'Ошибки колористики',                block: 2, blockName: 'Физика' },
  { id: 10, component: '10-Block2-Conclusion',  title: 'Вывод и рекомендация',              block: 2, blockName: 'Физика' },
  { id: 11, component: '11-Block3-Rule',        title: 'Главное правило анатомии',          block: 3, blockName: 'Анатомия' },
  { id: 12, component: '12-Block3-Face',        title: 'Лицо: скулы и овал',               block: 3, blockName: 'Анатомия' },
  { id: 13, component: '13-Block3-Collarbones', title: 'Ключицы и V-зона',                  block: 3, blockName: 'Анатомия' },
  { id: 14, component: '14-Block3-Abs',         title: 'Пресс: линии Альфы',               block: 3, blockName: 'Анатомия' },
  { id: 15, component: '15-Block3-ArmsBack',    title: 'Руки и спина',                     block: 3, blockName: 'Анатомия' },
  { id: 16, component: '16-Block3-GoldenRules', title: 'Золотые правила прорисовки',        block: 3, blockName: 'Анатомия' },
  { id: 17, component: '17-Block4-Technique',   title: 'Схема «Сначала Тень»',             block: 4, blockName: 'Технология' },
  { id: 18, component: '18-Block5-Practice',    title: 'Практика',                          block: 5, blockName: 'Практика' },
  { id: 19, component: '19-Final',              title: 'li_zagar_tan',                      block: 0, blockName: 'Финал' },
]

export const BLOCK_GROUPS = [
  { block: 0, label: 'Старт',      slides: [1, 2] },
  { block: 1, label: 'Введение',   slides: [3, 4, 5, 6] },
  { block: 2, label: 'Физика',     slides: [7, 8, 9, 10] },
  { block: 3, label: 'Анатомия',   slides: [11, 12, 13, 14, 15, 16] },
  { block: 4, label: 'Технология', slides: [17] },
  { block: 5, label: 'Практика',   slides: [18, 19] },
]
