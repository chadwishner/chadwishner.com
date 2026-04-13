// ============================================================
// Formatter: converts structured response data into styled
// terminal output lines.
//
// Inline markup syntax:
//   **text**  →  bold (white)
//   *text*   →  highlight (green)
//   ~text~   →  accent (blue)
//   _text_   →  dim (grey)
//   !text!   →  warn (yellow)
// ============================================================

const SEPARATOR = '──────────────────────────────────────'

export function styleText(str) {
  return str
    .replace(/\*\*(.+?)\*\*/g, '<span class="bold">$1</span>')
    .replace(/\*(.+?)\*/g, '<span class="highlight">$1</span>')
    .replace(/~(.+?)~/g, '<span class="accent">$1</span>')
    .replace(/_(.+?)_/g, '<span class="dim">$1</span>')
    .replace(/!(.+?)!/g, '<span class="warn">$1</span>')
}

// Format a section response (title + paragraphs + optional footer)
function formatSection(data) {
  const lines = [
    '',
    styleText(`**${data.title}**`),
    styleText(`_${SEPARATOR}_`),
    '',
  ]

  for (const para of data.paragraphs) {
    if (para === '') {
      lines.push('')
    } else {
      lines.push('  ' + styleText(para))
    }
  }

  if (data.footer) {
    lines.push('')
    lines.push('  ' + styleText(data.footer))
  }

  lines.push('')
  return lines
}

// Format a key-value response (title + aligned key: value pairs)
function formatKeyValue(data) {
  const lines = [
    '',
    styleText(`**${data.title}**`),
    styleText(`_${SEPARATOR}_`),
    '',
  ]

  for (const [key, value] of Object.entries(data.entries)) {
    lines.push('  ' + styleText(`~${key}:~`))
    lines.push('    ' + styleText(value))
    lines.push('')
  }

  if (data.footer) {
    lines.push('  ' + styleText(data.footer))
    lines.push('')
  }

  return lines
}

// Format a list response (title + items with optional subtitles/bullets)
function formatList(data) {
  const lines = [
    '',
    styleText(`**${data.title}**`),
    styleText(`_${SEPARATOR}_`),
    '',
  ]

  for (const item of data.items) {
    lines.push('  ' + styleText(`*${item.name}*`) + (item.subtitle ? '  ' + styleText(`_${item.subtitle}_`) : ''))
    if (item.description) {
      lines.push('    ' + styleText(item.description))
    }
    if (item.bullets) {
      for (const bullet of item.bullets) {
        lines.push('<span class="bullet-item">' + styleText(bullet) + '</span>')
      }
    }
    if (item.tech) {
      lines.push('    ' + styleText(`_built with ${item.tech}_`))
    }
    lines.push('')
  }

  if (data.footer) {
    lines.push('  ' + styleText(data.footer))
    lines.push('')
  }

  return lines
}

// Format a timeline response (title + entries with role/company/dates/bullets)
function formatTimeline(data) {
  const lines = [
    '',
    styleText(`**${data.title}**`),
    styleText(`_${SEPARATOR}_`),
    '',
  ]

  for (const entry of data.entries) {
    lines.push('  ' + styleText(`*${entry.role}*`))
    lines.push('  ' + styleText(`~${entry.company}~`) + '  |  ' + entry.dates)
    if (entry.bullets) {
      for (const bullet of entry.bullets) {
        lines.push('<span class="bullet-item">' + styleText(bullet) + '</span>')
      }
    }
    lines.push('')
  }

  if (data.footer) {
    lines.push('  ' + styleText(data.footer))
    lines.push('')
  }

  return lines
}

// Main formatter — dispatches based on response type
export function formatResponse(data) {
  switch (data.type) {
    case 'section':
      return formatSection(data)
    case 'keyvalue':
      return formatKeyValue(data)
    case 'list':
      return formatList(data)
    case 'timeline':
      return formatTimeline(data)
    default:
      return ['Unknown response type']
  }
}
