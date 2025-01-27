import React, { useEffect, useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';

const Main = () => {
    const [greetingText, setGreetingText] = useState('');
    const fullGreeting = "How can I help you Today!"; // Ensure spelling is correct

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < fullGreeting.length) {
                setGreetingText(fullGreeting.slice(0, index + 1));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 100); // Adjust typing speed by changing this value

        return () => clearInterval(intervalId);
    }, []);

    

    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg' alt='' /> 
            </div>
            <div className="main-container">
                <div className='greet'>
                    <p>
                        <span style={{
                            background: '-webkit-linear-gradient(16deg, #4b90ff, #ff5546)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                        Hello, Mehwish</span> 
                    </p>
                    <p>
                        <span>{greetingText || ''}</span> {/* Fallback to empty string */} 
                    </p>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <p>Suggest beautiful places to see on an upcoming road trip</p> {/* Fixed spelling */}
                        <img src={assets.compass_icon} alt='' />
                    </div>
                    <div className='card'>
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt='' />
                    </div>
                    <div className='card'>
                        <p>Brainstorm team bonding activities for our work retreat</p> {/* Fixed spelling */}
                        <img src={assets.message_icon} alt='' />
                    </div>
                    <div className='card'>
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt='' />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type='text' placeholder='Ask Gemini' /> {/* Fixed spelling */}
                        <div>
                            <img src={assets.gallery_icon} alt='' />
                            <img src={assets.mic_icon} alt='' />
                            <img src={assets.send_icon} alt='' />
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;
