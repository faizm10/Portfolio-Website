import { posts } from '@/app/posts';
import { showcaseProjects } from '@/app/data/projects';

export const SLUGS = [...new Set([...posts.map((post) => post.slug), ...showcaseProjects.map((project) => project.slug)])];
