import { Link } from 'react-router-dom';
function MusicPage() {
    return (
        <div className="background">
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

                <div className='music_title' style={{
                    position: 'absolute',
                    top: '151px',
                    left: '6.48%',
                
                    fontFamily: 'Jacques Francois',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '48px',
                    lineHeight: '63px',
                
                    color: '#000000'
                }}>
                    Music
                </div>

            </div>
        </div>
    )
}

export default MusicPage;