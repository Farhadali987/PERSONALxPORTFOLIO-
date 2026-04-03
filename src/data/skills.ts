export interface Skill {
  name: string
  category: string
  level: number // 0-100
  icon: string
}

export interface SkillCategory {
  name: string
  icon: string
  color: string
}

export const skillCategories: SkillCategory[] = [
  { name: 'Frontend', icon: 'layout', color: 'text-blue-500' },
  { name: 'Backend', icon: 'server', color: 'text-green-500' },
  { name: 'AI/ML', icon: 'brain', color: 'text-purple-500' },
  { name: 'Database', icon: 'database', color: 'text-orange-500' },
  { name: 'Tools', icon: 'wrench', color: 'text-gray-500' },
  { name: 'Soft Skills', icon: 'users', color: 'text-pink-500' },
]

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 90, icon: 'react' },
  { name: 'Next.js', category: 'Frontend', level: 85, icon: 'next' },
  { name: 'TypeScript', category: 'Frontend', level: 88, icon: 'typescript' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 92, icon: 'wind' },
  { name: 'HTML/CSS', category: 'Frontend', level: 95, icon: 'code' },
  { name: 'JavaScript', category: 'Frontend', level: 90, icon: 'js' },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 85, icon: 'node' },
  { name: 'Python', category: 'Backend', level: 88, icon: 'python' },
  { name: 'FastAPI', category: 'Backend', level: 80, icon: 'zap' },
  { name: 'Express', category: 'Backend', level: 82, icon: 'server' },
  { name: 'REST APIs', category: 'Backend', level: 90, icon: 'api' },

  // AI/ML
  { name: 'Machine Learning', category: 'AI/ML', level: 75, icon: 'brain' },
  { name: 'Deep Learning', category: 'AI/ML', level: 70, icon: 'network' },
  { name: 'NLP', category: 'AI/ML', level: 72, icon: 'message' },
  { name: 'AI Agents', category: 'AI/ML', level: 78, icon: 'bot' },
  { name: 'TensorFlow', category: 'AI/ML', level: 68, icon: 'cpu' },

  // Database
  { name: 'PostgreSQL', category: 'Database', level: 85, icon: 'database' },
  { name: 'MongoDB', category: 'Database', level: 78, icon: 'leaf' },
  { name: 'Redis', category: 'Database', level: 72, icon: 'zap' },
  { name: 'Prisma', category: 'Database', level: 80, icon: 'box' },
  { name: 'SQL', category: 'Database', level: 88, icon: 'table' },

  // Tools
  { name: 'Git', category: 'Tools', level: 90, icon: 'git' },
  { name: 'Docker', category: 'Tools', level: 75, icon: 'container' },
  { name: 'AWS', category: 'Tools', level: 70, icon: 'cloud' },
  { name: 'Linux', category: 'Tools', level: 80, icon: 'terminal' },
  { name: 'CI/CD', category: 'Tools', level: 72, icon: 'pipeline' },

  // Soft Skills
  { name: 'Problem Solving', category: 'Soft Skills', level: 90, icon: 'lightbulb' },
  { name: 'Communication', category: 'Soft Skills', level: 85, icon: 'message' },
  { name: 'Teamwork', category: 'Soft Skills', level: 88, icon: 'users' },
  { name: 'Leadership', category: 'Soft Skills', level: 80, icon: 'star' },
  { name: 'Time Management', category: 'Soft Skills', level: 85, icon: 'clock' },
]

export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category)
}

export function getTopSkills(limit: number = 6): Skill[] {
  return [...skills].sort((a, b) => b.level - a.level).slice(0, limit)
}
