'use client'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllnfts, setStatusFilter, setGenreFilter,AllnftState } from '../lib/features/allnftSlice';
import styles from '../styles/AllNfts.module.css';

interface PageProps {
  changeView: (view: string) => void;
}

interface PageProps {
  changeView: (view: string) => void;
}



const Page: React.FC<PageProps> = ({ changeView }) => {

  const allnft = useSelector((state: { allnft: AllnftState }) => {
    console.log(state.allnft?.allnft);
    return state.allnft.allnft || [];
});
const status = useSelector((state: { allnft: AllnftState }) => {
    console.log(state.allnft.status);
    return state.allnft.status;
});

const genre = useSelector((state: { allnft: AllnftState }) => state.allnft.genre);
const loading = useSelector((state: { allnft: AllnftState }) => state.allnft.loading);
const error = useSelector((state: { allnft: AllnftState }) => state.allnft.error);
const dispatch = useDispatch();

const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setStatusFilter(event.target.value));
};

const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenreFilter(event.target.value));
};

  return (
    <div className={styles["all"] }>
     <div className={`${styles["row"]}`}>
     <div className={`${styles['col-lg-3']} ${styles['filter-container']}`}>
        <button onClick={() => dispatch<any>(fetchAllnfts({ status: 'all', genre: 'all' }))}>All Nfts</button>
          <div className="card-body">
          <h5 className={`${styles['card-title']} ${styles['filter-title']}`}>Filter By:</h5>

            <select value={status} onChange={handleStatusChange}>
              <option value="all">status</option>
              <option value="available">Available</option>
              <option value="not_available">Not Available</option>
            </select>
            <select value={genre} onChange={handleGenreChange}>
              <option value="all">Genres</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
          </div>
        </div>
        <div className={`${styles['col-lg-9']}`}>
    <div className={`${styles['row']}`}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {Array.isArray(allnft) && allnft.map((nft) => (
            <div key={nft.id} className={`${styles['col-lg-4']} ${styles['col-md-6']} ${styles['mb-4']}`}>
                <div className={`${styles['card']} ${styles['card-cascade']} ${styles['narrower']} ${styles['card-nft']}`}>
                    <div className={`${styles['view']} ${styles['view-cascade']} ${styles['overlay']}`}>
                        <div className={`${styles['mask']} ${styles['rgba-white-slight']}`}></div>
                        <img src={nft.imgUrl} alt="sample" className={`${styles['img-fluid']}`} />
                        <div className={`${styles['mask']} ${styles['rgba-white-slight']}`}>
                            <div className={`${styles['half-card']}`}>
                                <div className={`${styles['card-up']}`}>
                                    <p className={`${styles['card-info']}`}>
                                        <strong>{nft.status}</strong>
                                        <span className={`${styles['card-rarity']}`}>Secret Rare #{nft.UncommenRare}</span>
                                    </p>
                                </div>
                                <div className={`${styles['card-content']}`}>
                                    <div className={`${styles['card-price-button']}`}>
                                        <p className={`${styles['card-price']}`}>
                                            <strong>Price: {nft.price} ETH</strong>
                                            <i className={`${styles['fa']} ${styles['fa-diamond']}`}></i>
                                        </p>
                                        <button onClick={() => changeView('Payment')} className="btn btn-primary btn-sm buy-now-button">Buy Now</button>
                                        <i className={`${styles['bi']} ${styles['bi-bag-heart-fill']}`}></i>
                                    </div>
                                </div>
                                <a href="#!" data-toggle="modal" data-target={`#modalLG${nft.id}`} className={`${styles['align-middle']} ${styles['d-flex']} ${styles['justify-content-center']} ${styles['btn-floating']} ${styles['btn-lg']} ${styles['ml-1']}`}></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))} 
        </div>

    </div>
</div>
</div>)}



export default Page;