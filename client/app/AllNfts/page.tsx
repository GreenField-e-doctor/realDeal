'use client'
import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllnfts, setStatusFilter, setGenreFilter,AllnftState } from '../lib/features/allnftSlice';
import styles from '../styles/AllNfts.module.css';
import style from '../styles/homepage.module.css';
import axios from 'axios';
import NavBar from '../homepage/NavBar';
import Footer from '../homepage/Footer';
interface PageProps {
  changeView: (view: string) => void;
}

interface PageProps {
  changeView: (view: string) => void;
}

axios.get('http://localhost:1128/api/allnft').then((response)=>{
    console.log(response.data);
})
const Page: React.FC<PageProps> = ({ changeView }) => {
    useEffect(() =>{
        dispatch<any>(fetchAllnfts({ status: 'all', genre: 'all' }));
    },[])

  const allnft = useSelector((state: { allnft: AllnftState }) => {
    console.log(state.allnft?.allnft);
    return state.allnft.allnft || [];
});
const status = useSelector((state: { allnft: AllnftState }) => {
    console.log(allnft);
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
      <NavBar/>
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
       
        <div className='flex flex-row flex-wrap gap-12 justify-center	'>
          {Array.isArray(allnft) && allnft.map((nft) => (
                 <div
              style={{
                width: "28%",
                textAlign: "center",
                backgroundColor: "#504052",
                borderRadius: "20px",
              }}
            >
              <div className=" mt-4 mr-4 ml-4 ">
                <img
                  src={nft.imgUrl}
                  alt="Product"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <br />
              <div className="flex flex-row ml-3">
                <div className="flex flex-col">
                  <p
                    className="flex float-start mb-1"
                    style={{ color: "#B0A2A7" }}
                  >
                    {" "}
                    {nft.genre}{" "}
                  </p>

                  <p className="flex float-start">{nft.status}</p>
                </div>

                <p className="flex ml-40">{nft.price} {' '}ETH</p>

                <br />
              </div>
              <br />
              <div className="mb-3">
                <button className={style["custom-button"]}>Buy Now</button>
              </div>

              {/* Heart icon */}
            </div>
            
          ))}
        
        </div>
        </div>

    </div>
</div>
<Footer/>
</div>)}



export default Page;