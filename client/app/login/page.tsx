'use client'

import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  liked: boolean;
}

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  image: string;
}

interface Props {
  user: User;
  changeView: () => void;
}

const Userprofile: React.FC<Props> = ({ user, changeView }) => {
  const [dataP, setData] = useState<Post[]>([]);
  const [updatee, setUpdatee] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setname] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpen1, setIsModalOpen1] = useState<boolean>(false);

  const fetchpost = async () => {
    try {
      const response = await axios.get<Post[]>("http://localhost:3000/api/post/");
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addpost = async (body: Partial<Post>) => {
    try {
      const response = await axios.post<Post>("http://localhost:3000/api/post/", body);
      return response.data;
    } catch (error) {
      console.error('Error adding post:', error);
      throw error;
    }
  };

  const deletepost = (id: number) => {
    axios.delete(`http://localhost:3000/api/post/${id}`).then(() => setUpdatee(!updatee)).catch((error) => console.log(error));
  };

  const toggleLike = (index: number) => {
    const newData = [...dataP];
    newData[index].liked = !newData[index].liked;
    setData(newData);
  };

  const updateS = (id: number, obj: Partial<User>) => {
    axios.put(`http://localhost:3000/api/user/${id}`, obj).then(() => setUpdatee(!updatee));
  };

  const handleAddPost = async () => {
    try {
      const newPost = await addpost({ title, content, image });
      setData(dataP => [...dataP, { ...newPost, liked: false }]);
      setTitle('');
      setContent('');
      setImage('');
      setIsModalOpen(false);
      setUpdatee(!updatee);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const handleDelete = (id: number) => {
    deletepost(id);
  };

  const handleUpdate = () => {
    updateS(user.id, {
      email: email !== '' ? email : user.email,
      password: password !== '' ? password : user.password,
      name: name !== '' ? name : user.name,
    });

    setEmail('');
    setPassword('');
    setname('');
    setIsModalOpen1(false);
  };

  useEffect(() => {
    fetchpost();
  }, [updatee]);

  return (
    <div>
      {/* Your JSX content here */}
    </div>
  );
};

export default Userprofile;
