export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image?: string;
    size: '1x1' | '2x1' | '1x2' | '2x2';
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 'project-1',
        title: 'AI Tool Directory',
        description: 'A comprehensive directory of AI tools with advanced search and filtering capabilities.',
        tags: ['TypeScript', 'React', 'Next.js', 'TailwindCSS'],
        github: 'https://github.com/yourusername/ai-tools',
        link: 'https://ai-tools-demo.com',
        size: '2x1',
        featured: true,
    },
    {
        id: 'project-2',
        title: 'GlowRest',
        description: 'A Pomodoro timer app with focus tracking and beautiful UI.',
        tags: ['Rust', 'Tauri', 'TypeScript'],
        github: 'https://github.com/yourusername/glowrest',
        size: '1x1',
    },
    {
        id: 'project-3',
        title: 'Watchdog Monitor',
        description: 'System monitoring and observability platform built with Go.',
        tags: ['Go', 'Prometheus', 'Grafana'],
        github: 'https://github.com/yourusername/watchdog',
        size: '1x1',
    },
    {
        id: 'project-4',
        title: 'Portfolio Website',
        description: 'Modern portfolio built with Astro for blazing fast performance.',
        tags: ['Astro', 'TypeScript', 'TailwindCSS'],
        github: 'https://github.com/yourusername/portfolio',
        size: '2x1',
        featured: true,
    },
    {
        id: 'project-5',
        title: 'Code Kata Collection',
        description: 'A collection of coding exercises and solutions in multiple languages.',
        tags: ['Go', 'Python', 'Algorithms'],
        github: 'https://github.com/yourusername/go-kata',
        size: '1x1',
    },
    {
        id: 'project-6',
        title: 'Web Scraper',
        description: 'Automated data collection tool with category-based scraping.',
        tags: ['Python', 'BeautifulSoup', 'Selenium'],
        github: 'https://github.com/yourusername/scraper',
        size: '1x1',
    },
];
