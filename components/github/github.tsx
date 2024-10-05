'use client';
import React, { useEffect, useState } from 'react';
import styles from './GithubStats.module.css'
interface GitHubStats {
    stars: number;
    forks: number;
    name: string;
    description: string;
    url: string;
}

const GitHubStats: React.FC = () => {
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch('/api/github');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setStats(data);
            } catch (err) {
                console.error('Error fetching GitHub stats:', err);
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!stats) return <div>No data available</div>;

    return (
        <div className={styles.GithubStatsContainer}>
            <div className={styles.GithubInfo}>
                <p>⭐ Stars: {stats.stars}</p>
                <p>🍴 Forks: {stats.forks}</p>
            </div>
            {/* <a href={stats.url} target="_blank" rel="noopener noreferrer">View on GitHub</a> */}
        </div>
    );
};

export default GitHubStats;