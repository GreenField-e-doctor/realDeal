'use client'
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { useAppDispatch } from '../lib/hook';
import { registerUser, setError } from '../lib/features/userSlice';
import { SignUpProps, SignUpData } from '../types/types';

type ExtendedSignUpProps = Partial<SignUpProps>;  // Make all properties of SignUpProps optional

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

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (formData.image) {
            dispatch(registerUser(formData));
            if (changeView) changeView('login');
        } else {
            dispatch(setError('Please upload an image.'));
        }
    };

    return (
        <div className="signUp" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '20px' }}>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="role">Role</label>
                <select id="role" value={formData.role} onChange={handleChange} required>
                    <option value="fashionDesigner">Fashion Designer</option>
                    <option value="client">Client</option>
                </select>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={formData.password} onChange={handleChange} required />

                <Dropzone onDrop={handleImageDrop}>
                    {({ getRootProps, getInputProps }) => (
                        <section style={{ padding: '20px', border: '2px dashed #ddd', borderRadius: '5px', textAlign: 'center' }}>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {isLoading ? 'Uploading...' : 'Drop some files here, or click to select files'}
                            </div>
                        </section>
                    )}
                </Dropzone>

                <button type="button" onClick={handleSubmit}>Sign Up</button>
                <button type="button" onClick={() => changeView && changeView('login')}>Login</button>
            </form>
        </div>
    );
};

export default SignUp;
