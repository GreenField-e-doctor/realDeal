'use client';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { useAppDispatch } from '../lib/hook';
import { registerUser, setError } from '../lib/features/userSlice';
import { SignUpProps, SignUpData } from '../types/types';
import Link from 'next/link'; 
import styles from '../styles/SignUp.module.css'; 

type ExtendedSignUpProps = Partial<SignUpProps>;

const SignUp: React.FC<ExtendedSignUpProps> = ({ changeView }) => {
    const [formData, setFormData] = useState<SignUpData>({
        name: '',
        email: '',
        password: '',
        role: '',
        image: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleImageDrop = async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        const uploadFormData = new FormData();
        uploadFormData.append('file', file);
        uploadFormData.append('upload_preset', 'ygjfen9u');

        try {
            setIsLoading(true);
            const response = await axios.post('https://api.cloudinary.com/v1_1/dnirskhlb/image/upload', uploadFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const imageUrl = response.data.secure_url;
            setFormData({ ...formData, image: imageUrl });
            setIsLoading(false);
        } catch (error) {
            console.error('Error uploading image:', error);
            dispatch(setError('Error uploading image'));
            setIsLoading(false);
        }
    };
    const handleSubmit = () => {
        if (formData.image) {
            dispatch(registerUser(formData))
              .then(() => {
                window.location.href = '/login'; // Direct navigation to login page
              })
              .catch((error) => {
                console.error('Registration error:', error);
                // Handle registration errors here
              });
        } else {
            dispatch(setError('Please upload an image.'));
        }
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.card}>
                <form className={styles.formContainer} onSubmit={e => e.preventDefault()}>
                    <input className={styles.inputField} type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <input className={styles.inputField} type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <select className={styles.inputField} id="role" value={formData.role} onChange={handleChange} required>
                        <option value="">Select Role</option>
                        <option value="fashionDesigner">Fashion Designer</option>
                        <option value="client">Client</option>
                    </select>
                    <input className={styles.inputField} type="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <Dropzone onDrop={handleImageDrop}>
                        {({ getRootProps, getInputProps }) => (
                            <section className={styles.dropzone}>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {isLoading ? 'Uploading...' : 'Drag & drop an image here, or click to select one'}
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    <button type="button" className={styles.submitButton} onClick={handleSubmit}>Sign Up</button>
                    <Link href="/login" legacyBehavior>
                        <a className={styles.changeViewButton}>Login</a>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp
