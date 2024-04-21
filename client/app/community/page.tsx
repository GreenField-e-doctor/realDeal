'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../lib/hook';
import { RootState } from '../lib/store';
import { fetchPosts } from '../lib/features/postSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'; 
import styles from '../styles/community.module.css';
import communityImage from '../client/app/community/community.png'; 
import NavBar from '../homepage/NavBar';
import Footer from '../homepage/Footer';

interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  user: { name: string } | null;
}

const Community = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector((state: RootState) => state.post.posts);
  const isLoading = useSelector((state: RootState) => state.post.status) === 'loading';
  const [comments, setComments] = useState<{ [key: number]: string }>({});
  const [likedPosts, setLikedPosts] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleCommentChange = (postId: number, text: string) => {
    setComments({ ...comments, [postId]: text });
  };

  const handleCommentSubmit = (postId: number) => {
    console.log(`Comment on post ${postId}:`, comments[postId]);
    setComments({ ...comments, [postId]: '' });
  };

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.feedContainer}>
      <NavBar/>
      <h1 className={styles.feedTitle}>Feeds</h1>
      {posts.map((post: Post) => (
        <div key={post.id} className={styles.postCard}>
          <div className={styles.postHeader}>
            <img src="/community.png" alt="User Avatar" className={styles.userAvatar} />
            <div className={styles.userInfo}>
              <h3 className={styles.userName}>{post.user?.name}</h3>
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
                   <button className={styles.commentButton}>Comment</button>
            <button className={styles.shareButton}>Share</button>
          </div>
          <div className={styles.commentSection}>
            <input
              type="text"
              placeholder="Add a comment..."
              value={comments[post.id] || ''}
              onChange={(e) => handleCommentChange(post.id, e.target.value)}
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
      <Footer/>
    </div>
  );
};

export default Community;
