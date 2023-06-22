import React from 'react';
import './index.css';
import profilePicture from '../../assets/img/home/profile.jpg';
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
                    width: 'auto',
                    height: 'auto',
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
                    Home
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
                    Profession
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
                    Music
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
                    Blog
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
                    Journey
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
                    Passion
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

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. ff
            </div>
            
        </div>
    );

}

export default HomePage;

