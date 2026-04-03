export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
  homepage: string | null
  fork: boolean
}

export async function fetchGitHubRepos(username?: string): Promise<GitHubRepo[]> {
  const githubUsername = username || process.env.GITHUB_USERNAME
  const githubToken = process.env.GITHUB_TOKEN

  if (!githubUsername) {
    console.warn('GitHub username not configured')
    return []
  }

  try {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }

    if (githubToken) {
      headers['Authorization'] = `token ${githubToken}`
    }

    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`,
      { headers, next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      console.error('GitHub API error:', response.status)
      return []
    }

    const repos: GitHubRepo[] = await response.json()

    // Filter out forks and sort by stars
    return repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 12)
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

export function getTechStack(language: string | null): string[] {
  const techMap: Record<string, string[]> = {
    TypeScript: ['TypeScript', 'React', 'Node.js'],
    JavaScript: ['JavaScript', 'React', 'Node.js'],
    Python: ['Python', 'Django', 'FastAPI'],
    Java: ['Java', 'Spring'],
    Go: ['Go', 'Gin'],
    Rust: ['Rust'],
    'C#': ['C#', '.NET'],
    PHP: ['PHP', 'Laravel'],
    Ruby: ['Ruby', 'Rails'],
    HTML: ['HTML', 'CSS', 'JavaScript'],
    CSS: ['CSS', 'Sass', 'Tailwind'],
    Vue: ['Vue.js', 'Nuxt'],
    Svelte: ['Svelte', 'SvelteKit'],
  }

  return language ? techMap[language] || [language] : ['Various']
}
