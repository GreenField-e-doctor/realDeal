// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useAppDispatch } from '../lib/hook';
// import { RootState } from '../lib/store';
// import { login } from "../lib/features/userSlice";
// // import Link from 'next/link';
// import styles from '../styles/Login.module.css';
// import { Post } from '../types/types';
// import axios  from 'axios'

// interface LoginProps {
//   changeView?: (view: string) => void;
// }

// const Login: React.FC<LoginProps> = ({ changeView }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const user = useSelector((state: RootState) => state.user.user);
//   const error = useSelector((state: RootState) => state.user.error);
//   const dispatch = useAppDispatch();

// interface Props {
//   user: any;
//   changeView: () => void;
// }

// const Userprofile: React.FC<Props> = ({ user, changeView }) => {
//   const [dataP, setData] = useState<Post[]>([]);
//   const [updatee, setUpdatee] = useState<boolean>(false);
//   const [title, setTitle] = useState<string>('');
//   const [content, setContent] = useState<string>('');
//   const [image, setImage] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [name, setname] = useState<string>('');
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [isModalOpen1, setIsModalOpen1] = useState<boolean>(false);

//   const fetchpost = async () => {
//     try {
//       const response = await axios.get<Post[]>("http://localhost:1128/api/post/");
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const addpost = async (body: Partial<Post>) => {
//     try {
//       const response = await axios.post<Post>("http://localhost:1128/api/post/", body);
//       return response.data;
//     } catch (error) {
//       console.error('Error adding post:', error);
//       throw error;
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       // Dispatch the login action and await the response
//       const response = await dispatch(login({ email, password })).unwrap();

//       // Check the response to ensure login was successful
//       if (response.user) {
//         // If login is successful, redirect to the homepage
//         window.location.href = '/homepage';
//       } else {
//         // Handle cases where login is not successful but no error thrown
//         console.log('Login failed: No error thrown, check your login logic.');
//       }
//     } catch (error) {
//       // Handle any errors from login process
//       console.error('Login failed:', error);
//     }
//   };

 

//   const updateS = (id: number, obj: Partial<User>) => {
//     axios.put(`http://localhost:1128/api/user/${id}`, obj).then(() => setUpdatee(!updatee));
//   };

//   const handleAddPost = async () => {
//     try {
//       const newPost = await addpost({ title, content, image });
//       setData(dataP => [...dataP, { ...newPost, liked: false }]);
//       setTitle('');
//       setContent('');
//       setImage('');
//       setIsModalOpen(false);
//       setUpdatee(!updatee);
//     } catch (error) {
//       console.error("Error adding post:", error);
//     }
//   };

//   const handleDelete = (id: number) => {
//     deletepost(id);
//   };

//   const handleUpdate = () => {
//     updateS(user.id, {
//       email: email !== '' ? email : user.email,
//       password: password !== '' ? password : user.password,
//       name: name !== '' ? name : user.name,
//     });

//     setEmail('');
//     setPassword('');
//     setname('');
//     setIsModalOpen1(false);
//   };

//   useEffect(() => {
//     fetchpost();
//   }, [updatee]);

//   function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
//     throw new Error('Function not implemented.');
//   }

//   function handlePasswordChange(event: ChangeEvent<HTMLInputElement>): void {
//     throw new Error('Function not implemented.');
//   }

//   return (
//     <div className={styles.pageContainer}>
//       <div className={styles.card}>
//         <h2 className={styles.heading}>Login</h2>
//         <form onSubmit={handleSubmit} className={styles.formContainer}>
//           <div className={styles.formGroup}>
//             <label htmlFor="email" className={styles.label}>Email</label>
//             <input type="email" id="email" value={email} onChange={handleEmailChange} required className={styles.inputField} />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="password" className={styles.label}>Password</label>
//             <input type="password" id="password" value={password} onChange={handlePasswordChange} required className={styles.inputField} />
//           </div>
//           {error && <p className={styles.errorMessage}>{error}</p>}
//           <button type="submit" className={styles.submitButton}>Login</button>
          
//           <p className={styles.text}>No account?</p>
//           <button type="button" onClick={() => window.location.href = '/signUp'} className={styles.changeViewButton}>
//   Sign Up
// </button>        </form>
//       </div>
//     </div>
//   );
// };

// export default Userprofile;
//   function deletepost(id: number) {
//     throw new Error('Function not implemented.');
//   }
// }
