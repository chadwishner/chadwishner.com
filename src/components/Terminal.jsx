import { useState, useRef, useEffect, useCallback } from 'react'
import { executeCommand, WELCOME_MESSAGE } from './commands'
import { useVisitorInfo } from './useVisitorInfo'
import './Terminal.css'

export default function Terminal() {
  const visitor = useVisitorInfo()
  const hostname = visitor.ip || 'guest'
  const promptUser = `visitor@${hostname}`

  const [lines, setLines] = useState(() => [
    ...WELCOME_MESSAGE.map((text) => ({ type: 'output', text })),
  ])
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const scrollRef = useRef(null)

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines])

  // Focus input on click anywhere in terminal
  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  // Handle command submission
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      const trimmed = input.trim()

      // Add command line to output
      const newLines = [
        ...lines,
        { type: 'command', text: trimmed },
      ]

      if (trimmed === '') {
        setLines(newLines)
        setInput('')
        return
      }

      // Execute command
      const result = executeCommand(trimmed, visitor)

      if (result.clear) {
        setLines([])
      } else {
        const outputLines = result.output.map((text) => ({
          type: result.isError ? 'error' : 'output',
          text,
        }))
        setLines([...newLines, ...outputLines])
      }

      // Update history
      setCommandHistory((prev) => [...prev, trimmed])
      setHistoryIndex(-1)
      setInput('')
    },
    [input, lines]
  )

  // Handle up/down arrow for command history navigation, Ctrl+L to clear
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (commandHistory.length === 0) return
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (historyIndex === -1) return
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput('')
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      } else if (e.key === 'Tab') {
        e.preventDefault()
        // Could add tab completion in the future
      } else if (e.key === 'l' && e.ctrlKey) {
        e.preventDefault()
        setLines([])
      }
    },
    [commandHistory, historyIndex]
  )

// Terminal container — click anywhere to focus input, ref for auto-scroll
  return (
    <div className="terminal" onClick={focusInput} ref={scrollRef}>

      {/* Render history: past commands and their output */}
      {lines.map((line, i) => (
        <div key={i} className={`terminal-line ${line.type}`}>
          {line.type === 'command' ? (
            // Past command: show prompt + what the user typed
            <>
              <span className="prompt">
                <span className="prompt-user">{promptUser}</span>
                <span className="prompt-separator">:</span>
                <span className="prompt-dir">/</span>
                <span className="prompt-dollar">% </span>
              </span>
              <span className="command-text">{line.text}</span>
            </>
          ) : (
            // Command output: rendered as HTML to support colored spans
            <span
              className="output-text"
              dangerouslySetInnerHTML={{ __html: line.text }}
            />
          )}
        </div>
      ))}

      {/* Active input line — the live prompt where the user types */}
      <div className="terminal-line input-line">
        <span className="prompt">
          <span className="prompt-user">{promptUser}</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-dir">/</span>
          <span className="prompt-dollar">% </span>
        </span>
        <form onSubmit={handleSubmit} className="input-form">
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
          />
        </form>
      </div>
    </div>
  )
}
