/**
 * portfolio-data.js
 * Single source of truth for all portfolio content.
 * Update this file to change any text, links, or lists.
 */

const PORTFOLIO_DATA = Object.freeze({

  owner: {
    name:      'Ahmad Alharbi',
    firstName: 'Ahmad',
    lastName:  'Alharbi',
    role:      'Front-End Developer',
    tagline:   'Front-End Developer & CS Student',
    bio: [
      `Hey — I'm Ahmad, a <strong>front-end developer</strong> based in Saudi Arabia
       with a passion for writing clean code and building things that live on the internet.`,
      `My journey started with CS50x, Harvard's legendary intro to computer science,
       which gave me a solid foundation across C, Python, algorithms, and web development.
       Since then I haven't stopped building.`,
      `I'm currently working through the <strong>freeCodeCamp Full Stack curriculum</strong>
       and sharpening my problem-solving skills daily on LeetCode.
       I believe in learning by doing — and shipping.`,
      `I've already contributed to a <strong>250K★ open-source repository</strong> on GitHub,
       implementing a recursive implication algorithm in Python. It got merged. That felt good.`,
    ],
    email:  'ahmadharbi0x1337@gmail.com',
    github: 'https://github.com/a1-1ab',
    leetcode: 'https://leetcode.com/u/ahmadharbi0x1337/',
    linkedin: 'https://www.linkedin.com/in/ahmad-alharbi-0010502b0/',
    youtube: 'https://www.youtube.com/@Ahmad0x1337',
    phone: '+963 996 579 493',
  },

  stats: [
    { value: '130+',  label: 'LeetCode Solved'   },
    { value: '250K★', label: 'OSS Contribution'  },
    { value: '3',     label: 'Certifications'    },
    { value: 'C2',    label: 'English Level'     },
  ],

  certifications: [
    {
      title:    'CS50x — Harvard University',
      subtitle: 'Introduction to Computer Science // Verified Certificate',
      modifier: 'green',
    },
    {
      title:    'C2 Proficient English',
      subtitle: 'EF SET Certificate // Highest Level',
      modifier: 'cyan',
    },
    {
      title:    'Full Stack Development',
      subtitle: 'freeCodeCamp // In Progress',
      modifier: 'purple',
    },
  ],

  skillCategories: [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular'],
    },
    {
      title: 'Backend & Languages',
      skills: ['Node.js', 'Python', 'Flask', 'C', 'SQL'],
    },
    {
      title: 'Dev Tools',
      skills: ['Git', 'GitHub', 'Postman', 'Bash'],
    },
    {
      title: 'Systems & AI',
      skills: ['Ubuntu 24.04', 'Windows', 'AI Platforms', 'AI CLIs'],
    },
  ],

  highlight: {
    title: 'Recursive Implication List — The Algorithms',
    description: `Implemented a recursive method in Python to compute a list of logical implications
      from a sequence of 1s and 0s. Contributed to the Boolean Algebra section under the
      <code>imply_gate.py</code> file. Pull request reviewed and
      <strong style="color:var(--color-accent-green)">merged</strong>
      into a 250,000+ starred repository — one of GitHub's most starred Python projects.`,
    tags:   ['Python', 'Recursion', 'Boolean Algebra', 'Open Source'],
    link:   { label: 'View Repository', href: 'https://github.com/TheAlgorithms/Python' },
  },

  projects: [
    {
      num:         '01',
      title:       'LeetCode Grind',
      description: '130+ problems solved across arrays, strings, trees, dynamic programming, and more. Consistent daily practice sharpening algorithmic thinking.',
      tags:        ['Python', 'Algorithms', 'DSA'],
      link:        { label: 'View Profile', href: 'https://leetcode.com/u/ahmadharbi0x1337/' },
    },
    {
      num:         '02',
      title:       'Full Stack Curriculum',
      description: "Working through freeCodeCamp's full stack path — covering responsive web design, JavaScript, front-end libraries, APIs, and databases.",
      tags:        ['React', 'Node.js', 'SQL', 'APIs'],
      link:        { label: 'freeCodeCamp', href: 'https://www.freecodecamp.org' },
    },
    {
      num:         '03',
      title:       'CS50x Coursework',
      description: "Harvard's intro to CS — from memory management in C to web development with Flask and SQL. Built multiple projects including a finance app and a social network.",
      tags:        ['C', 'Python', 'Flask', 'SQL'],
      link:        { label: 'CS50x', href: 'https://cs50.harvard.edu/x' },
    },
  ],

});