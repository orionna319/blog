import { useRef, useEffect, memo } from 'react'
import './index.scss'
const Progress = () => {
  const progress = useRef()
  const progressVal = useRef()

  const setProgress = (num) => {
    progress.current.style.setProperty('--percent', num)
    progressVal.current.setAttribute('data-progress', num)
  }

  useEffect(() => {
    let val = 0
    const timer = setInterval(() => {
      if (val < 100) {
        val++
        setProgress(val)
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  })

  return (
    <div className="progress-container">
      <div ref={progress} className="progress" style={{ '--percent': 0 }}>
        <p>正在下载<span ref={progressVal} data-progress></span>%</p>
      </div>
    </div>
  )
}

export default memo(Progress)
