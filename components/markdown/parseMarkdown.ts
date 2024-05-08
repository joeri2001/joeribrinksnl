import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
    id: string;
    date: string;
    title: string;
    content: string;
}

const ParseMd = async (): Promise<PostData[]> => {
    const getSortedPostsData = async () => {
        const fileNames = fs.readdirSync(postsDirectory);
        const allPostsData: PostData[] = fileNames.map((fileName) => {
            const id = fileName.replace(/\.md$/, '');

            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            const matterResult = matter(fileContents);

            return {
                id,
                ...matterResult.data,
                content: matterResult.content,
            } as PostData;
        });
        return allPostsData.sort(({ date: a }, { date: b }) => {
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            } else {
                return 0;
            }
        });
    };

    const sortedPostsData = await getSortedPostsData();

    return sortedPostsData;
};

export default ParseMd;