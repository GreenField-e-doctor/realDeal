"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./3dModel/model";
import Human from "./3dModel/human";
import style from "../styles/meta.module.css";
import { FcLike } from "react-icons/fc";
const ThreeModelViewer: React.FC = () => {
  return (
    <div className={style.body}>
      <div className="flex flex-row">

      <div className="flex flex-row">
        <div className="flex flex-col ">
          <p className="text-5xl mb-6">Your Meta Look</p>
          <div className="w-96 rounded-md	">
            <Human />
          </div>
        </div>
        </div>
        <br/>
      <div>
                <div className='text-5xl ml-40 mb-9'>
              <p className={style["tryOne"]}>Try on</p>
                </div>
        <div className='flex flex-row ml-36'>
        <div
              style={{
                width: "200px",
                textAlign: "center",
                backgroundColor: "#504052",
                borderRadius: "20px",
                // marginTop: "10px",

              }}
              className="mr-9"
            >
              <div className=" mt-4 mr-4 ml-4 ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/d4ad/8260/f0eaf9c70d03cbd966eeb84f87a92200?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVPTBqxvnx4NFbMOF5bSrsm57D4mzHtvgMBtSvZv~kgKJXGoayBRA1UfLuDVjKGgmVAqd76FW2kV3S2OI9BP~~I0C8vU~oV-lHAfkYsfLwYfeysaI72GkNy5ijSV5Yf09Bsoz-bCePZHj753Q1jZ2C~CtPNwXGIsq~UkVCAYUTA349jXR10x0uOXXXj9arq8olR-WCEzx5lvxrz~ecMmPcxXOMUNPslXSdEtMGLHGjNf8UoI3Xi6YGN8KThXUwEL17io2Z4dVAKtRpp2Cmri3lbDJLObxvZ01MCLQifNViwcwHnLQRITBobDSJmer8gZUXEtAcYzvQr9bJuV0c-D5g__"
                  alt="Product"
                  style={{
                    width: "400px%",
                    height: "200px",
                    borderRadius: "20px",
                    marginRight: "0px"
                  }}
                />
              </div>
              <br />
       
                  <p className={style["pipsum"]}>
                    @ipsum
                  </p>
                <div className={style["flex-flex-col"]}>
                  <p className={style["flex-float-start"]}> Lorem Ipsum </p>
                <p className="flex-ml-40">0.5 ETH</p>
              </div>
              <br />
              <div className={style["mb-3"]}>
                <FcLike className={style["like3d"]}/>
                <button className={style["custom-button"]}>Buy Now</button>
              </div>
              <br/>

              {/* Heart icon */}
            </div>

        <div
              style={{
                width: "200px",
                textAlign: "center",
                backgroundColor: "#504052",
                borderRadius: "20px",
                // marginTop: "10px",
              }}
              className="mr-9"

            >
              <div className=" mt-4 mr-4 ml-4 ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/d645/7073/3227e7c4414aee4ecffc42f6e9fe523c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mi2h7HuJa6coeKRGtgf-xMs9xH9WMEut9MK97obh-MGXQ6hmVddwOupmABLhOsxr8e5LKeDMjgvsubZlOQW~T68wT~8hY4V~ODGhUcNnzg1bSBgwneJ1cBRAhPqqNTv6dPze4S0RvenbSR~SyFXULmxPrhoM2SJkT5HQ9toe-SW6YDtaSEinj7r0O4kHrhqxz2sYyye7de8dWal9Y2jHT5igpp4ftDE6m~YUqqLNmVJSLKyWW9DegyfVix2wUEnoJspZixKRXhwKo0YaXrk~eQXnI~jt-fxyOtdWKXZAwrOiFViZr60TDC2hW4kCJTMa~VBmjNh6oNKihdfr0JF3Cw__"
                  alt="Product"
                  style={{
                    width: "400px%",
                    height: "200px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <br />
       
                  <p className={style["pipsum"]}>
                    @ipsum
                  </p>
                <div className={style["flex-flex-col"]}>
                  <p className={style["flex-float-start"]}> Lorem Ipsum </p>
                <p className="flex-ml-40">0.5 ETH</p>
              </div>
              <br />
              <div className={style["mb-3"]}>
                <FcLike className={style["like3d"]}/>
                <button className={style["custom-button"]}>Buy Now</button>
              </div>

              {/* Heart icon */}
            </div>
        <div
              style={{
                width: "200px",
                textAlign: "center",
                backgroundColor: "#504052",
                borderRadius: "20px",
                // marginTop: "10px",
              }}
            >
              <div className=" mt-4 mr-4 ml-4 ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f387/717c/c434f58ad42aa84da5f9942fe0fee1f7?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=POK5T68-0wDSeqcbgl-lafAGWb6Dn4hiKXAXPDveu5ioXfN8nATqvk0CSiNX1fdMKy5eFJXLzERpnf4VCiNpbkneQHxwB~l~5cEyjLa0Nt8nheTUxKW9SmXkzMjZs2cambrD~yxLXoYgQCPUKmJWeiLAUAZmYTPrLIrH8hVd2l2KktZ37KAHT1wZjeqfS28MxEGaLONJKdLTnDnkXT~Sxb6YUS9PK1RqQj-pjCAxV~QP67W~3hpQ7h96Pi9GLLBD58PwE7XAsVlGtWnfw-KltDR5w~oXzdohFoI~16s7Boz32PEbCUqq5myXHE3aAI1AjynXuY7uiEx6ipYQCubrFw__"
                  alt="Product"
                  style={{
                    width: "400px",
                    height: "200px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <br />
       
                  <p className={style["pipsum"]}>
                    @ipsum
                  </p>
                <div className={style["flex-flex-col"]}>
                  <p className={style["flex-float-start"]}> Lorem Ipsum </p>
                <p className="flex-ml-40">0.5 ETH</p>
              </div>
              <br />
              <div className={style["mb-3"]}>
                <FcLike className={style["like3d"]}/>
                <button className={style["custom-button"]}>Buy Now</button>
              </div>

              {/* Heart icon */}
            </div>
        </div>
      </div>
      </div>
      </div>
   
  );
};

export default ThreeModelViewer;
