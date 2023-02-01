import React, { useState } from "react";

function TwitterClone() {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const avatars = [
    "https://i.pravatar.cc/100",
    "https://i.pravatar.cc/101",
    "https://i.pravatar.cc/102",
    "https://i.pravatar.cc/103",
    "https://i.pravatar.cc/104"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTweet = {
      text: tweet,
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      likes: 0
    };
    setTweets([newTweet, ...tweets]);
    setTweet("");
  };

  const handleLike = (index) => {
    const newTweets = [...tweets];
    newTweets[index].likes++;
    setTweets(newTweets);
  };
  //<p className="likes-count">{tweet.likes} Likes</p>

  return (
    <div>
      <header>
        <h1>Twitter Clone</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <h3>What a pleasure to see you again!</h3>
          <textarea value={tweet} onChange={(e) => setTweet(e.target.value)} />
          <button type="submit">Tweet</button>
        </form>
        <div>
          {tweets.map((tweet, index) => (
            <div key={index} className="tweet">
              <img src={tweet.avatar} alt="Avatar" />
              <div>
                <p>{tweet.text}</p>
                <button onClick={() => handleLike(index)}>
                  {tweet.likes}Like
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Twitter Clone - RealMunir</p>
      </footer>
    </div>
  );
}

export default TwitterClone;
