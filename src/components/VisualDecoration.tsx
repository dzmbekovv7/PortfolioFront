import { useEffect, useRef } from 'react'

type VisualDecorationsProps = {
  sparkleColor: string
  shadowColor: string
}

export default function VisualDecorations({ sparkleColor, shadowColor }: VisualDecorationsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      const dots = containerRef.current?.querySelectorAll<HTMLDivElement>('.dot')
      dots?.forEach((dot) => {
        const top = parseFloat(dot.style.top)
        dot.style.top = ((top + 0.05) % 100) + '%'
      })

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <>
      <style>{`
        .visual-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9999;
          overflow: visible;
          background: radial-gradient(circle at center, transparent 60%, #00000010 100%);
        }
        .dot {
          position: absolute;
          border-radius: 50%;
          opacity: 0.7;
          box-shadow:
            0 0 10px ${sparkleColor},
            0 0 20px ${sparkleColor};
          animation: pulse 3s infinite ease-in-out;
          filter: drop-shadow(0 0 5px ${sparkleColor});
          transition: transform 0.3s ease;
        }
        .line {
          position: absolute;
          border-radius: 1px;
          opacity: 0.4;
          background-color: ${shadowColor};
          box-shadow: 0 0 15px ${shadowColor};
          animation: floatLine 7s ease-in-out infinite alternate;
          will-change: transform;
        }
        @keyframes pulse {
          0%, 100% {opacity: 0.7;}
          50% {opacity: 0.2;}
        }
        @keyframes floatLine {
          0% {transform: translateY(0);}
          100% {transform: translateY(8px);}
        }
      `}</style>
      <div className="visual-container" ref={containerRef}>

        {[...Array(35)].map((_, i) => {
          const size = 5 + Math.random() * 7
          const left = Math.random() * 100
          const top = Math.random() * 100
          const delay = Math.random() * 3
          return (
            <div
              key={'dot-' + i}
              className="dot"
              style={{
                width: size,
                height: size,
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                backgroundColor: sparkleColor,
                filter: `drop-shadow(0 0 10px ${sparkleColor})`,
              }}
            />
          )
        })}

        {[...Array(20)].map((_, i) => {
          const length = 30 + Math.random() * 90
          const thickness = 1.5 + Math.random() * 2
          const top = Math.random() * 100
          const left = Math.random() * 100
          const rotate = Math.random() * 360
          const delay = Math.random() * 7

          return (
            <div
              key={'line-' + i}
              className="line"
              style={{
                width: length,
                height: thickness,
                top: `${top}%`,
                left: `${left}%`,
                transform: `rotate(${rotate}deg)`,
                animationDelay: `${delay}s`,
              }}
            />
          )
        })}
      </div>
    </>
  )
}
