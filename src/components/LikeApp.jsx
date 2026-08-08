import { useCallback, useState } from "react";

function LikeButton({ onLike }) {
  return (
    <button onClick={onLike}>
      Like
    </button>
  );
}

function LikeApp() {
  const [likes, setLikes] = useState(0);

  const handleLike = useCallback(() => {
    setLikes((previousLikes) => previousLikes + 1);
  }, []);

  return (
    <div className="like-container">
      <h1>Like App</h1>

      <h2>Likes: {likes}</h2>

      <LikeButton onLike={handleLike} />
    </div>
  );
}

export default LikeApp;