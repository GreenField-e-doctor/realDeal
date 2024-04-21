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
      <div className="StoresBody">
        <p className="ml-20">Stores</p>
        <br/>
        <div className="flex flex-row gap-5 ml-40 ">
          <div className={style["StoreCard1"]}>

        <img
                  src="https://s3-alpha-sig.figma.com/img/8f4c/0352/5d9737a3ace96ae8953d55c085c02e36?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ri1SVwMeTP-5ZWQ3ftMEWilV2yNe9VOlQ8B68mCnkNFsqBMDVJnos0h2WxzVEzaN4WDe3z-qTlEtK40SPCEH32lqHmfmTWQlpNoHCofhf07zjitm77AKpyrgd9NWhSmNgJuxsMDUgS3T-BbVlsJbBThBWLN-FydU4ubdstBrOyHmKsy7yTWih-3WYZRjL2UhL-pL2fP~kvPC8UXAXTvQXuRB1bd9hCM0wW61cIkWbLF7uQG435Jbw8O50McjfBXyx3UzgV~OnuX46XlvZEnaWBPL3ZdMj-8-x8YEPU8zgyBtA5FpUxCYzP~iDDO~V76yUfKTbVXHHZvDv3bS6ttagA__"
                  alt="Product"
                  style={{
                    width: "300px",
                    height: "200px",
                    borderRadius: "20px",
                  }}/>
                  <img src="https://s3-alpha-sig.figma.com/img/dbac/df43/ad865d79d09d456e595e6f2e33060422?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZSFOsX2ytvioWTQiRioTtk6wWpwgboKNgiQc2e1QbsLLvt-R2mvTnrexE5n0uo9hEtQ1UH0Rr2mRglaAzzE~NFLY0nUe0P3~KQBW0CBkgK2UJONKAQGWuDSNODz61VhH~uDuV87B9jkq7aLc3759cqTXR7vbUDUtc2ATLKw7bGdq0sJkpRzZPFEiqIFE5OM4obr34cGp6EZFhJiifEBvaLWkhJrQZcMfxIhwwPAHuZ3zuVD-byJDYl7PZTgne8nziq7h0lXY3y~-nL5qQkJZM5mtnW5TSYybBuWmfj2~jEjypT4IrlmYYYo~p0en0AM0xbL9Mqiq8NQ~DcAh8Ekiw__"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "80px",
                    marginLeft: "105px",
                    marginTop: "-20px",
                  }}
                  />
                
                  <p className={style["PStoreCard"]}>Zalando</p>
                 
                  <p className={style["PStoreCard2"]}>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</p>
  
                  <button className={style["button-storescard"]}>+ Follow</button>
          </div>
          <div className={style["StoreCard1"]}>

        <img
                  src="https://s3-alpha-sig.figma.com/img/c27e/9a55/ed3a7e31ab50c20fb6e28b0491a8dc13?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hot3HpDeyxHk3nelaYCn-nwwMrhWmK~NbC4pIlthpfytOg~kRAsfXZbH0p-csr~Orh-fM8Zmh4v2JWJ5pBnXJ2vEpnckr1VBo~n06G85-f4l2Hz6sFFpD2uz1RwK2eQw5x4FUF7dVvEQeIPkd-YOT4h3hxgCS97QuQtgVn7HsgUCwwededL26fX7CQDlA36RDVkv0Vuqhwk-MbvKNZqnCxc9Z-rwIibmp9eZG3BwLjxrI22rRqK4-0OhD83hGPnZNMX6yRLpTdedNkji91s9Fq998NJGbz6pFRn-bTNrv1SBKJHDuHmDrkaFhO9Elg2V2ZOg4yHQ4JpBlqEPICupxg__"
                  alt="Product"
                  style={{
                    width: "300px",
                    height: "200px",
                    borderRadius: "20px",
                  }}/>
                  <img src="https://s3-alpha-sig.figma.com/img/f680/0697/0dcb96fe1a08d98a4ef82be39ed7a258?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dxDgy3NkymxB7feVg~S0Cr~N8GKF~EI~4YTbfbLsrWOiZ3oENlQcnddaxc-aF3tsr6~z-iWJF2BdFQHRnySko47WYgmOLDA929RAvHz122V53Ea~DN5sipgpt8enuZm~NU6enfGudpT1PWDU~0LqZ0uC3LmlKrP5574MBn07sT8NXiHxNQLboeXcfXHZfSh-dyx2hbYpbND22MqW7KxxB42vvI56eMYrfJIKIEWll9SDXDnBVyYl3RnNZOGVc4Fy2j-JtHVrZfKjpUrWJNIxOPISXmqVlr5hOB9NSMzH3z7Urlxu4-OWamVTOfCxdpFaJ~ihA6QtXl9dRIn9lejmBA__"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "80px",
                    marginLeft: "105px",
                    marginTop: "-20px",
                  }}
                  />
                
                  <p className={style["PStoreCard"]}>Zara</p>
                 
                  <p className={style["PStoreCard2"]}>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</p>
  
                  <button className={style["button-storescard"]}>+ Follow</button>
          </div>
          <div className={style["StoreCard1"]}>

        <img
                  src="https://s3-alpha-sig.figma.com/img/7f06/0f98/68f6e3709e0568b8d2226f9d837e833b?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X3hQhR7EaoWdVwHQXIrzMpIh1O~yRH0i6j2iDTP8YqcxzkCPlXDIcHxGrBd6BmjZoaY2jNiJLsBS6qyMxSRNvq-JYDUEMCLN5BjMuX-VbzeLDOc7GewYqPvN~Uv0p~mw~QnEPDFjJjAyVr1Y0BVYhZYgb-NDiO3ofuhZd5yhDu9hM8ZhjZeoClcaxwz2ssmzfhPPWhF0vxp8YW8a~KP1oF-sVyMhvCHHMa7F089sfr473QrrF3lqzyP2xMHnQJmk6Ma9q7HLTdOikQ18MPTYQMfKCIx8Zb-Z7MctzpL2PR6rW4S-2PahBJwBuCfOT~X96Erhb~LU4MTFnj8RUWNaYQ__"
                  alt="Product"
                  style={{
                    width: "300px",
                    height: "200px",
                    borderRadius: "20px",
                  }}/>
                  <img src="https://s3-alpha-sig.figma.com/img/9966/fb19/afab57c29962418f871c706f9b54eea8?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YGVqoHCPcgwnxYCfIwEEZRaD2KFxA5ilqyQc8BYoFEukqmxsQgkjMY~qLdtt7RK3A5yiuDwKPNgsvOQ1AD3aGAOBs44K0YmKPJYk7og87Enq5RX1woIQY2rsOckSWjokWal2Y8cNxIKmL-S2Fcwhf4rZGi3qqj~iBI9VhB6yhzHjqm~XzdIg61GkHGmdwUYZfgVwf1jdjjsBNnvbSa9VhaLGkkiDv~PU9y4z0tojFzEmKWywxQ0unRkvlc6KTPf5Zvh38a~qKA~vmKzTtr78xye-eKzNAuseAAN7xBZEQDlCjCNcqLXXIa~egFaZdriUsOmLt~xTJoFEOrr05hihJw__"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "80px",
                    marginLeft: "105px",
                    marginTop: "-20px",
                  }}
                  />
                
                  <p className={style["PStoreCard"]}>Cartier</p>
                 
                  <p className={style["PStoreCard2"]}>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</p>
  
                  <button className={style["button-storescard"]}>+ Follow</button>
          </div>

        </div>

      </div>
      </div>
   
  );
};

export default ThreeModelViewer;
