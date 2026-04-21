// ============================================================
// Command definitions for the terminal
// ============================================================

import { formatResponse, styleText } from './formatter'

const PAGE_LOAD_TIME = Date.now()

import aboutData from '../responses/about'
import skillsData from '../responses/skills'
import experienceData from '../responses/experience'
import projectsData from '../responses/projects'
import educationData from '../responses/education'

const LINKS = {
  github: 'https://github.com/chadwishner',
  linkedin: 'https://linkedin.com/in/chadwishner',
  resume: 'https://docs.google.com/document/d/1QFYukF4VTxGS4sQ6FlhrfZM6Jef4yW5PlHQ05AUgQiY/edit?usp=sharing',
  email: 'mailto:chadwishner@gmail.com',
}

export const WELCOME_MESSAGE = [
  '',
  '<span class="bold">Welcome to chadwishner.com</span>',
  '',
  'Last login: ' + new Date().toString(),
  '',
  'Type <span class="highlight">help</span> to see available commands.',
  '',
]

const COMMANDS = {
  help: {
    description: 'Show available commands',
    execute: () => ({
      output: [
        '',
        '<span class="bold">Available Commands:</span>',
        '',
        '  <span class="highlight">about</span>        — Learn about me',
        '  <span class="highlight">skills</span>       — View my technical skills',
        '  <span class="highlight">experience</span>   — View my work experience',
        '  <span class="highlight">projects</span>     — See my projects',
        '  <span class="highlight">education</span>    — View my education',
        '  <span class="highlight">contact</span>      — Get my contact info',
        '',
        '  <span class="highlight">github</span>       — Open my GitHub profile',
        '  <span class="highlight">linkedin</span>     — Open my LinkedIn profile',
        '  <span class="highlight">resume</span>       — Open my resume (Google Drive)',
        '  <span class="highlight">email</span>        — Send me an email',
        '',
        '  <span class="highlight">clear</span>        — Clear the terminal',
        '  <span class="highlight">history</span>      — Show command history',
        '  <span class="highlight">date</span>         — Show current date and time',
        '  <span class="highlight">whoami</span>       — Display current user',
        '  <span class="highlight">pwd</span>          — Print working directory',
        '  <span class="highlight">ls</span>           — List directory contents',
        '  <span class="highlight">cat</span>          — Read a file (try: cat about.txt)',
        '  <span class="highlight">neofetch</span>     — Display system information',
        '  <span class="highlight">help</span>         — Show this help message',
        '',
      ],
    }),
  },

  about: {
    description: 'Learn about me',
    execute: () => ({ output: formatResponse(aboutData) }),
  },

  skills: {
    description: 'View my technical skills',
    execute: () => ({ output: formatResponse(skillsData) }),
  },

  experience: {
    description: 'View my work experience',
    execute: () => ({ output: formatResponse(experienceData) }),
  },

  projects: {
    description: 'See my projects',
    execute: () => ({ output: formatResponse(projectsData) }),
  },

  education: {
    description: 'View my education',
    execute: () => ({ output: formatResponse(educationData) }),
  },

  contact: {
    description: 'Get my contact info',
    execute: () => ({
      output: [
        '',
        '<span class="bold">Contact</span>',
        '<span class="dim">──────────────────────────────────────</span>',
        '',
        `  <span class="accent">Email:</span>     ${LINKS.email.replace('mailto:', '')}`,
        `  <span class="accent">GitHub:</span>    ${LINKS.github.replace('https://', '')}`,
        `  <span class="accent">LinkedIn:</span>  ${LINKS.linkedin.replace('https://', '')}`,
        '',
        '  Or run <span class="warn">email</span>, <span class="warn">github</span>, or <span class="warn">linkedin</span>',
        '  to open them directly.',
        '',
      ],
    }),
  },

  // ---- Link commands (open new tab) ----

  github: {
    description: 'Open my GitHub profile',
    execute: () => {
      window.open(LINKS.github, '_blank', 'noopener,noreferrer')
      return {
        output: ['Opening GitHub profile...'],
      }
    },
  },

  linkedin: {
    description: 'Open my LinkedIn profile',
    execute: () => {
      window.open(LINKS.linkedin, '_blank', 'noopener,noreferrer')
      return {
        output: ['Opening LinkedIn profile...'],
      }
    },
  },

  resume: {
    description: 'Open my resume',
    execute: () => {
      window.open(LINKS.resume, '_blank', 'noopener,noreferrer')
      return {
        output: ['Opening resume...'],
      }
    },
  },

  email: {
    description: 'Send me an email',
    execute: () => {
      window.open(LINKS.email, '_blank', 'noopener,noreferrer')
      return {
        output: ['Opening email client...'],
      }
    },
  },

  // ---- Unix-style commands ----

  clear: {
    description: 'Clear the terminal',
    execute: () => ({ output: [], clear: true }),
  },

  date: {
    description: 'Show current date and time',
    execute: () => ({
      output: [new Date().toString()],
    }),
  },

  uptime: {
    description: 'Show system uptime',
    execute: () => {
      const now = new Date()
      const elapsed = Date.now() - PAGE_LOAD_TIME
      const totalSec = Math.floor(elapsed / 1000)
      const days = Math.floor(totalSec / 86400)
      const hrs = Math.floor((totalSec % 86400) / 3600)
      const mins = Math.floor((totalSec % 3600) / 60)
      const timeStr = now.toTimeString().slice(0, 5)
      const uptimeStr = days > 0
        ? `${days} day${days !== 1 ? 's' : ''}, ${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}`
        : `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}`
      const users = Math.floor(Math.random() * 5) + 1
      const load = () => (Math.random() * 10 + 1).toFixed(2)
      return {
        output: [`${timeStr}  up ${uptimeStr}, ${users} user${users !== 1 ? 's' : ''}, load averages: ${load()} ${load()} ${load()}`],
      }
    },
  },

  whoami: {
    description: 'Display current user',
    execute: (args, visitor) => ({
      output: [`visitor (${visitor.ip || 'unknown'}) via ${visitor.browser} on ${visitor.os}`],
    }),
  },

  pwd: {
    description: 'Print working directory',
    execute: () => ({
      output: ['/Users/chad'],
    }),
  },

  ls: {
    description: 'List directory contents',
    execute: (args) => {
      const files = [
        { name: 'about.txt', color: 'white' },
        { name: 'skills.txt', color: 'white' },
        { name: 'projects/', color: 'accent' },
        { name: 'experience.txt', color: 'white' },
        { name: 'education.txt', color: 'white' },
        { name: 'contact.txt', color: 'white' },
        { name: 'resume.pdf', color: 'warn' },
      ]

      if (args.includes('-la') || args.includes('-l') || args.includes('-al')) {
        return {
          output: [
            'total 7',
            ...files.map((f) => {
              const color = f.color === 'accent' ? 'accent' : f.color === 'warn' ? 'warn' : ''
              const nameHtml = color
                ? `<span class="${color}">${f.name}</span>`
                : f.name
              return `drwxr-xr-x  chad  staff  ${nameHtml}`
            }),
          ],
        }
      }

      const fileNames = files
        .map((f) => {
          const color = f.color === 'accent' ? 'accent' : f.color === 'warn' ? 'warn' : ''
          return color ? `<span class="${color}">${f.name}</span>` : f.name
        })
        .join('  ')
      return { output: [fileNames] }
    },
  },

  cat: {
    description: 'Read a file',
    execute: (args) => {
      const fileMap = {
        'about.txt': 'about',
        'skills.txt': 'skills',
        'experience.txt': 'experience',
        'education.txt': 'education',
        'contact.txt': 'contact',
      }

      if (args.length === 0) {
        return {
          output: ['cat: missing operand'],
          isError: true,
        }
      }

      const filename = args[0]
      if (filename === 'resume.pdf') {
        window.open(LINKS.resume, '_blank', 'noopener,noreferrer')
        return { output: ['Opening resume.pdf...'] }
      }

      const cmd = fileMap[filename]
      if (cmd && COMMANDS[cmd]) {
        return COMMANDS[cmd].execute([])
      }

      return {
        output: [`cat: ${filename}: No such file or directory`],
        isError: true,
      }
    },
  },

  neofetch: {
    description: 'Display system information',
    execute: (args, visitor) => ({
      output: [
        '',
        `<span class="highlight">                 'c.               </span>  <span class="bold">visitor@${visitor.ip || 'guest'}</span>`,
        '<span class="highlight">              ,xNMM.               </span>  <span class="dim">─────────────────────</span>',
        `<span class="highlight">            .OMMMMo                </span>  <span class="accent">OS:</span>     ${visitor.os}`,
        '<span class="highlight">            OMMM0,                 </span>  <span class="accent">Host:</span>   chadwishner.com',
        '<span class="highlight">  .;loddo:\' loolloddol;.          </span>  <span class="accent"> Kernel:</span> React 19',
        `<span class="highlight"> cKMMMMMMMMMMNWMMMMMMMMMM0:        </span>  <span class="accent">Shell:</span>  zsh (${visitor.browser})`,
        '<span class="highlight">.KMMMMMMMMMMMMMMMMMMMMMMMWd.       </span>  <span class="accent">DE:</span>     Vite Desktop',
        '<span class="highlight"> XMMMMMMMMMMMMMMMMMMMMMMMX.        </span>  <span class="accent">Theme:</span>  macOS Dark',
        '<span class="highlight">;MMMMMMMMMMMMMMMMMMMMMMM:          </span>  <span class="accent">Font:</span>   Menlo 13px',
        `<span class="highlight"> :MMMMMMMMMMMMMMMMMMMMMMMM:        </span>  <span class="accent">IP:</span>     ${visitor.ip || 'fetching...'}`,
        '<span class="highlight"> .MMMMMMMMMMMMMMMMMMMMMMMMX.       </span>  <span class="accent">Memory:</span> Probably enough',
        '<span class="highlight"> kMMMMMMMMMMMMMMMMMMMMMMMMWd       </span>',
        '<span class="highlight"> .XMMMMMMMMMMMMMMMMMMMMMMMMK       </span>  Type <span class="highlight">help</span> for commands.',
        '<span class="highlight">  kMMMMMMMMMMMMMMMMMMMMMMd         </span>',
        '<span class="highlight">   ;KMMMMMMMWXXWMMMMMMMk.          </span>',
        '<span class="highlight">     .cooc,.    .,coo:.            </span>',
        '',
      ],
    }),
  },

  echo: {
    description: 'Print text',
    execute: (args) => ({
      output: [args.join(' ')],
    }),
  },

  history: {
    description: 'Show command history',
    execute: () => ({
      output: ['<span class="dim">Use ↑ and ↓ arrow keys to navigate history.</span>'],
    }),
  },

  sudo: {
    description: 'Run as superuser',
    execute: () => ({
      output: [
        '<span class="warn">Nice try, but you don\'t have sudo access here. 😏</span>',
      ],
    }),
  },

  exit: {
    description: 'Exit terminal',
    execute: () => ({
      output: [
        '<span class="warn">There is no escape. This is my website.</span>',
        'Try <span class="highlight">help</span> instead.',
      ],
    }),
  },

  rm: {
    description: 'Remove files',
    execute: (args) => {
      const joined = args.join(' ')
      if (joined.includes('-rf') || joined.includes('-rf /') || joined.includes('-rf /*')) {
        return {
          output: [
            '<span class="warn">rm: deleting everything...</span>',
          ],
          action: 'rmrf',
        }
      }
      return {
        output: ['rm: missing operand'],
        isError: true,
      }
    },
  },

  sl: {
    description: 'Steam locomotive',
    execute: () => ({
      output: [
        '',
        '<span class="dim">      ====        ________                ___________</span>',
        '<span class="dim">  _D _|  |_______/        \\__I_I_____===__|_________|</span>',
        '<span class="dim">   |(_)---  |   H\\________/ |   |        =|___ ___|</span>',
        '<span class="dim">   /     |  |   H  |  |     |   |         ||_| |_||</span>',
        '<span class="dim">  |      |  |   H  |__--------------------| [___] |</span>',
        '<span class="dim">  | ________|___H__/__|_____/[][]~\\_______|       |</span>',
        '<span class="dim">  |/ |   |-----------I_____I [][] []  D   |=======|__</span>',
        '<span class="dim">__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__</span>',
        '<span class="dim"> |/-=|___|=    ||    ||    ||    |_____/~\\___/        </span>',
        '<span class="dim">  \\_/      \\O=====O=====O=====O_/      \\_/            </span>',
        '',
        '<span class="warn">You meant ls, didn\'t you?</span>',
        '',
      ],
    }),
  },

  cowsay: {
    description: 'Cow says moo',
    execute: (args) => {
      const msg = args.length > 0 ? args.join(' ') : 'Hire Chad!'
      const border = '-'.repeat(msg.length + 2)
      return {
        output: [
          '',
          ` ${border}`,
          `< ${msg} >`,
          ` ${border}`,
          '        \\   ^__^',
          '         \\  (oo)\\_______',
          '            (__)\\       )\\/\\',
          '                ||----w |',
          '                ||     ||',
          '',
        ],
      }
    },
  },

  cmatrix: {
    description: 'Matrix digital rain',
    execute: () => ({
      output: [],
      action: 'cmatrix',
    }),
  },
}

export function executeCommand(input, visitor = {}) {
  const parts = input.trim().split(/\s+/)
  const cmd = parts[0].toLowerCase()
  const args = parts.slice(1)

  const command = COMMANDS[cmd]
  if (!command) {
    return {
      output: [
        `zsh: command not found: ${cmd}`,
        `Type <span class="highlight">help</span> to see available commands.`,
      ],
      isError: true,
    }
  }

  return command.execute(args, visitor)
}
