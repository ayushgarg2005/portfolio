import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'ayushgarg2005';

export const useGithub = () => {
  const [stats, setStats] = useState({
    repos: 32,
    followers: 120,
    following: 85,
    public_repos: 32,
    avatar_url: 'https://avatars.githubusercontent.com/u/100000000?v=4',
    bio: 'Software Engineer & DevOps Enthusiast',
  });

  const [repos, setRepos] = useState([
    {
      id: 1,
      name: 'real-time-chat',
      description: 'Distributed real-time social networking platform supporting instant messaging, Redis Pub/Sub, Kafka, WebSockets.',
      stargazers_count: 45,
      forks_count: 12,
      html_url: 'https://github.com/ayushgarg2005/real-time-chat',
      language: 'JavaScript',
    },
    {
      id: 2,
      name: 'course-selling-platform',
      description: 'Modern MERN-based online learning platform supporting role-based authentication, instructor dashboards, and enrollment.',
      stargazers_count: 28,
      forks_count: 8,
      html_url: 'https://github.com/ayushgarg2005/course-selling-platform',
      language: 'JavaScript',
    },
    {
      id: 3,
      name: 'devops-url-shortener',
      description: 'Production-ready URL Shortener focused on learning Docker, PostgreSQL, Prisma, Redis, CI/CD, GitHub Actions, Nginx, AWS.',
      stargazers_count: 35,
      forks_count: 10,
      html_url: 'https://github.com/ayushgarg2005/devops-url-shortener',
      language: 'TypeScript',
    },
    {
      id: 4,
      name: 'vingo-food-delivery',
      description: 'Modern food delivery platform featuring restaurant browsing, cart management, secure authentication, and order flow.',
      stargazers_count: 22,
      forks_count: 5,
      html_url: 'https://github.com/ayushgarg2005/vingo-food-delivery',
      language: 'JavaScript',
    }
  ]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true);
        // Fetch profile
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (userRes.ok) {
          const userData = await userRes.json();
          setStats({
            repos: userData.public_repos || 32,
            followers: userData.followers || 120,
            following: userData.following || 85,
            public_repos: userData.public_repos || 32,
            avatar_url: userData.avatar_url,
            bio: userData.bio || 'Software Engineer & DevOps Enthusiast',
          });
        }

        // Fetch repos
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=8`);
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            // Filter out forks or take top starred/updated
            const sorted = reposData
              .filter(r => !r.fork)
              .sort((a, b) => b.stargazers_count - a.stargazers_count)
              .slice(0, 6);
            if (sorted.length > 0) {
              setRepos(sorted);
            }
          }
        }
      } catch (err) {
        console.warn('GitHub API fetch failed, using fallback data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return { stats, repos, loading, error, username: GITHUB_USERNAME };
};
