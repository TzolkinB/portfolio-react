import Lottie from "lottie-react"
import { type MouseEvent, useEffect, useState } from "react"

import catAnimation from "../../assets/cat-animation.json"

const CatEasterEgg = () => {
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setFading(true)
  }

  if (!visible) return null

  return (
    <button
      className={`cat-easter-egg${fading ? " cat-fadeout" : ""}`}
      onClick={handleClick}
      onAnimationEnd={fading ? () => setVisible(false) : undefined}
      type="button"
      aria-label="Dismiss cat"
    >
      <Lottie
        animationData={catAnimation}
        loop={false}
        autoplay={true}
        style={{ width: 150, height: 150 }}
      />
    </button>
  )
}

export default CatEasterEgg
