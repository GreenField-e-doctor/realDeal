'use client'
import React, { useState } from 'react';
// import Navbar from './navbar';
// import Footer from './footer';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Market from './Market';
// import styles from '../styles/homepage.style.css'
const Homepage = () => {
    const [liked, setLiked] = useState([false, false, false,false, false, false,false, false, false]);
    const [view, setView] = useState('home');
    // Function to toggle liked state for a specific item
    const toggleLike = (index: number) => {
        const newLiked = [...liked];
        newLiked[index] = !newLiked[index];
        setLiked(newLiked);
    };
    const changeView = (view: string) => {
        setView(view);
    }

    return (
        <div style={{ paddingBottom: '100px' }}>
            {/* <Navbar user={user} changeView={changeView}/> */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button className={styles["btn-secondary"]}>Main collection</button>
                <button className="custom-button">Creators Market</button>
                <div className="line"></div>
              </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ flex: 1, textAlign: 'left', paddingRight: '20px' }}>
                        <h2>Clothes are the Spirit of Fashion</h2>
                        <p style={{ color: 'grey-dark', opacity: 0.5 }}>For some, the act of getting dressed is a mindless routine,<br/> each article of clothing grabbed from a hanger merely something to cover the body.</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div className={styles["image-container"]}>
                            <img height={180} width={180} src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__" alt="Description" />
                            <br />
                            <img height={180} width={180} src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__" alt="Description" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ flex: 1, textAlign: 'left', paddingRight: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '40px' }}>
                                <h3>100+</h3>
                                <p style={{ color: 'grey-dark', opacity: 0.5 }}>Brands</p>
                            </div>
                            <div style={{ marginRight: '40px' }}>
                                <h3>20k+</h3>
                                <p style={{ color: 'grey-dark', opacity: 0.5 }}>Fashion Designer</p>
                            </div>
                            <div style={{ marginRight: '40px' }}>
                                <h3>60+</h3>
                                <p style={{ color: 'grey-dark', opacity: 0.5 }}>Fashion Shows</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div className="image-container">
                            
                            <img src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__" alt="Description" />
                            

                            <img src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__" alt="Description" />
                            
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>About Us</h1>
                <p style={{ color: 'grey-dark', opacity: 0.5 }}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ flex: 1, textAlign: 'left', paddingRight: '20px' }}>
                        <div className="image-container">
                            
                            <img src="https://s3-alpha-sig.figma.com/img/4f3b/4bc5/0336a716d5a69a265c6890a20951754e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MKlC5UVjks~8CsXfNykrKeYpVvsS9mbZE4DLy7NRMEX14aNJBGonTke0GPVeYKpVEPo786kL1icMPQ17uGCrvB50P-er1KIZqiHnQsrq9uADMXk3aMeUdUQikOydH0OJSr8mIEASVoKzpSTgVpMGetg46X3ye5RWsb-Q6MPhiGT6XsLFb3Un~LaUBTVv9OAiy5rZ4EqKzKVYWHnrDQtWV2AdRdAiXpYHBcgSS7GOU~~dRvwsRnQkUi34MQvq5JGcOdLBtOQG8Y59BGIl-peQhpdGisKGizI4cn~BqR0t36fih3Ha7EeJX2THAJ1W0ium7TiQgDERBBUcp6mSG1bXnw__" alt="Description" />
                            
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h1>Fashion That Speaks</h1>
                        <p style={{ color: 'grey-dark', opacity: 0.5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                        <button className="custom-button">Show more</button>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>All Collection</h1>
                <p style={{ color: 'grey-dark', opacity: 0.5 }}>Worlds First Layer 2 Fashion Marketplace</p>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <button className="custom-button">All Collections</button>
                    <button className="custom-button">Verified Brands</button>
                    <button className="custom-button">Verified Artists</button>
                    <button className="custom-button">New Drops</button>
                    <button className="custom-button">Live Shows</button>
                </div>
           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '20%', textAlign: 'center' }}>
                    <div className="image-container" >
                    
                    <img src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__" alt="Product" style={{ width: '100%', height: 'auto' }} />
                    
                    </div>
                    <br />
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[0] ? ' liked' : ''}`}
                        onClick={() => toggleLike(0)}
                        style={{ color: liked[0] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
                {/* Repeat the above structure for other items */}
                <div style={{ width: '20%', textAlign: 'center' }}>
                <div className="image-container">
                        
                        <img src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                        
                    </div>
                    <br />
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[1] ? ' liked' : ''}`}
                        onClick={() => toggleLike(1)}
                        style={{ color: liked[1] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
                <div style={{ width: '20%', textAlign: 'center' }}>
                <div className="image-container">
                
                <img src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                    </div>
                    <br />
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[2] ? ' liked' : ''}`}
                        onClick={() => toggleLike(2)}
                        style={{ color: liked[2] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '20%', textAlign: 'center' }}>
                    <div className="image-container">
                        
                        <img src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                    
                    </div>
                    <br />
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[3] ? ' liked' : ''}`}
                        onClick={() => toggleLike(3)}
                        style={{ color: liked[3] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
                {/* Repeat the above structure for other items */}
                <div style={{ width: '20%', textAlign: 'center' }}>
                <div className="image-container">
                        
                        <img src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                        
                    </div>
                    <br />
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[4] ? ' liked' : ''}`}
                        onClick={() => toggleLike(4)}
                        style={{ color: liked[4] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
                <div style={{ width: '20%', textAlign: 'center' }}>
                <div className="image-container">
                        
                        <img src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                        
                    </div>
                    <br />
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[5] ? ' liked' : ''}`}
                        onClick={() => toggleLike(5)}
                        style={{ color: liked[5] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
            </div><br /><br /><br /><br />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>ANew & Trending</h1>
                <p style={{ color: 'grey-dark', opacity: 0.5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '20%', textAlign: 'center' }}>
                    <div className="image-container">
                    
                    <img src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                    
                    </div>
                    <br /> 
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[6] ? ' liked' : ''}`}
                        onClick={() => toggleLike(6)}
                        style={{ color: liked[6] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
                {/* Repeat the above structure for other items */}
                <div style={{ width: '20%', textAlign: 'center' }}>
                <div className="image-container">
                        
                        <img src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                        
                    </div>
                    <br />
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[7] ? ' liked' : ''}`}
                        onClick={() => toggleLike(7)}
                        style={{ color: liked[7] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
                <div style={{ width: '20%', textAlign: 'center' }}>
                <div className="image-container">
                
                <img src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIQb2vptB-pnG2Xy~w1B79DKrJgzSd50KU7rUOGYnJCE4StIAsd8Kz-NsNt8VZXKXIswSQleW7DovbFnuuvEt87zlr7Kp94R2yiiFQ~gY4sjeNUjPxwjPw1Jipb11cIGDhI2XDEXMgmU6dqhFJtO1BHgqbCZXxgtuBSE3qNJ5Qx7e6~YSiPSSU6LWZHY~jYtWbKLkcIQ~BLjhlQdM8kbcGDgUjU0BUeBv7yLtNkI7FRXtRoffYGK7xMQUg31DLAEO9MVxcfmGL9WUOXklk5WifLysbQYMcU-zf89s-CrECtuFXUbaXavVyVbktC4kFKvoIwnxW-CdCImKt6BSabj9w__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                
                    </div>
                    <br />
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[8] ? ' liked' : ''}`}
                        onClick={() => toggleLike(8)}
                        style={{ color: liked[8] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
            </div><br /><br /><br /><br />
            

            </div>
        </div>
    );
}

export default Homepage;



