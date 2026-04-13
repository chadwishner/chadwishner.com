import { useState, useRef, useCallback, useEffect } from 'react'
import Terminal from './Terminal'
import './TerminalWindow.css'

const MIN_WIDTH = 400
const MIN_HEIGHT = 250

export default function TerminalWindow() {
  const windowRef = useRef(null)
  const initialW = 720
  const initialH = 460
  const [pos, setPos] = useState({
    x: Math.max(0, (window.innerWidth - initialW) / 2),
    y: Math.max(0, (window.innerHeight - initialH) / 2),
  })
  const [size, setSize] = useState({ w: initialW, h: initialH })
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [preMaxState, setPreMaxState] = useState(null)
  const dragOffset = useRef({ x: 0, y: 0 })
  const resizeStart = useRef({ x: 0, y: 0, w: 0, h: 0 })

  // Dragging
  const onTitleBarMouseDown = useCallback(
    (e) => {
      if (isMaximized) return
      e.preventDefault()
      dragOffset.current = {
        x: e.clientX - pos.x,
        y: e.clientY - pos.y,
      }
      setIsDragging(true)
    },
    [pos, isMaximized]
  )

  useEffect(() => {
    if (!isDragging) return
    const onMove = (e) => {
      setPos({
        x: e.clientX - dragOffset.current.x,
        y: Math.max(0, e.clientY - dragOffset.current.y),
      })
    }
    const onUp = () => setIsDragging(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [isDragging])

  // Resizing (bottom-right handle)
  const onResizeMouseDown = useCallback(
    (e) => {
      if (isMaximized) return
      e.preventDefault()
      e.stopPropagation()
      resizeStart.current = {
        x: e.clientX,
        y: e.clientY,
        w: size.w,
        h: size.h,
      }
      setIsResizing(true)
    },
    [size, isMaximized]
  )

  useEffect(() => {
    if (!isResizing) return
    const onMove = (e) => {
      const dw = e.clientX - resizeStart.current.x
      const dh = e.clientY - resizeStart.current.y
      setSize({
        w: Math.max(MIN_WIDTH, resizeStart.current.w + dw),
        h: Math.max(MIN_HEIGHT, resizeStart.current.h + dh),
      })
    }
    const onUp = () => setIsResizing(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [isResizing])

  // Maximize / restore
  const toggleMaximize = useCallback(() => {
    if (isMaximized) {
      setPos(preMaxState.pos)
      setSize(preMaxState.size)
      setIsMaximized(false)
    } else {
      setPreMaxState({ pos, size })
      setPos({ x: 0, y: 0 })
      setSize({
        w: window.innerWidth,
        h: window.innerHeight,
      })
      setIsMaximized(true)
    }
  }, [isMaximized, preMaxState, pos, size])

  const style = isMaximized
    ? { left: 0, top: 0, width: '100%', height: '100%' }
    : { left: pos.x, top: pos.y, width: size.w, height: size.h }

  return (
    <div
      ref={windowRef}
      className={`terminal-window ${isDragging ? 'dragging' : ''} ${isResizing ? 'resizing' : ''}`}
      style={style}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Title Bar */}
      <div className="terminal-titlebar" onMouseDown={onTitleBarMouseDown}>
        <div className="traffic-lights">
          <button
            className="traffic-light traffic-close"
            title="Close"
            onClick={(e) => {
              e.stopPropagation()
              // Just a fun "can't close me" effect
            }}
          >
            <svg viewBox="0 0 12 12" width="8" height="8">
              <line x1="2" y1="2" x2="10" y2="10" stroke="currentColor" strokeWidth="2" />
              <line x1="10" y1="2" x2="2" y2="10" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button
            className="traffic-light traffic-minimize"
            title="Minimize"
            onClick={(e) => e.stopPropagation()}
          >
            <svg viewBox="0 0 12 12" width="8" height="8">
              <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button
            className="traffic-light traffic-maximize"
            title="Maximize"
            onClick={(e) => {
              e.stopPropagation()
              toggleMaximize()
            }}
          >
            <svg viewBox="0 0 12 12" width="8" height="8">
              <path d="M2 3.5L6 1.5L10 3.5L10 8.5L6 10.5L2 8.5Z" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div className="terminal-title">chad — zsh — {Math.floor(size.w / 8)}×{Math.floor(size.h / 17)}</div>
        <div className="titlebar-spacer" />
      </div>

      {/* Terminal Content */}
      <div className="terminal-body">
        <Terminal />
      </div>

      {/* Resize Handle */}
      {!isMaximized && (
        <div className="resize-handle" onMouseDown={onResizeMouseDown} />
      )}
    </div>
  )
}
