// ============================================================
// Command definitions for the terminal
// ============================================================

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
    execute: () => ({
      output: [
        '',
        '<span class="bold">About Me</span>',
        '<span class="dim">──────────────────────────────────────</span>',
        '',
        '  Hey! I\'m <span class="highlight">Chad Wishner</span>.',
        '',
        '  I\'m a software engineer based in Salt Lake City, UT. I have a passion for building,',
        '  and specialize in iOS development. I\'ve built and deployeed multiple apps on the App',
        '  Store. Additionally I have experience with visionOS and web development. I enjoy',
        '  turning complex problems into simple, elegant solutions.',
        '',
        '  When I\'m not coding, you can find me playing in',
        '  the outdoors. Wehther its shredding the best snow on earth, hiking a new trail, ',
        '  climbing rock, or camping under the stars, I\'m happiest when I\'m outside.',
        '',
        '  Type <span class="accent">skills</span> to see my tech stack, or',
        '  <span class="warn">contact</span> to get in touch.',
        '',
      ],
    }),
  },

  skills: {
    description: 'View my technical skills',
    execute: () => ({
      output: [
        '',
        '<span class="bold">Technical Skills</span>',
        '<span class="dim">──────────────────────────────────────</span>',
        '',
        '  <span class="accent">Languages:</span>',
        '    Swift, GOLANG, JavaScript, Python, Java, SQL',
        '',
        '  <span class="accent">Frontend:</span>',
        '    SwiftUI, UIKit, React, Flutter, HTML/CSS',
        '',
        '  <span class="accent">Backend:</span>',
        '    Combine, AVKit, CoreData, CoreBluetooth, Node.js, Express, REST APIs, GraphQL',
        '',
        '  <span class="accent">Databases:</span>',
        '    Firebase, Redis, MongoDB',
        '',
        '  <span class="accent">Tools & Cloud:</span>',
        '    Git, Docker, Terraform, GCP, CI/CD, UXCam, Figma ',
        '',
        '  Type <span class="warn">resume</span> to see my full resume!',
        '',
      ],
    }),
  },

  experience: {
    description: 'View my work experience',
    execute: () => ({
      output: [
        '',
        '<span class="bold">Work Experience</span>',
        '<span class="dim">──────────────────────────────────────</span>',
        '',
        '  <span class="highlight">Go API Server Engineer</span>',
        '  <span class="accent">Procter & Gamble</span>  |  2025 – Present',
        '    • Developed an internal API for employee data reporting between HR systems.',
        '    • Developed end-to-end workflow for employee permission management of',
        '      electronic medical records system.',
        '    • Developed automated workflow for publishing upcoming employee role/site changes',
        '      across the entire company to ensure employees are properly enrolled in medical', 
        '      testing programs.',
        '    • Developing script for migrating large extracts of legacy data to a new employee',
        '      medical records system.',
        '    • Developing inventory management system for medical testing enzymes and supplies.',
        '',
        '  <span class="highlight">visionOS & Server-side-swift Engineer</span>',
        '  <span class="accent">Procter & Gamble</span>  |  2024 – 2025',
        '    • Developed internal use Apple Vision Pro app to automate allergen testing',
        '      administered by site nurses.',
        '    • Developed features for POV sharing between site nurses conducting allergen',
        '      testing.',
        '    • Developed sandbox environment for testing functionality of server-side-swift',
        '      with Vapor.',
        '',
        '  <span class="highlight">iOS Engineer</span>',
        '  <span class="accent">Procter & Gamble</span>  |  2021 – 2024',
        '    • Lead developer for distributed team building P&G’s Braun Skin i-expert IPL',
        '      app to support connected IPL devices.',
        '    • Launched Braun Skin i-expert IPL app a year ahead of scheduled release.',
        '    • Led UI/UX development utilizing SwiftUI, including completing ground up UI',
        '      redesign in 2.5 springs (7 weeks).',
        '    • Implemented Firebase and UXCam analytics tools, including custom event flags.',
        '    • Integrated application secrets management tool (Arkana) for remote builds',
        '      and releases.',
        '    • Implemented UIKit ViewControllers for custom AVPlayer and UITextField',
        '      SwiftUI views.',
        '    • Implemented JSON configuration for application, allowing external teams to',
        '      modify application data.',
        '    • Implemented iCloud Keychain support across application.',
        '    • Implemented Firebase RemoteConfig for remote configuration of UI.',
        '    • Implemented localizable CMS using Contentful for screen assets including images,',
        '      videos, and text.',
        '    • Automated app store release using Fastlane Match and Github Actions.',
        '    • Implemented multi-language support using Applanga in support of global launch.',
        '    • Implemented localization features for marketing opt-ins and legal agreements in',
        '      support of global launch.',
        '    • Live demo’d application features to company leadership including C-suite',
        '      executives.',
        '',
        '  <span class="highlight">Software Engineering Intern</span>',
        '  <span class="accent">ExxonMobil</span>  |  Summer 2020',
        '    • Used KQL, SQL, PowerBI, and React to deliver a robust dashboard for',
        '      developers and stakeholders to manage API usage analytics.',
        '    • Implemented Github Action to automate formatting for newly committed files.',
        '',
        '  <span class="highlight">Software Engineering Intern</span>',
        '  <span class="accent">American Express</span>  |  Summer 2019',
        '    • Developed automated system tests for the American Express iOS mobile app,',
        '      reducing manual app validation time.',
        '    • Analyzed inefficiencies in identifying developer accounts’ feature access,',
        '      ultimately delivering a web application for developers to manage developer',
        '      accounts and increasing system test efficiency.',
        '',
        '  <span class="highlight">Software Engineering Intern</span>',
        '  <span class="accent">Motorola Solutions</span>  |  Summer 2018',
        '    • Developed Android apps for connected first responder solutions, including',
        '      a virtual notepad for incident response.',
        '    • Led testing for an automated license plate recognition (ALPR) application,',
        '      including developing hardware rig, testing protocol, testing standards,',
        '      and analyzing results.',
        '',
        '  Type <span class="warn">resume</span> to see my full resume!',
        '',
      ],
    }),
  },

  projects: {
    description: 'See my projects',
    execute: () => ({
      output: [
        '',
        '<span class="bold">Projects</span>',
        '<span class="dim">──────────────────────────────────────</span>',
        '',
        '  <span class="highlight">chadwishner.com</span>  <span class="dim">(this site!)</span>',
        '    A macOS Terminal-inspired personal website',
        '    built with React + Vite.',
        '',
        '  <span class="highlight">Blade Coach</span>',
        '    An iOS app designed to help beginners learn how to roller skate!',
        '    built with SwiftUI and Firebase.',
        '',
        '  <span class="highlight">ChadGPT</span>',
        '    A spoof ChatGPT website where users think they\'re talking to an AI,',
        '    but they\'re actually messaging a real human named Chad (me)!',
        '    built with React, Tailwind CSS, and Next.js.',
        '',
        '  <span class="highlight">Smiths Mammoth Ticket Notifier</span>',
        '    Web scrapper for automated notifications with Smiths tickets',
        '    become available for Mammoth games!',
        '    built with Python',
        '',
        '  <span class="highlight">MBTA Train Tracker</span>',
        '    Decoded Boston’s realtime MBTA Google GTFS data to create a realtime',
        '    train tracker widget for my most frequently used stops.',
        '    built with Swift',
        '',
        '  <span class="highlight">iPhone Location Spoofer</span>',
        '    Built a location spoofer for iPhone’s using Xcode’s TestPlans',
        '    and simulated locations.',
        '    built with Swift',
        '',
        '  <span class="highlight">Forest Card</span>',
        '    Developed a multi-platform mobile application support a debit',
        '    card that tracks and offsets user purchases by automatically',
        '    planting trees.',
        '    built with Flutter',
        '',
        '  Type <span class="warn">github</span> to see more of my work.',
        '',
      ],
    }),
  },

  education: {
    description: 'View my education',
    execute: () => ({
      output: [
        '',
        '<span class="bold">Education</span>',
        '<span class="dim">──────────────────────────────────────</span>',
        '',
        '  <span class="highlight">Bachelor of Science in Computer Science</span>',
        '  <span class="dim">Minor in Business Administration</span>',
        '  <span class="accent">University of Florida</span>  |  Fall 2020',
        '',
      ],
    }),
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
