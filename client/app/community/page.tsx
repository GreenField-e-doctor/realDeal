'use client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../lib/hook';
import { RootState } from '../lib/store';
import { fetchPosts } from '../lib/features/postSlice';
import { addComment, fetchCommentsByPost } from '../lib/features/commentSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../homepage/NavBar';
import { faHeart as farHeart, faHeart as fasHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/community.module.css';
import { User } from '../types/types';

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
  user: User | undefined ;  
}
interface user {
  id: number;
  content: string;
  postId: number;
  userId: number;
  user: User | undefined ;  
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
  const [userObject, setuserObject] = useState<User | null>(null);
  let temp =  localStorage.getItem('user')
// @ts-ignore
  var {user}:User = JSON.parse(temp);
  console.log("user",user)
  // useEffect(() => {
  //   console.log("Fetching posts...");
  //   dispatch(fetchPosts());
  //  let temp = localStorage.getItem('user')
  //   if (temp) {
  //     setuserObject(JSON.parse(temp));
      
  //   }
    
  // }, [dispatch]);
  useEffect(() => {
    const het = async () => {
      dispatch(fetchPosts());
   
    
    };
    
    het(); // Call the function when the component mounts
  }, [dispatch]); 
  // console.log("userObject", userObject.user.name);

  
  useEffect(() => {
    if (posts.length > 0) {
      console.log(`Fetching comments for ${posts.length} posts...`);
      posts.forEach(post => {
        dispatch(fetchCommentsByPost(post.id));
      });
    }
  }, [dispatch, posts.length]);


  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setuserObject(JSON.parse(userData)); 
    }
  }, []);

  const suggestedGroups = [
    { name: 'Zalando', members: '24k', imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBAdjV_ZeNTKdT9ztJ6Rk73OPvlgmE7luAA&s' },
    { name: 'Zara', members: '79k', imageUrl:'data:image/png;base64,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' },
    { name: 'Cartier', members: '84k ' ,  imageUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA51BMVEXBABb///+7AAC/AA/AABO3AAC/AA61AACyAACtAACwAAC9AAa+AAqqAACmAAClAACgAACcAAD78vL9+PiXAADRe3vw2dnz4uLrx8fpy8v46OjntbbPYmTZiYrkrq7hpKTemJjUmpq1Ghrw0tLipqfiwcG6EBDiuLjRiIjaqqqtPz+3W1vHeHikGhrFLzPrwcLWenzLSU3MW1vBLCzBNzfGQkLObm7HUVHIW1uwLCzOjIzNXl/AcXHGcHDUdHTXgYGzTk68QkKxGRnTk5O3YWG5Nze/dnakLi64VFTDJinUoaG3MjKnJiZB/duKAAAOVUlEQVR4nO1aC1fbuBKuDY5lO7aVhCYmD0JIaMKjC10oobQsjy5dyvb//56rmZFkGWg3oa/DPfPtOd3WjqX55qUZSS9eMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwG41djFfG7pfg5WH2A3y3RD4UhtQL4/2NaciPUVlw8f5IlvVrNL1GvISzJ3y3mk2H41ZDeH4ODcXHQ29icHAJJQC1JkOLvFvSJ0PwUvbrvH0+aXq+vTdgvevSX4PjN86Vo+dUVv37b6wC9BC2X+MHA2xgMBtNux09qQPF3S/sEaH6Kjx/0O173z0DxS4Ch+lNRvPAALQzJZ8nQ8FNcjseeNwh8JEgA/wwLYDhXD+vP0YhoQOWfYKyh53WPAgq7kqAirghOQnDcZ2hEx4Bvu57XCzXBCkPR9rohum792TF0DDhQhhqIIAgcgsgwCMTEmyP158cQCYIB/QBi7QQIWoaQaIhheFjEwbNkSATBgEfKQ72+CA1DSqVEUTGcH4dPYPj7S1pNUHGYQ7Lsx2EYWoZ1yxAo6udLMHQK+JWS5uqLX8lVzV+rAYfwLyB4HgkRhiVBqG8sRU0QGS44uKlxV6osf6FN0YLAQECO8WaKoGFIBClEDUVfm3AxhqZIomRc7VFWfhHHkuBLINhLY2BYEiQDGIo6+yzK0KxBfn1T4dA3vcnKiu8bkr+MYHgKBNtpFMeWYd0K5FJcoqQxa1AwgcFPfPR5GM4/fkMW/fkUbZI5xpoziqJ7BHWiMMGYGM9dRDKIcFyDcPD1APMWNJm+qpoKQ/EnE1zVBMMmCHGbaoYm2FDHlmI90TIuQRD9ow2DH9ncnPjw77f+ogP9CIIxFtWjHBmiCbUrrtLPdFNcN262kHOpj2BwP8SmZEOY2NYMj3ytw5/KkGQIKI128jQFE94nWGn8awtnCFAfVgqvMABsfoYiUK1LmzYMfiZBMmEQHmHn9y5DhmFJ0PllZWvKWdbuj/hCr+WrSBD9Y12vQqEpk6B68gM3or+yQLoL51MUYX00wjg5k5pg8IDgQ4aPLt9V6MFpFeqm2vsd6NXI/Pw/B1x+9bQ+ijK0ZdWECxCs0HzwXBMk/9hLI/EYxVpt4fHMqyVNCGlUtECG3Tz7BkEdhXW7t0j7bjVHwloJSkuYo6MOrhRKfdHjRqzpT/WO5UplvHq9nMikuMUp6iAMIlyOxw1iqH30YQzWsPZ6Mxl313u9AYhHYuLMKA09SPD/SV0T7KEJd0aj0fAtdZ1YwFuGKDwo7o/Dw/fqUakm2C6CD0wDrvkvTlGnukBsoQy34KRkwmoQGn4g8WbTa59Aejxpqz+G7Xa784df17r2/XX1oFADvOm/R2MrgjMc/O7D/v7+OUZiEMJn07DsPmHg+UF3YzBWS4rxDlh6g16n3e7+pX73atAruksnX5NHScsdMiH5aJXgit5fDC5aXndO2g/+PAjfwncHgekgk2ATS7Ot4Wb/7dtBX2XLMD4paHAJo2MghtihnTo7CGqwjqIWBEI5dM9ufvn+e0xRyoqbw+N50fQmfn2ZLTAlOWWCGLU8k7k2YcVHy4rN31IJd9PGUTgWmICtmL6PvlAMhuBb8+ODLaW8/g5G4aWE0akrE1A8FaKMyOCzst1JCBY/oAHNCyyzTkV/uBV+hr82fU1xSROOkCGa0Pho1YJYkQZ9tWjPjVhK3wcnqJjQCiTQXOO5Eh6rtFMRnUz34dn2msxzXQ/GQ3iyZTpsNRQk8jluKghYOD+bKcQBpqho2BdBONAMcX1ZtPfWUZiipraBoU4zjpLs/g14YHNLeygEU1zAfkfX2iIIkXFrS9lJYJV2mp4VOWpvTaKTAkNxBQ+GsdkmCcIebZsABLxTSsZGm5Ywb94rRzwIltnlIydVkt7iQB+UG1EUVn3U7N9sKIKvAotQRKiYOe3owJMQl5wroBFP0U7rOw38y2iNnBTasgj00oqpxwYoD/VexqHiLjArHQg9wQ3K1aZ+VYBvKwGWar6NCVEIT+r1Ckx4n6AKug3jWYZgjN1kkRpRwwh9dAaWiqOPQKN5LtFgTWvCOE5hIO+l2UYIQgjTHvwzFnEMOrrW5sRw9bxpFqFmRHhxgVZPKj72nwyVqOSk7TVyUt/dgCkJDj27AUcERQq6964xtADxOQYhmEqJFPVanY9Z3sBc9DcmUqKOntzJ0F+BB/ygA9TVuxR01I/QYiIqdKGQUscqhNO1LsqQnPQdLciNXJuw9NGS4CEqOjSOpQhGmPJHmZ2d1tTXyEQhzfI8l8TamFDhmkJLh6RATt4NvooyMPw5+WScTnEdbWrVCFJIYLfbFyG4CnWEMiEmO+8ThKHQUWh1oCtL8LWmEzrKR1NQflPq4FKyorU+QtGAXNT/8ryB7vGPMaF6inbZlmRQgc7sjYh8plJ66yole6Y7N7aQ1FOE5ebYgltExkl3kOGuNE7qmtDp/vt6f0qbEK3zd06iKonu4N9dmZUMlY+O0Dt0mgESFPLXxtAUpfCJ+rl6N43oeZROru60Z1EzILT/+A9L5v9gKOJs2yQazKSJNWHZ/IBc66nLMI5aGCOZsQ2Gl3eZZ9ZL00w24FlrzZowQ8beyOghg7TqneegjT1VDc6zSPvrZBdjp0mVUGwmLndqF2NYR4Y5ZgyvIU0YWhOuULKlLbibyDKENIPG+GIIpa9xjO2GSSgqa6R5A3X3yZownaEnN9XijxRzHETVczLb73jFXOsGLLhbpqhU13r2FGWJbT4MwyhvE0NMNCoMXRNSgw4+up1ZhioBUka8kySpYtPVWtJrgrJxlOaXSGBNP43S/RmG1rmk7yRZdH00bXfX99PM8IvSjRv5AV+tSdPPlSd9i1dtwBDWbblOsUGJJjEMyx0qzAZXOhjIR99VbJHmBWaUs4atWxTFtIFZZRdMBNZJz2cYWm2wqfpQnukEcHt1ndt4Vqq5nl5nOeritcQqpCSY2D2BhRjWiCH5ircnKwxXTWcVY7XUgaKSGIammjkHQZHgFIfokkvR4hFHGeaiqVkplAVTz1BWH8r9ETLcph9gClWfxdG8p8yLr0ZkQr2zmehDsNrC/aFl+EmHv2W4+sLusQRiYwIeOLIMgSD69bihGcoped+ecSlYyBVDVENDp5l0NpNTQ1l9KPd31jpkeKdkVTn6YqLyzo2TZgzB+nL7mA7DTCLDdoOWQ1zwsWPCemB8EWGSzDRDS1AtL8RQTs+mJmi0S+F6eYbyawtlGypjepoyEZQ072VDGtODYqYvlTYkzrDXoAED6idqK8texjIMU0p53m6GmSYpzyn84LD9L1Uh7zKzKAnRaVXCafpx16Og0RrHtkCgCZuGYHGaZmdkQmAkZyP1h3VaM3jcH6uUHWX7rsbMvp+zDbcYQZVpEsylaU6pfl1GpvtFgr5/NB4KvfJdWSHm3VNMTSP0rjwfz6hwubMCUWt1UwZZvtd+p6IVP/sAT+TZmVT1QNdYipp/ERxsUI5CFX6Rbr+6LDtiWMf+Ps0ae0hxllHvRAcn/udecaSmjTOQ7CzXKWSjEFlhGcrb7m3jrgwa2uSBjab4RNtBynRaQKbJu4ahnO7nqbL+nVYCjh2Hw/YcHZWKrFHZkD/1/pUpvNXcjUvU2ixFn8dtrffFeE5dYApO2MLlKvw4Poni9JwoNeRN0b7OqXD/VAqEXa0uxO9uP2xjQ2UYdl7LWfc2hyotl2R8XBKuet0LiuDoXxxeOvt+C+9a3GdIdSl0AVLeAcfO4BhKhzcXRad3TLZQTpNDkd/amU3G7ZeQ0KMcA7fVaXr7ytkwK3TWbFbQDFNcRhV20jTGAsA8GF/rQlR+oUKhM+60Oi+pszeJ7G9ptm6T5KmXPvR6B0YEinJvZ4yW9JrjyRzys2GY5lfb6k23N1czYpzIj6D99r5aqLPLcVEU65d2F8tPiGGcXt1tb4/2aKUDirjItbYvc6dwPWurkZvF7JV1b3GzPZ1O7yQm79Ak96cQtJsYIHIGUGoVAcQm7elqhgJkyVVJnMaUSuHnsvH6CyZ5WO+l1Gs2CUQfombQ/yK9kqt1Jd/9BxNnRJRVeyUbEmaO9WaPjouMahxh96afRLA0IggDKA9G7SUoMmKke9BQr+UpdrfkauRvWJZpgqSbEDVjm1ekqL+ibg85k2Kdugx1GqON9Rnf91xMst2fGdJO5DIMQRY62aeKxigkLSvl1B46mg1sd1Bcyu1ndk+AVKcf2P06ohhbYZ6cZpChclMtjYjjuLyAUTFiEAq7R6Jbp9hQi3WtHDkC6cOLctAw1BtL1jSi8qS8FuFXJrTH0E8/PzXdA1nK7H05Zwn2FlRoty8MR60RB+W5OHmGFtR+GJaUnSdWd74958EJtSjfe3nOXiPA+UwPbW+y1e2UQfnOL0ULXdj9BXNqSJLa78xnVov6kXu7LHGuXZXjfdcJuL2OWN7mcsr4Cke/RPAYfCuQHdMZsvLZw0eO2yTORD/glq49knCHtSd6dH+m+tKRzb8Hs73gqK0c8t5Xyb1xzfVAl2PyQ64h6ytZdr7E8jNHsGbSxMF9bkYvzuUiK+ojn90LAvu1OfDVP6frZt99S8MendXNsCW/kmSC/9VLNT8EyFN7eLnI8fi6+9tazZlUP6keay952PtNiqvWWjCwPUe3VwVqD1C/j0rvXR75u0f6lfN4R3vO9+5lACPCdxMsOdL1T5feNy5EuDcS3E/KEb/+2WMDOXPaV0+4WfJtko5Ibq9Z0vwG6YfN6WP3YFarv66M9OjvfxS9x2X6yquvSb/cBI/N+YPpMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGYxH8D/KwR/LAyaI6AAAAAElFTkSuQmCC' }
  ];


  const handleCommentChange = (postId: number, text: string) => {
    setCommentInputs({ ...commentInputs, [postId]: text });
  };

  const handleCommentSubmit = (postId: number) => {
    const content = commentInputs[postId];
    if (!content) return;

    const newComment = {
      id: Math.random(), 
      content,
      postId,
      userId: user.id,
      user: userObject 
    };

    // Dispatch the action to add the comment (updates backend and redux state)
    dispatch(addComment(newComment));

    const updatedComments = commentsByPostId[postId] ? [...commentsByPostId[postId], newComment] : [newComment];
    dispatch({ type: 'comments/addCommentOptimistically', payload: { postId, comments: updatedComments } });

    setCommentInputs({ ...commentInputs, [postId]: '' });
};
//   const formatPostDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleString(); // Converts to local string, can adjust as necessary
// };

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
    
    

  }
  console.log(userObject);
  
  return (
    
    <div className={styles.communityLayout}>
          {/* <NavBar /> */}
      <div className={styles.feedContainer}>
        <h1 className={styles.feedTitle}>Feeds</h1>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.postHeader}>
              <FontAwesomeIcon icon={faUser} className={styles.userAvatar} />
              <div className={styles.userInfo}>
                <h3 className={styles.userName}>{post.user ? post.user.name : 'Loading...'}</h3>
                <p className={styles.postTime}>Just now</p>
                {/* <p className={styles.postTime}>{formatPostDate(post.createdAt)}</p> */}

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
              <button className={styles.shareButton}>Share</button>
            </div>
            <div className={styles.commentSection}>
              {commentsByPostId[post.id]?.map(comment => (
                <div key={comment.id} className={styles.comment}>
                  <strong>{comment.user?.name || 'Loading '}:</strong> {comment.content}
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
  
      {/* Suggested Groups Sidebar */}
      <aside className={styles.suggestedGroupsSidebar}>
        <h2>Suggested Groups</h2>
          {suggestedGroups.map((group, index) => (
    <div key={index} className={styles.groupCard}>
      <img src={group.imageUrl} className={styles.groupImage} alt={group.name} />
      <div className={styles.groupInfo}>
        <span className={styles.groupName}>{group.name}</span>
        <span className={styles.groupMembers}>{group.members}</span>
        <button className={styles.joinButton}>Join</button>
      </div>
    </div>
  ))}
  <button className={styles.seeAllButton}>See All Groups</button>
</aside>
    </div>
  );
  
};

export default Community;
