'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../lib/hook';
import { RootState } from '../lib/store';
import { fetchPosts } from '../lib/features/postSlice';
import { addComment, fetchCommentsByPost } from '../lib/features/commentSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart, faHeart as fasHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/community.module.css';
import { User } from '../lib/features/userSlice';

interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  user: {
    name: string;
    image?: string;
  } | null;
}

interface Comment {
  id: number;
  content: string;
  postId: number;
  userId: number;
  user: User | undefined;  // Adjusted to acknowledge that user might be undefined
}

const Community = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector((state: RootState) => state.post.posts);
  const commentsByPostId = useSelector((state: RootState) => state.comment.commentsByPostId);
  const isPostsLoading = useSelector((state: RootState) => state.post.status) === 'loading';
  const isCommentsLoading = useSelector((state: RootState) => state.comment.status) === 'loading';
  const isLoading = isPostsLoading || isCommentsLoading;
  const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({});
  const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    console.log("Fetching posts...");
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (posts.length > 0) {
      console.log(`Fetching comments for ${posts.length} posts...`);
      posts.forEach(post => {
        dispatch(fetchCommentsByPost(post.id));
      });
    }
  }, [dispatch, posts.length]);

  const handleCommentChange = (postId: number, text: string) => {
    setCommentInputs({ ...commentInputs, [postId]: text });
  };

  const handleCommentSubmit = (postId: number) => {
    const content = commentInputs[postId];
    if (!content) return; // Prevent empty comments
    dispatch(addComment({
      content,
      postId,
      userId: 1 // This should be dynamically determined based on the logged-in user
    }));
    setCommentInputs({ ...commentInputs, [postId]: '' });
  };

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.feedContainer}>
      <h1 className={styles.feedTitle}>Feeds</h1>
      {posts.map((post) => (
        <div key={post.id} className={styles.postCard}>
          <div className={styles.postHeader}>
            <FontAwesomeIcon icon={faUser} className={styles.userAvatar} />
            <div className={styles.userInfo}>
              <h3 className={styles.userName}>{post.user ? post.user.name : 'Loading...'}</h3>
              <p className={styles.postTime}>Just now</p>
            </div>
          </div>
          <div className={styles.postContent}>
            <p>{post.content}</p>
            <img src={post.image} alt={post.title} className={styles.postImage} />
          </div>
          <div className={styles.postActions}>
            <button className={styles.likeButton} onClick={() => toggleLike(post.id)}>
              <FontAwesomeIcon icon={likedPosts[post.id] ? fasHeart : farHeart} color={likedPosts[post.id] ? 'red' : 'black'} />
            </button>
            {/* <button className={styles.commentButton}>Comment</button> */}
            <button className={styles.shareButton}>Share</button>
          </div>
          <div className={styles.commentSection}>
            {commentsByPostId[post.id]?.map(comment => (
              <div key={comment.id} className={styles.comment}>
                <strong>{comment.user?.name || 'Unknown User'}:</strong> {comment.content}
              </div>
            ))}
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentInputs[post.id] || ''}
              onChange={e => handleCommentChange(post.id, e.target.value)}
              className={styles.commentInput}
            />
            <button
              onClick={() => handleCommentSubmit(post.id)}
              className={styles.submitCommentButton}
            >
              Post
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Community;
