
'use client'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../lib/store';
import { fetchPosts, addPost, deletePost, updateProfile, updatePosts } from '../lib/features/UserProfileSlice.reducer';
import styles from '../styles/UserProfile.module.css';
import { FaHeart } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../lib/hook';

const UserProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector((state) => state.userProfile);
  const posts = useAppSelector((state) => state.userProfile.posts);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [newPosts,setNewPosts] =useState([{

  }])

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  const handleAddPost = () => {
    const newPost = {
      id: 11, 
      title: 'New Post',
      content: 'This is a new post.',
      image: '',
      liked: false,
    };
    
   
  };

  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  const handleUpdate = () => {
    dispatch(
      updateProfile({
        email,
        password,
        name,
      })
    );
    setEmail('');
    setPassword('');
    setName('');
  };
  const toggleLike = (index: number) => {
    const updatedPosts = [...posts];
    updatedPosts[index] = { ...updatedPosts[index], liked: !updatedPosts[index].liked };
    dispatch(updatePosts(updatedPosts)); 
  };

  return (
    <div className={styles.userprofilediv}>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <center>
            <img
              className={styles["div3"]}
              src="https://s3-alpha-sig.figma.com/img/6262/ff08/c2cdd4f8b04caadb548542f98fd4c2f2?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jZ0UKoFKLaZRUrq6uzNwhS8rGZ8PjFwkDglBS9UMUHd9tz9XqDjdCDIsAXPtz2Gm8bbfvb0YnZ754PGHsB1vvCrPRH~sjEsiFA1xx7ZF9CBmdHXHBB12BG9v-dkm2JfyiBqQHYe1aejZGgKU75kQchcOypyYQbTgEpxLgwwMrpTe8wsmg1nqspr8llUBmJSbSzzPByUK08z6U9g57LRzNu8eEBDqX4ebodBYP1Qu-H4Mm2czB70tlFm0oqV52JsvhVF7AUoWa415oPi0qci8aRk0as0w5TaWqk0mpdfKbQlzU7KtJrNnzTVXsiMgKhNcKiY~MDWKo~N27oZaAyWBuQ__"
              alt="Description"
              // onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              // onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </center>
        </div>
        <div className={styles.div4}>
          <div className={styles.div5}>
            <div className={styles['imgEditProfile']}>
              <img 
              className={styles['imgbackuserprofile']}
                src={userProfile.user.image}
                alt="Profile"
                style={{ marginTop: '-150px', padding: '70px', width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'bisque' }}
              />
              <p className={styles['username']}>{userProfile.user.name}</p>
            </div>


            <div className={styles['Editprofilebutton']}>
              <button onClick={() => setIsModalOpen1(true)} className={styles.editProfileButton}>
                Edit ur Profile
              </button>

              {isModalOpen1 && (
                <div className={styles.modalBackground}>
                  <div className={styles.modalContent}>
                    <h1 className={styles.modalTitle}>Update</h1>
                    <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.modalInput}
                    />
                    <textarea
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={styles.modalTextarea}
                    />
                    <input
                      type="text"
                      value={name}
                      placeholder="name"
                      onChange={(e) => setName(e.target.value)}
                      className={styles.modalInput}
                    />
                    <button onClick={() => handleUpdate()} className={styles.modalButton}>
                      Update
                    </button>
                    <button onClick={() => setIsModalOpen1(false)} className={styles.closeButton}>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.div6}>
        <div className={styles.div7}>
          <form onSubmit={handleAddPost} className={styles.addPostForm}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.postInput}
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={styles.postTextarea}
            />
            <input
              type="text"
              value={image}
              placeholder="Image URL"
              onChange={(e) => setImage(e.target.value)}
              className={styles.postInput}
            />
            <button type="submit" className={styles.addbotton}>
              Add New Post
            </button>
          </form>

          {posts.map((post, index) => (
            <div key={index} className={styles.postContainer}>
              <p className={styles.ptitle}>{post.title}</p>
              <img className={styles.img1} src={post.image} alt={post.title} />
              <div className={styles.div10}>
                <p style={{ color: 'bisque' }}>{post.content}</p>
                <button onClick={() => toggleLike(index)} style={{ color: post.liked ? '#F56565' : '#4A5568' }}>
                  <FaHeart />
                </button>
              </div>
              <button onClick={() => handleDelete(post.id)} className={styles.editProfileButton}>
               delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;



