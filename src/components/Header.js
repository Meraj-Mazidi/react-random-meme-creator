import React from 'react'
import TrollFace from '../image/Troll Face.png'

function Header() {
    return (
        <nav>
            <div className='faceContainer'>
                <img src={TrollFace} className='trollFace' />
                <h2>Meme Generator</h2>
            </div>
        </nav>
    )
}
export default Header