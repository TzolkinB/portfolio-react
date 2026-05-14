import Lottie from "lottie-react"
import { useEffect, useState } from "react"

import catAnimation from "../../assets/cat-animation.json"

const CatEasterEgg = () => {
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setFading(true)
  }

  if (!visible) return null

  return (
    <div
      className={`cat-easter-egg${fading ? " cat-fadeout" : ""}`}
      onClick={handleClick}
      onAnimationEnd={fading ? () => setVisible(false) : undefined}
      role="button"
      aria-label="Dismiss cat"
    >
      <Lottie
        animationData={catAnimation}
        loop={false}
        autoplay={true}
        style={{ width: 150, height: 150 }}
      />
    </div>
  )
}

export default CatEasterEgg
