import React from 'react';
import './index.css';
import profilePicture from '../../assets/img/home/profile.jpg';
import insIcon from '../../assets/img/home/instagram.png';
import fbIcon from '../../assets/img/home/facebook.png';
import githubIcon from '../../assets/img/home/github.png';
import chesscomIcon from '../../assets/img/home/chesscom.png';
import soundcloudIcon from '../../assets/img/home/soundcloud.png';
import { Link } from 'react-router-dom';
function HomePage() {
    return (
        
        <div className = "background">
            <div className='boundingBox' style = {{
                boxSizing: 'border-box',
                position: 'relative',
                width: '100%',
                height: '87px',
                left: '0%',
                top: '0px',
                border: '1px solid #000000'
            }}>
                <div className='home-icon' style={{
                    position: 'absolute',
                    
                    left: '5.78%',
                    top: '28px',

                    fontFamily: 'Jacques Francois',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '24px',
                    lineHeight: '32px',
                    textAlign: 'center',

                    color: '#000000'

                }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </div>


                <div className='profession-icon' style={{
                    position: 'absolute',
                    width: 'auto',
                    height: 'auto',
                    left: '17.58%',
                    top: '28px',

                    fontFamily: 'Jacques Francois',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '24px',
                    lineHeight: '32px',
                    textAlign: 'center',

                    color: '#000000'

                }}>
                    <li>
                        <Link to="/profession">Profession</Link>
                    </li>
                </div>

                <div className='music-icon' style={{
                    position: 'absolute',
                    width: 'auto',
                    height: 'auto',
                    left: '33.9%',
                    top: '28px',

                    fontFamily: 'Jacques Francois',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '24px',
                    lineHeight: '32px',
                    textAlign: 'center',

                    color: '#000000'

                }}>
                    <li>
                        <Link to="/music">Music</Link>
                    </li>
                </div>

                <div className='blog-icon' style={{
                    position: 'absolute',
                    width: 'auto',
                    height: 'auto',
                    left: '47.27%',
                    top: '28px',

                    fontFamily: 'Jacques Francois',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '24px',
                    lineHeight: '32px',
                    textAlign: 'center',

                    color: '#000000'

                }}>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </div>

                <div className='journey-icon' style={{
                    position: 'absolute',
                    width: 'auto',
                    height: 'auto',
                    left: '58.67%',
                    top: '28px',

                    fontFamily: 'Jacques Francois',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '24px',
                    lineHeight: '32px',
                    textAlign: 'center',

                    color: '#000000'

                }}>
                    <li>
                        <Link to="/journey">Journey</Link>
                    </li>
                </div>

                <div className='passion-icon' style={{
                    position: 'absolute',
                    width: 'auto',
                    height: 'auto',
                    left: '71.95%',
                    top: '28px',

                    fontFamily: 'Jacques Francois',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '24px',
                    lineHeight: '32px',
                    textAlign: 'center',

                    color: '#000000'

                }}>
                    <li>
                        <Link to="/passion">Passion</Link>
                    </li>
                </div>

            </div>
            <div className='big-title' style= {{
                position: 'relative',
                width: '50%',
                height: '30%',
                left: '25%',
                top: '141px',

                fontFamily: 'Hubballi',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '128px',
                lineHeight: '231px',
                textAlign: 'center',

                color: '#000000'


            }}>
                Edward Tang
            </div>
            <div className="profile-picture" >
                <img src={profilePicture} alt='' style={{ 
                    position: 'absolute',
                    width: '18.9%', 
                    height: 'auto', 
                    right: '40px',
                    top: '113px'
                }}/>
          
            </div>

            <div className='about-me' style = {{
                position: 'relative',
                width: '145px',
                height: '42px',
                left: '8.35%',
                top: '151px',
                
                fontFamily: 'Jacques Francois',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '32px',
                lineHeight: '42px',
                textAlign: 'center',
                
                color: '#000000'
                
            }}>
                About me
            </div>

            <div className='about-me-content' style={{
                position: 'relative',
               
                left: '8.35%',
                top: '214px',

                width: '80%',
                
                fontFamily: 'Jacques Francois',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '24px',
                lineHeight: '32px',

                
                color: '#000000'
            }}>

                Welcome to my page! I am a software engineer, music performer, mystery novel lover, language nerd, 
                chess enthusiast, and many more! I am always open to new things and always curious!

            </div>


            <div className='follow-me' style = {{
                position: 'absolute',
                
                left: '8.35%',
                bottom: '144px',

                fontFamily: 'Hubballi',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '24px',
                lineHeight: '32px',

                
                color: '#000000'

            }}>
                Follow me on any platform you like!

            </div>

            <a href='https://www.instagram.com/itseddiecurrent/'>
                <img className='ins-icon' src = {insIcon} style={{
                    position: 'absolute',
                
                    left: '8.35%',
                    bottom: '64px',

                    width: '57px',
                    height: '57px'


                }}/>
            </a>


            <a href='https://www.facebook.com/edward.tang.1272/'>
                <img className='fb-icon' src = {fbIcon} style={{
                    position: 'absolute',
                
                    left: '17.35%',
                    bottom: '64px',

                    width: '57px',
                    height: '57px'


                }}/>
            </a>

            <a href='https://github.com/itseddiecurrent'>
                <img className='github-icon' src = {githubIcon} style={{
                    position: 'absolute',
                
                    left: '26.35%',
                    bottom: '64px',

                    width: '57px',
                    height: '57px'


                }}/>
            </a>

            <a href='https://www.chess.com/member/edkiddotang'>
                <img className='chesscom-icon' src = {chesscomIcon} style={{
                    position: 'absolute',
                
                    left: '35.35%',
                    bottom: '64px',

                    width: '57px',
                    height: '57px'


                }}/>
            </a>


            <a href='https://soundcloud.com/edward-tang-580370074'>
                <img className='soundcloud-icon' src = {soundcloudIcon} style={{
                    position: 'absolute',
                
                    left: '44.35%',
                    bottom: '64px',

                    width: '57px',
                    height: '57px'


                }}/>
            </a>
                
                
            
            
        </div>
    );

}

export default HomePage;

