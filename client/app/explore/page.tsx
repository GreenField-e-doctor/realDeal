'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExploreItems } from '../lib/features/exploreslice';
import { AppDispatch, RootState } from '../lib/store';
import style from '../styles/Explore.module.css';

const Explore: React.FC = () => {
    const exploreItems = useSelector((state: RootState) => (state as any).explore.exploreItems);
    const status = useSelector((state: RootState) => (state as any).explore.status);
    
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExploreItems());
    }, [dispatch]);

    return (
        <div className={style['all']}>
            {/* <div className={style['title-container']}> */}
            <div className={style['titlee']}>
            <h2 >Explore Collections</h2>
            </div>
            {/* </div> */}
            <div className={style['buttons-container']}>
                <button className={style.button}>Trending</button>
                <button className={style.button}>All Fashion NFTs</button>
                <button className={style.button}>Art</button>
                <button className={style.button}>Fashion</button>
                <button className={style.button}>Creators</button>
                <button className={style.button}>Brands</button>
            </div>
            <div className={style.container}>
                {exploreItems.map((item: any, index: number) => (
                    <div className={style.item} key={index}>
                        <div className={style['profile-details']}>
                            <div className={style.names}>
                                {item.name}
                                <i className="bi bi-patch-check-fill" style={{ color: '#164dac', marginRight: '5px' }}></i>
                            </div>
                            <img src={item.imgP} alt="Profile picture" className={style['profile-picture']} />
                            <div className={style.description}>{item.description}</div>
                        </div>
                        <img src={item.imgB} alt="Cover picture" className={style['cover-picture']} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explore;
