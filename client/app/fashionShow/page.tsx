import React from 'react';
import styles from '../styles/fashionShow.module.css'
const Video: React.FC = () => {
  return (
    <iframe className={styles['video']} src={"https://www.youtube.com/embed/hoKDrFyQDy0"}  />
  );
}

export default Video;
