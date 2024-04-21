"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./3dModel/model";
import Human from "./3dModel/human";
import style from "../styles/meta.module.css";
import home from '../styles/explore.module.css'
const ThreeModelViewer: React.FC = () => {
  return (
    <div className={style.body}>
      <div className="flex flex-row">
        <div className="flex flex-col ">
          <p className="text-5xl mb-6">Your Meta Look</p>
          <div className="w-96 rounded-md	">
            <Human />
          </div>
        </div>
        <div className="flex flex-col ml-40 mt-24">
        <p className="text-3xl  ">Try on</p>
    <div className="flex flex-row">

        <div
              style={{
                  width: "28%",
                  textAlign: "center",
                backgroundColor: "#504052",
                borderRadius: "20px",
                marginTop: "10px",
              }}
              >
              <div className=" mt-4 mr-4 ml-4 ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/6ad7/0ad3/c0d9b88524001d4a23da533d7258a549?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrNLgOcVYW1YOZfVjm9P3f9dm0DidawCveqWkx4Y3p76G291i8NyKphv2tbgghZhg0jxQgN5Z0K-FtBUPG1z9ALPhwInI0FDNX5YR1vRx8MvA-TFdEUo6BgQh3UEC9FrDb2vUgxfgGHKjC-YVeDwbtmqiofGE6HLJbItEv0jDngdT6oegPGr8b7d~wQ8xZx2haPlt5-ELZdrbpfwOmEcrLBply69IjErhin9roIL5L8LDDdSNxzdNSnfgaPOnSSaKrPRLr5WiAtEd6Sb7Cx1eFA8IuEjJgDG60t5dbxb-gfN2cU0Wol41PnzBdGqevBQ0J0~JSXzKNnKmwnbS3~HHg__"
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
                    @ipsum{" "}
                  </p>

                  <p className="flex float-start"> lorem </p>
                </div>


                
              </div>
              <br />
              <div className="mb-3">
                <button className="custom-button">Buy Now</button>
              </div>

              {/* Heart icon */}
            </div>
        <div
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
                  src="https://s3-alpha-sig.figma.com/img/6ad7/0ad3/c0d9b88524001d4a23da533d7258a549?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrNLgOcVYW1YOZfVjm9P3f9dm0DidawCveqWkx4Y3p76G291i8NyKphv2tbgghZhg0jxQgN5Z0K-FtBUPG1z9ALPhwInI0FDNX5YR1vRx8MvA-TFdEUo6BgQh3UEC9FrDb2vUgxfgGHKjC-YVeDwbtmqiofGE6HLJbItEv0jDngdT6oegPGr8b7d~wQ8xZx2haPlt5-ELZdrbpfwOmEcrLBply69IjErhin9roIL5L8LDDdSNxzdNSnfgaPOnSSaKrPRLr5WiAtEd6Sb7Cx1eFA8IuEjJgDG60t5dbxb-gfN2cU0Wol41PnzBdGqevBQ0J0~JSXzKNnKmwnbS3~HHg__"
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
                    @ipsum{" "}
                  </p>

                  <p className="flex float-start"> lorem </p>
                </div>


                
              </div>
              <br />
              <div className="mb-3">
                <button className="custom-button">Buy Now</button>
              </div>

              {/* Heart icon */}
            </div>
        <div
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
                  src="https://s3-alpha-sig.figma.com/img/6ad7/0ad3/c0d9b88524001d4a23da533d7258a549?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrNLgOcVYW1YOZfVjm9P3f9dm0DidawCveqWkx4Y3p76G291i8NyKphv2tbgghZhg0jxQgN5Z0K-FtBUPG1z9ALPhwInI0FDNX5YR1vRx8MvA-TFdEUo6BgQh3UEC9FrDb2vUgxfgGHKjC-YVeDwbtmqiofGE6HLJbItEv0jDngdT6oegPGr8b7d~wQ8xZx2haPlt5-ELZdrbpfwOmEcrLBply69IjErhin9roIL5L8LDDdSNxzdNSnfgaPOnSSaKrPRLr5WiAtEd6Sb7Cx1eFA8IuEjJgDG60t5dbxb-gfN2cU0Wol41PnzBdGqevBQ0J0~JSXzKNnKmwnbS3~HHg__"
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
                    @ipsum{" "}
                  </p>

                  <p className="flex float-start"> lorem </p>
                </div>


                
              </div>
              <br />
              <div className="mb-3">
                <button className="custom-button">Buy Now</button>
              </div>

              {/* Heart icon */}
            </div>
                      </div>
        </div>
      </div>
   
            <div className="flex mt-16">
                <p className="text-5xl">store</p>
                </div>
                <div className="flex flex-row">
                <div className={home.container}>
              <div className={home.item}>
                <div className={home["profile-details"]}>
                  <div className={home.names}>
                    yeesou
                    <i
                      className="bi bi-patch-check-fill"
                      style={{ color: "#164dac", marginRight: "5px" }}
                    ></i>
                  </div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/514e/d6c7/279fbf5e9453f3515714cf3aac978486?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PIYdr9xXqpb5Jm35~aJmqV~0ZKFLbMaLVIUOrSQnwLJGDqRgjXQnCKm~764l8teJO9zluFL4kPgzZIf16n9yswZ3WythVcu91ky3J7liIihyrF4M0TTv2LbJjPp-4raXICMV1nCRQPH4uVyp1AvX19CvtLjs6OAlBNArtGdpAxuvky8OTSQhoEgFLXRmoNHAczPkcAt2Nf05UO6aSPjyFfI8QVr4gi~7SC0H0DIPIeEzfpHNE0mRKxgFrIJB6EhN3WUDsjUD6WTIB5vk2521UjBakkuCERE-g9tiSY~tAkp5xsk00NJBDYM4BAlYdDBBprhaIYJQlsv2VNE8j1fWpA__"
                    alt="Profile picture"
                    className={home["profile-picture"]}
                  />
                  <div className={home.description}>yeesou</div>
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/514e/d6c7/279fbf5e9453f3515714cf3aac978486?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PIYdr9xXqpb5Jm35~aJmqV~0ZKFLbMaLVIUOrSQnwLJGDqRgjXQnCKm~764l8teJO9zluFL4kPgzZIf16n9yswZ3WythVcu91ky3J7liIihyrF4M0TTv2LbJjPp-4raXICMV1nCRQPH4uVyp1AvX19CvtLjs6OAlBNArtGdpAxuvky8OTSQhoEgFLXRmoNHAczPkcAt2Nf05UO6aSPjyFfI8QVr4gi~7SC0H0DIPIeEzfpHNE0mRKxgFrIJB6EhN3WUDsjUD6WTIB5vk2521UjBakkuCERE-g9tiSY~tAkp5xsk00NJBDYM4BAlYdDBBprhaIYJQlsv2VNE8j1fWpA__"
                  alt="Cover picture"
                  className={home["cover-picture"]}
                />
              </div>
            </div>
            </div>
    </div>
  );
};

export default ThreeModelViewer;
