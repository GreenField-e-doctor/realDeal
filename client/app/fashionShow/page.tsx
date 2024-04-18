'use client'
import React from 'react';
import styles from '../styles/fashionShow.module.css';
import { SlLike } from "react-icons/sl";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Video: React.FC = () => {
  return (
    <div className={styles["fashiondiv"]}>
      <iframe className={styles["video"]} src="https://www.youtube.com/embed/hoKDrFyQDy0"></iframe>

      <br/>
      <div className={styles["likeLorem"]}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <SlLike className={styles['likevd']}/>
      Liked
      <IoShareSocialOutline />
      share
      </div>
      <br/>
      <div className={styles["zalandoacc"]}>
      <img className={styles['zalandologo']} src="https://s3-alpha-sig.figma.com/img/dbac/df43/ad865d79d09d456e595e6f2e33060422?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZSFOsX2ytvioWTQiRioTtk6wWpwgboKNgiQc2e1QbsLLvt-R2mvTnrexE5n0uo9hEtQ1UH0Rr2mRglaAzzE~NFLY0nUe0P3~KQBW0CBkgK2UJONKAQGWuDSNODz61VhH~uDuV87B9jkq7aLc3759cqTXR7vbUDUtc2ATLKw7bGdq0sJkpRzZPFEiqIFE5OM4obr34cGp6EZFhJiifEBvaLWkhJrQZcMfxIhwwPAHuZ3zuVD-byJDYl7PZTgne8nziq7h0lXY3y~-nL5qQkJZM5mtnW5TSYybBuWmfj2~jEjypT4IrlmYYYo~p0en0AM0xbL9Mqiq8NQ~DcAh8Ekiw__" />
        Zalando
        <RiVerifiedBadgeFill className={styles['verificon']}/>
        <button className={styles["follow"]}>follow</button>
      </div>
      <div className={styles["Twoboxes"]}>
      <div className={styles["box"]}> 
      <h4 className={styles['represntig']}>Representing Products</h4></div>
      <div className={styles["box"]}><h4 className={styles['hChat']}>Chat</h4></div>
    
      </div>
      <br/>
      <button className={styles["mintNow"]}>mint now</button>
      <br/>
      <button className={styles["Backto"]}>Back to Fashion Shows</button>

      <div className={styles["liveVideos"]}>
      
      <iframe className={styles["livevideo"]} src="https://www.youtube.com/embed/7FjL6i04_uY" ></iframe>
      <iframe className={styles["livevideo"]} src="https://www.youtube.com/embed/NSvnwRYKzg0"></iframe>
      <iframe className={styles["livevideo"]} src="https://www.youtube.com/embed/rc31PMlXF6I"></iframe>
      <iframe className={styles["livevideo"]} src="https://www.youtube.com/embed/hoKDrFyQDy0"></iframe>
       
      </div>
     
      
      <div className={styles["zalando"]}>
       <p className={styles["veri"]}>Showing :<img className={styles['zalandologop']} src="https://s3-alpha-sig.figma.com/img/dbac/df43/ad865d79d09d456e595e6f2e33060422?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZSFOsX2ytvioWTQiRioTtk6wWpwgboKNgiQc2e1QbsLLvt-R2mvTnrexE5n0uo9hEtQ1UH0Rr2mRglaAzzE~NFLY0nUe0P3~KQBW0CBkgK2UJONKAQGWuDSNODz61VhH~uDuV87B9jkq7aLc3759cqTXR7vbUDUtc2ATLKw7bGdq0sJkpRzZPFEiqIFE5OM4obr34cGp6EZFhJiifEBvaLWkhJrQZcMfxIhwwPAHuZ3zuVD-byJDYl7PZTgne8nziq7h0lXY3y~-nL5qQkJZM5mtnW5TSYybBuWmfj2~jEjypT4IrlmYYYo~p0en0AM0xbL9Mqiq8NQ~DcAh8Ekiw__" />  Zalando <RiVerifiedBadgeFill className={styles['verificon']}/></p> 
       <p className={styles["veri"]}>Showing :<img className={styles['zalandologop']} src="https://s3-alpha-sig.figma.com/img/dbac/df43/ad865d79d09d456e595e6f2e33060422?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZSFOsX2ytvioWTQiRioTtk6wWpwgboKNgiQc2e1QbsLLvt-R2mvTnrexE5n0uo9hEtQ1UH0Rr2mRglaAzzE~NFLY0nUe0P3~KQBW0CBkgK2UJONKAQGWuDSNODz61VhH~uDuV87B9jkq7aLc3759cqTXR7vbUDUtc2ATLKw7bGdq0sJkpRzZPFEiqIFE5OM4obr34cGp6EZFhJiifEBvaLWkhJrQZcMfxIhwwPAHuZ3zuVD-byJDYl7PZTgne8nziq7h0lXY3y~-nL5qQkJZM5mtnW5TSYybBuWmfj2~jEjypT4IrlmYYYo~p0en0AM0xbL9Mqiq8NQ~DcAh8Ekiw__" />   Zalando <RiVerifiedBadgeFill className={styles['verificon']}/></p> 
       <p className={styles["veri"]}>Showing :<img className={styles['zalandologop']} src="https://s3-alpha-sig.figma.com/img/dbac/df43/ad865d79d09d456e595e6f2e33060422?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZSFOsX2ytvioWTQiRioTtk6wWpwgboKNgiQc2e1QbsLLvt-R2mvTnrexE5n0uo9hEtQ1UH0Rr2mRglaAzzE~NFLY0nUe0P3~KQBW0CBkgK2UJONKAQGWuDSNODz61VhH~uDuV87B9jkq7aLc3759cqTXR7vbUDUtc2ATLKw7bGdq0sJkpRzZPFEiqIFE5OM4obr34cGp6EZFhJiifEBvaLWkhJrQZcMfxIhwwPAHuZ3zuVD-byJDYl7PZTgne8nziq7h0lXY3y~-nL5qQkJZM5mtnW5TSYybBuWmfj2~jEjypT4IrlmYYYo~p0en0AM0xbL9Mqiq8NQ~DcAh8Ekiw__" />   Zalando <RiVerifiedBadgeFill className={styles['verificon']}/></p> 
       <p className={styles["veri"]}>Showing :<img className={styles['zalandologop']} src="https://s3-alpha-sig.figma.com/img/dbac/df43/ad865d79d09d456e595e6f2e33060422?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZSFOsX2ytvioWTQiRioTtk6wWpwgboKNgiQc2e1QbsLLvt-R2mvTnrexE5n0uo9hEtQ1UH0Rr2mRglaAzzE~NFLY0nUe0P3~KQBW0CBkgK2UJONKAQGWuDSNODz61VhH~uDuV87B9jkq7aLc3759cqTXR7vbUDUtc2ATLKw7bGdq0sJkpRzZPFEiqIFE5OM4obr34cGp6EZFhJiifEBvaLWkhJrQZcMfxIhwwPAHuZ3zuVD-byJDYl7PZTgne8nziq7h0lXY3y~-nL5qQkJZM5mtnW5TSYybBuWmfj2~jEjypT4IrlmYYYo~p0en0AM0xbL9Mqiq8NQ~DcAh8Ekiw__" />   Zalando <RiVerifiedBadgeFill className={styles['verificon']}/></p> 
  
      </div>
     
    </div>
  );
}

export default Video;
