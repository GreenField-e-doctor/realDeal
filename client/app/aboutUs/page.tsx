import React from "react";
import styles from "../styles/aboutUs.module.css";

const aboutUs = () => {
  const imageLinks = [
    "https://imagetolink.com/ib/pt45vMb7F6",
    "https://imagetolink.com/ib/t8x73zsjTM",
    "https://imagetolink.com/ib/xLOv4M9tRQ",
    "https://imagetolink.com/ib/mKpfDZpjVz",
    "https://imagetolink.com/ib/BMdBR3SKtX",
    "https://imagetolink.com/ib/3fzLKIADJ2",
  ];
  return (
    <div className={styles.all}>
<div className={styles.outer_container}>
        <div className={styles["responsive-container-block inner-container"]}>
          <div className={styles["responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-5 content-container"]}>
            <div className={styles["content-box"]}>
              <p className={styles["text-blk section-head"]}>
                Projects et doooolore amet
              </p>
              <p className={styles["text-blk section-body"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat c
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className={styles["responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-8 team-cards-outer-container"]}>
            <div className={styles["responsive-container-block team-cards-inner-container"]}>
              <div className={styles["responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container"]}>
                <div className={styles["card"]}>
                  <div className={styles["img-box"]}>
                    <img className={styles["person-img" ]}src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/person1.png" />
                  </div>
                  <div className={styles["card-content-box"]}>
                    <p className={styles["text-blk person-name"]}>
                      Nairobi Nora
                    </p>
                    <p className={styles["text-blk person-info"]}>
                      Lorem ipsum dolor
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles["responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container"]}>
                <div className="card">
                  <div className={styles["img-box"]}>
                    <img className={styles["person-img" ]}src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/person2.png" />
                  </div>
                  <div className={styles["card-content-box"]}>
                    <p className={styles["text-blk person-name"]}>
                      Nairobi Nora
                    </p>
                    <p className={styles["text-blk person-info"]}>
                      Lorem ipsum dolor
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles["responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container"]}>
                <div className={styles["card"]}>
                  <div className={styles["img-box"]}>
                    <img className="person-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/person3.png" />
                  </div>
                  <div className={styles["card-content-box"]}>
                    <p className={styles["text-blk person-name"]}>
                      Nairobi Nora
                    </p>
                    <p className={styles["text-blk person-info"]}>
                      Lorem ipsum dolor
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles["responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8 wk-desk-6 card-container"]}>
                <div className={styles["card"]}>
                  <div className={styles["img-box"]}>
                    <img className={styles["person-img"]} src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/person4.png" />
                  </div>
                  <div className={styles["card-content-box"]}>
                    <p className={styles["text-blk person-name"]}>
                      Nairobi Nora
                    </p>
                    <p className={styles["text-blk person-info"]}>
                      Lorem ipsum dolor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
 )
}

export default aboutUs;
