import { useState } from "react";

const GitHubUsers = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [loading, setLoading]=useState(false)

  const handleSearch = async () => {
    if (username.trim() !== "") {
      setLoading(true)
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setLoading(false)
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error("Error Weyn", error);
      }
    }
  };

  if(loading) return <p>Loading....</p>

  return (
    <>
      <h1>GitHub Users Search</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {user ? (
        <div>
          <img
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            src={user.avatar_url}
            alt=""
          />
          <h3>Name: <strong>{user.login}</strong></h3>
          <p>Location: <strong>{user.location}</strong></p>
          <p>Public Repos: <strong>{user.public_repos}</strong></p>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </>
  );
};

export default GitHubUsers;