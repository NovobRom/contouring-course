'use client'

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SLIDES } from '@/lib/slides-config'
import SideNav from './SideNav'
import SlideNumber from './SlideNumber'
import ArrowControls from './ArrowControls'

import Slide01 from './slides/01-Hero'
import Slide02 from './slides/02-Program'
import Slide03 from './slides/03-Block1-Value'
import Slide04 from './slides/04-Block1-Effects'
import Slide05 from './slides/05-Block1-Commerce'
import Slide06 from './slides/06-Block1-Risks'
import Slide07 from './slides/07-Block2-Light'
import Slide08 from './slides/08-Block2-DHA'
import Slide09 from './slides/09-Block2-Errors'
import Slide10 from './slides/10-Block2-Conclusion'
import Slide11 from './slides/11-Block3-Rule'
import Slide12 from './slides/12-Block3-Face'
import Slide13 from './slides/13-Block3-Collarbones'
import Slide14 from './slides/14-Block3-Abs'
import Slide15 from './slides/15-Block3-ArmsBack'
import Slide16 from './slides/16-Block3-GoldenRules'
import Slide17 from './slides/17-Block4-Technique'
import Slide18 from './slides/18-Block5-Practice'
import Slide19 from './slides/19-Final'

const SLIDE_COMPONENTS = [
  Slide01, Slide02, Slide03, Slide04, Slide05,
  Slide06, Slide07, Slide08, Slide09, Slide10,
  Slide11, Slide12, Slide13, Slide14, Slide15,
  Slide16, Slide17, Slide18, Slide19,
]

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
}

export default function SlideContainer() {
  const [current, setCurrent] = useState(1)
  const [direction, setDirection] = useState(1)
  const total = SLIDES.length

  const goTo = useCallback((id: number, dir?: number) => {
    if (id < 1 || id > total) return
    setDirection(dir ?? (id > current ? 1 : -1))
    setCurrent(id)
  }, [current, total])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goTo(current + 1, 1)
      else if (e.key === 'ArrowLeft') goTo(current - 1, -1)
      else if (e.key === 'Home') goTo(1, -1)
      else if (e.key === 'End') goTo(total, 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, goTo, total])

  const SlideComponent = SLIDE_COMPONENTS[current - 1]

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: 'var(--bg-base)' }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      <SlideNumber current={current} total={total} />
      <SideNav current={current} onNavigate={(id) => goTo(id)} />
      <ArrowControls
        onPrev={() => goTo(current - 1, -1)}
        onNext={() => goTo(current + 1, 1)}
        hasPrev={current > 1}
        hasNext={current < total}
      />
    </div>
  )
}
