"use client";
import React, { useState, useRef,useEffect } from "react";
// import Navbar from './navbar';
// import Footer from './footer';
// import Footer from "./Footer";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import Market from './Market';
import styles from "../styles/homepage.module.css";
import NavBar from "./NavBar";
import style from "../styles/explore.module.css";
import { fetchPosts, } from "../lib/features/postSlice";
import { AppDispatch, RootState } from '../lib/store';

import { useAppDispatch,useAppSelector } from "../lib/hook";
import { Post } from "../types/types";
import { fetchExploreItems } from "../lib/features/exploreslice";
const Homepage = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(state => state.post.posts); 
  const exploreItems = useAppSelector((state: RootState) => (state as any).explore.exploreItems);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchExploreItems())
  }, [dispatch]);
  const dummyData = [
    { id: 1, imageUrl: 'https://s3-alpha-sig.figma.com/img/6ad7/0ad3/c0d9b88524001d4a23da533d7258a549?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrNLgOcVYW1YOZfVjm9P3f9dm0DidawCveqWkx4Y3p76G291i8NyKphv2tbgghZhg0jxQgN5Z0K-FtBUPG1z9ALPhwInI0FDNX5YR1vRx8MvA-TFdEUo6BgQh3UEC9FrDb2vUgxfgGHKjC-YVeDwbtmqiofGE6HLJbItEv0jDngdT6oegPGr8b7d~wQ8xZx2haPlt5-ELZdrbpfwOmEcrLBply69IjErhin9roIL5L8LDDdSNxzdNSnfgaPOnSSaKrPRLr5WiAtEd6Sb7Cx1eFA8IuEjJgDG60t5dbxb-gfN2cU0Wol41PnzBdGqevBQ0J0~JSXzKNnKmwnbS3~HHg__', username: '@ipsum', description: 'lorem', price: '0.5 ETH' },
    { id: 2, imageUrl: 'https://s3-alpha-sig.figma.com/img/6ad7/0ad3/c0d9b88524001d4a23da533d7258a549?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrNLgOcVYW1YOZfVjm9P3f9dm0DidawCveqWkx4Y3p76G291i8NyKphv2tbgghZhg0jxQgN5Z0K-FtBUPG1z9ALPhwInI0FDNX5YR1vRx8MvA-TFdEUo6BgQh3UEC9FrDb2vUgxfgGHKjC-YVeDwbtmqiofGE6HLJbItEv0jDngdT6oegPGr8b7d~wQ8xZx2haPlt5-ELZdrbpfwOmEcrLBply69IjErhin9roIL5L8LDDdSNxzdNSnfgaPOnSSaKrPRLr5WiAtEd6Sb7Cx1eFA8IuEjJgDG60t5dbxb-gfN2cU0Wol41PnzBdGqevBQ0J0~JSXzKNnKmwnbS3~HHg__', username: '@lorem', description: 'ipsum', price: '0.7 ETH' },
    { id: 3, imageUrl: 'https://s3-alpha-sig.figma.com/img/6ad7/0ad3/c0d9b88524001d4a23da533d7258a549?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrNLgOcVYW1YOZfVjm9P3f9dm0DidawCveqWkx4Y3p76G291i8NyKphv2tbgghZhg0jxQgN5Z0K-FtBUPG1z9ALPhwInI0FDNX5YR1vRx8MvA-TFdEUo6BgQh3UEC9FrDb2vUgxfgGHKjC-YVeDwbtmqiofGE6HLJbItEv0jDngdT6oegPGr8b7d~wQ8xZx2haPlt5-ELZdrbpfwOmEcrLBply69IjErhin9roIL5L8LDDdSNxzdNSnfgaPOnSSaKrPRLr5WiAtEd6Sb7Cx1eFA8IuEjJgDG60t5dbxb-gfN2cU0Wol41PnzBdGqevBQ0J0~JSXzKNnKmwnbS3~HHg__', username: '@dolor', description: 'sit', price: '0.3 ETH' },
  ];
  const dummyData2 = [
    {
      id: 1,
      name: "yeesou",
      description: "lorem ipsum",
      verified: true,
      profilePicture: "https://s3-alpha-sig.figma.com/img/514e/d6c7/279fbf5e9453f3515714cf3aac978486?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PIYdr9xXqpb5Jm35~aJmqV~0ZKFLbMaLVIUOrSQnwLJGDqRgjXQnCKm~764l8teJO9zluFL4kPgzZIf16n9yswZ3WythVcu91ky3J7liIihyrF4M0TTv2LbJjPp-4raXICMV1nCRQPH4uVyp1AvX19CvtLjs6OAlBNArtGdpAxuvky8OTSQhoEgFLXRmoNHAczPkcAt2Nf05UO6aSPjyFfI8QVr4gi~7SC0H0DIPIeEzfpHNE0mRKxgFrIJB6EhN3WUDsjUD6WTIB5vk2521UjBakkuCERE-g9tiSY~tAkp5xsk00NJBDYM4BAlYdDBBprhaIYJQlsv2VNE8j1fWpA__",
      coverPicture: "https://s3-alpha-sig.figma.com/img/514e/d6c7/279fbf5e9453f3515714cf3aac978486?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PIYdr9xXqpb5Jm35~aJmqV~0ZKFLbMaLVIUOrSQnwLJGDqRgjXQnCKm~764l8teJO9zluFL4kPgzZIf16n9yswZ3WythVcu91ky3J7liIihyrF4M0TTv2LbJjPp-4raXICMV1nCRQPH4uVyp1AvX19CvtLjs6OAlBNArtGdpAxuvky8OTSQhoEgFLXRmoNHAczPkcAt2Nf05UO6aSPjyFfI8QVr4gi~7SC0H0DIPIeEzfpHNE0mRKxgFrIJB6EhN3WUDsjUD6WTIB5vk2521UjBakkuCERE-g9tiSY~tAkp5xsk00NJBDYM4BAlYdDBBprhaIYJQlsv2VNE8j1fWpA__",
    },
    {
      id: 2,
      name: "john_doe",
      description: "dolor sit amet",
      verified: false,
      profilePicture: "https://s3-alpha-sig.figma.com/img/514e/d6c7/279fbf5e9453f3515714cf3aac978486?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PIYdr9xXqpb5Jm35~aJmqV~0ZKFLbMaLVIUOrSQnwLJGDqRgjXQnCKm~764l8teJO9zluFL4kPgzZIf16n9yswZ3WythVcu91ky3J7liIihyrF4M0TTv2LbJjPp-4raXICMV1nCRQPH4uVyp1AvX19CvtLjs6OAlBNArtGdpAxuvky8OTSQhoEgFLXRmoNHAczPkcAt2Nf05UO6aSPjyFfI8QVr4gi~7SC0H0DIPIeEzfpHNE0mRKxgFrIJB6EhN3WUDsjUD6WTIB5vk2521UjBakkuCERE-g9tiSY~tAkp5xsk00NJBDYM4BAlYdDBBprhaIYJQlsv2VNE8j1fWpA__",
      coverPicture: "https://s3-alpha-sig.figma.com/img/514e/d6c7/279fbf5e9453f3515714cf3aac978486?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PIYdr9xXqpb5Jm35~aJmqV~0ZKFLbMaLVIUOrSQnwLJGDqRgjXQnCKm~764l8teJO9zluFL4kPgzZIf16n9yswZ3WythVcu91ky3J7liIihyrF4M0TTv2LbJjPp-4raXICMV1nCRQPH4uVyp1AvX19CvtLjs6OAlBNArtGdpAxuvky8OTSQhoEgFLXRmoNHAczPkcAt2Nf05UO6aSPjyFfI8QVr4gi~7SC0H0DIPIeEzfpHNE0mRKxgFrIJB6EhN3WUDsjUD6WTIB5vk2521UjBakkuCERE-g9tiSY~tAkp5xsk00NJBDYM4BAlYdDBBprhaIYJQlsv2VNE8j1fWpA__",
    },
    {
      id: 2,
      name: "john_doe",
      description: "dolor sit amet",
      verified: false,
      profilePicture: "https://s3-alpha-sig.figma.com/img/514e/d6c7/279fbf5e9453f3515714cf3aac978486?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PIYdr9xXqpb5Jm35~aJmqV~0ZKFLbMaLVIUOrSQnwLJGDqRgjXQnCKm~764l8teJO9zluFL4kPgzZIf16n9yswZ3WythVcu91ky3J7liIihyrF4M0TTv2LbJjPp-4raXICMV1nCRQPH4uVyp1AvX19CvtLjs6OAlBNArtGdpAxuvky8OTSQhoEgFLXRmoNHAczPkcAt2Nf05UO6aSPjyFfI8QVr4gi~7SC0H0DIPIeEzfpHNE0mRKxgFrIJB6EhN3WUDsjUD6WTIB5vk2521UjBakkuCERE-g9tiSY~tAkp5xsk00NJBDYM4BAlYdDBBprhaIYJQlsv2VNE8j1fWpA__",
      coverPicture: "https://s3-alpha-sig.figma.com/img/514e/d6c7/279fbf5e9453f3515714cf3aac978486?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PIYdr9xXqpb5Jm35~aJmqV~0ZKFLbMaLVIUOrSQnwLJGDqRgjXQnCKm~764l8teJO9zluFL4kPgzZIf16n9yswZ3WythVcu91ky3J7liIihyrF4M0TTv2LbJjPp-4raXICMV1nCRQPH4uVyp1AvX19CvtLjs6OAlBNArtGdpAxuvky8OTSQhoEgFLXRmoNHAczPkcAt2Nf05UO6aSPjyFfI8QVr4gi~7SC0H0DIPIeEzfpHNE0mRKxgFrIJB6EhN3WUDsjUD6WTIB5vk2521UjBakkuCERE-g9tiSY~tAkp5xsk00NJBDYM4BAlYdDBBprhaIYJQlsv2VNE8j1fWpA__",
    },
  ];

  return (
    <div style={{color:'white'}}>
    <div className={style["all"]}>
      <NavBar />
      <div style={{ paddingBottom: "100px" }}>
         {/* <Navbar user={user} changeView={changeView}/>  */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button className={styles["custom-button"]}>Main collection</button>
          <button className={styles["custom-button"]}>Creators Market</button>
          <div className="line"></div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ flex: 1, textAlign: "left", paddingRight: "20px" }}>
              <h2 className="text-7xl">Clothes are the Spirit of Fashion</h2>
              <br />
              <p style={{ color: "grey-dark", opacity: 0.5 }}>
                For some, the act of getting dressed is a mindless routine,
                <br /> each article of clothing grabbed from a hanger merely
                something to cover the body.
              </p>
              <br />
              <br />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{ flex: 1, textAlign: "left", paddingRight: "20px" }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "40px" }} className="text-3xl">
                      <h3>100+</h3>
                      <p style={{ color: "grey-dark", opacity: 0.5 }}>Brands</p>
                    </div>
                    <div style={{ marginRight: "40px" }} className="text-3xl">
                      <h3>20k+</h3>
                      <p style={{ color: "grey-dark", opacity: 0.5 }}>
                        Fashion Designer
                      </p>
                    </div>
                    <div style={{ marginRight: "40px" }} className="text-3xl">
                      <h3>60+</h3>
                      <p style={{ color: "grey-dark", opacity: 0.5 }}>
                        Fashion Shows
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ flex: 1 }} className="flex flex-row">
                  <div
                    className={styles["iage-container"]}
                    style={{ marginRight: "20px" }}
                  >
                    <img
                      height={180}
                      width={180}
                      src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__"
                      alt="Description"
                    />
                    <br />
                    <img
                      height={180}
                      width={180}
                      src="https://s3-alpha-sig.figma.com/img/6d62/3624/8079cbc1d7e79a045e36f7c82e686ea4?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mHLtbz76q6PSPyQy63HR3ow5BjbXMesP5uL9RpblMtyDTGbr5b0OqrciSVFuJg4urn9fmGBmNHYkiH0J6dDXRe-gRsBhqxUKmzcoy3C0ShArSalxCeXj4rgdd3LmTtA5LKGtik2oqL2IgNv2RLb7G8qyNLs30Z4wHnhnr-8XLcjMnZrI6D8F-SItK05MCyAvWYxgycPDSNZmtRgPKPnqpsGbqtUjh2F1OVNdE78FkJCP4oiDhnf-4sdSDxffU0KJk6palZV42RdaHl6h8WzHMII-dRe0SuLn930zaTiVBD-sYw6fsFTOOI06WLX9yf5~iC-RpyO~vsGt1hxAL8tgwQ__"
                      alt="Description"
                    />
                  </div>
                  <div
                    className={styles["image-container"]}
                    style={{ marginLeft: "20px" }}
                  >
                    <img
                      height={180}
                      width={180}
                      src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__"
                      alt="Description"
                    />
                    <br />
                    <img
                      height={180}
                      width={180}
                      src="https://s3-alpha-sig.figma.com/img/6d62/3624/8079cbc1d7e79a045e36f7c82e686ea4?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mHLtbz76q6PSPyQy63HR3ow5BjbXMesP5uL9RpblMtyDTGbr5b0OqrciSVFuJg4urn9fmGBmNHYkiH0J6dDXRe-gRsBhqxUKmzcoy3C0ShArSalxCeXj4rgdd3LmTtA5LKGtik2oqL2IgNv2RLb7G8qyNLs30Z4wHnhnr-8XLcjMnZrI6D8F-SItK05MCyAvWYxgycPDSNZmtRgPKPnqpsGbqtUjh2F1OVNdE78FkJCP4oiDhnf-4sdSDxffU0KJk6palZV42RdaHl6h8WzHMII-dRe0SuLn930zaTiVBD-sYw6fsFTOOI06WLX9yf5~iC-RpyO~vsGt1hxAL8tgwQ__"
                      alt="Description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "20px",
          }}
        ></div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h1 className="text-4xl mb-4">About Us</h1>
          <p style={{ color: "grey-dark", opacity: 0.5 }}>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ flex: 1, textAlign: "left", paddingRight: "20px" }}>
              <div className="image-contar">
                <div
                  style={{
                    marginLeft: "200px",
                  }}
                >
                  <img
                    style={{ borderRadius: "20px" }}
                    width={400}
                    height={400}
                    src="https://s3-alpha-sig.figma.com/img/4f3b/4bc5/0336a716d5a69a265c6890a20951754e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MKlC5UVjks~8CsXfNykrKeYpVvsS9mbZE4DLy7NRMEX14aNJBGonTke0GPVeYKpVEPo786kL1icMPQ17uGCrvB50P-er1KIZqiHnQsrq9uADMXk3aMeUdUQikOydH0OJSr8mIEASVoKzpSTgVpMGetg46X3ye5RWsb-Q6MPhiGT6XsLFb3Un~LaUBTVv9OAiy5rZ4EqKzKVYWHnrDQtWV2AdRdAiXpYHBcgSS7GOU~~dRvwsRnQkUi34MQvq5JGcOdLBtOQG8Y59BGIl-peQhpdGisKGizI4cn~BqR0t36fih3Ha7EeJX2THAJ1W0ium7TiQgDERBBUcp6mSG1bXnw__"
                    alt="Description"
                  />
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h1 className="text-4xl mb-4">Fashion That Speaks</h1>
              <p style={{ color: "grey-dark", opacity: 0.5 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.{" "}
              </p>
              <br />
              <button className={styles["custom-button"]} id="button">
                Show more
              </button>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h1 className="text-4xl mb-4">All Collection</h1>
          <p style={{ color: "grey-dark", opacity: 0.5 }}>
            Worlds First Layer 2 Fashion Marketplace
          </p>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <button className={styles["custom-button"]}>All Collections</button>
            <button className={styles["custom-button"]}>Verified Brands</button>
            <button className={styles["custom-button"]}>Verified Artists</button>
            <button className={styles["custom-button"]}>New Drops</button>
            <button className={styles["custom-button"]}>Live Shows</button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", flexDirection:'row'}}>
          <div className="flex flex-row justify-center">
      {dummyData.map(item => (
        <div
          key={item.id}
          style={{
            width: "28%",
            textAlign: "center",
            backgroundColor: "#504052",
            borderRadius: "20px",
            marginTop: "10px",
            marginLeft:'20px'
          }}
        >
          <div className=" mt-4 mr-4 ml-4 ">
            <img
              src={item.imageUrl}
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
              <p className="flex float-start mb-1" style={{ color: "#B0A2A7" }}>
                {item.username}
              </p>
              <p className="flex float-start">{item.description}</p>
            </div>
            <p className="flex ml-40">{item.price}</p>
            <br />
          </div>
          <br />
          <div className="mb-3">
            <button className={styles["custom-button"]}>Buy Now</button>
          </div>
          {/* Heart icon */}
        </div>
      ))}
    </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1 className="text-4xl mb-4">New & Trending</h1>
            <p style={{ color: "grey-dark", opacity: 0.5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="flex flex-row justify-center">
      {dummyData.map(item => (
        <div
          key={item.id}
          style={{
            width: "28%",
            textAlign: "center",
            backgroundColor: "#504052",
            borderRadius: "20px",
            marginTop: "10px",
            marginLeft:'20px'
          }}
        >
          <div className=" mt-4 mr-4 ml-4 ">
            <img
              src={item.imageUrl}
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
              <p className="flex float-start mb-1" style={{ color: "#B0A2A7" }}>
                {item.username}
              </p>
              <p className="flex float-start">{item.description}</p>
            </div>
            <p className="flex ml-40">{item.price}</p>
            <br />
          </div>
          <br />
          <div className="mb-3">
            <button className={styles["custom-button"]}>Buy Now</button>
          </div>
          {/* Heart icon */}
        </div>
      ))}
    </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1 className="text-4xl mb-4">Upcoming Creators</h1>
            <p style={{ color: "grey-dark", opacity: 0.5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
          {dummyData2.map((item) => (
        <div className={style.container} key={item.id}>
          <div className={style.item}>
            <div className={style["profile-details"]}>
              <div className={style.names}>
                {item.name}
                {item.verified && (
                  <i
                    className="bi bi-patch-check-fill"
                    style={{ color: "#164dac", marginRight: "5px" }}
                  ></i>
                )}
              </div>
              <img
                src={item.profilePicture}
                alt="Profile picture"
                className={style["profile-picture"]}
              />
              <div className={style.description}>{item.description}</div>
            </div>
            <img
              src={item.coverPicture}
              alt="Cover picture"
              className={style["cover-picture"]}
            />
          </div>
        </div>
      ))}
      </div>
          
          </div>
          <br />
          <br />
          <br />
          <br />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1 className="text-4xl mb-4">Upcoming Brands</h1>
            <p style={{ color: "grey-dark", opacity: 0.5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
        {dummyData.map(item => (
          <div
            key={item.id}
            style={{
              width: "28%",
              textAlign: "center",
              backgroundColor: "#504052",
              borderRadius: "20px",
              marginTop: "10px",
            }}
          >
            <div className="mt-4 mr-4 ml-4">
              <img
                src={item.imageUrl}
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
                <p className="flex float-start mb-1" style={{ color: "#B0A2A7" }}>
                  {item.username}
                </p>
                <p className="flex float-start">{item.description}</p>
              </div>
              <p className="flex ml-40">{item.price}</p>
              <br />
            </div>
            <br />
            <div className="mb-3">
              <button className={styles["custom-button"]}>Buy Now</button>
            </div>
            {/* Heart icon */}
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
    </div>
    </div>
  );
};

export default Homepage;