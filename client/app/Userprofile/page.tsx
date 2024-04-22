"use client"
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost, deletePost, updateProfile, updatePosts, fetchUserById } from '../lib/features/UserProfileSlice.reducer';
import styles from '../styles/UserProfile.module.css';
import { FaHeart } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../lib/hook';
import axios from 'axios';
import NavBar from '../homepage/NavBar';
import Footer from '../homepage/Footer';

const cloudinaryUploadUrl = 'YOUR_CLOUDINARY_UPLOAD_URL';

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
  const [toogle, setToogle] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUserById(2));
  }, [dispatch]);

  const handleAddPost = () => {
    dispatch(addPost({ 
      post: {
        title: title,
        content: content,
        image: image,
        liked: false
      }
    }));
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
    if (updatedPosts[index]) { 
      updatedPosts[index] = { ...updatedPosts[index], liked: !updatedPosts[index].liked };
      dispatch(updatePosts(updatedPosts)); 
    }
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

        const response = await axios.post(cloudinaryUploadUrl, formData);
        setImage(response.data.secure_url);
        updateProfileImageInDatabase(response.data.secure_url);
      } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
      }
    }
  };

  const updateProfileImageInDatabase = async (imageUrl: string) => {
    try {
      await axios.put('http://localhost:1128/api/user/users/2', { image: imageUrl });
    } catch (error) {
      console.error('Error updating profile image in database:', error);
    }
  };

  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <NavBar/>
    <div className={styles.userprofilediv}>
      <input 
        type="file" 
        ref={fileInputRef} 
        style={{ display: 'none' }} 
        onChange={handleImageChange} 
      />
      <div className={styles.div1}>
        <div className={styles.div2}>
          <center>
            <img
              className={styles["div3"]}
              src="https://s3-alpha-sig.figma.com/img/6262/ff08/c2cdd4f8b04caadb548542f98fd4c2f2?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jZ0UKoFKLaZRUrq6uzNwhS8rGZ8PjFwkDglBS9UMUHd9tz9XqDjdCDIsAXPtz2Gm8bbfvb0YnZ754PGHsB1vvCrPRH~sjEsiFA1xx7ZF9CBmdHXHBB12BG9v-dkm2JfyiBqQHYe1aejZGgKU75kQchcOypyYQbTgEpxLgwwMrpTe8wsmg1nqspr8llUBmJSbSzzPByUK08z6U9g57LRzNu8eEBDqX4ebodBYP1Qu-H4Mm2czB70tlFm0oqV52JsvhVF7AUoWa415oPi0qci8aRk0as0w5TaWqk0mpdfKbQlzU7KtJrNnzTVXsiMgKhNcKiY~MDWKo~N27oZaAyWBuQ__"
              alt="Description"
              onClick={handleProfileImageClick}
            />
          </center>
        </div>
        <div className={styles.div4}>
          <div className={styles.div5}>
            <div className={styles['imgEditProfile']}>
              <img
                className={styles['imgbackuserprofile']}
                src={userProfile.user.image} alt="Profile"
                style={{ marginTop: '-100px', width: '170px', height: '144px', borderRadius: '60%' }}
                onClick={handleProfileImageClick}
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
          </form>
          <button onClick={handleAddPost} type="submit" className={styles.addbotton}>
            Add New Post
          </button>

          {posts.map((post, index) => (
            <div key={index} className={styles.postContainer}>
              <div className={styles.div8}>
                <h3 className={styles.h3user}>{userProfile.user.name}</h3>
              </div>
              <p className={styles.ptitle}>{post.title}</p>
              <img className={styles.img1} src={post.image} alt={post.title} />
              <div className={styles.div10}>
                <p style={{ color: 'beige' }}>{post.content}</p>
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
    <Footer/>
    </div>
  );
};

export default UserProfilePage;
