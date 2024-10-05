import { Octokit } from '@octokit/rest';
import { NextResponse } from 'next/server';

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});

export async function GET() {
    try {
        const owner = process.env.GITHUB_USERNAME || '';
        const repo = process.env.GITHUB_REPO || '';

        if (!owner || !repo) {
            throw new Error('GitHub username or repo name is not set in environment variables');
        }

        // console.log(`Fetching data for ${owner}/${repo}`);

        const { data } = await octokit.repos.get({
            owner,
            repo
        });

        // console.log('Received data from GitHub:', data);

        const response = {
            stars: data.stargazers_count,
            forks: data.forks_count,
            name: data.name,
            description: data.description,
            url: data.html_url
        };

        console.log('Sending response:', response);

        return NextResponse.json(response);
    } catch (error: unknown) {
        console.error('Error fetching GitHub stats:', error);
        
        let errorMessage = 'Failed to fetch GitHub stats';
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}