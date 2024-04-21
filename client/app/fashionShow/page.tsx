'use client'
import React,{useEffect, useState} from 'react';
import styles from '../styles/fashionShow.module.css';
import { SlLike } from "react-icons/sl";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, addComment } from '../lib/features/commentsSlice';
import { fetchAllnfts } from '../lib/features/allnftSlice';
import { RootState } from '../lib/store';
import { Action } from '@reduxjs/toolkit';
import { IoSend } from "react-icons/io5";
import NavBar from '../homepage/NavBar';
import Footer from '../homepage/Footer';

const Video: React.FC = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.comments);
  const [commentText, setCommentText] = useState<string>(''); // State to hold the input text
  const nfts = useSelector((state: RootState) => state.allnft.allnft);
  
  useEffect(() => {
    dispatch(fetchComments() as any);
   dispatch<any>(fetchAllnfts({ status: 'all', genre: 'all' }))
    {console.log(nfts,'ttffft')}
  }, [dispatch]);
  
  const handleCommentSubmit = () => {
    if (commentText.trim() !== '') {
      dispatch(addComment(commentText) as unknown as Action);

      setCommentText(''); 
    }
  };
  
  return (
    <div>
    <div className={styles["fashiondiv"]}>
      <NavBar/>
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
          <div className={styles["box2"]}><h4 className={styles['hChat']}>Representing Products</h4>
        <br/>
        <div className={styles["scrolldiv1"]}>
          {nfts.map((nft, index) => (
            <div key={index}>
             
             <div className={styles['divpostfashionShow']}  key={nft.id}>
              {nft.imgUrl &&<img className={styles['imgpostFashionshow']} src={nft.imgUrl} alt="Comment Image" />}
              <p>{nft.comingSoon}</p>
            </div>
            
            </div>
          ))}
            </div>

          </div>
      <div className={styles["box1"]} >
          <h4 className={styles['represntig']}>Chat</h4>
          <div className={styles["scrolldiv"]}>
          {/* Map through the comments and render them */}
          {comments.map(comment => (
            <div className={styles['comment']}  key={comment.id}>
              {comment.imageUrl &&<img className={styles['imgcomments']} src={comment.imageUrl} alt="Comment Image" />}
              <p>{comment.content}</p>
            </div>
          ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleCommentSubmit(); }}>
            <label className={styles['labelsendcomment']}>
              <input
                className={styles['inputComment']}
                type="text"
                name="name"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <IoSend className={styles['sendMessage']} onClick={handleCommentSubmit} />
            </label>
          </form>
        </div>
    
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
    <Footer/>
    </div>
  );
}

export default Video;
