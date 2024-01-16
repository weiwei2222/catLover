import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPosts } from "../state/state";
import PostDetail from "./PostDetail";

function Posts({ userId, isProfile = false }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getAllPosts = async () => {
    const response = await fetch("http://localhost:3005/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3005/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    console.log(data);
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getAllPosts();
    }
  }, []);

  return (
    <>
      {posts
        ? posts.map(
            ({
              _id,
              userId,
              userName,
              description,
              location,
              picturePath,
              userPicturePath,
              likes,
              comments,
            }) => (
              <PostDetail
                key={_id}
                postId={_id}
                postUserId={userId}
                userName={userName}
                description={description}
                location={location}
                picturePath={picturePath}
                userPicturePath={userPicturePath}
                likes={likes}
                comments={comments}
              />
            )
          )
        : "loading"}
    </>
  );
}

export default Posts;
