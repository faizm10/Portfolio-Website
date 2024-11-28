"use client";
import { DATA } from "@/data/resume";
import fetchRepos from '@/functions/fetchRepos';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LatestCode() {
  const [mounted, setMounted] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const initializeRepos = async () => {
      try {
        if (!DATA || !DATA.githubData) {
          console.error("DATA.githubData is undefined or not properly loaded.");
          return;
        }
        let token = process.env.GITHUB_AUTH_TOKEN;
        const repos = await fetchRepos('faizm10', token);
        setRepos(repos || []); // Ensure repos defaults to an empty array
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    initializeRepos();
  }, []);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div style={{ backgroundColor: "#fdddb7" }}>
      <div id="latest" className="max-w-2xl mx-auto pb-[100px]">
        <div className="flex flex-col gap-3 mx-10 items-start">
          <h1 className="font-bold text-2xl text-black">Latest Code</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {repos && repos.length > 0 ? (
              repos.map((repo, i) => <GithubRepoCard repo={repo} key={i} />)
            ) : (
              <p className="text-black">No repositories available to display.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const GithubRepoCard = ({ repo }) => {
  return (
    <div className="grid grid-cols-1">
      <h1 className="font-semibold text-xl text-black">{repo.name}</h1>
      <p className="my-3 text-black">{repo.description || "No description available."}</p>
      <Link
        href={repo.clone_url}
        target="_blank"
        rel="noreferrer"
        className="font-medium group flex space-x-2 w-full items-center self-end text-black"
      >
        <p>View Repository</p>
        <div className="transform group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </Link>
    </div>
  );
};
