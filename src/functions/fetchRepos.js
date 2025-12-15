const processData = async (res) => {
    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    }
    const datas = await res.json();
    if (!datas || !datas.items || !Array.isArray(datas.items)) {
      return [];
    }
    let repos = datas.items;
    let latestSixRepos = repos.splice(0, 4);
    return latestSixRepos;
  };
  
  const fetchRepos = async (data, token) => {
    try {
      const username = data.githubUser;
      const sortParameter = "updated";
  
      const query = `https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=${sortParameter}&order=desc`;
  
      if (token) {
        const res = await fetch(query, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        return processData(res);
      } else {
        const res = await fetch(query);
        return processData(res);
      }
    } catch (err) {
      console.error("Error fetching repositories:", err);
      return [];
    }
  };
  
  export default fetchRepos;